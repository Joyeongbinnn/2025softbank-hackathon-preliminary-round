import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Rocket } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import StepIndicator from "@/components/wizard/StepIndicator";
import Step1BasicInfo from "@/components/wizard/Step1BasicInfo";
import Step2GitSetup from "@/components/wizard/Step2GitSetup";
import Step3AWSSetup from "@/components/wizard/Step3AWSSetup";
import Step4Summary from "@/components/wizard/Step4Summary";
import { simulateDeployment } from "@/utils/mockData";

const NewProject = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const STEPS = language === 'ko' ? ['기본 정보', 'Git 설정', 'AWS 설정', '요약 & 배포'] : language === 'en' ? ['Basic Info', 'Git Setup', 'AWS Setup', 'Summary & Deploy'] : ['基本情報', 'Git設定', 'AWS設定', 'サマリーとデプロイ'];
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isDeploying, setIsDeploying] = useState(false);
  
  // Form state
  const [projectName, setProjectName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [techStack, setTechStack] = useState<string[]>([]);
  const [gitUrl, setGitUrl] = useState('');
  const [branch, setBranch] = useState('main');
  const [accessToken, setAccessToken] = useState('');
  const [awsRegion, setAwsRegion] = useState('ap-northeast-2');
  const [ec2Count, setEc2Count] = useState(2);
  const [dbOption, setDbOption] = useState('rds');
  const [domain, setDomain] = useState('');
  
  const handleTechStackToggle = (tech: string) => {
    setTechStack(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };
  
  const validateStep = () => {
    if (currentStep === 1) {
      if (!projectName || !teamName) {
        toast.error(language === 'ko' ? '필수 항목을 입력해주세요' : language === 'en' ? 'Please enter required fields' : '必須項目を入力してください');
        return false;
      }
    }
    if (currentStep === 2) {
      if (!gitUrl || !branch) {
        toast.error(language === 'ko' ? 'Git 정보를 입력해주세요' : language === 'en' ? 'Please enter Git information' : 'Git情報を入力してください');
        return false;
      }
    }
    if (currentStep === 3) {
      if (!awsRegion) {
        toast.error(language === 'ko' ? 'AWS 리전을 선택해주세요' : language === 'en' ? 'Please select AWS region' : 'AWSリージョンを選択してください');
        return false;
      }
    }
    return true;
  };
  
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    }
  };
  
  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };
  
  const handleDeploy = async () => {
    setIsDeploying(true);
    toast.loading(language === 'ko' ? '배포를 시작합니다...' : language === 'en' ? 'Starting deployment...' : 'デプロイを開始します...', { id: 'deploy' });
    
    await simulateDeployment(3000);
    
    toast.success(language === 'ko' ? '배포가 시작되었습니다! 🎉' : language === 'en' ? 'Deployment started! 🎉' : 'デプロイが開始されました! 🎉', { id: 'deploy' });
    navigate('/dashboard');
  };
  
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1BasicInfo
            projectName={projectName}
            teamName={teamName}
            techStack={techStack}
            onProjectNameChange={setProjectName}
            onTeamNameChange={setTeamName}
            onTechStackToggle={handleTechStackToggle}
          />
        );
      case 2:
        return (
          <Step2GitSetup
            gitUrl={gitUrl}
            branch={branch}
            accessToken={accessToken}
            onGitUrlChange={setGitUrl}
            onBranchChange={setBranch}
            onAccessTokenChange={setAccessToken}
          />
        );
      case 3:
        return (
          <Step3AWSSetup
            awsRegion={awsRegion}
            ec2Count={ec2Count}
            dbOption={dbOption}
            domain={domain}
            onAwsRegionChange={setAwsRegion}
            onEc2CountChange={setEc2Count}
            onDbOptionChange={setDbOption}
            onDomainChange={setDomain}
          />
        );
      case 4:
        return (
          <Step4Summary
            projectName={projectName}
            teamName={teamName}
            techStack={techStack}
            gitUrl={gitUrl}
            branch={branch}
            awsRegion={awsRegion}
            ec2Count={ec2Count}
            dbOption={dbOption}
            domain={domain}
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">{t(language, 'createProject')}</h1>
          <p className="text-muted-foreground mb-8">
            {language === 'ko' ? '몇 가지 정보만 입력하면 자동으로 배포 환경이 구성됩니다' : language === 'en' ? 'Just enter some information and the deployment environment will be configured automatically' : 'いくつかの情報を入力するだけで、デプロイ環境が自動的に構成されます'}
          </p>
          
          <StepIndicator currentStep={currentStep} steps={STEPS} />
          
          <Card className="mt-8">
            <CardContent className="p-8">
              {renderStep()}
              
              <div className="flex justify-between mt-8 pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {language === 'ko' ? '이전' : language === 'en' ? 'Previous' : '戻る'}
                </Button>
                
                {currentStep < STEPS.length ? (
                  <Button onClick={handleNext} className="bg-primary">
                    {language === 'ko' ? '다음' : language === 'en' ? 'Next' : '次へ'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleDeploy}
                    disabled={isDeploying}
                    className="bg-gradient-to-r from-primary to-accent"
                  >
                    <Rocket className="mr-2 h-4 w-4" />
                    {isDeploying ? (language === 'ko' ? '배포 중...' : language === 'en' ? 'Deploying...' : 'デプロイ中...') : t(language, 'deploy')}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
