import  { useState } from 'react';
import logoImg from '../../assets/images/logo.png'
import {  NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'Services', href: '/services', active: false },
    { name: 'Find Doctors', href: '/findDoctors', active: false },
    { name: 'About us', href: '/about', active: false },
    { name: 'Blog', href: '/blog', active: false },
    { name: 'Contact us', href: '/contactUs', active: false },
  ];

  return (
    <nav className=" w-full bg-[#f6f9fc]  py-4 px-6 md:px-10 font-sans shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img 
            src={logoImg} 
            alt="HealNet Logo" 
            className="h-8 w-8 object-contain" 
          />
          <span className="text-xl font-bold tracking-tight text-[#004b8f]">
            HealNet
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>`text-sm font-medium transition-colors hover:text-[#0088FF] ${
                isActive ? 'text-[#0088FF]' : 'text-gray-700'
              }`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop  Button */}
        <div className="hidden lg:block">
          <Button>
            Join us
          </Button>
        
          
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen((prev)=>!prev)}
            className="text-gray-700 cursor-pointer z-70 hover:text-[#0088FF] focus:outline-none"
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <X className="w-6 h-6"/>
            ) : (
              // Menu Icon
              <MenuIcon className="w-6 h-6"/>
            )}
          </button>
        </div>
      </div>

    
      {/* 2. The Blurred Backdrop  */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className='absolute h-full bg-[#f6f9fc] w-[60%] right-0  top-0  
        shadow-xl  px-10 py-4 flex items-center justify-center flex-col gap-4 border border-gray-100 z-50 lg:hidden
          animate-in slide-in-from-top-2  fade-in duration-200'>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({isActive})=>`block text-base font-medium w-full text-center  px-4 py-2 rounded-lg ${
                isActive ? 'text-[#0088FF] bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t w-full border-gray-100">
          <Button fullWidth={true}>
              Join us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;