import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn, Stagger, HoverLift, fadeUp, motion } from '@/components/MotionPrimitives';
import { Building2, GraduationCap, Globe, Handshake, CheckCircle, ArrowRight } from 'lucide-react';

const techPartners = [
  { name: 'Google', desc: '双重合作伙伴及一级代理商', detail: 'Google出海生态合作伙伴优选计划唯一入选SEO服务商与SEM代理商。' },
  { name: 'SEMrush', desc: '中国区独家代理商', detail: '作为全球知名数字营销工具，为您提供一站式独立站营销工具赋能。' },
  { name: 'Shopify', desc: '深度链接建站平台', detail: '与全球主流建站与电商平台深度链接。' },
  { name: 'PayPal', desc: '跨境支付生态伙伴', detail: '携手PayPal、pingpong等跨境支付巨头。' },
];

const ecoPartners = [
  { name: '北京大学', desc: '顶尖高校校企合作', detail: '与国内顶尖高校保持紧密的校企合作，持续推动行业理论创新与人才培养。' },
  { name: '中国传媒大学', desc: '顶尖高校校企合作', detail: '产学研深度协作，共同引领数字营销与品牌传播的行业标准。' },
  { name: '中国商务广告协会', desc: '理事单位', detail: 'CAAC品牌出海委员会联席理事单位。' },
  { name: '《国际品牌观察》', desc: '独家商业运营权', detail: '拥有国家级期刊媒体的独家商业运营权。' },
];

export function EcosystemPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">生态与合作</h1>
            <p className="text-xl text-[#9ca3af] max-w-2xl">
              智优康赛致力于构建开放、共赢的数字营销生态系统。我们不仅提供强大的核心平台，还与全球顶尖的技术提供商、生态服务伙伴及权威机构深度集成与合作。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tech Partners */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Technology</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">顶尖技术与平台整合</p>
          </FadeIn>
          <Stagger className="grid md:grid-cols-2 gap-6">
            {techPartners.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-[#23FFBD]/20 flex items-center justify-center mb-4">
                        <Globe className="h-6 w-6 text-[#23FFBD]" />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-1">{p.name}</h3>
                      <p className="text-[#6366f1] text-sm font-medium mb-2">{p.desc}</p>
                      <p className="text-[#9ca3af] text-sm">{p.detail}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DTC Ecosystem */}
      <section className="py-16 px-4 border-t border-[#292929]/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">DTC Ecosystem</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">繁荣的DTC与出海生态圈</p>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              <HoverLift>
                <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-[#67CAF2]/20 flex items-center justify-center mb-4">
                      <Building2 className="h-6 w-6 text-[#67CAF2]" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">建站与平台伙伴</h3>
                    <p className="text-[#9ca3af] text-sm">深度链接Shopify等全球主流建站与电商平台。</p>
                  </CardContent>
                </Card>
              </HoverLift>
              <HoverLift>
                <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-[#ED3A70]/20 flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-[#ED3A70]" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">支付与物流生态</h3>
                    <p className="text-[#9ca3af] text-sm">携手PayPal、pingpong等跨境支付巨头，以及海外仓和退货建站解决方案。</p>
                  </CardContent>
                </Card>
              </HoverLift>
              <HoverLift>
                <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-[#FFEA35]/20 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-[#FFEA35]" />
                    </div>
                    <h3 className="text-white text-lg font-semibold mb-2">客服与运营赋能</h3>
                    <p className="text-[#9ca3af] text-sm">集成全渠道客户服务智能系统，打通客服与物流的运营闭环。</p>
                  </CardContent>
                </Card>
              </HoverLift>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="py-16 px-4 border-t border-[#292929]/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Academic</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">权威产学研深度协作</p>
          </FadeIn>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoPartners.map((p) => (
              <motion.div key={p.name} variants={fadeUp}>
                <HoverLift>
                  <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-[#935DFF]/20 flex items-center justify-center mb-4">
                        <GraduationCap className="h-6 w-6 text-[#935DFF]" />
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-1">{p.name}</h3>
                      <p className="text-[#6366f1] text-sm font-medium mb-2">{p.desc}</p>
                      <p className="text-[#9ca3af] text-sm">{p.detail}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Partner Program */}
      <section className="py-16 px-4 border-t border-[#292929]/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-2">Partner Program</h2>
            <p className="text-3xl md:text-4xl font-bold text-white mb-12">合作伙伴计划</p>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <HoverLift>
                <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-[#23FFBD]/20 flex items-center justify-center mb-4">
                      <Handshake className="h-6 w-6 text-[#23FFBD]" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">寻找认证伙伴</h3>
                    <p className="text-[#9ca3af] text-sm mb-4">连接经过智优康赛严格认证的优质代理服务商，获取涵盖GEO、SEO、内容创作与公关传播等领域的专业支持。</p>
                    <Button variant="outline" className="border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1]/10 rounded-full" onClick={() => window.location.href = '/contact'}>
                      了解详情 <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </HoverLift>
              <HoverLift>
                <Card className="bg-[#1a1a2e] border-[#292929] h-full hover:border-[#6366f1] transition-all">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-[#935DFF]/20 flex items-center justify-center mb-4">
                      <Handshake className="h-6 w-6 text-[#935DFF]" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">成为生态伙伴</h3>
                    <p className="text-[#9ca3af] text-sm mb-4">欢迎全球优秀的营销机构、代理商和技术开发者申请加入智优康赛合作伙伴计划，共同助力品牌在AI时代脱颖而出。</p>
                    <Button variant="outline" className="border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1]/10 rounded-full" onClick={() => window.location.href = '/careers'}>
                      申请加入 <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </HoverLift>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">共建AI时代营销生态</h2>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8" onClick={() => window.location.href = '/contact'}>
              联系我们
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
