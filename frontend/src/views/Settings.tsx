import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Mail, Shield, Users, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

const Settings = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [slackWebhook, setSlackWebhook] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [notificationLevel, setNotificationLevel] = useState('all');
  
  const teamMembers = [
    { id: '1', name: '김개발', email: 'dev@team.com', role: 'admin' },
    { id: '2', name: '박디자인', email: 'design@team.com', role: 'developer' },
    { id: '3', name: '이기획', email: 'pm@team.com', role: 'viewer' },
  ];
  
  const handleSave = () => {
    toast.success(t(language, 'saved'));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t(language, 'backToDashboard')}
        </Button>
        
        <h1 className="text-3xl font-bold mb-8">{t(language, 'settings')}</h1>
        
        <div className="space-y-6">
          {/* 알림 설정 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                {t(language, 'notifications')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="slack">Slack Webhook URL</Label>
                <Input
                  id="slack"
                  placeholder="https://hooks.slack.com/services/..."
                  value={slackWebhook}
                  onChange={(e) => setSlackWebhook(e.target.value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>{t(language, 'emailNotifications')}</Label>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ko' ? '배포 결과를 이메일로 받습니다' : language === 'en' ? 'Receive deployment results via email' : 'デプロイ結果をメールで受け取ります'}
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              
              <div className="space-y-2">
                <Label>{t(language, 'notificationLevel')}</Label>
                <RadioGroup value={notificationLevel} onValueChange={setNotificationLevel}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="deployments" id="deployments" />
                    <Label htmlFor="deployments" className="font-normal cursor-pointer">
                      {language === 'ko' ? '배포 결과만 알림' : language === 'en' ? 'Only deployment results' : 'デプロイ結果のみ通知'}
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all" className="font-normal cursor-pointer">
                      {t(language, 'all')}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Button onClick={handleSave} className="w-full sm:w-auto">
                {language === 'ko' ? '알림 설정 저장' : language === 'en' ? 'Save Notification Settings' : '通知設定を保存'}
              </Button>
            </CardContent>
          </Card>
          
          {/* 팀 관리 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  {t(language, 'teamManagement')}
                </CardTitle>
                <Button variant="outline" size="sm">
                  {language === 'ko' ? '팀원 초대' : language === 'en' ? 'Invite Team Member' : 'チームメンバーを招待'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={member.role === 'admin' ? 'default' : 'secondary'}>
                        {t(language, member.role)}
                      </Badge>
                      {member.role !== 'admin' && (
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* 보안 안내 */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                {t(language, 'security')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                🔒 {language === 'ko' ? '이 데모 버전에서는 실제 AWS Key를 저장하지 않습니다.' : language === 'en' ? 'This demo version does not store actual AWS Keys.' : 'このデモバージョンは実際のAWSキーを保存しません。'}
              </p>
              <p>
                {language === 'ko' ? '실서비스에서는 KMS, Secret Manager 등을 통해 자격증명을 안전하게 관리합니다.' : language === 'en' ? 'In production, credentials are securely managed through KMS, Secret Manager, etc.' : '本番環境では、KMS、Secret Managerなどを通じて認証情報を安全に管理します。'}
              </p>
              <p>
                {language === 'ko' ? '모든 데이터는 암호화되어 전송되며, 정기적인 보안 감사를 실시합니다.' : language === 'en' ? 'All data is transmitted with encryption, and regular security audits are conducted.' : 'すべてのデータは暗号化されて送信され、定期的なセキュリティ監査が実施されます。'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
