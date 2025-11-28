const features2 = [
  {
    icon: <Gem size={36} className="text-purple-600 mx-auto" />,
    title: " Sellers Onboarded",
    desc: "Successfully onboarded 10,000+ sellers across top e-commerce marketplaces.",
  },
  {
    icon: <BarChart3 size={36} className="text-purple-600 mx-auto" />,
    title: "Brand Growth",
    desc: " Enabled 10X revenue growth for over 500+ brands through strategic account management.",
  },
  {
    icon: <Users size={36} className="text-purple-600 mx-auto" />,
    title: "Experienced Team",
    desc: "A dedicated team of marketplace specialists bringing 10+ years of industry expertise and proven results.",
  },
  {
    icon: <MessageSquare size={36} className="text-purple-600 mx-auto" />,
    title: "Platform Expertise",
    desc: " Certified experts managing brands on Amazon, Myntra, Nykaa, Flipkart, Walmart, and more.",
  },
  {
    icon: <Heart size={36} className="text-purple-600 mx-auto" />,
    title: " End-to-End Support",
    desc: "We manage every aspect of your marketplace presence covering listings, optimization, marketing, and performance analysis.",
  },
  {
    icon: <PieChart size={36} className="text-purple-600 mx-auto" />,
    title: "Client Retention",
    desc: " Proud to maintain a 95% client retention rate, built on trust and measurable results.",
  },
];




<section className="py-20 bg-white px-6 text-center">
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <h2
      data-aos="fade-up"
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug"
    >
      Setting New Benchmarks in E-Commerce Growth
    </h2>
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      className="text-gray-500 mb-12"
    >
      Thousands of sellers, hundreds of success stories, one trusted partner — VOILAGlobal.
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-3">
      {features2.map((feature, i) => {
        const columns = 3; // number of columns in your grid on desktop
        const isLastInRow = (i + 1) % columns === 0; // 3rd, 6th, 9th, ...
        const isBottomRow = i >= features2.length - columns; // last row

        return (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className={`flex flex-col items-center text-center p-2 lg:p-8 border-gray-200 bg-white hover:bg-gray-50 transition duration-300
        ${!isLastInRow ? "border-r" : ""}
        ${!isBottomRow ? "border-b" : ""}`}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        );
      })}


    </div>
  </div>
</section>