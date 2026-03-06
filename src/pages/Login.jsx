import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // mock login logic
        if (email.includes('admin')) {
            navigate('/app/dashboard');
        } else {
            navigate('/app/my-dashboard');
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
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-400">Sign in to your team dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            className="input-field pl-12"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="password"
                            className="input-field pl-12"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
                            <input type="checkbox" className="rounded bg-white/5 border-white/10 text-gfg-primary focus:ring-gfg-primary" />
                            Remember me
                        </label>
                        <a href="#" className="text-gfg-accent hover:text-white transition-colors">Forgot password?</a>
                    </div>

                    <button type="submit" className="w-full btn-primary py-3 text-lg mt-8">
                        Sign In <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <p className="text-center mt-8 text-gray-400">
                    Don't have an account? <Link to="/signup" className="text-gfg-accent hover:text-white font-medium transition-colors">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
