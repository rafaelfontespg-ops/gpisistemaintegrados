import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { GPI_SOLUTIONS } from '../data/gpiData';
import { LOGO_GPI_PRINCIPAL } from '../constants/logos';
import { 
  Building2, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight,
  PieChart,
  Receipt,
  Package,
  Truck,
  Building,
  Users,
  FileCheck,
  Newspaper,
  Eye,
  LayoutGrid
} from 'lucide-react';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenDemoModal: (solutionId?: string) => void;
  selectedSolutionId: string | null;
  setSelectedSolutionId: (id: string | null) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenDemoModal,
  selectedSolutionId,
  setSelectedSolutionId
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSosClick = () => {
    setActivePage('sos-maria-da-penha');
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSolutionClick = (slugOrId: string) => {
    setSelectedSolutionId(slugOrId);
    setActivePage('solution-detail');
    setSolutionsDropdownOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSolutionIcon = (iconName: string) => {
    const iconClass = "w-4 h-4 text-[#004361] shrink-0";
    switch (iconName) {
      case 'PieChart': return <PieChart className={iconClass} />;
      case 'Receipt': return <Receipt className={iconClass} />;
      case 'Package': return <Package className={iconClass} />;
      case 'Truck': return <Truck className={iconClass} />;
      case 'Building': return <Building className={iconClass} />;
      case 'Users': return <Users className={iconClass} />;
      case 'FileCheck': return <FileCheck className={iconClass} />;
      case 'Newspaper': return <Newspaper className={iconClass} />;
      case 'Eye': return <Eye className={iconClass} />;
      default: return <Building className={iconClass} />;
    }
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 bg-white ${
          isScrolled 
            ? 'shadow-md py-2.5 border-b border-slate-200' 
            : 'py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4">
            
            {/* Logo Oficial */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left cursor-pointer shrink-0 focus:outline-none"
              aria-label="GPI Sistemas - Página Inicial"
            >
              <img 
                src={LOGO_GPI_PRINCIPAL} 
                alt="GPI Sistemas" 
                className="h-8 sm:h-9 lg:h-10 w-auto max-w-[180px] sm:max-w-[220px] object-contain transition-opacity duration-200 hover:opacity-90"
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-2.5 xl:px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  activePage === 'home'
                    ? 'text-[#004361] bg-slate-100 font-semibold'
                    : 'text-slate-600 hover:text-[#004361] hover:bg-slate-50'
                }`}
              >
                Início
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`px-2.5 xl:px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  activePage === 'about'
                    ? 'text-[#004361] bg-slate-100 font-semibold'
                    : 'text-slate-600 hover:text-[#004361] hover:bg-slate-50'
                }`}
              >
                Nossa História
              </button>

              {/* Soluções Dropdown */}
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer inline-flex items-center gap-1 shrink-0 ${
                    activePage === 'solutions' || activePage === 'solution-detail' || solutionsDropdownOpen
                      ? 'text-[#004361] bg-slate-100 font-semibold'
                      : 'text-slate-600 hover:text-[#004361] hover:bg-slate-50'
                  }`}
                >
                  <span>Soluções</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu Panel */}
                {solutionsDropdownOpen && (
                  <div 
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                    className="absolute left-0 mt-1 w-[640px] bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50 animate-in fade-in duration-150"
                  >
                    <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4 text-[#004361]" />
                        <span className="text-xs font-bold tracking-wider text-[#004361]">
                          Nossas Soluções de Gestão Pública
                        </span>
                      </div>
                      <button
                        onClick={() => handleNavClick('solutions')}
                        className="text-xs font-semibold text-[#335B8F] hover:text-[#004361] flex items-center gap-1 transition-colors"
                      >
                        <span>Ver catálogo completo</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Solutions Grid in Dropdown */}
                    <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-1">
                      {GPI_SOLUTIONS.map((sol) => (
                        <button
                          key={sol.id}
                          onClick={() => handleSolutionClick(sol.slug || sol.id)}
                          className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-left transition-colors group cursor-pointer border border-transparent hover:border-slate-200"
                        >
                          <div className="p-1.5 rounded-md bg-[#004361]/5 border border-[#004361]/10 group-hover:bg-[#004361]/10 transition-colors shrink-0 mt-0.5">
                            {renderSolutionIcon(sol.iconName)}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-[#004361] group-hover:text-[#335B8F] transition-colors leading-snug">
                              {sol.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                              {sol.summary}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleSosClick}
                className={`px-2.5 xl:px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  activePage === 'sos-maria-da-penha'
                    ? 'text-[#004361] bg-rose-50 font-semibold border border-rose-200/80'
                    : 'text-slate-700 hover:text-[#004361] hover:bg-[#EBF4FC]/60'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0"></span>
                <span className="whitespace-nowrap">SOS Maria da Penha</span>
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className={`px-2.5 xl:px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  activePage === 'blog'
                    ? 'text-[#004361] bg-slate-100 font-semibold'
                    : 'text-slate-600 hover:text-[#004361] hover:bg-slate-50'
                }`}
              >
                Blog
              </button>

              <button
                onClick={() => handleNavClick('downloads')}
                className={`px-2.5 xl:px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  activePage === 'downloads'
                    ? 'text-[#004361] bg-slate-100 font-semibold'
                    : 'text-slate-600 hover:text-[#004361] hover:bg-slate-50'
                }`}
              >
                Downloads
              </button>
            </nav>

            {/* Header Action Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={() => onOpenDemoModal()}
                className="bg-[#004361] hover:bg-[#335B8F] text-white px-3.5 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm whitespace-nowrap transition-all duration-200 shadow-2xs hover:shadow-xs flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span className="whitespace-nowrap">Fale com um especialista</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#68A8DE] shrink-0" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#004361] hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1 py-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium ${
                  activePage === 'home' ? 'bg-[#EBF4FC] text-[#004361] font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Início
              </button>
              
              <button
                onClick={() => handleNavClick('about')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium ${
                  activePage === 'about' ? 'bg-[#EBF4FC] text-[#004361] font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Nossa História
              </button>

              {/* Mobile Soluções Accordion */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between ${
                    activePage === 'solutions' || activePage === 'solution-detail' ? 'bg-[#EBF4FC] text-[#004361] font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>Soluções</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileSolutionsOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg mt-1 mb-2 border border-slate-200">
                    <button
                      onClick={() => handleNavClick('solutions')}
                      className="w-full text-left px-3 py-2 rounded text-xs font-bold text-[#004361] hover:bg-slate-200/60"
                    >
                      • Ver todas as Soluções
                    </button>
                    {GPI_SOLUTIONS.map(sol => (
                      <button
                        key={sol.id}
                        onClick={() => handleSolutionClick(sol.slug || sol.id)}
                        className="w-full text-left px-3 py-2 rounded text-xs font-medium text-slate-700 hover:text-[#004361] hover:bg-slate-200/60 flex items-center gap-2"
                      >
                        {renderSolutionIcon(sol.iconName)}
                        <span className="truncate">{sol.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={handleSosClick}
                className="w-full text-left px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between text-slate-800 hover:bg-rose-50/50"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  SOS Maria da Penha
                </span>
                <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-semibold">Destaque</span>
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium ${
                  activePage === 'blog' ? 'bg-[#EBF4FC] text-[#004361] font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Blog
              </button>

              <button
                onClick={() => handleNavClick('downloads')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium ${
                  activePage === 'downloads' ? 'bg-[#EBF4FC] text-[#004361] font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                Downloads
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full bg-[#004361] text-white py-3 rounded-lg font-semibold text-center block shadow"
              >
                Fale com um especialista
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
