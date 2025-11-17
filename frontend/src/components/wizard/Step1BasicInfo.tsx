import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { techStackOptions } from "@/utils/mockData";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

interface Step1Props {
  projectName: string;
  teamName: string;
  techStack: string[];
  onProjectNameChange: (value: string) => void;
  onTeamNameChange: (value: string) => void;
  onTechStackToggle: (tech: string) => void;
}

const Step1BasicInfo = ({
  projectName,
  teamName,
  techStack,
  onProjectNameChange,
  onTeamNameChange,
  onTechStackToggle,
}: Step1Props) => {
  const { language } = useLanguage();
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="projectName">{t(language, 'projectName_label')} *</Label>
        <Input
          id="projectName"
          placeholder={language === 'ko' ? '예: 우리팀-백엔드-서비스' : language === 'en' ? 'Ex: Our-Team-Backend-Service' : '例: チーム-バックエンド-サービス'}
          value={projectName}
          onChange={(e) => onProjectNameChange(e.target.value)}
          className="text-base"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="teamName">{language === 'ko' ? '팀 이름' : language === 'en' ? 'Team Name' : 'チーム名'} *</Label>
        <Input
          id="teamName"
          placeholder={language === 'ko' ? '예: 개발팀' : language === 'en' ? 'Ex: Dev Team' : '例: 開発チーム'}
          value={teamName}
          onChange={(e) => onTeamNameChange(e.target.value)}
          className="text-base"
        />
      </div>
      
      <div className="space-y-2">
        <Label>{language === 'ko' ? '기술 스택' : language === 'en' ? 'Tech Stack' : '技術スタック'} ({language === 'ko' ? '선택' : language === 'en' ? 'Optional' : 'オプション'})</Label>
        <p className="text-sm text-muted-foreground mb-3">
          {language === 'ko' ? '사용하는 기술을 선택해주세요' : language === 'en' ? 'Select the technologies you use' : '使用する技術を選択してください'}
        </p>
        <div className="flex flex-wrap gap-2">
          {techStackOptions.map((tech) => {
            const isSelected = techStack.includes(tech);
            return (
              <Badge
                key={tech}
                variant={isSelected ? "default" : "outline"}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => onTechStackToggle(tech)}
              >
                {tech}
                {isSelected && <X className="ml-1 h-3 w-3" />}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Step1BasicInfo;
