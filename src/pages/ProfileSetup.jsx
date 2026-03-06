import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Plus, X, Save, Trash2, ArrowLeft } from 'lucide-react';

const ProfileSetup = () => {
    const [name, setName] = useState('Admin User');
    const [skills, setSkills] = useState(['React', 'Node.js']);
    const [newSkill, setNewSkill] = useState('');
    const navigate = useNavigate();

    const addSkill = () => {
        if (newSkill.trim() && !skills.includes(newSkill.trim())) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter(s => s !== skillToRemove));
    };

    return (
        <div className="max-w-2xl mx-auto py-10">
            <div className="mb-8">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
                    <ArrowLeft className="w-5 h-5" />
                    Back
                </button>
                <h1 className="text-4xl font-heading font-bold mb-2">Profile Setup</h1>
                <p className="text-gray-400">Manage your personal information and skills.</p>
            </div>

            <div className="glass-card p-8">
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
                    <div className="w-24 h-24 rounded-full bg-gfg-primary/20 flex items-center justify-center border-2 border-gfg-primary">
                        <User className="w-10 h-10 text-gfg-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-1">Profile Picture</h3>
                        <p className="text-sm text-gray-400 mb-3">PNG, JPG up to 5MB</p>
                        <button className="btn-secondary text-sm py-1.5 px-4 rounded">Upload Image</button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input
                            type="text"
                            className="input-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Your Skills</label>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {skills.map(skill => (
                                <div key={skill} className="bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-sm border border-white/5">
                                    {skill}
                                    <button onClick={() => removeSkill(skill)} className="text-gray-400 hover:text-red-400 transition-colors">
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                className="input-field flex-1"
                                placeholder="Add a new skill (e.g., Python)"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                            />
                            <button type="button" onClick={addSkill} className="btn-primary px-4">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-medium">
                        <Trash2 className="w-5 h-5" />
                        Delete Account
                    </button>

                    <div className="flex gap-4">
                        <button className="btn-secondary" onClick={() => navigate('/app/dashboard')}>Cancel</button>
                        <button className="btn-primary" onClick={() => navigate('/app/dashboard')}>
                            <Save className="w-5 h-5" />
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetup;
