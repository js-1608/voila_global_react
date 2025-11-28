import React from 'react';
import { TrendingUp, Users, MessageSquare, Heart, Star } from 'lucide-react';

export default function AnalyticsLanding() {
    const biggestFans = [
        { name: 'Chris Evans', views: '10,234', avatar: 'CE' },
        { name: 'Anna Williams', views: '9,876', avatar: 'AW' },
        { name: 'James Bond', views: '8,765', avatar: 'JB' }
    ];

    const favoriteDesigners = [
        { name: 'Jane Smith', time: '1 hour', avatar: 'JS' },
        { name: 'Sandra Cruz', time: '2 hours', avatar: 'SC' },
        { name: 'Mike Taylor', time: '3 hours', avatar: 'MT' }
    ];

    const activities = [
        { user: 'Sarah', action: 'just followed you', time: '2m', avatar: 'S' },
        { user: 'Mike', action: 'commented on your post', time: '5m', avatar: 'M' },
        { user: 'Emma', action: 'liked your design', time: '10m', avatar: 'E' }
    ];

    return (
        <>
            <div className="h-[50%] bg-gradient-to-b from-[#2c1650] via-[#3a1870] to-[#20123a] overflow-hidden text-white min-h-[450px]">
                {/* Header */}
                <div className="container mx-auto px-6 pt-8">
                    <div className="flex justify-center mb-4">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                            <span className="text-white/80">Explore Now</span>
                            <span className="text-white/60">→</span>
                            <span className="text-white font-medium">Out of beta! Hooray 🎉</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl md:text-5xl font-bold mb-4" data-aos="fade-up">
                            <span className="text-yellow-400">Beautiful analytics </span>
                            {' '}analytics to grow{' '}
                            <span className="text-yellow-400">to grow smarter</span>
                        </h1>
                        <p className="text-purple-200 text-sm max-w-2xl mx-auto">
                            Powerful, self-serve product and growth analytics to help you convert,
                            engage, and retain more users. Trusted by over 4,000 startups.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    {/* <div className="flex justify-center gap-4 mb-12">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold px-6 py-3 rounded-lg transition-colors">
                            Get started for free
                        </button>
                        <button className="bg-purple-700/50 hover:bg-purple-700 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                            <span>See how Olivia helps</span>
                            <span>▶</span>
                        </button>
                    </div> */}


                </div>
            </div>

            {/* Dashboard Preview */}
            <div className="max-w-4xl mx-auto perspective-1000 relative left-0 right-0 -mt-60 px-6" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-white rounded-t-xl shadow-2xl transform translate-y-8">
                    {/* Browser Bar */}
                    <div className="bg-gray-100 rounded-t-xl px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-6 bg-white text-gray-800">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
                                <h2 className="text-xl font-bold">Stats for Olivia Rhye</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="text-sm text-gray-600 hover:text-gray-800">⋮ Actions</button>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                    Share
                                </button>
                            </div>
                        </div>

                        {/* Stats Cards and Chart */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="col-span-2">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="font-semibold text-gray-700">Profile views</h3>
                                    <div className="flex gap-2">
                                        <button className="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">12 months</button>
                                        <button className="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">30 days</button>
                                        <button className="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">7 days</button>
                                    </div>
                                </div>

                                {/* Line Chart */}
                                <div className="h-48 relative">
                                    <svg className="w-full h-full" viewBox="0 0 400 150">
                                        <polyline
                                            fill="none"
                                            stroke="#8b5cf6"
                                            strokeWidth="2"
                                            points="0,80 20,75 40,85 60,70 80,78 100,65 120,72 140,60 160,68 180,55 200,62 220,50 240,58 260,45 280,52 300,48 320,55 340,42 360,50 380,45 400,40"
                                        />
                                    </svg>
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 px-2">
                                        <span>Jan</span>
                                        <span>Feb</span>
                                        <span>Mar</span>
                                        <span>Apr</span>
                                        <span>May</span>
                                        <span>Jun</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-purple-600 text-white rounded-xl p-4">
                                <div className="text-sm mb-2">Kelly Cruz · Designer</div>
                                <div className="text-xs opacity-90 mb-4">Followed you</div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-xs">
                                    <div className="font-medium mb-1">Great work! 🔥</div>
                                    <div className="opacity-90">I'm looking forward to your next project. Keep it up!</div>
                                </div>
                                <div className="mt-3 text-xs opacity-75">about 2hrs. | replied</div>
                            </div>
                        </div>

                  
                    </div>
                </div>
            </div>

        </>
    );
}