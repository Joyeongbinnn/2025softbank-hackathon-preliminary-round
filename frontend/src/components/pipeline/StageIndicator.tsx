import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PipelineStage } from "@/utils/mockData";
import { CheckCircle2, XCircle, Loader2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StageIndicatorProps {
  stages: PipelineStage[];
}

const StageIndicator = ({ stages }: StageIndicatorProps) => {
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
        return <Badge variant="default" className="bg-success">완료</Badge>;
      case 'running':
        return <Badge variant="secondary" className="bg-warning text-warning-foreground">진행 중</Badge>;
      case 'failed':
        return <Badge variant="destructive">실패</Badge>;
      default:
        return <Badge variant="outline">대기</Badge>;
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
                  <h4 className="font-semibold">{stage.name}</h4>
                  {getStatusBadge(stage.status)}
                </div>
                {stage.duration && (
                  <p className="text-sm text-muted-foreground">
                    소요 시간: {stage.duration}
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
