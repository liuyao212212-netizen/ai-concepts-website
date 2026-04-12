import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn, Stagger, HoverLift, fadeUp, motion } from '@/components/MotionPrimitives';
import {
  BarChart3, TrendingUp,
  Eye, Search, Bot, ArrowRight
} from 'lucide-react';

const monitorFeatures = [
  {
    icon: Eye,
    title: '问答引擎洞察',
    desc: '监控AI在每一次对话中是如何呈现和展示您品牌的。',
    color: '#23FFBD',
  },
  {
    icon: BarChart3,
    title: '智能体分析',
    desc: '追踪您的网站是如何被ChatGPT、Gemini、Claude、Perplexity等主流AI爬虫抓取和解析的。',
    color: '#67CAF2',
  },
  {
    icon: TrendingUp,
    title: '提示词搜索量',
    desc: '了解大众向AI提出的真实问题，并根据这些真实需求来调整您的营销策略。',
    color: '#ED3A70',
  },
  {
    icon: Search,
    title: '购物追踪',
    desc: '追踪产品在AI搜索结果中的展示位置和曝光机会。',
    color: '#FFEA35',
  },
];

const createFeatures = [
  {
    icon: Bot,
    title: '智能体',
    desc: '自动化生成经过AI深度优化的内容。为您提供经过验证的专业模板，助力您高效生成高质量内容。',
    color: '#935DFF',
  },
];

export function PlatformPage() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      {/* Header Banner */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-[#9ca3af] hover:text-white mb-8 transition-colors text-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首页
          </Link>
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">平台介绍</h1>
            <p className="text-xl text-[#9ca3af] max-w-2xl mb-6">
              智优康赛是专为未来营销人员打造的全站式营销平台。借助智优康赛平台，您可以全面实现数据的理解、分析、构建与衡量。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Monitor Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Monitor</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">监控模块</p>
          </FadeIn>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitorFeatures.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: f.color + '20' }}>
                        <f.icon className="h-6 w-6" style={{ color: f.color }} />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-2">{f.title}</h3>
                      <p className="text-[#9ca3af] text-sm leading-relaxed">{f.desc}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Create Section */}
      <section className="py-16 px-4 border-t border-[#292929]/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Create</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">创建模块</p>
          </FadeIn>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {createFeatures.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: f.color + '20' }}>
                        <f.icon className="h-6 w-6" style={{ color: f.color }} />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-2">{f.title}</h3>
                      <p className="text-[#9ca3af] text-sm leading-relaxed">{f.desc}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Platform Screenshot */}
      <section className="py-16 px-4 border-t border-[#292929]/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden border border-[#292929]">
              <img src="/images/img_3b5c78368eda.jpg" alt="平台界面" className="w-full h-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">准备好提升您的AI搜索可见度了吗？</h2>
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
