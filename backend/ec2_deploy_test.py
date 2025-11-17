import os
from ec2_deploy import launch_ec2_instance
import logging

# 로깅 설정 (테스트 파일에서만 적용)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def run_test_deployment():
    """
    launch_ec2_instance 함수를 호출하여 EC2 인스턴스 배포를 테스트합니다.
    아래 값들은 실제 AWS 환경에 맞게 변경해야 합니다.
    """
    # --- 1. 아래 값들을 실제 AWS 환경에 맞게 변경해주세요. ---
    # AWS 리전 (예: 'ap-northeast-2' 서울 리전)
    region = 'ap-northeast-2'

    # 사용할 Amazon Machine Image (AMI) ID
    # EC2 콘솔에서 '인스턴스 시작' > '애플리케이션 및 OS 이미지'에서 확인 가능
    # 예시: Amazon Linux 2 AMI (HVM), SSD Volume Type - ami-0c9c942d52b75299d (서울 리전)
    ami = 'ami-0c9c942d52b75299d'

    # 인스턴스 타입 (프리티어 사용 가능: 't2.micro')
    instance_type = 't2.micro'

    # SSH 접속에 사용할 키 페어 이름
    # EC2 콘솔 > '네트워크 및 보안' > '키 페어'에서 확인 또는 생성
    # 생성 시 다운로드한 .pem 파일은 안전하게 보관해야 합니다.
    key = 'your-key-pair-name' # 예: 'my-aws-key'

    # 적용할 보안 그룹 ID 리스트
    # EC2 콘솔 > '네트워크 및 보안' > '보안 그룹'에서 확인 또는 생성
    # 최소한 SSH(22번 포트)와 HTTP(80번 포트) 인바운드 규칙이 허용되어야 합니다.
    security_groups = ['sg-0123456789abcdef0'] # 예: ['sg-0abcdef1234567890']

    # 인스턴스에 부여할 이름 태그 (선택 사항)
    app_name_tag = 'my-test-server-via-boto3'

    # --- 2. 필수 정보가 올바르게 설정되었는지 확인 ---
    if key == 'your-key-pair-name' or security_groups == ['sg-0123456789abcdef0']:
        logger.error("키 페어 이름 또는 보안 그룹 ID를 실제 값으로 변경해주세요.")
        return

    logger.info(f"EC2 인스턴스 배포 테스트를 시작합니다. 앱 이름: {app_name_tag}")

    # --- 3. launch_ec2_instance 함수 호출 ---
    result = launch_ec2_instance(
        region_name=region,
        ami_id=ami,
        instance_type=instance_type,
        key_name=key,
        security_group_ids=security_groups,
        app_name=app_name_tag
    )

    # --- 4. 결과 출력 ---
    print("\n--- EC2 배포 테스트 결과 ---")
    print(f"상태: {result.get('status')}")
    print(f"메시지: {result.get('message')}")
    if result.get("status") == "success":
        print(f"인스턴스 ID: {result.get('instance_id')}")
        print(f"퍼블릭 IP: {result.get('public_ip')}")
        print(f"프라이빗 IP: {result.get('private_ip')}")
        print("\n[중요] 배포된 인스턴스는 사용 후 반드시 종료하여 불필요한 비용 발생을 막아주세요.")
        print(f"AWS EC2 콘솔에서 인스턴스 ID '{result.get('instance_id')}'를 찾아 종료할 수 있습니다.")
    else:
        logger.error("EC2 인스턴스 배포에 실패했습니다. 오류 메시지를 확인해주세요.")

if __name__ == "__main__":
    run_test_deployment()
