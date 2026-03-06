import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, CheckSquare, BarChart, User, LogOut } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();

    const menuItems = [
        { path: '/app/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/app/team', icon: Users, label: 'Team' },
        { path: '/app/tasks', icon: CheckSquare, label: 'Tasks' },
        { path: '/app/analytics', icon: BarChart, label: 'Analytics' },
        { path: '/setup-profile', icon: User, label: 'Profile' },
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-slate-900/50 z-40 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <div className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gfg-secondary text-white shadow-2xl transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="h-20 flex items-center px-8 border-b border-indigo-500/30">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                            <span className="text-gfg-primary text-2xl font-heading font-extrabold">G</span>
                        </div>
                        <span className="text-2xl font-heading font-bold tracking-wide">GFG Hub</span>
                    </div>
                </div>

                <div className="py-4 px-6 border-b border-indigo-500/30 bg-black/10">
                    <p className="text-xs uppercase tracking-wider text-indigo-200 font-bold mb-1">Navigation Menu</p>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => {
                        const isActive = location.pathname.includes(item.path);
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen && setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium ${isActive
                                        ? 'bg-gfg-primary text-white shadow-lg shadow-gfg-primary/40 translate-x-1'
                                        : 'text-indigo-100 hover:bg-white/10 hover:text-white hover:translate-x-1'
                                    }`}
                            >
                                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gfg-accent'}`} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-indigo-500/30 bg-black/10">
                    <Link
                        to="/"
                        className="flex items-center gap-3 px-4 py-3.5 text-indigo-100 hover:text-white hover:bg-red-500/80 rounded-xl transition-all font-medium group"
                    >
                        <LogOut className="w-5 h-5 text-red-300 group-hover:text-white transition-colors" />
                        <span>Logout Account</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
