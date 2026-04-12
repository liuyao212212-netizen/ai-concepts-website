import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn, Stagger, HoverLift, fadeUp, motion } from '@/components/MotionPrimitives';
import { Award, Building2, Shield, Users, MessageSquare, ArrowRight } from 'lucide-react';

const customers = [
  '华为', '联想', 'OPPO', 'vivo', '海尔', 'TCL', '方太', '追觅', '佳能', '飞利浦',
  '雅诗兰黛', '海蓝之谜', '祖·玛珑', '芬迪', '沛纳海', '耐克', '蒙牛', '波司登',
  '福特', '起亚', '林肯', '长城汽车', '中信银行', '广发银行', '中国人保', '中国太平',
  '腾讯', '知乎', '大众点评', '汽车之家', '芒果TV', '天眼查', 'CCTV', '亚马逊',
];

const stats = [
  { icon: Award, value: '30+', label: '行业权威大奖', color: '#FFD700' },
  { icon: Building2, value: '1000+', label: '客户服务经验', color: '#23FFBD' },
  { icon: Shield, value: '4大', label: '国家级核心专利', color: '#67CAF2' },
  { icon: Users, value: '100+', label: '行业专家智库', color: '#935DFF' },
];

const industries = [
  '3C与科技电器', '快消美妆奢侈品', '汽车及出行', '金融与保险', '互联网媒体与平台', '电商航旅与地产',
];

export function CustomersPage() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-[#9ca3af] hover:text-white mb-8 transition-colors text-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首页
          </Link>
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">客户评价</h1>
            <p className="text-xl text-[#9ca3af] max-w-2xl">
              备受全球顶尖营销人员与头部品牌信赖。智优康赛拥有1000+客户服务经验，成功帮助各行业的头部品牌实现流量突破、商业转化与业务的可持续增长。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="bg-[#1a1a2e] border border-[#292929] p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl text-white italic mb-4 leading-relaxed">
                    &ldquo;在使用智优康赛之前，AI搜索对我们来说完全是一个黑盒。但现在，它已经成为了我们的核心竞争优势。&rdquo;
                  </p>
                  <p className="text-[#9ca3af] font-medium">George Bonaci，增长与需求副总裁 (VP of Growth & Demand)</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Achievements</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">行业背书</p>
          </FadeIn>
          <Stagger className="grid md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] text-center">
                    <CardContent className="pt-8 pb-8">
                      <s.icon className="h-10 w-10 mx-auto mb-3" style={{ color: s.color }} />
                      <div className="text-3xl font-bold text-white mb-2">{s.value}</div>
                      <div className="text-[#9ca3af] text-sm">{s.label}</div>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 border-t border-[#292929]/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Industries</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">服务行业</p>
          </FadeIn>
          <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <motion.div key={ind} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929]">
                    <CardContent className="py-6 text-center">
                      <p className="text-white text-sm font-medium">{ind}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-16 px-4 border-t border-[#292929]/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Trusted By</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">他们都在用智优康赛</p>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {customers.map((c) => (
                <div key={c} className="bg-[#1a1a2e] border border-[#292929] rounded-lg py-3 px-2 text-center hover:border-[#6366f1] transition-colors">
                  <span className="text-[#9ca3af] text-xs font-medium">{c}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">加入1000+品牌的选择</h2>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8" onClick={() => window.location.href = '/contact'}>
              立即预约咨询
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
