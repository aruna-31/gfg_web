import { mockUsers } from '../services/mockData';
import { Mail, Briefcase, Plus } from 'lucide-react';

const Team = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-white mb-2 flex items-center gap-3">
                        Team Directory
                        <span className="bg-white/10 text-sm px-3 py-1 rounded-full">{mockUsers.length} Members</span>
                    </h1>
                    <p className="text-gray-400">View and manage club members and their roles.</p>
                </div>
                <button className="btn-primary">
                    <Plus className="w-5 h-5" /> Add Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockUsers.map(user => (
                    <div key={user.id} className="glass-card overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                        <div className="h-24 bg-gradient-to-r from-gfg-primary/40 to-gfg-secondary/40 relative">
                            <div className="absolute -bottom-10 left-6">
                                <div className="w-20 h-20 rounded-full bg-gfg-darkBg border-4 border-gfg-primary flex items-center justify-center text-2xl font-bold">
                                    {user.name.charAt(0)}
                                </div>
                            </div>
                        </div>

                        <div className="pt-14 p-6">
                            <h3 className="text-xl font-heading font-bold mb-1">{user.name}</h3>
                            <div className="flex items-center gap-2 text-gfg-accent text-sm font-medium mb-4">
                                <Briefcase className="w-4 h-4" />
                                {user.role}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {user.skills.map(skill => (
                                    <span key={skill} className="bg-white/5 border border-white/10 text-xs px-2.5 py-1 rounded text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <a href={`mailto:${user.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm border-t border-white/10 pt-4 mt-auto">
                                <Mail className="w-4 h-4" />
                                {user.email}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
