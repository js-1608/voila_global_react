import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '/about' },
    {
      name: 'Verticals',
      hasDropdown: true,
      isFullWidth: true,
      items: [
        { title: 'VOILA Kart', logo: '/verticles/kart.png', href: 'https://voilakart.com/', caption: 'VOILA Kart', desc: 'E-commerce solutions' },
        { title: 'VOILA Biz', logo: '/verticles/biz.png', href: 'https://voilabiz.com/', caption: 'VOILA Biz', desc: 'Business services' },
        { title: 'VOILA Studio', logo: '/verticles/studio.png', href: 'https://voilastudio.in/', caption: 'VOILA Studio', desc: 'Creative studio' },
        { title: 'VOILA Retail', logo: '/verticles/retail.png', href: 'https://voilaretail.com/', caption: 'VOILA Retail', desc: 'Retail solutions' }
      ]
    },
    {
      name: 'Services',
      hasDropdown: true,
      items: [
        {
          group: 'Ecommerce',
          children: [
            { name: 'Onboarding', href: '/onboarding-consultancy' },
            { name: 'Account Management', href: '/account-management' },
            { name: 'Photoshoot', href: 'https://voilastudio.in/' },
            { name: 'Product Cataloging', href: '/product-cataloging' },
            { name: 'Warehouse', href: '/warehousing-fulfillment' },
          ]
        },
        {
          group: 'Digital',
          children: [
            { name: 'Website Development', href: '/web-and-app-development' },
            { name: 'SEO & SMO', href: '/seo-smo' },
            { name: 'Digital Marketing', href: '/social-media-marketing' },
          ]
        },
        {
          group: 'Global Ecommerce',
          children: [
            { name: 'Alibaba', href: '/web-and-app-development' },
            { name: 'Amazon Global', href: '/seo-smo' },
            { name: 'Walmart', href: '/social-media-marketing' },
            { name: 'Noon', href: '/web-and-app-development' },
            { name: 'Etsy', href: '/seo-smo' },
            { name: 'eBay', href: '/social-media-marketing' },
          ]
        }
      ],
      isFullWidth: false
    },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown !== null) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [activeDropdown]);

  const handleMouseEnter = (index) => {
    if (navigation[index].hasDropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (index) => {
    setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-900/5'
            : 'bg-white/95 backdrop-blur-md'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Voila logo"
                    className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navigation.map((item, idx) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.hasDropdown ? (
                    <button
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeDropdown === idx
                          ? 'text-purple-700 bg-purple-50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === idx ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                    >
                      {item.name}
                    </a>
                  )}

                  {/* Mega Dropdown for Verticals */}
                  {item.hasDropdown && activeDropdown === idx && item.isFullWidth && (
                    <div ref={dropdownRef} className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-5xl">
                      <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden">
                        <div className="p-8">
                          <div className="grid grid-cols-4 gap-6">
                            {item.items.map((col, i) => (
                              <a
                                key={col.title}
                                href={col.href}
                                className="group relative flex flex-col items-center text-center p-6 rounded-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-transparent hover:border-purple-100"
                                style={{ animationDelay: `${i * 50}ms` }}
                              >
                                <div className="mb-5 relative">
                                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-sm">
                                    <img
                                      src={col.logo}
                                      alt={col.title}
                                      className="w-28 h-28 object-contain"
                                    />
                                  </div>
                                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-300"></div>
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                                  {col.caption}
                                </h3>
                                <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                                  {col.desc}
                                </p>
                                <ArrowRight className="w-4 h-4 text-purple-600 opacity-0 group-hover:opacity-100 mt-2 transition-all duration-300 transform group-hover:translate-x-1" />
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"></div>
                      </div>
                    </div>
                  )}

                  {/* Regular Dropdown for Services */}
                  {item.hasDropdown && activeDropdown === idx && !item.isFullWidth && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[720px]">
                      <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden">
                        <div className="p-8">
                          <div className="grid grid-cols-3 gap-8">
                            {item.items.map((g, gi) => (
                              <div key={gi} className="flex flex-col">
                                <h4 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b-2 border-purple-600 text-center">
                                  {g.group}
                                </h4>
                                <ul className="space-y-2 flex-1">
                                  {g.children.map((s) => (
                                    <li key={s.name}>
                                      <a
                                        href={s.href}
                                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200 group"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-purple-600 transition-colors"></span>
                                        {s.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden xl:flex items-center">
              <a
                href="/contact-us"
                className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-900 via-55% to-pink-600 text-white text-sm font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-[100] transition-opacity duration-300 xl:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-[101] w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-out xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.png" alt="logo" className="h-10" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {navigation.map((item, idx) => (
                <li key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileSubmenu(idx)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${activeMobileSubmenu === idx ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {activeMobileSubmenu === idx && (
                        <div className="mt-2 ml-4 space-y-1 border-l-2 border-purple-200 pl-4">
                          {item.isFullWidth ? (
                            item.items.map((col) => (
                              <a
                                key={col.title}
                                href={col.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 px-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
                              >
                                {col.caption}
                              </a>
                            ))
                          ) : (
                            item.items.map((g, gi) => (
                              <div key={gi} className="py-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-2 px-3">
                                  {g.group}
                                </h4>
                                {g.children.map((s) => (
                                  <a
                                    key={s.name}
                                    href={s.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 px-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
                                  >
                                    {s.name}
                                  </a>
                                ))}
                              </div>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>


        </div>
      </aside>
    </>
  );
};

export default Navbar;