import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { GitBranch, Code2 } from "lucide-react";

interface Step2Props {
  gitUrl: string;
  branch: string;
  accessToken: string;
  onGitUrlChange: (value: string) => void;
  onBranchChange: (value: string) => void;
  onAccessTokenChange: (value: string) => void;
}

const Step2GitSetup = ({
  gitUrl,
  branch,
  accessToken,
  onGitUrlChange,
  onBranchChange,
  onAccessTokenChange,
}: Step2Props) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="gitUrl">GitHub 레포지토리 URL *</Label>
        <Input
          id="gitUrl"
          placeholder="https://github.com/username/repository"
          value={gitUrl}
          onChange={(e) => onGitUrlChange(e.target.value)}
          className="text-base"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="branch">배포 브랜치 *</Label>
        <Select value={branch} onValueChange={onBranchChange}>
          <SelectTrigger>
            <SelectValue placeholder="브랜치 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="main">main</SelectItem>
            <SelectItem value="develop">develop</SelectItem>
            <SelectItem value="staging">staging</SelectItem>
            <SelectItem value="custom">직접 입력</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="accessToken">Access Token</Label>
        <Input
          id="accessToken"
          type="password"
          placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
          value={accessToken}
          onChange={(e) => onAccessTokenChange(e.target.value)}
          className="text-base"
        />
        <p className="text-xs text-muted-foreground">
          💡 데모에서는 실제로 저장되지 않습니다
        </p>
      </div>
      
      {gitUrl && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">레포지토리 미리보기</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {gitUrl.split('/').slice(-2).join('/')}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <GitBranch className="h-3 w-3" />
                  <span>마지막 커밋: feat: 로그인 UI 개선 (2시간 전)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Step2GitSetup;
