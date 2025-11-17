import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockEnvironments } from "@/utils/mockData";
import { Server, DollarSign, Settings, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import EnvironmentCard from "@/components/dashboard/EnvironmentCard";
import DeploymentHistory from "@/components/dashboard/DeploymentHistory";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">우리팀-백엔드-서비스</h1>
            <Badge variant="default" className="bg-gradient-to-r from-primary to-accent">
              배포 중...
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/settings">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                설정
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              알림
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">환경</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {mockEnvironments.map((env) => (
                  <EnvironmentCard key={env.id} environment={env} />
                ))}
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">비용/인프라 요약</h3>
                    <div className="space-y-1 text-sm">
                      <p className="flex items-center justify-between">
                        <span className="text-muted-foreground">EC2 인스턴스</span>
                        <span className="font-medium">2대</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-muted-foreground">RDS 데이터베이스</span>
                        <span className="font-medium">1대</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span className="text-muted-foreground">예상 월 비용</span>
                        <span className="font-bold text-primary flex items-center">
                          <DollarSign className="h-4 w-4" />
                          250,000원
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-bounce-gentle">😊</div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">오늘의 배포 스트레스 지수</h3>
                    <p className="text-3xl font-bold text-success mb-2">12%</p>
                    <p className="text-sm text-muted-foreground">
                      매우 평온한 상태입니다. 훌륭해요! 🎉
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <DeploymentHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
