// Mock data for yoitang deployment platform

export interface Project {
  id: string;
  name: string;
  team: string;
  gitUrl: string;
  branch: string;
  awsRegion: string;
  ec2Count: number;
  domain: string;
  techStack: string[];
  createdAt: Date;
}

export interface Environment {
  id: string;
  name: string;
  status: 'deploying' | 'success' | 'failed' | 'idle';
  lastDeployment: Date;
  commitHash: string;
  commitMessage: string;
  branch: string;
}

export interface DeploymentHistory {
  id: string;
  time: string;
  branch: string;
  status: 'success' | 'failed';
  commitMessage: string;
  commitHash: string;
}

export interface PipelineStage {
  id: string;
  name: string;
  status: 'waiting' | 'running' | 'success' | 'failed';
  duration?: string;
}

export const mockEnvironments: Environment[] = [
  {
    id: '1',
    name: '개발',
    status: 'success',
    lastDeployment: new Date(Date.now() - 2 * 60 * 60 * 1000),
    commitHash: 'a3f4c21',
    commitMessage: '로그인 기능 추가',
    branch: 'develop',
  },
  {
    id: '2',
    name: '스테이징',
    status: 'success',
    lastDeployment: new Date(Date.now() - 5 * 60 * 60 * 1000),
    commitHash: 'b7e8d92',
    commitMessage: 'UI 개선 작업',
    branch: 'staging',
  },
  {
    id: '3',
    name: '프로덕션',
    status: 'deploying',
    lastDeployment: new Date(Date.now() - 10 * 60 * 1000),
    commitHash: 'c9a1f44',
    commitMessage: '결제 모듈 통합',
    branch: 'main',
  },
];

export const mockDeploymentHistory: DeploymentHistory[] = [
  {
    id: '1',
    time: '10:32',
    branch: 'main',
    status: 'success',
    commitMessage: '결제 모듈 통합',
    commitHash: 'c9a1f44',
  },
  {
    id: '2',
    time: '09:15',
    branch: 'develop',
    status: 'success',
    commitMessage: '로그인 기능 추가',
    commitHash: 'a3f4c21',
  },
  {
    id: '3',
    time: '08:47',
    branch: 'staging',
    status: 'success',
    commitMessage: 'UI 개선 작업',
    commitHash: 'b7e8d92',
  },
  {
    id: '4',
    time: '어제 18:22',
    branch: 'main',
    status: 'failed',
    commitMessage: '데이터베이스 마이그레이션',
    commitHash: 'd2c5e88',
  },
];

export const mockPipelineStages: PipelineStage[] = [
  {
    id: '1',
    name: '코드 체크아웃',
    status: 'success',
    duration: '12초',
  },
  {
    id: '2',
    name: '이미지 빌드 (Jenkins/Kaniko)',
    status: 'success',
    duration: '2분 34초',
  },
  {
    id: '3',
    name: '이미지 푸시 (ECR 레지스트리)',
    status: 'success',
    duration: '45초',
  },
  {
    id: '4',
    name: '인프라 적용 (boto3)',
    status: 'running',
    duration: '1분 12초',
  },
  {
    id: '5',
    name: '컨테이너 기동 (Docker)',
    status: 'waiting',
  },
  {
    id: '6',
    name: '헬스체크',
    status: 'waiting',
  },
];

export const mockLogs = `[2024-01-15 10:32:15] Starting deployment process...
[2024-01-15 10:32:16] Checking out code from GitHub...
[2024-01-15 10:32:18] ✓ Code checkout successful
[2024-01-15 10:32:18] Building Docker image...
[2024-01-15 10:32:20] Step 1/8 : FROM node:18-alpine
[2024-01-15 10:32:21] ---> Pulling from library/node
[2024-01-15 10:32:45] Step 2/8 : WORKDIR /app
[2024-01-15 10:32:45] ---> Running in 3f2a1b4c5d6e
[2024-01-15 10:33:12] Step 3/8 : COPY package*.json ./
[2024-01-15 10:33:13] ---> 7a8b9c0d1e2f
[2024-01-15 10:33:45] Step 4/8 : RUN npm ci --production
[2024-01-15 10:34:52] ✓ Docker image built successfully
[2024-01-15 10:34:53] Pushing image to ECR...
[2024-01-15 10:35:38] ✓ Image pushed to ECR
[2024-01-15 10:35:39] Applying boto3 configuration...
[2024-01-15 10:36:20] Creating EC2 instances using boto3...
[2024-01-15 10:36:51] ✓ Infrastructure applied successfully`;

export const techStackOptions = [
  'React', 'Vue', 'Angular', 'Next.js',
  'Django', 'FastAPI', 'Express', 'NestJS',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
  'Nginx', 'Docker', 'Kubernetes'
];

export const awsRegions = [
  { value: 'ap-northeast-1', label: '도쿄 (ap-northeast-1)' },
  { value: 'ap-northeast-2', label: '서울 (ap-northeast-2)' },
  { value: 'us-east-1', label: '버지니아 북부 (us-east-1)' },
  { value: 'us-west-2', label: '오레곤 (us-west-2)' },
  { value: 'eu-west-1', label: '아일랜드 (eu-west-1)' },
];

// Simulated async function
export const simulateDeployment = (duration: number = 2000): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
