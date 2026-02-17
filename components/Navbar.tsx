import React from 'react';
import { motion } from 'framer-motion';
import { PageState } from '../types';
import { COLORS } from '../constants';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  activePage: PageState;
  setActivePage: (page: PageState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: PageState.HOME, label: 'Home', sectionId: 'home' },
    { id: PageState.SERVICES, label: 'Services', sectionId: 'services' },
    { id: PageState.PACKAGES, label: 'Packages', sectionId: 'packages' },
    { id: PageState.GALLERY, label: 'Gallery', sectionId: 'gallery' },
    { id: PageState.ABOUT, label: 'About', sectionId: 'about' },
    { id: PageState.CONTACT, label: 'Contact', sectionId: 'contact' },
  ];

  const handleNavClick = (sectionId: string, pageState: PageState) => {
    setIsOpen(false);
    
    // If we are not on the home page, go back home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActivePage(pageState);
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActivePage(pageState);
      } else if (sectionId === 'home') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
         setActivePage(pageState);
      }
    }
  };

  const goToLogin = () => {
    navigate('/login');
    setActivePage(PageState.LOGIN);
    setIsOpen(false);
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="glass-panel rounded-full max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative overflow-hidden">
        
        {/* Logo Area */}
        <motion.div 
            className="flex items-center space-x-2 cursor-pointer z-10"
            onClick={() => handleNavClick('home', PageState.HOME)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
          {/* Logo Image with filter to make black logo white */}
          <img 
            src="/logo.png" 
            alt="Loving Homes" 
            className="h-8 w-auto brightness-0 invert" 
            onError={(e) => {
              // Fallback if image not found
              e.currentTarget.style.display = 'none';
              const nextSibling = e.currentTarget.nextElementSibling;
              if (nextSibling) (nextSibling as HTMLElement).style.display = 'block';
            }}
          />
          {/* Fallback text if logo fails to load */}
          <span className="text-xl font-bold tracking-wider text-[#FFFFF4] hidden">LOVING HOMES</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 z-10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.sectionId, item.id)}
              className={`relative text-sm font-medium tracking-widest transition-colors ${
                activePage === item.id && location.pathname === '/' ? 'text-[#FFFFF4]' : 'text-[#D8CFBC]/60 hover:text-[#D8CFBC]'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.label}
              {activePage === item.id && location.pathname === '/' && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#FFFFF4]"
                />
              )}
            </motion.button>
          ))}
          <motion.button
            onClick={goToLogin}
            className="px-4 py-1 border border-[#FFFFF4]/30 rounded-full text-xs font-bold hover:bg-[#FFFFF4] hover:text-[#11120D] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LOGIN
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-10">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#FFFFF4]">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Liquid Background Animation Element (Subtle) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" />
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-2 glass-panel rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col p-6 space-y-4 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.sectionId, item.id)}
                className={`text-lg ${activePage === item.id ? 'text-[#FFFFF4] font-bold' : 'text-[#D8CFBC]'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
                onClick={goToLogin}
                className="mt-4 text-[#FFFFF4] border border-[#FFFFF4]/20 p-2 rounded-lg"
            >
                LOGIN
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;