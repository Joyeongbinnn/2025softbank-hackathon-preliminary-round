import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import StageIndicator from "@/components/pipeline/StageIndicator";
import LogViewer from "@/components/pipeline/LogViewer";
import { mockPipelineStages } from "@/utils/mockData";
import { useState } from "react";

type StatusType = 'working' | 'success' | 'fail';

const PipelineDetail = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { deployId } = useParams<{ deployId: string }>();
  const [status, setStatus] = useState<StatusType>('working');

  const handleImageClick = () => {
    setStatus((prev) => {
      if (prev === 'working') return 'success';
      if (prev === 'success') return 'fail';
      return 'working';
    });
  };

  const getStatusImage = () => {
    switch (status) {
      case 'working':
        return '/images/working.gif';
      case 'success':
        return '/images/success.gif';
      case 'fail':
        return '/images/fail.gif';
      default:
        return '/images/working.gif';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'working':
        return t(language, 'running');
      case 'success':
        return t(language, 'success');
      case 'fail':
        return t(language, 'failed');
      default:
        return t(language, 'running');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t(language, 'backToDashboard')}
        </Button>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{language === 'ko' ? '파이프라인 상세' : language === 'en' ? 'Pipeline Details' : 'パイプラインの詳細'}</h1>
          <p className="text-muted-foreground mb-8">
            {language === 'ko' ? '프로덕션 환경 배포 진행 상황' : language === 'en' ? 'Production environment deployment progress' : '本番環境のデプロイ進行状況'}
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{t(language, 'currentStatus')}</h2>
            <div>
              <img 
                src={getStatusImage()} 
                alt={getStatusText()} 
                className="w-full max-w-md mx-auto mb-6 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleImageClick}
              />
              <p className="text-center text-lg font-medium">{getStatusText()}</p>
            </div>
            <h2 className="text-xl font-semibold">{t(language, 'deployment')}</h2>
            <StageIndicator stages={mockPipelineStages} />
          </div>
          
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">{language === 'ko' ? '로그' : language === 'en' ? 'Logs' : 'ログ'}</h2>
            <LogViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineDetail;
