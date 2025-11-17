import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Server, Database, Globe, Users } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { awsRegions } from "@/utils/mockData";

interface Step4Props {
  projectName: string;
  teamName: string;
  techStack: string[];
  gitUrl: string;
  branch: string;
  awsRegion: string;
  ec2Count: number;
  dbOption: string;
  domain: string;
}

const Step4Summary = ({
  projectName,
  teamName,
  techStack,
  gitUrl,
  branch,
  awsRegion,
  ec2Count,
  dbOption,
  domain,
}: Step4Props) => {
  const { language } = useLanguage();
  
  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-primary mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold mb-1">{language === 'ko' ? '프로젝트 정보' : language === 'en' ? 'Project Information' : 'プロジェクト情報'}</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">{language === 'ko' ? '이름:' : language === 'en' ? 'Name:' : '名前:'}</span> {projectName}</p>
                <p><span className="text-muted-foreground">{language === 'ko' ? '팀:' : language === 'en' ? 'Team:' : 'チーム:'}</span> {teamName}</p>
                {techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <GitBranch className="h-5 w-5 text-primary mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold mb-1">{t(language, 'gitSetup')}</h4>
              <div className="space-y-1 text-sm">
                <p className="break-all"><span className="text-muted-foreground">{language === 'ko' ? '레포지토리:' : language === 'en' ? 'Repository:' : 'リポジトリ:'}</span> {gitUrl}</p>
                <p><span className="text-muted-foreground">{language === 'ko' ? '브랜치:' : language === 'en' ? 'Branch:' : 'ブランチ:'}</span> {branch}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Server className="h-5 w-5 text-primary mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold mb-1">{t(language, 'awsSetup')}</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">{language === 'ko' ? '리전:' : language === 'en' ? 'Region:' : 'リージョン:'}</span> {awsRegions.find(r => r.value === awsRegion)?.label || awsRegion}</p>
                <p><span className="text-muted-foreground">EC2 {language === 'ko' ? '인스턴스:' : language === 'en' ? 'Instance:' : 'インスタンス:'}</span> {ec2Count}{language === 'ko' ? '대' : language === 'en' ? '' : ''}</p>
                <p>
                  <span className="text-muted-foreground">{language === 'ko' ? '데이터베이스:' : language === 'en' ? 'Database:' : 'データベース:'}</span>{' '}
                  {dbOption === 'rds' ? (language === 'ko' ? 'RDS 자동 구성' : language === 'en' ? 'RDS Auto-Configure' : 'RDS自動構成') : (language === 'ko' ? '직접 관리' : language === 'en' ? 'Manual Management' : '手動管理')}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {domain && (
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-primary mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold mb-1">{language === 'ko' ? '도메인' : language === 'en' ? 'Domain' : 'ドメイン'}</h4>
                <p className="text-sm break-all">{domain}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Card className="border-success/20 bg-success/5">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            ✅ {language === 'ko' ? '모든 설정이 준비되었습니다. 아래 버튼을 클릭하여 배포를 시작하세요!' : language === 'en' ? 'All settings are ready. Click the button below to start deployment!' : 'すべての設定が準備できました。下のボタンをクリックしてデプロイを開始してください!'}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step4Summary;
