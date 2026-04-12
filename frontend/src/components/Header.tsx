import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: '平台介绍', href: '/platform' },
    { label: '解决方案', href: '/solutions' },
    { label: '客户评价', href: '/customers' },
    { label: '生态合作', href: '/ecosystem' },
    { label: '加入我们', href: '/careers' },
  ];

  const closeMobile = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center bg-[#0a0a0f]/60 backdrop-blur-md border-b border-white/5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-14">
        <div className="flex flex-1 items-center">
          <Link to="/" onClick={closeMobile} className="flex items-center gap-2">
            <img src="/images/logo.png" alt="AI Concepts 智优康赛" className="h-8 w-auto object-contain" />
            <span className="text-white font-semibold text-sm hidden sm:block">AI Concepts 智优康赛</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="flex items-center h-9 px-4 text-sm font-medium text-[#9ca3af] hover:text-white rounded-lg hover:bg-white/5 transition-all">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Link to="/login" className="hidden lg:block">
            <Button variant="ghost" className="h-9 px-4 text-sm font-medium text-[#9ca3af] hover:text-white hover:bg-white/5">
              登录
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0a0a0f] border-l border-[#292929] text-white w-full sm:max-w-sm">
              <div className="flex flex-col gap-1 mt-8">
                {navItems.map((item) => (
                  <Link key={item.label} to={item.href} onClick={closeMobile}>
                    <span className="block text-base font-medium text-[#9ca3af] hover:text-white hover:bg-white/5 transition-all py-3 px-3 rounded-lg">
                      {item.label}
                    </span>
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#292929]">
                  <Link to="/login" onClick={closeMobile}>
                    <Button variant="ghost" className="text-[#9ca3af] hover:text-white hover:bg-white/5 w-full justify-start">
                      登录
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
