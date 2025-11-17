// src/lib/i18n.ts
export type Language = 'ko' | 'en' | 'ja'

const translations = {
  ko: {
    // Header & Navigation
    projectName: '요이땅',
    dashboard: '대시보드',
    newProject: '새 프로젝트',
    settings: '설정',
    logout: '로그아웃',
    language: '언어',

    // Landing
    startup_platform: '스타트업을 위한 자동 배포 플랫폼',
    hero_title: '배포 버튼 한 번으로,',
    hero_title_accent: '인프라까지 자동으로.',
    hero_subtitle: 'Git 주소와 AWS 정보만 넣으면, EC2·Docker·NGINX·HTTPS까지 자동 구성해주는\n스타트업 전용 배포 서비스입니다.',
    get_started: '시작하기',
    demo_view: '데모 살펴보기',

    // Landing Features
    oneclick_deploy: '원클릭 배포',
    oneclick_desc: 'Git 푸시만 하면 자동으로 배포됩니다. 복잡한 설정은 필요 없습니다.',
    ec2_setup: 'EC2 자동 구성',
    ec2_desc: '필요한 인스턴스, 개수와 스펙을 자동으로 구성합니다.',
    https_setup: 'HTTPS 자동 설정',
    https_desc: '도메인을 입력하면 인증서를 자동으로 발급하고 적용합니다.',
    
    // New Project
    createProject: '프로젝트 생성',
    projectName_label: '프로젝트 이름',
    gitRepository: 'Git 저장소',
    awsRegion: 'AWS 리전',
    deploy: '배포',
    cancel: '취소',
    basicInfo: '기본 정보',
    gitSetup: 'Git 설정',
    awsSetup: 'AWS 설정',
    summary: '요약 및 배포',

    // Dashboard
    myTeamService: '우리팀-백엔드-서비스',
    deploying: '배포 중...',
    settings_btn: '설정',
    notification: '알림',
    environment: '환경',
    deploymentHistory: '배포 이력',
    developmentEnv: '개발',
    productionEnv: '프로덕션',
    staging: 'Staging',
    status: '상태',
    success: '성공',
    failed: '실패',
    running: '진행 중',
    viewDetails: '상세 보기',
    editSettings: '설정 편집',
    deployment: '배포',
    date: '날짜',
    version: '버전',

    // Environment Card
    lastDeployment: '마지막 배포',
    commit: '커밋',
    branch: '브랜치',
    redeploy: '다시 배포',
    viewLogs: '로그 보기',

    // Settings
    backToDashboard: '대시보드로 돌아가기',
    accountSettings: '계정 설정',
    notifications: '알림',
    security: '보안',
    teamManagement: '팀 관리',
    webhookURL: 'Webhook URL',
    emailNotifications: '이메일 알림',
    notificationLevel: '알림 수준',
    all: '모두',
    important: '중요',
    deleteAccount: '계정 삭제',
    teamMembers: '팀 원',
    role: '역할',
    admin: '관리자',
    developer: '개발자',
    viewer: '뷰어',
    saved: '설정이 저장되었습니다',

    // Status & Pipeline
    statusSuccess: '완료',
    statusRunning: '진행 중',
    statusFailed: '실패',
    statusWaiting: '대기',
    duration: '소요 시간:',
    logSearch: '로그 검색...',
    logsAll: '전체 로그',
    logsBuild: '빌드 로그',
    logsDeploy: '배포 로그',
    logsApp: '애플리케이션 로그',

    // Mock Data - Environments
    envDevelopment: '개발',
    envStaging: '스테이징',
    envProduction: '프로덕션',
    addLoginFeature: '로그인 기능 추가',
    improveUI: 'UI 개선 작업',
    integratePayment: '결제 모듈 통합',
    dbMigration: '데이터베이스 마이그레이션',

    // Mock Data - Pipeline Stages
    codeCheckout: '코드 체크아웃',
    imageBuild: '이미지 빌드 (Jenkins/Kaniko)',
    imagePush: '이미지 푸시 (ECR 레지스트리)',
    infraApply: '인프라 적용 (boto3)',
    containerStart: '컨테이너 기동 (Docker)',
    healthCheck: '헬스체크',
    stage1Duration: '12초',
    stage2Duration: '2분 34초',
    stage3Duration: '45초',
    stage4Duration: '1분 12초',

    // Mock Data - AWS Regions
    regionTokyo: '도쿄 (ap-northeast-1)',
    regionSeoul: '서울 (ap-northeast-2)',
    regionUSEast: '버지니아 북부 (us-east-1)',
    regionUSWest: '오레곤 (us-west-2)',
    regionEUWest: '아일랜드 (eu-west-1)',
  },
  en: {
    // Header & Navigation
    projectName: 'yoitang',
    dashboard: 'Dashboard',
    newProject: 'New Project',
    settings: 'Settings',
    logout: 'Logout',
    language: 'Language',

    // Landing
    startup_platform: 'Automated Deployment Platform for Startups',
    hero_title: 'One-Click',
    hero_title_accent: 'Automated Deployment to Infrastructure',
    hero_subtitle: 'Automatic DevOps platform that deploys in seconds with just Git repository + AWS info. No complex configuration needed.',
    get_started: 'Get Started',
    demo_view: 'View Demo',

    // Landing Features
    oneclick_deploy: 'One-Click Deployment',
    oneclick_desc: 'Automatic deployment with just a Git push. No complicated setup needed.',
    ec2_setup: 'EC2 Auto Configuration',
    ec2_desc: 'Automatically configure instances, quantity and specifications.',
    https_setup: 'HTTPS Auto Setup',
    https_desc: 'Enter domain and certificates are automatically issued and applied.',
    
    // New Project
    createProject: 'Create Project',
    projectName_label: 'Project Name',
    gitRepository: 'Git Repository',
    awsRegion: 'AWS Region',
    deploy: 'Deploy',
    cancel: 'Cancel',
    basicInfo: 'Basic Information',
    gitSetup: 'Git Setup',
    awsSetup: 'AWS Setup',
    summary: 'Summary & Deploy',

    // Dashboard
    myTeamService: 'Our Team - Backend Service',
    deploying: 'Deploying...',
    settings_btn: 'Settings',
    notification: 'Notifications',
    environment: 'Environment',
    deploymentHistory: 'Deployment History',
    developmentEnv: 'Development',
    productionEnv: 'Production',
    staging: 'Staging',
    status: 'Status',
    success: 'Success',
    failed: 'Failed',
    running: 'Running',
    viewDetails: 'View Details',
    editSettings: 'Edit Settings',
    deployment: 'Deployment',
    date: 'Date',
    version: 'Version',

    // Environment Card
    lastDeployment: 'Last Deployment',
    commit: 'Commit',
    branch: 'Branch',
    redeploy: 'Redeploy',
    viewLogs: 'View Logs',

    // Settings
    backToDashboard: 'Back to Dashboard',
    accountSettings: 'Account Settings',
    notifications: 'Notifications',
    security: 'Security',
    teamManagement: 'Team Management',
    webhookURL: 'Webhook URL',
    emailNotifications: 'Email Notifications',
    notificationLevel: 'Notification Level',
    all: 'All',
    important: 'Important',
    deleteAccount: 'Delete Account',
    teamMembers: 'Team Members',
    role: 'Role',
    admin: 'Admin',
    developer: 'Developer',
    viewer: 'Viewer',
    saved: 'Settings saved successfully',

    // Status & Pipeline
    statusSuccess: 'Complete',
    statusRunning: 'Running',
    statusFailed: 'Failed',
    statusWaiting: 'Waiting',
    duration: 'Duration:',
    logSearch: 'Search logs...',
    logsAll: 'All Logs',
    logsBuild: 'Build Logs',
    logsDeploy: 'Deploy Logs',
    logsApp: 'Application Logs',

    // Mock Data - Environments
    envDevelopment: 'Development',
    envStaging: 'Staging',
    envProduction: 'Production',
    addLoginFeature: 'Add login feature',
    improveUI: 'UI improvements',
    integratePayment: 'Integrate payment module',
    dbMigration: 'Database migration',

    // Mock Data - Pipeline Stages
    codeCheckout: 'Code checkout',
    imageBuild: 'Image build (Jenkins/Kaniko)',
    imagePush: 'Image push (ECR registry)',
    infraApply: 'Infrastructure apply (boto3)',
    containerStart: 'Container startup (Docker)',
    healthCheck: 'Health check',
    stage1Duration: '12s',
    stage2Duration: '2m 34s',
    stage3Duration: '45s',
    stage4Duration: '1m 12s',

    // Mock Data - AWS Regions
    regionTokyo: 'Tokyo (ap-northeast-1)',
    regionSeoul: 'Seoul (ap-northeast-2)',
    regionUSEast: 'N. Virginia (us-east-1)',
    regionUSWest: 'Oregon (us-west-2)',
    regionEUWest: 'Ireland (eu-west-1)',
  },
  ja: {
    // Header & Navigation
    projectName: 'よういたん',
    dashboard: 'ダッシュボード',
    newProject: 'プロジェクト作成',
    settings: '設定',
    logout: 'ログアウト',
    language: '言語',

    // Landing
    startup_platform: 'スタートアップ向け自動デプロイプラットフォーム',
    hero_title: 'ワンクリックで、',
    hero_title_accent: 'インフラまで自動展開',
    hero_subtitle: 'Gitリポジトリとaws情報を入力するだけで、自動DevOpsプラットフォーム。\n複雑な設定は不要です。',
    get_started: '始める',
    demo_view: 'デモを見る',

    // Landing Features
    oneclick_deploy: 'ワンクリックデプロイ',
    oneclick_desc: 'Git pushするだけで自動的にデプロイされます。複雑な設定は不要です。',
    ec2_setup: 'EC2 自動構成',
    ec2_desc: '必要なインスタンス、数量、スペックを自動的に構成します。',
    https_setup: 'HTTPS 自動設定',
    https_desc: 'ドメインを入力するだけで、証明書が自動的に発行され、適用されます。',
    
    // New Project
    createProject: 'プロジェクト作成',
    projectName_label: 'プロジェクト名',
    gitRepository: 'Gitリポジトリ',
    awsRegion: 'AWSリージョン',
    deploy: 'デプロイ',
    cancel: 'キャンセル',
    basicInfo: '基本情報',
    gitSetup: 'Git設定',
    awsSetup: 'AWS設定',
    summary: 'サマリーとデプロイ',

    // Dashboard
    myTeamService: '当社チーム - バックエンドサービス',
    deploying: 'デプロイ中...',
    settings_btn: '設定',
    notification: '通知',
    environment: '環境',
    deploymentHistory: 'デプロイ履歴',
    developmentEnv: '開発',
    productionEnv: '本番環境',
    staging: 'ステージング',
    status: 'ステータス',
    success: '成功',
    failed: '失敗',
    running: '実行中',
    viewDetails: '詳細を見る',
    editSettings: '設定を編集',
    deployment: 'デプロイ',
    date: '日付',
    version: 'バージョン',

    // Environment Card
    lastDeployment: '最後のデプロイ',
    commit: 'コミット',
    branch: 'ブランチ',
    redeploy: '再デプロイ',
    viewLogs: 'ログを表示',

    // Settings
    backToDashboard: 'ダッシュボードに戻る',
    accountSettings: 'アカウント設定',
    notifications: '通知',
    security: 'セキュリティ',
    teamManagement: 'チーム管理',
    webhookURL: 'Webhook URL',
    emailNotifications: 'メール通知',
    notificationLevel: '通知レベル',
    all: 'すべて',
    important: '重要',
    deleteAccount: 'アカウント削除',
    teamMembers: 'チームメンバー',
    role: 'ロール',
    admin: '管理者',
    developer: 'デベロッパー',
    viewer: '閲覧者',
    saved: '設定が保存されました',

    // Status & Pipeline
    statusSuccess: '完了',
    statusRunning: '実行中',
    statusFailed: '失敗',
    statusWaiting: '待機中',
    duration: '所要時間:',
    logSearch: 'ログを検索...',
    logsAll: 'すべてのログ',
    logsBuild: 'ビルドログ',
    logsDeploy: 'デプロイログ',
    logsApp: 'アプリケーションログ',

    // Mock Data - Environments
    envDevelopment: '開発',
    envStaging: 'ステージング',
    envProduction: '本番環境',
    addLoginFeature: 'ログイン機能の追加',
    improveUI: 'UI改善',
    integratePayment: '支払いモジュール統合',
    dbMigration: 'データベースマイグレーション',

    // Mock Data - Pipeline Stages
    codeCheckout: 'コードチェックアウト',
    imageBuild: 'イメージビルド (Jenkins/Kaniko)',
    imagePush: 'イメージプッシュ (ECRレジストリ)',
    infraApply: 'インフラストラクチャ適用 (boto3)',
    containerStart: 'コンテナ起動 (Docker)',
    healthCheck: 'ヘルスチェック',
    stage1Duration: '12秒',
    stage2Duration: '2分34秒',
    stage3Duration: '45秒',
    stage4Duration: '1分12秒',

    // Mock Data - AWS Regions
    regionTokyo: '東京 (ap-northeast-1)',
    regionSeoul: 'ソウル (ap-northeast-2)',
    regionUSEast: 'バージニア北部 (us-east-1)',
    regionUSWest: 'オレゴン (us-west-2)',
    regionEUWest: 'アイルランド (eu-west-1)',
  },
}

export function getTranslation(lang: Language): Record<string, string> {
  return translations[lang] || translations.ko
}

export function t(lang: Language, key: string): string {
  const translation = getTranslation(lang)
  return translation[key] || key
}
