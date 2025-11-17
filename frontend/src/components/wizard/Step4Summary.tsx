import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Server, Database, Globe, Users } from "lucide-react";

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
  return (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-primary mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold mb-1">프로젝트 정보</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">이름:</span> {projectName}</p>
                <p><span className="text-muted-foreground">팀:</span> {teamName}</p>
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
              <h4 className="font-semibold mb-1">Git 설정</h4>
              <div className="space-y-1 text-sm">
                <p className="break-all"><span className="text-muted-foreground">레포지토리:</span> {gitUrl}</p>
                <p><span className="text-muted-foreground">브랜치:</span> {branch}</p>
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
              <h4 className="font-semibold mb-1">AWS 설정</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">리전:</span> {awsRegion}</p>
                <p><span className="text-muted-foreground">EC2 인스턴스:</span> {ec2Count}대</p>
                <p>
                  <span className="text-muted-foreground">데이터베이스:</span>{' '}
                  {dbOption === 'rds' ? 'RDS 자동 구성' : '직접 관리'}
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
                <h4 className="font-semibold mb-1">도메인</h4>
                <p className="text-sm">{domain}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Card className="border-warning/50 bg-warning/5">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            💡 지금은 데모 화면으로, 실제 인프라는 생성되지 않습니다.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Step4Summary;
