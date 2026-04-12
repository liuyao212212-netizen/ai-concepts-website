export function Footer() {
  const footerLinks = {
    platform: {
      title: '平台',
      items: [
        { label: '监控模块', href: '#platform' },
        { label: '创建模块', href: '#platform' },
        { label: '智能体', href: '#platform' },
      ],
    },
    solutions: {
      title: '解决方案',
      items: [
        { label: 'AEO与SEO', href: '#solutions' },
        { label: '内容与需求生成', href: '#solutions' },
        { label: '公关与品牌', href: '#solutions' },
        { label: '品牌出海', href: '#solutions' },
      ],
    },
    resources: {
      title: '资源',
      items: [
        { label: '客户案例', href: '#customers' },
        { label: '合作伙伴', href: '#ecosystem' },
        { label: '博客', href: '#' },
      ],
    },
    company: {
      title: '公司',
      items: [
        { label: '关于我们', href: '#' },
        { label: '联系我们', href: '#' },
        { label: '加入我们', href: '#' },
      ],
    },
  };

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#292929]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[#9ca3af] hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#292929]/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <img 
                src="/images/logo.png" 
                alt="AI Concepts 智优康赛" 
                className="h-11 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-[#9ca3af] text-sm">
            © 2024 AI concepts 智优康赛. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}
