import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lock, Mail, User, Building2, ArrowLeft, Send } from 'lucide-react';
import { FadeIn } from '@/components/MotionPrimitives';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
      {/* Background Gradient */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.3) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="flex items-center text-[#9ca3af] hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回首页
        </Link>

        <FadeIn>
          <Card className="bg-[#1a1a2e] border-[#292929]">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-4">
                <div className="relative p-2 bg-[#0a0a0f]/50 rounded-lg">
                  <img 
                    src="/images/logo.png" 
                    alt="AI Concepts 智优康赛" 
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-white text-2xl">欢迎来到智优康赛</CardTitle>
              <CardDescription className="text-[#9ca3af]">
                开启您的智能营销增长引擎
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-[#0a0a0f] mb-6">
                  <TabsTrigger 
                    value="login"
                    className="data-[state=active]:bg-[#6366f1] data-[state=active]:text-white"
                  >
                    登录
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register"
                    className="data-[state=active]:bg-[#6366f1] data-[state=active]:text-white"
                  >
                    免费注册
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[#9ca3af]">邮箱地址</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
                        <Input
                          type="email"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280]"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#9ca3af]">密码</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
                        <Input
                          type="password"
                          placeholder="输入您的密码"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280]"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm text-[#9ca3af]">
                        <input type="checkbox" className="rounded border-[#292929]" />
                        记住我
                      </label>
                      <a href="#" className="text-sm text-[#6366f1] hover:underline">
                        忘记密码？
                      </a>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-white text-black hover:bg-white/90 rounded-full"
                      disabled={isLoading}
                    >
                      {isLoading ? '登录中...' : '登录'}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm text-[#9ca3af]">姓名</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
                        <Input
                          type="text"
                          placeholder="您的姓名"
                          className="pl-10 bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#9ca3af]">公司名称</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
                        <Input
                          type="text"
                          placeholder="您的公司名称"
                          className="pl-10 bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#9ca3af]">邮箱地址</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
                        <Input
                          type="email"
                          placeholder="name@company.com"
                          className="pl-10 bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-[#9ca3af]">密码</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
                        <Input
                          type="password"
                          placeholder="设置密码（至少8位）"
                          className="pl-10 bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280]"
                        />
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-white text-black hover:bg-white/90 rounded-full"
                    >
                      立即免费注册
                    </Button>
                    <p className="text-xs text-[#6b7280] text-center">
                      注册即表示您同意我们的{' '}
                      <a href="#" className="text-[#6366f1] hover:underline">服务条款</a>
                      {' '}和{' '}
                      <a href="#" className="text-[#6366f1] hover:underline">隐私政策</a>
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Enterprise Access */}
              <div className="mt-6 pt-6 border-t border-[#292929]">
                <div className="bg-[#0a0a0f] rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#6366f1]" />
                    企业级账号接入
                  </h4>
                  <p className="text-[#9ca3af] text-sm mb-3">
                    为大型团队量身定制的专属通道。需要高级权限、独立数据隔离或大规模数据处理能力？
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1]/10 rounded-full"
                    onClick={() => window.location.href = '/contact'}
                  >
                    获取企业演示
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
