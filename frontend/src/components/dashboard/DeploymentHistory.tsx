import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockDeploymentHistory } from "@/utils/mockData";
import { CheckCircle2, XCircle, GitBranch } from "lucide-react";

const DeploymentHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">배포 히스토리</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockDeploymentHistory.map((deployment, index) => (
            <div key={deployment.id} className="flex items-start gap-3 relative">
              {index < mockDeploymentHistory.length - 1 && (
                <div className="absolute left-[11px] top-8 w-0.5 h-12 bg-border" />
              )}
              
              <div className="flex-shrink-0 mt-1">
                {deployment.status === 'success' ? (
                  <div className="rounded-full bg-success/10 p-1">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  </div>
                ) : (
                  <div className="rounded-full bg-destructive/10 p-1">
                    <XCircle className="h-4 w-4 text-destructive" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{deployment.time}</span>
                  <Badge variant="outline" className="text-xs">
                    <GitBranch className="h-3 w-3 mr-1" />
                    {deployment.branch}
                  </Badge>
                  <Badge
                    variant={deployment.status === 'success' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {deployment.status === 'success' ? '성공' : '실패'}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {deployment.commitMessage}
                </p>
                <code className="text-xs text-muted-foreground">
                  {deployment.commitHash}
                </code>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploymentHistory;
