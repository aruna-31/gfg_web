import { Link } from 'react-router-dom';
import { ArrowRight, CheckSquare, Users, BarChart, Info, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gfg-primary selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gfg-primary rounded-xl flex items-center justify-center shadow-lg shadow-gfg-primary/30">
                            <span className="text-white text-xl font-heading font-bold">G</span>
                        </div>
                        <span className="text-2xl font-heading font-bold text-slate-900">Assistant For You</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="px-6 py-2.5 text-gfg-secondary font-medium hover:text-gfg-primary transition-colors">
                            Login
                        </Link>
                        <Link to="/signup" className="px-6 py-2.5 bg-gfg-primary hover:bg-gfg-accent text-white font-medium rounded-full transition-all shadow-md shadow-gfg-primary/20 hover:shadow-lg hover:-translate-y-0.5">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gfg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gfg-primary/10 text-gfg-primary font-medium text-sm mb-8 border border-gfg-primary/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gfg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gfg-primary"></span>
                                </span>
                                Introducing Version 2.0
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold leading-[1.1] mb-6 text-slate-900">
                                Assistant <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gfg-primary to-gfg-secondary">For You</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Smart Task Management for Technical Clubs. Coordinate events, assign tasks, and track progress effortlessly in one unified platform.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-gfg-primary hover:bg-gfg-accent text-white font-medium rounded-full transition-all shadow-lg shadow-gfg-primary/30 flex items-center justify-center gap-2 hover:-translate-y-1 text-lg">
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/login" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 hover:text-gfg-primary border-2 border-slate-200 hover:border-gfg-primary font-medium rounded-full transition-all flex items-center justify-center gap-2 text-lg">
                                    Login to Dashboard
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-gfg-primary to-gfg-secondary rounded-3xl blur opacity-20"></div>
                            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
                                {/* Mockup UI representation for "Illustration showing teamwork" */}
                                <div className="flex gap-4 items-center mb-8 border-b border-slate-100 pb-6">
                                    <div className="flex -space-x-3">
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center font-bold text-blue-600">A</div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-green-100 flex items-center justify-center font-bold text-green-600">B</div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center font-bold text-purple-600">C</div>
                                    </div>
                                    <div className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">+5 Active Now</div>
                                </div>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex p-4 rounded-xl border border-slate-100 bg-slate-50 gap-4 items-center hover:shadow-md transition-shadow">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${i === 1 ? 'bg-gfg-primary/20 text-gfg-primary' : i === 2 ? 'bg-orange-100 text-orange-500' : 'bg-blue-100 text-blue-500'}`}>
                                                <CheckSquare className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-4 w-3/4 bg-slate-200 rounded mb-2"></div>
                                                <div className="h-3 w-1/2 bg-slate-200 rounded"></div>
                                            </div>
                                            <div className="w-20 h-8 bg-white rounded border border-slate-200"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-heading font-bold text-slate-900 mb-4">Powerful Features</h2>
                        <p className="text-lg text-slate-600">Everything you need to organize technical events, track responsibilities, and ensure successful execution.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-gfg-primary/20 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <CheckSquare className="w-6 h-6 text-gfg-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Task Assignment</h3>
                            <p className="text-slate-600 leading-relaxed">Create detailed tasks, assign members based on skills, and set critical deadlines to ensure no details fall through the cracks.</p>
                        </div>

                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-gfg-secondary/20 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-6 h-6 text-gfg-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Team Collaboration</h3>
                            <p className="text-slate-600 leading-relaxed">Centralize your directory. Know exactly who is handling what role, and easily communicate regarding project updates.</p>
                        </div>

                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-gfg-accent/20 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BarChart className="w-6 h-6 text-gfg-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Analytics Dashboard</h3>
                            <p className="text-slate-600 leading-relaxed">Get a bird's-eye view of club progress. Visual indicators for completed and pending tasks to measure event readiness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gfg-primary/10 blur-[150px] pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/3">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gfg-primary to-gfg-secondary p-1 flex items-center justify-center shadow-2xl shadow-gfg-primary/20">
                                <Info className="w-32 h-32 text-white/50" />
                            </div>
                        </div>
                        <div className="md:w-2/3 text-center md:text-left">
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Built for Technical Excellence</h2>
                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                Our platform is built specifically for campus technical clubs that organize high-impact events like hackathons, workshops, and coding challenges.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                By streamlining operations and role delegation, your core team can focus on what truly matters: delivering exceptional technological experiences to the student community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gfg-primary relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-black/5 opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Optimize Your Club?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Join the new standard of club management workspace today.</p>
                    <Link to="/signup" className="inline-flex py-4 px-10 bg-white text-gfg-primary font-bold rounded-full text-lg shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-105 transition-all">
                        Get Started For Free
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-gfg-primary rounded-lg flex items-center justify-center">
                                    <span className="text-white font-heading font-bold">G</span>
                                </div>
                                <span className="text-xl font-heading font-bold text-slate-900">GeeksforGeeks Tech Club</span>
                            </div>
                            <p className="text-slate-500 max-w-sm">Empowering students through technology, collaboration, and continuous learning.</p>
                        </div>
                        <div className="flex md:justify-end gap-6 border-t md:border-0 border-slate-100 pt-6 md:pt-0">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-gfg-primary hover:bg-gfg-primary/10 transition-colors cursor-pointer">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-gfg-primary hover:bg-gfg-primary/10 transition-colors cursor-pointer">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-gfg-primary hover:bg-gfg-primary/10 transition-colors cursor-pointer">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:contact@gfgclub.com" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-gfg-primary hover:bg-gfg-primary/10 transition-colors cursor-pointer">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                        <p>&copy; {new Date().getFullYear()} Assistant For You. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-gfg-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-gfg-primary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
