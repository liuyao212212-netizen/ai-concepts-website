import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart3,
  Users,
  FileText,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  Play,
  CheckCircle,
  Award,
  Building2,
} from 'lucide-react';
import { FadeIn, Stagger, HoverLift, fadeUp, motion } from '@/components/MotionPrimitives';

export function HomePage() {
  const platformFeatures = [
    {
      icon: MessageSquare,
      title: '问答引擎洞察',
      description: '深入了解AI在每一次对话中是如何呈现和展示您品牌的。',
    },
    {
      icon: BarChart3,
      title: '智能体分析',
      description: '追踪您的网站是如何被ChatGPT、Gemini、Claude、Perplexity等主流AI爬虫抓取和解析的。',
    },
    {
      icon: TrendingUp,
      title: '提示词搜索量',
      description: '了解大众向AI提出的真实问题，并根据这些真实需求来调整您的营销策略。',
    },
    {
      icon: Users,
      title: '智能体',
      description: '自动化生成经过AI深度优化的内容。为您提供经过验证的专业模板，助力您高效生成高质量内容。',
    },
  ];

  const solutions = [
    {
      icon: Globe,
      title: 'GEO与全网搜索优化',
      subtitle: 'AEO & SEO Teams',
      description: '针对各大主流大语言模型优化您的品牌布局，品效合一，实现品牌用户持续增长。',
      tags: ['官网SEO&GEO改造', 'GEO信源优化', '多模态内容占位'],
    },
    {
      icon: FileText,
      title: '内容与新媒体营销',
      subtitle: 'Content & Demand Teams',
      description: '利用智优康赛的智能体结合全网内容矩阵，自动化生成符合AI抓取偏好的高质量内容。',
      tags: ['短视频营销', '小红书营销', '知乎营销', '达人内容共创'],
    },
    {
      icon: Shield,
      title: '品牌公关与声誉管理',
      subtitle: 'PR & Brand Teams',
      description: '全面监控并影响AI在回答中是如何评价和描述您的品牌。在AI主导的信息流中主动管理品牌声誉。',
      tags: ['品牌公关策略', '公关传播', '事件营销', '危机公关'],
    },
    {
      icon: Zap,
      title: '品牌出海全球化',
      subtitle: 'Global Marketing Teams',
      description: '整合全球资源，为您提供多语言SEO解决方案、品牌出海传播解决方案、海外数字营销广告。',
      tags: ['多语言SEO', '海外数字营销', '多语言网站开发'],
    },
  ];

  const customers = [
    '华为', '联想', 'OPPO', 'vivo', '海尔', 'TCL', '方太', '追觅', '佳能', '飞利浦',
    '雅诗兰黛', '海蓝之谜', '祖·玛珑', '芬迪', '沛纳海', '耐克', '蒙牛', '波司登',
    '福特', '起亚', '林肯', '长城汽车', '中信银行', '广发银行', '中国人保', '中国太平',
    '腾讯', '知乎', '大众点评', '汽车之家', '芒果TV', '天眼查', 'CCTV', '亚马逊',
  ];

  const partners = [
    { name: 'Google', desc: '双重合作伙伴及一级代理商' },
    { name: 'SEMrush', desc: '中国区独家代理商' },
    { name: 'Shopify', desc: '深度链接建站平台' },
    { name: 'PayPal', desc: '跨境支付生态伙伴' },
    { name: '北京大学', desc: '校企合作' },
    { name: '中国传媒大学', desc: '校企合作' },
  ];

  return (
    <main className="bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(99,102,241,0.3) 0%, transparent 50%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                  AI Concepts
                </span>
                <br />
                智优康赛
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-[#9ca3af] mb-8 max-w-3xl mx-auto">
                让您的品牌在AI搜索时代脱颖而出
                <br />
                GEO（生成式引擎优化）全栈营销平台
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {['ChatGPT', 'Gemini', 'Claude', 'Perplexity', '文心一言', '通义千问'].map((platform) => (
                  <span
                    key={platform}
                    className="px-4 py-2 bg-[#1a1a2e] border border-[#292929] rounded-full text-[#edf2f5] text-sm font-medium hover:border-[#6366f1] transition-colors cursor-default"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-10 text-base font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  预约咨询
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  className="bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/5 rounded-full px-10 text-base font-medium"
                  onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  了解更多
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                扩展您的品牌影响力，而非增加您的工作量
              </h2>
              <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
                智优康赛是专为未来营销人员打造的全站式营销平台。
                借助智优康赛平台，您可以全面实现数据的理解、分析、构建与衡量。
              </p>
            </div>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature) => (
              <motion.div key={feature.title} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#9ca3af] text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                适用于每个营销渠道的专属方案
              </h2>
              <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
                无论您的团队负责哪个环节，智优康赛都能为您提供针对性的解决方案，
                帮助您在AI搜索时代赢得竞争优势。
              </p>
            </div>
          </FadeIn>

          <Stagger className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <motion.div key={solution.title} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                          <solution.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-[#6366f1] text-sm font-medium">{solution.subtitle}</span>
                      </div>
                      <CardTitle className="text-white text-xl mb-2">{solution.title}</CardTitle>
                      <p className="text-[#9ca3af] text-sm">{solution.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#0a0a0f] border border-[#292929] rounded-full text-[#9ca3af] text-xs"
                          >
                            {tag}
                          </span>
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

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                系统演示与体验
              </h2>
              <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
                立即开启您的智能营销之旅。我们为您提供多种专属体验方式，让您能够零距离了解智优康赛系统如何帮助企业在AI搜索时代赢得先机。
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <HoverLift>
                <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">预约专属系统演示</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af] text-sm">全景系统展示，直观展示智优康赛全栈式营销平台的核心工作流</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af] text-sm">定制化业务对接，为您量身定制专属的增长蓝图</p>
                    </div>
                    <Button className="w-full mt-4 bg-white text-black hover:bg-white/90 rounded-full">
                      立即预约
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </HoverLift>
            </FadeIn>

            <FadeIn delay={0.2}>
              <HoverLift>
                <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">获取免费AEO诊断报告</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af] text-sm">深度可见度分析，全面检测您的品牌在各大大语言模型中的真实曝光率</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af] text-sm">明确的优化建议，帮助您快速抢占高价值的AI搜索流量入口</p>
                    </div>
                    <Button className="w-full mt-4 bg-white text-black hover:bg-white/90 rounded-full">
                      免费诊断
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </HoverLift>
            </FadeIn>

            <FadeIn delay={0.3}>
              <HoverLift>
                <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">免费体验AI营销智能体</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af] text-sm">零成本极速试用，免费访问我们平台当前最受欢迎、最高效的核心AI智能助手</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af] text-sm">涵盖三大核心业务场景：需求生成、品牌管理、内容创作</p>
                    </div>
                    <Button className="w-full mt-4 bg-white text-black hover:bg-white/90 rounded-full">
                      立即体验
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </HoverLift>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                备受全球顶尖营销人员与头部品牌信赖
              </h2>
              <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
                智优康赛拥有1000+客户服务经验，成功帮助各行业的头部品牌实现流量突破、商业转化与业务的可持续增长
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-[#1a1a2e] border border-[#292929] rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl text-white italic mb-4 leading-relaxed">
                    "在使用智优康赛之前，AI搜索对我们来说完全是一个黑盒。但现在，它已经成为了我们的核心竞争优势。"
                  </p>
                  <p className="text-[#9ca3af] font-medium">George Bonaci，增长与需求副总裁 (VP of Growth & Demand)</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
              {customers.slice(0, 16).map((customer) => (
                <div
                  key={customer}
                  className="bg-[#1a1a2e] border border-[#292929] rounded-lg p-4 text-center hover:border-[#6366f1] transition-colors"
                >
                  <span className="text-[#9ca3af] text-sm font-medium">{customer}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-[#1a1a2e] border border-[#292929] rounded-lg">
                <Award className="h-10 w-10 text-[#6366f1] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-[#9ca3af] text-sm">行业权威大奖</div>
              </div>
              <div className="text-center p-6 bg-[#1a1a2e] border border-[#292929] rounded-lg">
                <Building2 className="h-10 w-10 text-[#6366f1] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-[#9ca3af] text-sm">客户服务经验</div>
              </div>
              <div className="text-center p-6 bg-[#1a1a2e] border border-[#292929] rounded-lg">
                <Shield className="h-10 w-10 text-[#6366f1] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">4大</div>
                <div className="text-[#9ca3af] text-sm">国家级核心专利</div>
              </div>
              <div className="text-center p-6 bg-[#1a1a2e] border border-[#292929] rounded-lg">
                <Users className="h-10 w-10 text-[#6366f1] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-[#9ca3af] text-sm">行业专家智库</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                生态与合作
              </h2>
              <p className="text-xl text-[#9ca3af] max-w-3xl mx-auto">
                智优康赛致力于构建开放、共赢的数字营销生态系统。我们不仅提供强大的核心平台，还与全球顶尖的技术提供商、生态服务伙伴及权威机构深度集成与合作。
              </p>
            </div>
          </FadeIn>

          <Stagger className="grid md:grid-cols-3 gap-6 mb-12">
            {partners.map((partner) => (
              <motion.div key={partner.name} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-2">{partner.name}</h3>
                      <p className="text-[#9ca3af] text-sm">{partner.desc}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>

          <FadeIn delay={0.2}>
            <div className="bg-[#1a1a2e] border border-[#292929] rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-4">权威产学研深度协作</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af]">与北京大学、中国传媒大学等国内顶尖高校保持紧密的校企合作</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af]">中国商务广告协会理事单位、CAAC品牌出海委员会联席理事单位</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af]">拥有国家级期刊媒体《国际品牌观察杂志》的独家商业运营权</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-2xl font-semibold mb-4">合作伙伴计划</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af]">连接经过智优康赛严格认证的优质代理服务商</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <p className="text-[#9ca3af]">获取涵盖GEO、SEO、内容创作与公关传播等领域的专业支持</p>
                    </div>
                    <Button className="mt-4 bg-white text-black hover:bg-white/90 rounded-full">
                      成为合作伙伴
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              准备好在AI搜索时代占据领先地位了吗？
            </h2>
            <p className="text-xl text-[#9ca3af] mb-8">
              加入智优康赛，让您的品牌在AI对话中获得优先推荐
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 rounded-full px-8 text-lg"
                >
                  预约咨询
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="bg-[#333333] text-white border-[#333333] hover:bg-[#333333]/80 rounded-full px-8 text-lg"
              >
                联系我们
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
