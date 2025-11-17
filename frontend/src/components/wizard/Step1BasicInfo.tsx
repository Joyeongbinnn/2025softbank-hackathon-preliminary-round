import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { techStackOptions } from "@/utils/mockData";
import { X } from "lucide-react";

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
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="projectName">프로젝트 이름 *</Label>
        <Input
          id="projectName"
          placeholder="예: 우리팀-백엔드-서비스"
          value={projectName}
          onChange={(e) => onProjectNameChange(e.target.value)}
          className="text-base"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="teamName">팀 이름 *</Label>
        <Input
          id="teamName"
          placeholder="예: 개발팀"
          value={teamName}
          onChange={(e) => onTeamNameChange(e.target.value)}
          className="text-base"
        />
      </div>
      
      <div className="space-y-2">
        <Label>기술 스택 (선택)</Label>
        <p className="text-sm text-muted-foreground mb-3">
          사용하는 기술을 선택해주세요
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
