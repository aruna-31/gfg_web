import { useState } from 'react';
import { mockTasks } from '../services/mockData';
import { CheckCircle2, Circle, Clock, Calendar } from 'lucide-react';

const UserDashboard = () => {
    // Mocking assigned tasks for a specific user ID
    const assignedUserId = 1;
    const initialTasks = mockTasks.filter(t => t.assigneeId === assignedUserId);
    const [tasks, setTasks] = useState(initialTasks);

    const toggleTaskStatus = (id) => {
        setTasks(tasks.map(t => {
            if (t.id === id) {
                return { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' };
            }
            return t;
        }));
    };

    const completedCount = tasks.filter(t => t.status === 'Completed').length;
    const pendingCount = tasks.length - completedCount;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-white mb-2">My Tasks</h1>
                    <p className="text-gray-400">Manage and update your assigned work.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="glass-card p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform">
                    <div className="w-12 h-12 rounded-2xl bg-gfg-primary/20 flex items-center justify-center border border-gfg-primary mb-4 shadow-lg shadow-gfg-primary/30">
                        <CheckCircle2 className="w-6 h-6 text-gfg-primary" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-1">{completedCount}</h3>
                        <p className="text-gray-400 text-sm font-medium">Completed Tasks</p>
                    </div>
                </div>
                <div className="glass-card p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center border border-orange-500 mb-4 shadow-lg shadow-orange-500/30">
                        <Clock className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-1">{pendingCount}</h3>
                        <p className="text-gray-400 text-sm font-medium">Pending Tasks</p>
                    </div>
                </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-white/5 p-6 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gfg-accent" />
                        Current Tasks
                    </h2>
                    <div className="flex gap-2">
                        <button className="text-sm px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors font-medium">All</button>
                        <button className="text-sm px-4 py-1.5 hover:bg-white/10 rounded-full transition-colors text-gray-400">Pending</button>
                    </div>
                </div>

                <div className="p-6">
                    {tasks.length === 0 ? (
                        <div className="text-center py-12 text-gray-400">
                            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-lg">No tasks assigned to you right now!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {tasks.map(task => {
                                const isCompleted = task.status === 'Completed';
                                return (
                                    <div key={task.id} className={`p-4 rounded-xl border transition-all duration-300 flex flex-col md:flex-row gap-6 hover:shadow-lg ${isCompleted ? 'bg-gfg-primary/5 border-gfg-primary/20' : 'bg-white/5 border-white/10 hover:border-gfg-primary/50'}`}>
                                        <div className="flex gap-4 items-start flex-1">
                                            <button
                                                onClick={() => toggleTaskStatus(task.id)}
                                                className={`mt-1 flex-shrink-0 transition-transform hover:scale-110 ${isCompleted ? 'text-gfg-primary' : 'text-gray-400 hover:text-white'}`}
                                            >
                                                {isCompleted ? <CheckCircle2 className="w-6 h-6 fill-current bg-white rounded-full" /> : <Circle className="w-6 h-6" />}
                                            </button>
                                            <div className="flex-1">
                                                <h3 className={`font-heading font-bold text-lg mb-1 ${isCompleted ? 'text-gray-300 line-through' : 'text-white'}`}>
                                                    {task.title}
                                                </h3>
                                                <p className={`text-sm ${isCompleted ? 'text-gray-500' : 'text-gray-400'}`}>
                                                    {task.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex md:flex-col items-center justify-between md:items-end gap-3 pl-10 md:pl-0 border-t md:border-t-0 border-white/10 pt-4 md:pt-0 shrink-0">
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Calendar className="w-4 h-4" />
                                                Due: {task.deadline}
                                            </div>
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${isCompleted ? 'text-gfg-primary bg-gfg-primary/10 border-gfg-primary/20' : 'text-orange-400 bg-orange-400/10 border-orange-400/20'}`}>
                                                {task.status}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
