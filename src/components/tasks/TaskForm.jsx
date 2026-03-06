import { Plus, X, Calendar, User, AlignLeft } from 'lucide-react';
import { mockUsers } from '../../services/mockData';

const TaskForm = ({ newTask, setNewTask, handleCreate, setShowForm }) => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] border border-slate-100 mb-8 relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-gfg-primary"></div>

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-heading font-extrabold text-slate-800">Create New Task</h2>
                    <p className="text-slate-500 text-sm mt-1">Assign responsibilities and set clear deadlines.</p>
                </div>
                <button
                    onClick={() => setShowForm(false)}
                    className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-2">Task Title</label>
                        <input
                            required
                            type="text"
                            placeholder="e.g. Design User Dashboard"
                            className="w-full bg-slate-50 border-2 border-slate-100 hover:border-slate-200 focus:border-gfg-primary focus:ring-4 focus:ring-gfg-primary/10 rounded-xl px-4 py-3 text-slate-700 transition-all outline-none font-medium"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Assign Member</label>
                        <div className="relative">
                            <User className="absolute w-5 h-5 text-slate-400 left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <select
                                required
                                className="w-full bg-slate-50 border-2 border-slate-100 hover:border-slate-200 focus:border-gfg-primary focus:ring-4 focus:ring-gfg-primary/10 rounded-xl pl-10 pr-4 py-3 text-slate-700 transition-all outline-none font-medium appearance-none cursor-pointer"
                                value={newTask.assigneeId}
                                onChange={(e) => setNewTask({ ...newTask, assigneeId: e.target.value })}
                            >
                                <option value="" disabled>Select team member</option>
                                {mockUsers.map(u => <option key={u.id} value={u.id}>{u.name} - {u.role}</option>)}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Deadline Date</label>
                        <div className="relative">
                            <Calendar className="absolute w-5 h-5 text-slate-400 left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                                required
                                type="date"
                                className="w-full bg-slate-50 border-2 border-slate-100 hover:border-slate-200 focus:border-gfg-primary focus:ring-4 focus:ring-gfg-primary/10 rounded-xl pl-10 pr-4 py-3 text-slate-700 transition-all outline-none font-medium text-sm"
                                value={newTask.deadline}
                                onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">Status</label>
                        <select
                            className="w-full bg-slate-50 border-2 border-slate-100 hover:border-slate-200 focus:border-gfg-primary focus:ring-4 focus:ring-gfg-primary/10 rounded-xl px-4 py-3 text-slate-700 transition-all outline-none font-medium appearance-none cursor-pointer"
                            value={newTask.status}
                            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                        >
                            <option value="Pending">Pending (Orange)</option>
                            {/* Added In Progress to stay consistent with existing data, but keeping requested colors */}
                            <option value="Completed">Completed (Green)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                    <div className="relative">
                        <AlignLeft className="absolute w-5 h-5 text-slate-400 left-3 top-4 pointer-events-none" />
                        <textarea
                            required
                            placeholder="Add details, links, and requirements for this task..."
                            className="w-full bg-slate-50 border-2 border-slate-100 hover:border-slate-200 focus:border-gfg-primary focus:ring-4 focus:ring-gfg-primary/10 rounded-xl pl-10 pr-4 py-3 text-slate-700 transition-all outline-none font-medium min-h-[120px] resize-y"
                            value={newTask.description}
                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                        ></textarea>
                    </div>
                </div>

                <div className="flex justify-end gap-4 pt-6 border-t border-slate-100">
                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-6 py-3 font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 rounded-xl transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-8 py-3 font-bold text-white bg-gfg-primary hover:bg-gfg-accent rounded-xl shadow-lg shadow-gfg-primary/30 transition-all flex items-center gap-2 hover:-translate-y-0.5"
                    >
                        <Plus className="w-5 h-5" /> Formally Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
