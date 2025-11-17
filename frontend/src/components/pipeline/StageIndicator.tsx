import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PipelineStage } from "@/utils/mockData";
import { CheckCircle2, XCircle, Loader2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

interface StageIndicatorProps {
  stages: PipelineStage[];
}

const StageIndicator = ({ stages }: StageIndicatorProps) => {
  const { language } = useLanguage();
  
  const getTranslatedStageName = (name: string): string => {
    const stageNameMap: Record<string, Record<string, string>> = {
      '코드 체크아웃': { ko: '코드 체크아웃', en: 'Code checkout', ja: 'コードチェックアウト' },
      '이미지 빌드 (Jenkins/Kaniko)': { ko: '이미지 빌드 (Jenkins/Kaniko)', en: 'Image build (Jenkins/Kaniko)', ja: 'イメージビルド (Jenkins/Kaniko)' },
      '이미지 푸시 (ECR 레지스트리)': { ko: '이미지 푸시 (ECR 레지스트리)', en: 'Image push (ECR registry)', ja: 'イメージプッシュ (ECRレジストリ)' },
      '인프라 적용 (boto3)': { ko: '인프라 적용 (boto3)', en: 'Infrastructure apply (boto3)', ja: 'インフラストラクチャ適用 (boto3)' },
      '컨테이너 기동 (Docker)': { ko: '컨테이너 기동 (Docker)', en: 'Container startup (Docker)', ja: 'コンテナ起動 (Docker)' },
      '헬스체크': { ko: '헬스체크', en: 'Health check', ja: 'ヘルスチェック' },
    };
    
    return stageNameMap[name]?.[language] || name;
  };
  
  const getTranslatedDuration = (duration?: string): string => {
    if (!duration) return '';
    
    const durationMap: Record<string, Record<string, string>> = {
      '12초': { ko: '12초', en: '12s', ja: '12秒' },
      '2분 34초': { ko: '2분 34초', en: '2m 34s', ja: '2分34秒' },
      '45초': { ko: '45초', en: '45s', ja: '45秒' },
      '1분 12초': { ko: '1분 12초', en: '1m 12s', ja: '1分12秒' },
    };
    
    return durationMap[duration]?.[language] || duration;
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case 'running':
        return <Loader2 className="h-5 w-5 text-warning animate-spin" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge variant="default" className="bg-success">{t(language, 'statusSuccess')}</Badge>;
      case 'running':
        return <Badge variant="secondary" className="bg-warning text-warning-foreground">{t(language, 'statusRunning')}</Badge>;
      case 'failed':
        return <Badge variant="destructive">{t(language, 'statusFailed')}</Badge>;
      default:
        return <Badge variant="outline">{t(language, 'statusWaiting')}</Badge>;
    }
  };
  
  return (
    <div className="space-y-4">
      {stages.map((stage, index) => (
        <Card
          key={stage.id}
          className={cn(
            "transition-all",
            stage.status === 'running' && "ring-2 ring-warning/50 shadow-lg"
          )}
        >
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                {getStatusIcon(stage.status)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">{getTranslatedStageName(stage.name)}</h4>
                  {getStatusBadge(stage.status)}
                </div>
                {stage.duration && (
                  <p className="text-sm text-muted-foreground">
                    {t(language, 'duration')} {getTranslatedDuration(stage.duration)}
                  </p>
                )}
              </div>
              
              {index < stages.length - 1 && (
                <div className="absolute left-[30px] top-[60px] w-0.5 h-8 bg-border" />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StageIndicator;
