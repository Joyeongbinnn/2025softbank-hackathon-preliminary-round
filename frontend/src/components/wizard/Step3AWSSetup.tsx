import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { awsRegions } from "@/utils/mockData";
import { GitBranch, Server, Database, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

interface Step3Props {
  awsRegion: string;
  ec2Count: number;
  dbOption: string;
  domain: string;
  onAwsRegionChange: (value: string) => void;
  onEc2CountChange: (value: number) => void;
  onDbOptionChange: (value: string) => void;
  onDomainChange: (value: string) => void;
}

const Step3AWSSetup = ({
  awsRegion,
  ec2Count,
  dbOption,
  domain,
  onAwsRegionChange,
  onEc2CountChange,
  onDbOptionChange,
  onDomainChange,
}: Step3Props) => {
  const { language } = useLanguage();
  
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6 animate-fade-in">
        <div className="space-y-2">
          <Label htmlFor="region">{t(language, 'awsRegion')} *</Label>
          <Select value={awsRegion} onValueChange={onAwsRegionChange}>
            <SelectTrigger>
              <SelectValue placeholder={language === 'ko' ? '리전 선택' : language === 'en' ? 'Select region' : 'リージョンを選択'} />
            </SelectTrigger>
            <SelectContent>
              {awsRegions.map((region) => (
                <SelectItem key={region.value} value={region.value}>
                  {region.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>{language === 'ko' ? 'EC2 인스턴스 개수' : language === 'en' ? 'Number of EC2 Instances' : 'EC2インスタンス数'} *</Label>
          <div className="flex items-center gap-4">
            <Slider
              value={[ec2Count]}
              onValueChange={(value) => onEc2CountChange(value[0])}
              min={1}
              max={5}
              step={1}
              className="flex-1"
            />
            <span className="w-12 text-center font-semibold text-primary">
              {ec2Count}{language === 'ko' ? '대' : language === 'en' ? '' : ''}
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>{language === 'ko' ? '데이터베이스 옵션' : language === 'en' ? 'Database Option' : 'データベースオプション'}</Label>
          <RadioGroup value={dbOption} onValueChange={onDbOptionChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rds" id="rds" />
              <Label htmlFor="rds" className="cursor-pointer font-normal">
                {language === 'ko' ? 'RDS로 자동 구성' : language === 'en' ? 'Auto-configure with RDS' : 'RDSで自動構成'}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="manual" id="manual" />
              <Label htmlFor="manual" className="cursor-pointer font-normal">
                {language === 'ko' ? '직접 관리할게요' : language === 'en' ? 'I will manage it myself' : '自分で管理します'}
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="domain">{language === 'ko' ? '도메인 이름' : language === 'en' ? 'Domain Name' : 'ドメイン名'}</Label>
          <Input
            id="domain"
            placeholder="www.yoitang.cloud"
            value={domain}
            onChange={(e) => onDomainChange(e.target.value)}
            className="text-base"
          />
        </div>
      </div>
      
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
        <CardContent className="p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Server className="h-5 w-5 text-primary" />
            {language === 'ko' ? '예상 아키텍처 미리보기' : language === 'en' ? 'Expected Architecture Preview' : '予想されるアーキテクチャプレビュー'}
          </h4>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border">
              <GitBranch className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <p className="font-medium text-sm">GitHub</p>
                <p className="text-xs text-muted-foreground">{language === 'ko' ? '소스 코드' : language === 'en' ? 'Source Code' : 'ソースコード'}</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-border" />
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent/20">
              <div className="rounded-full bg-accent/20 p-2">
                <Server className="h-4 w-4 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">CI/CD Pipeline</p>
                <p className="text-xs text-muted-foreground">{language === 'ko' ? '자동 빌드 & 배포' : language === 'en' ? 'Automated Build & Deploy' : '自動ビルド & デプロイ'}</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-border" />
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <div className="rounded-full bg-primary/20 p-2">
                <Server className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">EC2 × {ec2Count}</p>
                <p className="text-xs text-muted-foreground">{awsRegions.find(r => r.value === awsRegion)?.label || (language === 'ko' ? '리전 선택' : language === 'en' ? 'Select region' : 'リージョンを選択')}</p>
              </div>
            </div>
            
            {dbOption === 'rds' && (
              <>
                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-border" />
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border">
                  <Database className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">RDS Database</p>
                    <p className="text-xs text-muted-foreground">{language === 'ko' ? '관리형 데이터베이스' : language === 'en' ? 'Managed Database' : '管理型データベース'}</p>
                  </div>
                </div>
              </>
            )}
            
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-border" />
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-success/10 border border-success/20">
              <Globe className="h-5 w-5 text-success" />
              <div className="flex-1">
                <p className="font-medium text-sm">{language === 'ko' ? '사용자' : language === 'en' ? 'Users' : 'ユーザー'}</p>
                <p className="text-xs text-muted-foreground">{domain || 'your-domain.com'}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step3AWSSetup;
