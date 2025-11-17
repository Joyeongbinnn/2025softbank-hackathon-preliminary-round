import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import StageIndicator from "@/components/pipeline/StageIndicator";
import LogViewer from "@/components/pipeline/LogViewer";
import { mockPipelineStages } from "@/utils/mockData";

const PipelineDetail = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          대시보드로 돌아가기
        </Button>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">파이프라인 상세</h1>
          <p className="text-muted-foreground mb-8">
            프로덕션 환경 배포 진행 상황
          </p>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">배포 단계</h2>
            <StageIndicator stages={mockPipelineStages} />
          </div>
          
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">로그</h2>
            <LogViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineDetail;
