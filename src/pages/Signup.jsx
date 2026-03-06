import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirm: '' });
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (formData.password === formData.confirm) {
            navigate('/setup-profile');
        }
    };

    return (
        <div className="min-h-screen bg-gfg-darkBg flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gfg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="glass-card w-full max-w-md p-10 z-10 mx-4">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-gfg-primary to-gfg-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-gfg-primary/30">
                        <span className="text-3xl font-heading font-bold text-white">G</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Join the Team</h2>
                    <p className="text-gray-400">Create an account to track your tasks</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-6">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            className="input-field pl-12"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            className="input-field pl-12"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="password"
                            className="input-field pl-12"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="password"
                            className="input-field pl-12"
                            placeholder="Confirm Password"
                            value={formData.confirm}
                            onChange={(e) => setFormData({ ...formData, confirm: e.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="w-full btn-primary py-3 text-lg mt-8">
                        Create Account <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <p className="text-center mt-8 text-gray-400">
                    Already have an account? <Link to="/login" className="text-gfg-accent hover:text-white font-medium transition-colors">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
