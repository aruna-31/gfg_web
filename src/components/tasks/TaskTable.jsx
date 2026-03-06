import { CheckCircle2, Circle, Calendar, AlertCircle } from 'lucide-react';
import { mockUsers } from '../../services/mockData';

const TaskTable = ({ tasks, toggleTaskCompletion }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'text-green-600 bg-green-100 border-green-200';
            case 'Pending': return 'text-orange-600 bg-orange-100 border-orange-200';
            default: return 'text-blue-600 bg-blue-100 border-blue-200';
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold tracking-wide text-xs uppercase">
                            <th className="px-8 py-5">Task Details</th>
                            <th className="px-8 py-5 w-48">Assigned User</th>
                            <th className="px-8 py-5 w-48 text-center">Status</th>
                            <th className="px-8 py-5 w-40">Deadline</th>
                            <th className="px-8 py-5 w-32 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {tasks.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="px-8 py-16 text-center text-slate-500">
                                    <AlertCircle className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                                    <p className="text-lg font-bold text-slate-700">No tasks found</p>
                                    <p className="text-sm">Try adjusting your filters or create a new task.</p>
                                </td>
                            </tr>
                        ) : tasks.map(task => {
                            const assignee = mockUsers.find(u => Number(u.id) === Number(task.assigneeId));
                            const isCompleted = task.status === 'Completed';

                            return (
                                <tr
                                    key={task.id}
                                    className={`group transition-all hover:bg-slate-50/50 ${isCompleted ? 'opacity-70 grayscale-[0.3]' : ''}`}
                                >
                                    <td className="px-8 py-5">
                                        <p className={`font-heading font-extrabold text-lg mb-1 leading-snug transition-colors ${isCompleted ? 'text-slate-400 line-through decoration-2 decoration-slate-300' : 'text-slate-800'}`}>
                                            {task.title}
                                        </p>
                                        <p className="text-sm text-slate-500 line-clamp-1 max-w-lg font-medium leading-relaxed">
                                            {task.description}
                                        </p>
                                    </td>

                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gfg-primary/20 to-gfg-secondary/20 flex flex-shrink-0 items-center justify-center text-sm font-extrabold text-gfg-secondary shadow-sm group-hover:shadow transition-shadow">
                                                {assignee ? assignee.name.charAt(0) : '?'}
                                            </div>
                                            <div>
                                                <span className="text-[15px] font-bold text-slate-700 block whitespace-nowrap">
                                                    {assignee ? assignee.name : 'Unassigned'}
                                                </span>
                                                {assignee && <span className="text-xs font-bold text-slate-400 block">{assignee.role.split(' ')[0]}</span>}
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-8 py-5 text-center">
                                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold border uppercase tracking-wider ${getStatusColor(task.status)}`}>
                                            {task.status}
                                        </span>
                                    </td>

                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2 text-[13px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg w-max border border-slate-100">
                                            <Calendar className="w-4 h-4 text-gfg-secondary/50" />
                                            {task.deadline}
                                        </div>
                                    </td>

                                    <td className="px-8 py-5 text-center">
                                        <button
                                            onClick={() => toggleTaskCompletion(task.id)}
                                            className={`inline-flex items-center justify-center p-2 rounded-xl transition-all transform hover:scale-110 shadow-sm ${isCompleted
                                                    ? 'bg-green-100 text-green-600 hover:bg-green-200 border border-green-200'
                                                    : 'bg-white text-slate-400 border-2 border-slate-200 hover:text-white hover:bg-gfg-primary hover:border-gfg-primary'
                                                }`}
                                            title={isCompleted ? "Mark as Pending" : "Mark as Completed"}
                                        >
                                            {isCompleted ? <CheckCircle2 className="w-6 h-6 stroke-[3]" /> : <Circle className="w-6 h-6 stroke-[2.5]" />}
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskTable;
