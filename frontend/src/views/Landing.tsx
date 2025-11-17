import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Zap, Shield, GitBranch, Server, Lock } from "lucide-react";
import Header from "@/components/layout/Header";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Rocket className="h-4 w-4" />
            스타트업을 위한 자동 배포 플랫폼
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            배포 버튼 한 번으로,
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              인프라까지 자동으로.
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Git 주소와 AWS 정보만 넣으면, EC2·Docker·NGINX·HTTPS까지 자동 구성해주는
            스타트업 전용 배포 서비스입니다.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/new-project">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg">
                <Rocket className="mr-2 h-5 w-5" />
                시작하기
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                데모 살펴보기
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-2 transition-all hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">원클릭 배포</h3>
              <p className="text-muted-foreground">
                Git 푸시만 하면 자동으로 배포됩니다. 복잡한 설정은 필요 없습니다.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 transition-all hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="rounded-lg bg-accent/10 w-12 h-12 flex items-center justify-center">
                <Server className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">EC2 자동 구성</h3>
              <p className="text-muted-foreground">
                필요한 인스턴스 개수와 스펙을 자동으로 추천하고 구성합니다.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 transition-all hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="rounded-lg bg-success/10 w-12 h-12 flex items-center justify-center">
                <Lock className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-bold">HTTPS 자동 설정</h3>
              <p className="text-muted-foreground">
                도메인을 입력하면 인증서를 자동으로 발급하고 적용합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">3단계로 완성되는 배포</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Git 주소 입력</h3>
              <p className="text-muted-foreground">
                GitHub 레포지토리 URL과 배포할 브랜치를 선택하세요.
              </p>
            </div>
            <GitBranch className="h-12 w-12 text-primary/20" />
          </div>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">AWS 정보 입력</h3>
              <p className="text-muted-foreground">
                리전과 EC2 인스턴스 개수를 설정하세요. 나머지는 자동입니다.
              </p>
            </div>
            <Server className="h-12 w-12 text-accent/20" />
          </div>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success text-success-foreground flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">배포 완료 🎉</h3>
              <p className="text-muted-foreground">
                CI/CD 파이프라인이 자동으로 구축되고 서비스가 배포됩니다.
              </p>
            </div>
            <Shield className="h-12 w-12 text-success/20" />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold">지금 바로 시작해보세요</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              복잡한 인프라 설정 없이, 5분만에 첫 배포를 경험해보세요.
            </p>
            <Link to="/new-project">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Rocket className="mr-2 h-5 w-5" />
                무료로 시작하기
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Landing;
