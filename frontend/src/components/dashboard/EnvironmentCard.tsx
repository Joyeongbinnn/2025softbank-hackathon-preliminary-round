import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Environment } from "@/utils/mockData";
import { RefreshCw, FileText, ExternalLink, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface EnvironmentCardProps {
  environment: Environment;
}

const EnvironmentCard = ({ environment }: EnvironmentCardProps) => {
  const navigate = useNavigate();
  
  const getStatusConfig = () => {
    switch (environment.status) {
      case 'success':
        return {
          icon: CheckCircle2,
          color: 'text-success',
          bgColor: 'bg-success/10',
          label: '정상',
          badgeVariant: 'default' as const,
        };
      case 'deploying':
        return {
          icon: Loader2,
          color: 'text-warning',
          bgColor: 'bg-warning/10',
          label: '배포 중',
          badgeVariant: 'secondary' as const,
        };
      case 'failed':
        return {
          icon: XCircle,
          color: 'text-destructive',
          bgColor: 'bg-destructive/10',
          label: '실패',
          badgeVariant: 'destructive' as const,
        };
      default:
        return {
          icon: CheckCircle2,
          color: 'text-muted-foreground',
          bgColor: 'bg-muted',
          label: '대기',
          badgeVariant: 'outline' as const,
        };
    }
  };
  
  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;
  
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    }
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    }
    return `${Math.floor(diffInHours / 24)}일 전`;
  };
  
  return (
    <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn("rounded-lg p-2", statusConfig.bgColor)}>
              <StatusIcon className={cn("h-5 w-5", statusConfig.color, environment.status === 'deploying' && "animate-spin")} />
            </div>
            <div>
              <h3 className="font-bold text-lg">{environment.name}</h3>
              <Badge variant={statusConfig.badgeVariant} className="mt-1">
                {statusConfig.label}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">마지막 배포</span>
            <span className="font-medium">{formatDate(environment.lastDeployment)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">커밋</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">{environment.commitHash}</code>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">브랜치</span>
            <span className="font-medium">{environment.branch}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-2 truncate">
            {environment.commitMessage}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            <RefreshCw className="h-3 w-3 mr-1" />
            다시 배포
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => navigate('/pipeline')}
          >
            <FileText className="h-3 w-3 mr-1" />
            로그 보기
          </Button>
          <Button size="sm" variant="outline">
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnvironmentCard;
