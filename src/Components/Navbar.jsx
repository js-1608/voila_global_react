import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  // Navigation data structure matching the original
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about'
    },{
      name: 'Businesses',
      href: '/voila-biz'
    },
    {
      name: 'Services',
      href: '/'
    },
    {
      name: 'Partnership',
      href: '/partners'
    }, 
    // {
    //   name: 'Services',
    //   hasDropdown: true,
    //   items: [
    //     { name: 'Services Page 01', href: '/our-services-01' },
    //     { name: 'Services Page 02', href: '/our-services-02' },
    //     { name: 'Services Page 03', href: '/our-services-03' },
    //     { name: 'Services Details', href: '/our-services/cost-allocation-and-calculation' }
    //   ]
    // },
    // {
    //   name: 'Blog',
    //   hasDropdown: true,
    //   items: [
    //     { name: 'Blog 01', href: '/blog-01' },
    //     { name: 'Blog 02', href: '/blog-02' },
    //     { name: 'Blog 03', href: '/blog-03' },
    //     { name: 'Blog Details', href: '/blog/5-strategies-for-effective-brand-storytelling' }
    //   ]
    // },
    { name: 'Contact Us', href: '/contact-us' }
  ];

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

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  return (
    <>
      {/* Floating Header */}
      <header className="sticky shadow top-0  z-50 mx-auto flex w-full max-w-[320px] 
       items-center justify-between  px-2.5 py-2.5 transition-all 
       duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[100%]
        sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1440px] xl:py-0 border
         border-gray-100 bg-gray-50/90 backdrop-blur-[5px] min-w-[100%]">
        {/* Logo */}
        <div>
          <a href="/">
            <span className="sr-only">Home</span>
            {/* Desktop Logo */}
            <figure className="hidden lg:block lg:max-w-[198px]">
              <img src='logo.png' className='w-[90px] p-2' />
            </figure>
            {/* Mobile Logo */}
            <figure className="block max-w-[44px] lg:hidden">
             <img src='logo.png' className='w-[130px] p-2' />
            </figure>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center xl:flex">
          <ul className="flex items-center">
            {navigation.map((item, index) => (
              <li
                key={item.name}
                className="py-2.5 group/nav relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasDropdown ? (
                  <>
                    <button className="flex items-center gap-1 px-4 py-2 border border-transparent group-hover/nav:border-gray-200 group-hover/nav:dark:border-gray-700 rounded-full group-hover/nav:bg-gray-100/20 group-hover/nav:dark:bg-transparent text-sm font-normal text-gray-600 group-hover/nav:text-gray-900 dark:text-gray-400 group-hover/nav:dark:text-white transition-all duration-200">
                      <span>{item.name}</span>
                      <span className={`block origin-center translate-y-px transition-all duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon className="w-4 h-4" />
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === index && (
                      <div>
                        {/* Background overlay for full-width menus */}
                        {item.isFullWidth && (
                          <div className="fixed top-full left-1/2 z-40 w-full max-w-[1290px] -translate-x-1/2 overflow-hidden bg-transparent py-6 group-focus-within/nav:flex group-hover/nav:flex dark:bg-transparent" />
                        )}

                        {/* Dropdown content */}
                        <div className={`
                          pointer-events-auto fixed top-full left-1/2 z-50 mt-2 -translate-x-1/2 translate-y-0 overflow-hidden rounded-[20px] border bg-gray-50 opacity-100 transition-all duration-300 dark:border-gray-700 dark:bg-gray-900
                          ${item.isFullWidth
                            ? 'w-full max-w-[1290px]'
                            : 'w-full min-w-[280px]'
                          }
                        `}>
                          <div className="relative flex w-full">
                            <div className={`
                              ${item.isFullWidth
                                ? 'flex flex-1 justify-between gap-10 px-[60px] py-[70px]'
                                : 'px-[60px] py-[70px]'
                              }
                            `}>
                              {item.isFullWidth ? (
                                // Multi-column layout for full-width menus
                                chunkArray(item.items, Math.ceil(item.items.length / 3)).map((column, columnIndex) => (
                                  <React.Fragment key={columnIndex}>
                                    <ul className="space-y-5 pr-4">
                                      {column.map((subItem) => (
                                        <li key={subItem.name}>
                                          <a
                                            className="text-gray-600 dark:text-gray-400 dark:hover:text-white group/item text-sm hover:text-gray-900 flex items-center gap-1 font-normal transition-all duration-200"
                                            href={subItem.href}
                                          >
                                            <span>{subItem.name}</span>
                                            <span className="opacity-0 transition-all duration-200 group-hover/item:translate-x-2 group-hover/item:opacity-100">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M8 12L12 8L8 4" className="stroke-gray-900 dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              </svg>
                                            </span>
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                    {columnIndex < chunkArray(item.items, Math.ceil(item.items.length / 3)).length - 1 && (
                                      <div className="bg-gray-200/50 dark:bg-gray-400/10 h-full w-px" />
                                    )}
                                  </React.Fragment>
                                ))
                              ) : (
                                // Single column layout for simple menus
                                <ul className="w-full space-y-5">
                                  {item.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        className="text-gray-600 dark:text-gray-400 dark:hover:text-white group/item text-sm hover:text-gray-900 flex items-center gap-1 font-normal transition-all duration-200"
                                        to={subItem.href}
                                      >
                                        <span>{subItem.name}</span>
                                        <span className="opacity-0 transition-all duration-200 group-hover/item:translate-x-2 group-hover/item:opacity-100">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 12L12 8L8 4" className="stroke-gray-900 dark:stroke-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                          </svg>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    className="flex items-center gap-1 px-4 py-2 border border-transparent group-hover/nav:border-gray-200 group-hover/nav:dark:border-gray-700 rounded-full group-hover/nav:bg-gray-100/20 group-hover/nav:dark:bg-transparent text-sm font-normal text-gray-600 group-hover/nav:text-gray-900 dark:text-gray-400 group-hover/nav:dark:text-white transition-all duration-200"
                    href={item.href}
                  >
                    <span>{item.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Get Started Button */}
        <div className="hidden items-center justify-center xl:flex">
          <a
            className="px-6 py-3 bg-[#662D91] text-white rounded-full text-sm font-medium transition-all duration-200 shadow-lg"
            href="/contact-us"
          >
            <span>Get started</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="block xl:hidden">
          <button
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex w-12 h-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full transition-all duration-200 hover:scale-105 group"
            aria-label="Open mobile menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Menu</span>
            <span className="bg-gray-700 group-hover:bg-gray-900 dark:bg-gray-200 block h-0.5 w-6 transition-all duration-200"></span>
            <span className="bg-gray-700 group-hover:bg-gray-900 dark:bg-gray-200 block h-0.5 w-6 transition-all duration-200"></span>
            <span className="bg-gray-700 group-hover:bg-gray-900 dark:bg-gray-200 block h-0.5 w-6 transition-all duration-200"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Sidebar */}
      <aside className={`dark:bg-gray-800 fixed top-0 right-0 z-[999] h-screen w-full bg-white transition-transform duration-300 ease-in-out sm:w-1/2 xl:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="space-y-4 p-5 sm:p-8 lg:p-9">
          <div className="flex items-center justify-between">
            <a href="/">
              <span className="sr-only">Home</span>
              <figure className="max-w-[90px]">
                  <img src='/logo.png' />
              </figure>
            </a>
            <button
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 relative flex w-10 h-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-all duration-200 hover:scale-105 group"
              aria-label="Close mobile menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Close Menu</span>
              <span className="bg-gray-700/60 dark:bg-gray-200 absolute block h-0.5 w-4 rotate-45 transition-all duration-200 group-hover:bg-gray-900"></span>
              <span className="bg-gray-700/60 dark:bg-gray-200 absolute block h-0.5 w-4 -rotate-45 transition-all duration-200 group-hover:bg-gray-900"></span>
            </button>
          </div>

          <div className="h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
            <ul>
              {navigation.map((item, index) => (
                <li key={item.name} className="relative space-y-0">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="text-sm border-gray-200 dark:border-gray-600 flex w-full cursor-pointer items-center justify-between border-b py-3 text-left font-normal transition-all duration-200 text-gray-600 dark:text-gray-400"
                        aria-expanded={activeMobileSubmenu === index}
                        onClick={() => toggleMobileSubmenu(index)}
                      >
                        <span>{item.name}</span>
                        <span className={`transition-transform duration-300 ease-in-out ${activeMobileSubmenu === index ? 'rotate-90' : ''}`}>
                          <ChevronDownIcon className="w-4 h-4 -rotate-90" />
                        </span>
                      </button>
                      {activeMobileSubmenu === index && (
                        <div className="dark:bg-gray-800 ml-3.5 w-full overflow-y-auto bg-white transition-all duration-300">
                          <ul>
                            {item.items.map((subItem, subIndex) => (
                              <li key={subItem.name}>
                                <a
                                  className="text-sm text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600 block w-full border-b py-3 text-left font-normal transition-all duration-200 last:border-0"
                                  href={subItem.href}
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      className="text-sm border-gray-200 dark:border-gray-600 block w-full border-b py-3 text-left font-normal transition-all duration-200 text-gray-600 dark:text-gray-400"
                      href={item.href}
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