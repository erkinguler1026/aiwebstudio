import React from 'react';
import { Bot } from 'lucide-react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-space-blue font-inter text-slate-200 selection:bg-electric-indigo/30">
      
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-electric-indigo/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 rounded-none border-t-0 border-x-0 bg-[#0B1120]/80">
        <Link to="/" className="flex items-center gap-2">
          <Bot className="text-electric-indigo w-8 h-8" />
          <span className="text-xl font-outfit font-bold tracking-tight text-white">ALPHA<span className="text-electric-indigo">AI</span></span>
        </Link>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium">
          <Link to="/" className={`hover:text-electric-indigo transition-colors ${location.pathname === '/' ? 'text-electric-indigo' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-electric-indigo transition-colors ${location.pathname === '/about' ? 'text-electric-indigo' : ''}`}>About</Link>
          <Link to="/portfolio" className={`hover:text-electric-indigo transition-colors ${location.pathname === '/portfolio' ? 'text-electric-indigo' : ''}`}>Portfolio</Link>
        </div>
        <Link to="/#contact" className="bg-electric-indigo hover:bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20 active:scale-95 whitespace-nowrap">
          Get Started
        </Link>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 pt-32 px-6 max-w-7xl mx-auto min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="glass-card rounded-none border-b-0 border-x-0 py-12 px-6 mt-32 bg-[#0B1120]/80 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Bot className="text-electric-indigo w-6 h-6" />
            <span className="text-lg font-outfit font-bold tracking-tight text-white">ALPHA<span className="text-electric-indigo">AI</span></span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Alpha AI Agency. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
