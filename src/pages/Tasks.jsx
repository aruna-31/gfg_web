import { useState } from 'react';
import { mockTasks } from '../services/mockData';
import { Plus, Search, Filter, Layers } from 'lucide-react';
import TaskForm from '../components/tasks/TaskForm';
import TaskTable from '../components/tasks/TaskTable';

const Tasks = () => {
    const [tasks, setTasks] = useState(mockTasks);
    const [showForm, setShowForm] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        assigneeId: '',
        deadline: '',
        status: 'Pending'
    });
    const [searchQuery, setSearchQuery] = useState('');

    const handleCreate = (e) => {
        e.preventDefault();
        setTasks([...tasks, { ...newTask, id: Date.now() }]);
        setShowForm(false);
        setNewTask({ title: '', description: '', assigneeId: '', deadline: '', status: 'Pending' });
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(t => {
            if (t.id === id) {
                return {
                    ...t,
                    status: t.status === 'Completed' ? 'Pending' : 'Completed'
                };
            }
            return t;
        }));
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-800 mb-2 flex items-center gap-3">
                        <div className="p-2.5 bg-gfg-secondary/10 rounded-xl text-gfg-secondary">
                            <Layers className="w-6 h-6" />
                        </div>
                        Task Management
                    </h1>
                    <p className="text-slate-500 font-medium">Create tasks, assign members, and monitor progress.</p>
                </div>

                {!showForm && (
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-6 py-3.5 bg-gfg-primary hover:bg-gfg-accent text-white font-bold rounded-xl shadow-lg shadow-gfg-primary/30 transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:-translate-y-0.5"
                    >
                        <Plus className="w-5 h-5 stroke-[2.5]" /> New Task
                    </button>
                )}
            </div>

            {/* Task Creation Form Component */}
            {showForm && (
                <TaskForm
                    newTask={newTask}
                    setNewTask={setNewTask}
                    handleCreate={handleCreate}
                    setShowForm={setShowForm}
                />
            )}

            {/* Utilities / Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search tasks by name or description..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] focus:ring-4 focus:ring-gfg-primary/10 focus:border-gfg-primary transition-all outline-none font-medium text-slate-700 placeholder:text-slate-400"
                    />
                </div>
                <button className="px-6 py-3.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                    <Filter className="w-5 h-5" /> Filter Tasks
                </button>
            </div>

            {/* Task Table Component */}
            <TaskTable
                tasks={filteredTasks}
                toggleTaskCompletion={toggleTaskCompletion}
            />

        </div>
    );
};

export default Tasks;
