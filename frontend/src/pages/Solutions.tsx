import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn, Stagger, HoverLift, fadeUp, motion } from '@/components/MotionPrimitives';
import { Globe, FileText, Shield, Zap, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Globe,
    title: 'GEO与全网搜索优化',
    subtitle: 'AEO & SEO Teams',
    desc: '针对各大主流大语言模型优化您的品牌布局，品效合一，实现品牌用户持续增长。',
    tags: ['官网SEO&GEO改造', 'GEO信源优化', '多模态内容占位'],
    color: '#23FFBD',
  },
  {
    icon: FileText,
    title: '内容与新媒体营销',
    subtitle: 'Content & Demand Teams',
    desc: '利用智优康赛的智能体结合全网内容矩阵，自动化生成符合AI抓取偏好的高质量内容。',
    tags: ['短视频营销', '小红书营销', '知乎营销', '达人内容共创'],
    color: '#67CAF2',
  },
  {
    icon: Shield,
    title: '品牌公关与声誉管理',
    subtitle: 'PR & Brand Teams',
    desc: '全面监控并影响AI在回答中是如何评价和描述您的品牌。在AI主导的信息流中主动管理品牌声誉。',
    tags: ['品牌公关策略', '公关传播', '事件营销', '危机公关'],
    color: '#ED3A70',
  },
  {
    icon: Zap,
    title: '品牌出海全球化',
    subtitle: 'Global Marketing Teams',
    desc: '整合全球资源，为您提供多语言SEO解决方案、品牌出海传播解决方案、海外数字营销广告。',
    tags: ['多语言SEO', '海外数字营销', '多语言网站开发'],
    color: '#FFEA35',
  },
];

const partnerSolutions = [
  { title: '代理商合作', desc: '赋能营销与公关代理机构，整合前沿的GEO与AI搜索引擎优化能力。' },
];

export function SolutionsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">解决方案</h1>
            <p className="text-xl text-[#9ca3af] max-w-2xl">
              适用于每个营销渠道的专属方案，帮助您在AI搜索时代赢得竞争优势。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* For Teams */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">For Teams</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">面向企业团队</p>
          </FadeIn>
          <Stagger className="grid md:grid-cols-2 gap-8">
            {solutions.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: s.color + '20' }}>
                          <s.icon className="h-6 w-6" style={{ color: s.color }} />
                        </div>
                        <span className="text-[#6366f1] text-sm font-medium">{s.subtitle}</span>
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-2">{s.title}</h3>
                      <p className="text-[#9ca3af] text-sm mb-4">{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="px-3 py-1 bg-[#0a0a0f] border border-[#292929] rounded-full text-[#9ca3af] text-xs">{t}</span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Partner */}
      <section className="py-16 px-4 border-t border-[#292929]/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Partner</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">合作伙伴</p>
          </FadeIn>
          <Stagger className="grid md:grid-cols-2 gap-8">
            {partnerSolutions.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-[#935DFF]/20 flex items-center justify-center mb-4">
                        <Globe className="h-6 w-6 text-[#935DFF]" />
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-2">{s.title}</h3>
                      <p className="text-[#9ca3af] text-sm">{s.desc}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">找到适合您团队的解决方案</h2>
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
