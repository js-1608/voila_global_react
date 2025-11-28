// import React from 'react';
// import { ChartBar, PenTool, Code, Settings, Rocket, LifeBuoy } from 'lucide-react';

// // GrowthProcessSection.jsx
// // Same design as before but without framer-motion animations.

// export default function GrowthProcessSection({ className = '' }) {
//   const steps = [
//     {
//       id: 1,
//       title: 'Discovery & Planning',
//       desc:
//         'We analyze your business, understand goals, and plan the roadmap for success.',
//       icon: <ChartBar className="w-6 h-6" />,
//       color: 'from-green-400 to-teal-400',
//     },
//     {
//       id: 2,
//       title: 'Design & UX',
//       desc: 'We craft engaging UI and UX designs that are user-friendly and visually appealing.',
//       icon: <PenTool className="w-6 h-6" />,
//       color: 'from-indigo-500 to-violet-500',
//     },
//     {
//       id: 3,
//       title: 'Frontend & Backend',
//       desc: 'We implement clean, secure, and responsive code for both frontend and backend.',
//       icon: <Code className="w-6 h-6" />,
//       color: 'from-sky-400 to-blue-600',
//     },
//     {
//       id: 4,
//       title: 'Testing & Optimization',
//       desc: 'We ensure every feature works flawlessly and optimize performance for speed.',
//       icon: <Settings className="w-6 h-6" />,
//       color: 'from-yellow-400 to-orange-400',
//     },
//     {
//       id: 5,
//       title: 'Launch & Support',
//       desc: 'We deploy your website smoothly and provide ongoing maintenance and updates.',
//       icon: <LifeBuoy className="w-6 h-6" />,
//       color: 'from-rose-400 to-pink-500',
//     },
//   ];

//   const metrics = [
//     { label: 'Avg. Speedup', value: 78 },
//     { label: 'Conversion Lift', value: 42 },
//     { label: 'Uptime', value: 99 },
//   ];

//   return (
//     <section className={`relative overflow-hidden  lg:py-24 ${className}`}>
//       {/* Decorative gradient */}
//       {/* <div className="pointer-events-none absolute -left-40 -top-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-indigo-300 to-teal-200 opacity-20 blur-3xl" /> */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left: copy + metrics */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//               From Planning to Implementation — Growth Built In
//             </h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-xl">
//               We guide your product from idea to launch — designing beautiful experiences,
//               engineering resilient systems, and optimizing continuously so your users and
//               revenue grow together.
//             </p>

//             <div className="mt-8 grid grid-cols-3 gap-4">
//               {metrics.map((m, i) => (
//                 <div
//                   key={m.label}
//                   className="rounded-2xl bg-white/60 backdrop-blur-sm p-4 text-center shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <div className="text-2xl font-bold">{m.value}%</div>
//                   <div className="mt-1 text-sm text-gray-600">{m.label}</div>
//                   <div className="mt-3 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
//                     {/* <div
//                       className={`h-full rounded-full bg-gradient-to-r ${
//                         i === 0
//                           ? 'from-green-400 to-teal-400'
//                           : i === 1
//                           ? 'from-indigo-400 to-violet-400'
//                           : 'from-sky-400 to-blue-500'
//                       }`}
//                       style={{ width: `${m.value}%` }}
//                     /> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {/* 
//             <div className="mt-8 flex gap-3">
//               <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 py-2.5 text-sm font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform">
//                 Get a Growth Review
//                 <Rocket className="w-4 h-4" />
//               </button>

//               <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                 Learn how we work
//               </button>
//             </div> */}
//             {/* Small note */}
//             <p className="mt-4 text-xs text-gray-500">
//               Tailored roadmap, measurable milestones, continuous improvement—designed to accelerate growth.
//             </p>
//           </div>

//           {/* Right: Process timeline */}
//           <div>
//             <div className="bg-gradient-to-b from-white/60 to-white/40 rounded-3xl p-6 shadow-md">
//               <ol className="space-y-6">
//                 {steps.map((s, idx) => (
//                   <li key={s.id} className="flex items-start gap-4">
//                     <div className="relative flex-shrink-0">
//                       <div
//                         className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-inner`}
//                       >
//                         {s.icon}
//                       </div>
//                       {idx < steps.length - 1 && (
//                         <span className="absolute left-5 top-12 h-6 w-px bg-gray-200" />
//                       )}
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-sm font-semibold text-gray-900">{s.title}</h3>
//                         {/* <span className="text-xs text-gray-500">Step {s.id}</span> */}
//                       </div>
//                       <p className="mt-1 text-sm text-gray-600">{s.desc}</p>

//                     </div>
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Layers,
  ShoppingCart,
  Server,
} from "lucide-react";

const techData = {
  Frontend: ["frontend/react-js.png", "frontend/vue.png", "frontend/angular.svg", "frontend/next.svg", "frontend/tailwind.svg"],
  Backend: ["/technologies/node.svg", "/technologies/express.webp", "Django", "Laravel", "Spring Boot"],
  Ecommerce: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Wix"],
  Database: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"],
  Server: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Vercel"],
  "Mobile App": ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"],
  Frameworks: ["NestJS", "FastAPI", "Next.js", "Nuxt.js", "SvelteKit"],
};

const tabIcons = {
  Frontend: Code,
  Backend: Server,
  Ecommerce: ShoppingCart,
  Database: Database,
  Server: Cloud,
  "Mobile App": Smartphone,
  Frameworks: Layers,
};

const TechnologiesWeCater = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
          Technologies We Cater
        </h2>
        <p className="text-gray-600 mb-10 max-w-4xl mx-auto" data-aos="fade-up"
            data-aos-delay="100">
          We deliver cutting-edge solutions using the latest and most reliable
          technologies — from frontend frameworks to robust backend systems and
          scalable cloud platforms.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(techData).map((tab) => {
            const Icon = tabIcons[tab];
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300
                  ${activeTab === tab
                    ? "bg-black text-white border-black shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {tab}
              </button>
            );
          })}
        </div>

        {/* Tech List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {techData[activeTab].map((tech) => (
            <div
              data-aos="zoom-in"

              key={tech}
              className="border border-gray-200 bg-white rounded-xl py-4 px-3 shadow-sm hover:shadow-md transition-all duration-300 "
            >
              <img src={tech} alt={tech} className="h-20 m-auto w-42" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesWeCater;
