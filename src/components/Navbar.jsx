import { Bell, Search, UserCircle, Menu, ChevronDown, MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
    const location = useLocation();

    const getPageTitle = () => {
        const path = location.pathname.split('/').pop();
        switch (path) {
            case 'dashboard': return 'Dashboard Overview';
            case 'team': return 'Team Directory';
            case 'tasks': return 'Task Management';
            case 'analytics': return 'Analytics';
            case 'my-dashboard': return 'My User Dashboard';
            default: return 'Overview';
        }
    };

    return (
        <div className="h-20 px-6 sm:px-10 flex items-center justify-between border-b border-slate-100 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] z-30">
            <div className="flex items-center gap-6">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2.5 text-slate-500 hover:bg-slate-100 hover:text-gfg-primary rounded-xl transition-all"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-800 capitalize tracking-tight">
                        {getPageTitle()}
                    </h1>
                    <p className="text-sm text-slate-500 font-medium hidden sm:block mt-0.5">Welcome back! Here's your latest update.</p>
                </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-8">
                <div className="hidden xl:block relative w-80">
                    <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search tasks, members, messages..."
                        className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl pl-12 pr-4 py-2.5 text-sm text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-gfg-primary/30 focus:border-gfg-primary transition-all shadow-inner"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <button className="relative p-2.5 text-slate-400 hover:bg-slate-100 hover:text-blue-600 rounded-full transition-colors hidden sm:block">
                        <MessageSquare className="w-6 h-6" />
                    </button>

                    <button className="relative p-2.5 text-slate-400 hover:bg-slate-100 hover:text-gfg-primary rounded-full transition-colors">
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                    </button>
                </div>

                <div className="flex items-center gap-3 pl-4 sm:pl-8 border-l border-slate-100 cursor-pointer hover:bg-slate-50 p-2 rounded-2xl transition-all hover:shadow-sm group">
                    <div className="relative">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gfg-primary/20 to-gfg-secondary/20 flex items-center justify-center border border-gfg-primary/30 group-hover:border-gfg-primary shadow-sm transition-all group-hover:scale-105">
                            <UserCircle className="w-7 h-7 text-gfg-secondary" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="hidden lg:block mr-2">
                        <p className="text-sm font-bold text-slate-700 leading-tight group-hover:text-gfg-secondary transition-colors">Admin User</p>
                        <p className="text-xs text-slate-500 font-medium tracking-wide">Product Manager</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-400 hidden lg:block" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
