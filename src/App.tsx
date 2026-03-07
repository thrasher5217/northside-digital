import { motion } from 'motion/react';
import { ArrowRight, Check, Zap, Layers, Monitor } from 'lucide-react';

export default function App() {
    return (
        <div className="min-h-screen bg-north-black text-north-white overflow-x-hidden selection:bg-north-accent selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
                <div className="text-xl font-display font-bold tracking-tighter uppercase">
                    Northside Digital
                </div>
                <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300">
                    Book a Call
                </button>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-12">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
                            SHORT FORM <br />
                            <span className="text-north-accent">CONTENT</span> AT SCALE.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <p className="text-xl md:text-2xl text-white/70 mb-12 font-light leading-relaxed">
                            We build systems for volume and design for impact. No fluff, just results for brands ready to dominate.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-north-accent hover:text-white transition-colors duration-300 group">
                                Book a Call
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-6 right-6 flex justify-between items-end text-xs font-mono text-white/40 uppercase tracking-widest"
                >
                    <div>Est. 2024</div>
                    <div className="animate-bounce">Scroll Down</div>
                    <div>Northside Digital ©</div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-display font-bold mb-6">WHAT WE DO</h2>
                            <p className="text-lg text-white/60 max-w-md">
                                We don't do everything. We do two things exceptionally well.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div className="group border-b border-white/10 pb-12 hover:border-north-accent transition-colors duration-500">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-3xl font-display font-bold group-hover:text-north-accent transition-colors">Content at Scale</h3>
                                    <Layers className="w-8 h-8 text-white/40 group-hover:text-north-accent transition-colors" />
                                </div>
                                <p className="text-white/70 leading-relaxed">
                                    Built for volume. We have the systems and processes to produce high-quality short-form content consistently. TikTok, Reels, Shorts — we handle the production so you can handle the growth.
                                </p>
                            </div>

                            <div className="group border-b border-white/10 pb-12 hover:border-north-accent transition-colors duration-500">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-3xl font-display font-bold group-hover:text-north-accent transition-colors">Web Design</h3>
                                    <Monitor className="w-8 h-8 text-white/40 group-hover:text-north-accent transition-colors" />
                                </div>
                                <p className="text-white/70 leading-relaxed">
                                    Standout web design tailored to your business. Every strategy is built around you, not a template. We create digital experiences that convert visitors into customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / "Preset A" Section */}
            <section className="py-32 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <span className="inline-block px-3 py-1 border border-black/20 rounded-full text-xs font-mono uppercase tracking-wider mb-4">
                            The Northside Way
                        </span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
                            NO CORPORATE <br /> NONSENSE.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Built for Volume",
                                desc: "We have the systems and processes to produce high-quality content at scale, consistently.",
                                icon: <Layers className="w-6 h-6" />
                            },
                            {
                                title: "Tailored to You",
                                desc: "Whether it's content creation or web design, every strategy is built around you, not a template.",
                                icon: <Zap className="w-6 h-6" />
                            },
                            {
                                title: "Straight-up Results",
                                desc: "No bloated pricing, no fluff packages. Just straight-up results for what you actually need.",
                                icon: <Check className="w-6 h-6" />
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 border border-black/10 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                                <p className="text-black/70 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
                        READY TO <span className="text-north-accent">SCALE?</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                        Stop wasting time with agencies that don't get it. Let's build something real.
                    </p>
                    <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-north-accent hover:text-white transition-all duration-300 transform hover:scale-105">
                        Book a Call
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-display font-bold uppercase tracking-tighter">
                        Northside Digital
                    </div>
                    <div className="flex gap-8 text-sm text-white/40 font-mono uppercase">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                    <div className="text-sm text-white/40 font-mono">
                        © {new Date().getFullYear()} Northside Digital.
                    </div>
                </div>
            </footer>
        </div>
    );
}
