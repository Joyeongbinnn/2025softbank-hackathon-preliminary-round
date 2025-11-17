import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Zap, Shield, GitBranch, Server, Lock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

const Landing = () => {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Rocket className="h-4 w-4" />
            {t(language, 'startup_platform')}
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            {t(language, 'hero_title')}
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t(language, 'hero_title_accent')}
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground whitespace-pre-line">
            {t(language, 'hero_subtitle')}
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/new-project">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg">
                <Rocket className="mr-2 h-5 w-5" />
                {t(language, 'get_started')}
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t(language, 'demo_view')}
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
              <h3 className="text-xl font-bold">{t(language, 'oneclick_deploy')}</h3>
              <p className="text-muted-foreground">
                {t(language, 'oneclick_desc')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 transition-all hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="rounded-lg bg-accent/10 w-12 h-12 flex items-center justify-center">
                <Server className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold">{t(language, 'ec2_setup')}</h3>
              <p className="text-muted-foreground">
                {t(language, 'ec2_desc')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 transition-all hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <div className="rounded-lg bg-success/10 w-12 h-12 flex items-center justify-center">
                <Lock className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-xl font-bold">{t(language, 'https_setup')}</h3>
              <p className="text-muted-foreground">
                {t(language, 'https_desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">{language === 'ko' ? '3단계로 완성되는 배포' : language === 'en' ? '3 Steps to Complete Deployment' : '3ステップで完成するデプロイ'}</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{language === 'ko' ? 'Git 주소 입력' : language === 'en' ? 'Enter Git Address' : 'Gitアドレスを入力'}</h3>
              <p className="text-muted-foreground">
                {language === 'ko' ? 'GitHub 레포지토리 URL과 배포할 브랜치를 선택하세요.' : language === 'en' ? 'Select the GitHub repository URL and branch to deploy.' : 'GitHubリポジトリのURLとデプロイするブランチを選択します。'}
              </p>
            </div>
            <GitBranch className="h-12 w-12 text-primary/20" />
          </div>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{language === 'ko' ? 'AWS 정보 입력' : language === 'en' ? 'Enter AWS Information' : 'AWS情報を入力'}</h3>
              <p className="text-muted-foreground">
                {language === 'ko' ? '리전과 EC2 인스턴스 개수를 설정하세요. 나머지는 자동입니다.' : language === 'en' ? 'Set the region and number of EC2 instances. The rest is automatic.' : 'リージョンとEC2インスタンスの数を設定します。残りは自動です。'}
              </p>
            </div>
            <Server className="h-12 w-12 text-accent/20" />
          </div>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success text-success-foreground flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{language === 'ko' ? '배포 완료 🎉' : language === 'en' ? 'Deployment Complete 🎉' : 'デプロイ完了 🎉'}</h3>
              <p className="text-muted-foreground">
                {language === 'ko' ? 'CI/CD 파이프라인이 자동으로 구축되고 서비스가 배포됩니다.' : language === 'en' ? 'CI/CD pipeline is automatically built and service is deployed.' : 'CI/CDパイプラインが自動的に構築され、サービスがデプロイされます。'}
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
            <h2 className="text-3xl font-bold">{language === 'ko' ? '지금 바로 시작해보세요' : language === 'en' ? 'Get Started Now' : '今すぐ始めましょう'}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ko' ? '복잡한 인프라 설정 없이, 5분만에 첫 배포를 경험해보세요.' : language === 'en' ? 'Experience your first deployment in just 5 minutes without complex infrastructure setup.' : '複雑なインフラ設定なしで、5分で最初のデプロイを体験してください。'}
            </p>
            <Link to="/new-project">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Rocket className="mr-2 h-5 w-5" />
                {language === 'ko' ? '무료로 시작하기' : language === 'en' ? 'Start for Free' : '無料で始める'}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Landing;
