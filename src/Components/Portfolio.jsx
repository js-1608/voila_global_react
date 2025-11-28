import React, { useState } from 'react';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ['All', 'Web Design', 'Mobile App', 'Branding', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'KALPRAAG',
      category: 'E-commerce website',
      description: 'For Kalpraag, a modern Indian menswear brand, we created a mobile-friendly e-commerce website that highlights the brand’s premium style. The website includes secure payment options, an easy checkout process, and a simple backend system to manage orders, inventory, and deliveries smoothly.',
      image: 'kalprag.PNG',
      technologies: ['Shopify', 'UI/UX', 'SEO' ],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 2,
      title: 'VOILA STUDIO',
      category: 'E-commerce website',
      description: 'Sleek shopping app with seamless user experience and modern UI components.',
      image: 'studio.PNG',
      technologies: ['HTML', 'Javascript', 'Css','Php','Payment Gateway', 'Custom website'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'FairLeaf',
      category: 'Shopify Website',
      description: 'For Fairleaf, a women’s fashion clothing brand, we built a modern and easy-to-navigate e-commerce website that captures the brand’s contemporary and elegant style. The platform ensures a smooth shopping experience with secure payments and simple product management, helping the brand strengthen its online presence.',
      image: 'fairleaf.PNG',
      technologies: ['Adobe Creative Suite', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'AIWA',
      category: 'Web Design',
      description: 'For AIWA, a globally trusted brand in audio and consumer electronics since 1951, we developed a mobile-first and user-friendly e-commerce website. The platform is optimized for speed, SEO, and performance across all devices. It features secure payment gateways, a smooth checkout experience, localized content for Indian consumers, and a simple backend for managing products, orders, and inventory efficiently.',
      image: 'aiwa.PNG',
      technologies: ['Shopify', 'SEO', 'Digital Marketing',],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Chemistree Jeans',
      category: 'E-commerce',
      description: 'For Chemistree Jeans, a men’s bottomwear brand offering premium quality clothing, we designed a modern e-commerce website built for smooth functionality and great user experience. It provides secure transactions, fast checkout, and an enjoyable browsing experience for customers.',
      image: 'cj.PNG',
      technologies: ['Shopify' ,'UI/UX Design' ,'SEO SMO' ,'Catalog Management'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'BEADS JEWEL',
      category: 'Shopify Store',
      description: 'For Beads Jewel, a contemporary jewelry brand, we designed and developed an elegant e-commerce website that perfectly reflects the brand’s premium identity. The website is designed to provide a seamless and user-friendly shopping experience with secure payments, smooth checkout, and an easy browsing flow for customers.',
      image: 'beads.PNG',
      technologies: ['Shopify' ,'Maintainance' ,'SEO SMO' ],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }, {
      id: 7,
      title: 'Magazine Cafe',
      category: 'Web Design',
      description: 'We designed and developed a modern Shopify e-commerce website for Magazine Café — one of the USA’s leading destinations for premium magazines, Pantone products, and creative gifts. The website is built to deliver a seamless shopping experience with a clean layout and reliable payment integration, helping the brand grow its presence across the US market.',
      image: 'magzine.PNG',
      technologies: ['Shopify', 'Paymentgateway', 'SEO SMO',],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Gazel Orginals',
      category: 'E-commerce website',
      description: 'For Gazel, a premium jewelry brand based in Kuwait, we created a sophisticated e-commerce platform that showcases the brand’s craftsmanship and modern aesthetic. The website delivers a refined shopping experience with smooth navigation, secure payment integration, and a quick checkout process.',
      image: 'gazel.PNG',
      technologies: ['Wordpress', 'javascript', 'php'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 9,
      title: 'RealSelf',
      category: 'Shopify Website',
      description: 'For Real Self, a luxury apparel brand from Saudi Arabia, we created a sophisticated e-commerce platform that embodies the brand’s elegance and contemporary fashion sense. The website is crafted to deliver a refined shopping journey with intuitive navigation, reliable payment integration, and a hassle-free checkout experience.',
      image: 'realself.PNG',
      technologies: ['UI/UX', 'Shopify', 'SEO SMO'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 bg-white">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-4 animate-fadeInUp">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full /80 text-sm font-medium mb-6 border border-white/20">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            Our Portfolio
          </div> */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            data-aos="fade-up"
            >
            Our Portfolio
          </h1>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100">
            Showcasing our passion for creating exceptional digital experiences through innovative design and cutting-edge technology.
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3  font-medium transition-all duration-500 ${activeFilter === filter
                  ? 'bg-gradient-to-r from-[#F4CF25] to-[#F46925] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-all duration-100 transform hover:scale-105'
                  : 'bg-white/10 backdrop-blur-sm /80 hover:bg-white/20 border border-gray-300 rounded-md'
                }`}
            >
              {filter}
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
          {filteredProjects.map((project, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border  border-black/30 transition-all duration-700 hover:shadow-lg  animate-fadeInUp ${project.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-60'
                  }`}></div>

                {/* Action Buttons */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group/btn">
                    <ExternalLink className="w-5 h-5  group-hover/btn:scale-110 transition-transform" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group/btn">
                    <Github className="w-5 h-5  group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-black text-xs font-bold">
                    ✨ Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-black-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <div className={` transition-all duration-300 ${hoveredProject === project.id ? 'translate-x-0' : 'translate-x-2'
                    }`}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold  mb-3 ">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100  rounded-lg text-xs font-medium hover:bg-white/20 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              {/* <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}></div> */}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 cursor-pointer group hover:scale-105">
            <span className=" font-semibold">View All Projects</span>
            <ArrowRight className="w-5 h-5  group-hover:translate-x-1 transition-transform" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;