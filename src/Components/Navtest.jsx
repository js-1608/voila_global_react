import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const dropdownRef = useRef(null);

  // Navigation (includes the mega menu "Our Technology")
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '/about' },
    {
      name: 'Verticals',
      hasDropdown: true,
      isFullWidth: true,
      items: [
        { title: 'VOILA Kart', logo: '/voilakart.png', href: 'https://voilakart.com/', caption: 'VOILA Kart' },
        { title: 'VOILA Biz', logo: '/voilabiz.png', href: 'https://voilabiz.com/', caption: 'VOILA Biz' },
        { title: 'VOILA Studio', logo: '/voilastudio.png', href: 'https://voilastudio.in/', caption: 'VOILA Studio' },
        { title: 'VOILA Reatil', logo: '/voilareatil.png', href: 'https://voilaretail.com/', caption: 'VOILA Reatil' }

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
        }
      ],
      isFullWidth: false
    },
    // {
    //   name: 'Our Divisions',
    //   hasDropdown: true,
    //   items: [
    //     { name: 'Voilastudio', href: '/divisions/voilastudio' },
    //     { name: 'Voilakart', href: '/divisions/voilakart' },
    //     { name: 'Voilabiz', href: '/divisions/voilabiz' },
    //     { name: 'Voilaretail', href: '/divisions/voilaretail' },
    //   ]
    // },
    { name: 'Partners', href: '/partners' },
    {
      name: 'More',
      hasDropdown: true,
      items: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
      ]
    },
    { name: 'Contact Us', href: '/contact-us' },
  ];

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

  // Optional: close mega dropdown if clicking outside
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
      <header className="sticky top-0 z-50 mx-auto flex w-full items-center justify-between  py-3 transition-all duration-300 border-gray-100 bg-gray-50/90 backdrop-blur-sm border-b px-2 lg:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Voila logo" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center gap-2">
            {navigation.map((item, idx) => (
              <li
                key={item.name}
                className="relative py-2 group"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Trigger */}
                {item.hasDropdown ? (
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === idx}
                  >
                    <span>{item.name}</span>
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link to={item.href} className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                    {item.name}
                  </Link>
                )}

                {/* Dropdowns */}
                {item.hasDropdown && activeDropdown === idx && item.isFullWidth && (
                  // MEGA DROPDOWN (full-width centered panel)
                  <div ref={dropdownRef}>
                    {/* small transparent spacer (keeps position) */}
                    <div className="fixed inset-x-0 top-full z-40 h-6 pointer-events-none" />

                    <div
                      className="pointer-events-auto fixed left-1/2 top-12 z-50 w-full max-w-[800px] -translate-x-1/2 mt-3 px-6"
                      role="menu"
                      aria-label={`${item.name} menu`}
                    >
                      <div className="overflow-hidden rounded-xl border bg-white shadow-[0_10px_30px_rgba(2,6,23,0.08)]">
                        {/* Columns */}
                        <div className="px-1 pb-6">
                          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-4 items-start">
                            {item.items.map((col) => (
                              <a
                                key={col.title}
                                href={col.href}
                                className="group flex flex-col items-center text-center px-4 py-6 hover:bg-gray-50 rounded-lg transition"
                              >
                                <div className="mb-4 flex h-[96px] w-[220px] items-center justify-center">
                                  {/* Replace src with your real logo paths */}
                                  <img src={col.logo} alt={col.title} className="max-h-[80px] object-contain" />
                                </div>
                                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{col.caption}</p>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* thin colored bottom border like reference */}
                        <div className="h-1 bg-gradient-to-r from-transparent via-[#662D91] to-transparent" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Non-fullwidth dropdown (simple dropdown or grouped lists) */}
                {item.hasDropdown && activeDropdown === idx && !item.isFullWidth && (
                  <div className="absolute left-1/2 top-12 z-50  -translate-x-1/2 w-[320px] rounded-lg border bg-white shadow-lg">
                    <div className="p-4">
                      {/* If grouped (services) */}
                      {item.items && item.items[0] && item.items[0].children ? (
                        <div className="grid grid-cols-1 gap-4">
                          {item.items.map((g, gi) => (
                            <div key={gi}>
                              <h4 className="mb-2 text-sm font-semibold text-gray-700">{g.group}</h4>
                              <ul className="space-y-2">
                                {g.children.map((s) => (
                                  <li key={s.name}>
                                    <Link to={s.href} className="text-sm text-gray-600 hover:text-gray-900">
                                      {s.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-2">
                          {item.items.map((s) => (
                            <li key={s.name}>
                              <Link to={s.href} className="text-sm text-gray-600 hover:text-gray-900">
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden xl:flex items-center">
          <Link to="/contact-us" className="px-5 py-2 rounded-full bg-[#662D91] text-white text-sm font-medium shadow">
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </header>

      {/* Mobile sidebar */}
      <aside className={`fixed inset-y-0 right-0 z-[999] w-full sm:w-1/2 bg-white dark:bg-gray-800 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 sm:p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src="/logo.png" alt="logo" className="h-10" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className="overflow-y-auto mb-6">
            <ul className="space-y-1">
              {navigation.map((item, idx) => (
                <li key={item.name} className="border-b border-gray-100">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(idx)}
                        className="w-full px-4 py-3 flex items-center justify-between text-left text-gray-700"
                        aria-expanded={activeMobileSubmenu === idx}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${activeMobileSubmenu === idx ? 'rotate-90' : '-rotate-90'}`} />
                      </button>

                      {activeMobileSubmenu === idx && (
                        <div className="pl-4 bg-white">
                          {/* For the mega menu, show items stacked on mobile */}
                          {item.isFullWidth ? (
                            <div className="py-2">
                              {item.items.map((col) => (
                                <Link key={col.title} to={col.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700">
                                  {col.caption}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            // grouped or simple menus
                            <div className="py-2">
                              {item.items && item.items[0] && item.items[0].children ? (
                                item.items.map((g, gi) => (
                                  <div key={gi} className="py-2">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-1">{g.group}</h4>
                                    {g.children.map((s) => (
                                      <Link key={s.name} to={s.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700">
                                        {s.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))
                              ) : (
                                item.items.map((s) => (
                                  <Link key={s.name} to={s.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700">
                                    {s.name}
                                  </Link>
                                ))
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-gray-700">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-3 rounded-full bg-[#662D91] text-white">
              Get started
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
