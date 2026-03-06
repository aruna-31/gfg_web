import { mockStats } from '../services/mockData';
import { Users, LayoutList, CheckCircle2, Clock, Activity, TrendingUp, MoreVertical, ArrowUpRight, ArrowDownRight, Layers } from 'lucide-react';

const StatCard = ({ title, count, icon: Icon, colorClass, borderClass, textClass, bgClass, trend, trendUp }) => (
    <div className={`bg-white rounded-3xl p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border ${borderClass} hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden group`}>
        <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full ${bgClass} opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>

        <div className="flex justify-between items-start relative z-10">
            <div>
                <p className="text-slate-500 font-bold tracking-wide text-xs uppercase mb-3">{title}</p>
                <h3 className="text-4xl font-heading font-extrabold text-slate-800">{count}</h3>
            </div>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner ${bgClass}`}>
                <Icon className={`w-7 h-7 ${textClass}`} />
            </div>
        </div>
        <div className="mt-5 flex items-center text-sm relative z-10 bg-slate-50 p-2 rounded-xl border border-slate-100 max-w-max">
            <span className={`font-bold flex items-center gap-1 ${trendUp ? 'text-green-600' : 'text-orange-500'}`}>
                {trendUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {trend}%
            </span>
            <span className="text-slate-400 font-medium ml-2">from last week</span>
        </div>
    </div>
);

const AdminDashboard = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Filters / Quick Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-slate-100">
                <div className="flex gap-2 font-medium">
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-xl shadow-md">Overview</button>
                    <button className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-all">My Team</button>
                    <button className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-all">Projects</button>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="px-5 py-2.5 bg-gfg-primary hover:bg-gfg-accent text-white font-bold rounded-xl shadow-lg shadow-gfg-primary/30 transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:-translate-y-0.5">
                        <Layers className="w-4 h-4" /> Generate Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Members"
                    count={mockStats.totalMembers}
                    icon={Users}
                    borderClass="border-slate-200 hover:border-blue-400/50"
                    textClass="text-blue-600"
                    bgClass="bg-blue-100"
                    trend="8.5"
                    trendUp={true}
                />
                <StatCard
                    title="Tasks Assigned"
                    count={mockStats.totalTasks}
                    icon={LayoutList}
                    borderClass="border-slate-200 hover:border-indigo-400/50"
                    textClass="text-indigo-600"
                    bgClass="bg-indigo-100"
                    trend="12.0"
                    trendUp={true}
                />
                <StatCard
                    title="Tasks Completed"
                    count={mockStats.completedTasks}
                    icon={CheckCircle2}
                    borderClass="border-slate-200 hover:border-gfg-primary/50"
                    textClass="text-gfg-primary"
                    bgClass="bg-gfg-primary/20"
                    trend="24.5"
                    trendUp={true}
                />
                <StatCard
                    title="Pending Tasks"
                    count={mockStats.pendingTasks}
                    icon={Clock}
                    borderClass="border-slate-200 hover:border-orange-400/50"
                    textClass="text-orange-500"
                    bgClass="bg-orange-100"
                    trend="4.2"
                    trendUp={false}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Section */}
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                    <div className="flex justify-between items-center mb-8 relative z-10">
                        <div>
                            <h2 className="text-xl font-heading font-extrabold text-slate-800 flex items-center gap-3">
                                <div className="p-2 bg-gfg-secondary/10 rounded-lg">
                                    <Activity className="w-5 h-5 text-gfg-secondary" />
                                </div>
                                Performance Analytics
                            </h2>
                            <p className="text-sm font-medium text-slate-500 mt-2">Team progression and task completion rate.</p>
                        </div>
                        <select className="bg-slate-50 border-2 border-slate-100 text-slate-700 font-medium text-sm rounded-xl focus:ring-gfg-primary/30 focus:border-gfg-primary block px-4 py-2.5 transition-all outline-none cursor-pointer hover:bg-slate-100">
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Quarterly</option>
                        </select>
                    </div>

                    <div className="flex-1 flex items-end justify-between gap-4 mt-6 pt-6 border-t border-slate-100 relative h-72 z-10">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs font-bold text-slate-400 pr-4">
                            <span>100k</span>
                            <span>75k</span>
                            <span>50k</span>
                            <span>25k</span>
                            <span>0</span>
                        </div>

                        {/* Grid lines */}
                        <div className="absolute left-10 right-0 top-2 bottom-8 flex flex-col justify-between pointer-events-none">
                            <div className="border-b border-slate-100 border-dashed w-full h-0"></div>
                            <div className="border-b border-slate-100 border-dashed w-full h-0"></div>
                            <div className="border-b border-slate-100 border-dashed w-full h-0"></div>
                            <div className="border-b border-slate-100 border-dashed w-full h-0"></div>
                            <div className="border-b-2 border-slate-200 w-full h-0"></div>
                        </div>

                        <div className="w-full flex justify-between items-end pl-10 h-full pb-8">
                            {[45, 65, 40, 85, 50, 95, 70].map((val, idx) => (
                                <div key={idx} className="flex flex-col items-center w-full max-w-[48px] group relative h-full justify-end">
                                    <div className="w-full bg-slate-100 rounded-t-xl relative flex items-end overflow-hidden group-hover:bg-slate-200 transition-colors cursor-pointer" style={{ height: '100%' }}>
                                        <div
                                            className="w-full bg-gradient-to-t from-gfg-secondary to-gfg-primary rounded-t-xl transition-all duration-700 group-hover:opacity-90 relative"
                                            style={{ height: `${val}%` }}
                                        >
                                            {/* Sub-bar overlay to simulate gradient shine */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                                        </div>
                                        {/* Tooltip */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-slate-800 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl pointer-events-none mt-2 z-20 whitespace-nowrap scale-95 group-hover:scale-100">
                                            {val} Tasks
                                        </div>
                                    </div>
                                    <span className="text-sm text-slate-500 font-bold absolute -bottom-8">
                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col">
                    <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                        <h2 className="text-xl font-heading font-extrabold text-slate-800 flex items-center gap-3">
                            <div className="p-2 bg-gfg-accent/10 rounded-lg">
                                <TrendingUp className="w-5 h-5 text-gfg-accent" />
                            </div>
                            Recent Activity
                        </h2>
                        <button className="text-slate-400 hover:text-slate-700 bg-slate-50 p-2 rounded-xl transition-colors hidden sm:block">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 space-y-6 overflow-y-auto pr-2 scrollbar-hide">
                        <div className="relative">
                            <div className="absolute top-5 left-[19px] bottom-[-20px] w-0.5 bg-slate-100"></div>
                            {[
                                { name: 'Alice J.', action: 'completed', task: 'Design MVP', time: '2h ago', type: 'complete' },
                                { name: 'Bob S.', action: 'assigned to', task: 'API Integration', time: '4h ago', type: 'assign' },
                                { name: 'Charlie D.', action: 'marked urgent', task: 'Database Fix', time: '5h ago', type: 'alert' },
                                { name: 'Diana P.', action: 'completed', task: 'Auth Flow', time: '1d ago', type: 'complete' }
                            ].map((activity, i) => (
                                <div key={i} className="flex items-start gap-5 mb-8 relative group cursor-pointer">
                                    <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-110 
                    ${activity.type === 'complete' ? 'bg-gfg-primary/10 text-gfg-primary border border-gfg-primary/20' :
                                            activity.type === 'assign' ? 'bg-blue-50 text-blue-500 border border-blue-100' :
                                                'bg-orange-50 text-orange-500 border border-orange-100'}`}>
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <p className="text-[15px] font-medium text-slate-600 leading-snug">
                                            <span className="text-slate-900 font-extrabold">{activity.name}</span> {activity.action} <span className="text-gfg-secondary font-bold">{activity.task}</span>
                                        </p>
                                        <p className="text-xs font-bold text-slate-400 mt-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                                            <Clock className="w-3.5 h-3.5" /> {activity.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="w-full py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all mt-4">
                        View Complete History
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
