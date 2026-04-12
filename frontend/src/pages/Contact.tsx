import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, User, Phone, Mail, MessageSquare, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { FadeIn } from '@/components/MotionPrimitives';
import { toast } from 'sonner';

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    businessNeeds: '',
    budget: '',
    timeline: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', data: formData }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);
      setIsSubmitted(true);
      toast.success('提交成功！我们的团队将尽快与您联系。');
    } catch {
      toast.error('提交失败，请稍后重试或直接联系 liuyao@netconcepts.cn');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-4">
        <div 
          className="fixed inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.3) 0%, transparent 50%)'
          }}
        />
        <FadeIn>
          <Card className="bg-[#1a1a2e] border-[#292929] max-w-md w-full text-center">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 rounded-full bg-[#10b981]/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[#10b981]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">提交成功</h2>
              <p className="text-[#9ca3af] mb-6">
                感谢您的咨询！我们的专业团队将在1个工作日内与您联系。
              </p>
              <Link to="/">
                <Button className="bg-white text-black hover:bg-white/90 rounded-full">
                  返回首页
                </Button>
              </Link>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-8 px-4">
      {/* Background Gradient */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.3) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="flex items-center text-[#9ca3af] hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回首页
        </Link>

        <FadeIn>
          <Card className="bg-[#1a1a2e] border-[#292929]">
            <CardHeader className="text-center pb-2">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img 
                    src="/images/logo.png" 
                    alt="AI Concepts 智优康赛" 
                    className="h-12 w-auto object-contain rounded-lg p-2 bg-[#0a0a0f]/50"
                  />
                </div>
              </div>
              <CardTitle className="text-white text-2xl">预约咨询</CardTitle>
              <CardDescription className="text-[#9ca3af]">
                请填写以下信息，我们的专业团队将为您提供定制化解决方案
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 公司名称 */}
                <div className="space-y-2">
                  <label className="text-sm text-white font-medium flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#6366f1]" />
                    公司全称 <span className="text-red-400">*</span>
                  </label>
                  <Input
                    placeholder="请输入您的公司全称"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280] focus:border-[#6366f1]"
                    required
                  />
                </div>

                {/* 联系人姓名 */}
                <div className="space-y-2">
                  <label className="text-sm text-white font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-[#6366f1]" />
                    联系人姓名 <span className="text-red-400">*</span>
                  </label>
                  <Input
                    placeholder="请输入您的姓名"
                    value={formData.contactName}
                    onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    className="bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280] focus:border-[#6366f1]"
                    required
                  />
                </div>

                {/* 联系方式 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4 text-[#6366f1]" />
                      手机号码 <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="tel"
                      placeholder="请输入手机号码"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280] focus:border-[#6366f1]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#6366f1]" />
                      电子邮箱 <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="请输入邮箱地址"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280] focus:border-[#6366f1]"
                      required
                    />
                  </div>
                </div>

                {/* 业务诉求 */}
                <div className="space-y-2">
                  <label className="text-sm text-white font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-[#6366f1]" />
                    业务诉求 <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    placeholder="请描述您的业务需求，例如：提升品牌在AI搜索中的可见度、优化内容策略、监控品牌声誉等"
                    value={formData.businessNeeds}
                    onChange={(e) => setFormData({...formData, businessNeeds: e.target.value})}
                    className="bg-[#0a0a0f] border-[#292929] text-white placeholder:text-[#6b7280] focus:border-[#6366f1] min-h-[120px]"
                    required
                  />
                </div>

                {/* 预算范围 */}
                <div className="space-y-2">
                  <label className="text-sm text-white font-medium">
                    预算范围（可选）
                  </label>
                  <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger className="bg-[#0a0a0f] border-[#292929] text-white">
                      <SelectValue placeholder="请选择预算范围" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-[#292929]">
                      <SelectItem value="10w-">10万以下</SelectItem>
                      <SelectItem value="10w-30w">10万-30万</SelectItem>
                      <SelectItem value="30w-50w">30万-50万</SelectItem>
                      <SelectItem value="50w-100w">50万-100万</SelectItem>
                      <SelectItem value="100w+">100万以上</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 时间期望 */}
                <div className="space-y-2">
                  <label className="text-sm text-white font-medium">
                    期望启动时间（可选）
                  </label>
                  <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                    <SelectTrigger className="bg-[#0a0a0f] border-[#292929] text-white">
                      <SelectValue placeholder="请选择期望启动时间" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-[#292929]">
                      <SelectItem value="immediately">立即启动</SelectItem>
                      <SelectItem value="1month">1个月内</SelectItem>
                      <SelectItem value="3months">3个月内</SelectItem>
                      <SelectItem value="flexible">时间灵活</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* 提交按钮 */}
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-white/90 rounded-full h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      提交中...
                    </>
                  ) : (
                    <>
                      提交咨询
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-[#6b7280] text-center">
                  提交即表示您同意我们的{' '}
                  <a href="#" className="text-[#6366f1] hover:underline">隐私政策</a>
                </p>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
