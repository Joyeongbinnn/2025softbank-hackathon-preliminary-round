import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { mockLogs } from "@/utils/mockData";
import { useLanguage } from "@/lib/LanguageContext";

const LogViewer = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredLogs = mockLogs
    .split('\n')
    .filter(line => line.toLowerCase().includes(searchQuery.toLowerCase()))
    .join('\n');
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === 'ko' ? '로그 검색...' : language === 'en' ? 'Search logs...' : 'ログを検索...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">{language === 'ko' ? '전체 로그' : language === 'en' ? 'All Logs' : 'すべてのログ'}</TabsTrigger>
            <TabsTrigger value="build">{language === 'ko' ? '빌드 로그' : language === 'en' ? 'Build Logs' : 'ビルドログ'}</TabsTrigger>
            <TabsTrigger value="deploy">{language === 'ko' ? '배포 로그' : language === 'en' ? 'Deploy Logs' : 'デプロイログ'}</TabsTrigger>
            <TabsTrigger value="app">{language === 'ko' ? '애플리케이션 로그' : language === 'en' ? 'App Logs' : 'アプリログ'}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <ScrollArea className="h-[500px] w-full rounded-md border bg-muted/30 p-4">
              <pre className="text-xs font-mono leading-relaxed">
                {filteredLogs || mockLogs}
              </pre>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="build" className="mt-4">
            <ScrollArea className="h-[500px] w-full rounded-md border bg-muted/30 p-4">
              <pre className="text-xs font-mono leading-relaxed">
                {mockLogs.split('\n').filter(line => 
                  line.includes('빌드') || line.includes('Building') || line.includes('Step')
                ).join('\n')}
              </pre>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="deploy" className="mt-4">
            <ScrollArea className="h-[500px] w-full rounded-md border bg-muted/30 p-4">
              <pre className="text-xs font-mono leading-relaxed">
                {mockLogs.split('\n').filter(line => 
                  line.includes('배포') || line.includes('boto3') || line.includes('EC2')
                ).join('\n')}
              </pre>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="app" className="mt-4">
            <ScrollArea className="h-[500px] w-full rounded-md border bg-muted/30 p-4">
              <pre className="text-xs font-mono leading-relaxed">
                {mockLogs.split('\n').filter(line => 
                  line.includes('container') || line.includes('Docker')
                ).join('\n')}
              </pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LogViewer;
