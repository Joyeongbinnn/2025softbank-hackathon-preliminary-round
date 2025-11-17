import boto3
import logging
from typing import Dict, Any, List, Optional
from dotenv import load_dotenv

load_dotenv()  # .env 파일에서 환경 변수 로드

# 로깅 설정
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

def launch_ec2_instance(
    region_name: str,
    ami_id: str,
    instance_type: str,
    key_name: str,
    security_group_ids: List[str],
    subnet_id: Optional[str] = None,
    user_data: Optional[str] = None,
    app_name: Optional[str] = None,
) -> Dict[str, Any]:
    """
    Boto3를 사용하여 단일 EC2 인스턴스를 시작하는 핵심 로직입니다.
    AMI ID, 키 페어 이름, 보안 그룹 ID 등 모든 값은 사전에 준비되어 전달되어야 합니다.

    Args:
        region_name (str): AWS 리전 (예: 'ap-northeast-2')
        ami_id (str): 사용할 Amazon Machine Image ID
        instance_type (str): 인스턴스 타입 (예: 't2.micro')
        key_name (str): SSH 접속에 사용할 키 페어 이름
        security_group_ids (List[str]): 적용할 보안 그룹 ID 리스트
        subnet_id (Optional[str]): 인스턴스를 위치시킬 서브넷 ID. 지정하지 않으면 기본 VPC의 기본 서브넷에 생성됩니다.
        user_data (Optional[str]): 인스턴스 시작 시 실행할 UserData 스크립트.
        app_name (Optional[str]): 인스턴스에 태깅할 이름.

    Returns:
        Dict[str, Any]: 실행 결과 (성공 시 인스턴스 정보, 실패 시 에러 메시지)
    """
    logger.info(f"EC2 인스턴스 배포를 시작합니다. 리전: {region_name}, AMI: {ami_id}")
    try:
        # EC2 클라이언트 생성
        ec2_client = boto3.client("ec2", region_name=region_name)

        # 인스턴스 태그 설정
        tag_specifications = []
        if app_name:
            tag_specifications.append({
                "ResourceType": "instance",
                "Tags": [{"Key": "Name", "Value": app_name}],
            })

        # run_instances API 호출에 필요한 파라미터 구성
        instance_params = {
            "ImageId": ami_id,
            "InstanceType": instance_type,
            "KeyName": key_name,
            "SecurityGroupIds": security_group_ids,
            "MinCount": 1,
            "MaxCount": 1,
        }
        if subnet_id:
            instance_params["SubnetId"] = subnet_id
        if user_data:
            instance_params["UserData"] = user_data
        if tag_specifications:
            instance_params["TagSpecifications"] = tag_specifications

        # Boto3를 사용하여 EC2 인스턴스 시작
        run_response = ec2_client.run_instances(**instance_params)

        instance_id = run_response["Instances"][0]["InstanceId"]
        logger.info(f"인스턴스 생성 요청 완료. ID: {instance_id}")

        # 인스턴스가 'running' 상태가 될 때까지 대기
        logger.info("인스턴스가 'running' 상태가 될 때까지 대기합니다...")
        waiter = ec2_client.get_waiter("instance_running")
        waiter.wait(InstanceIds=[instance_id])
        logger.info(f"인스턴스({instance_id})가 'running' 상태입니다.")

        # 시작된 인스턴스의 상세 정보 조회
        desc_response = ec2_client.describe_instances(InstanceIds=[instance_id])
        instance_info = desc_response["Reservations"][0]["Instances"][0]

        return {
            "status": "success",
            "instance_id": instance_id,
            "public_ip": instance_info.get("PublicIpAddress", "N/A"),
            "private_ip": instance_info.get("PrivateIpAddress"),
            "message": "EC2 인스턴스가 성공적으로 시작되었습니다."
        }

    except Exception as e:
        logger.error(f"EC2 인스턴스 시작 중 오류 발생: {e}")
        return {"status": "error", "message": str(e)}