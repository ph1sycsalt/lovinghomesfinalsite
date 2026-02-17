import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import ChatWidget from './components/ChatWidget';
import { PageState, Service, Package, GalleryItem } from './types';
import { COLORS, SERVICES, PACKAGES, GALLERY_ITEMS } from './constants';
// Added Sparkles to import
import { ArrowRight, PawPrint, Instagram, Mail, Phone, MapPin, Bone, CheckCircle, Sparkles, LogOut, User } from 'lucide-react';

// --- Page Components ---

const Hero = ({ id }: { id: string }) => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Parallax */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
            src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2074&auto=format&fit=crop" 
            alt="Hero Dog"
            className="w-full h-full object-cover"
          />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-9xl font-bold mb-6 text-[#FFFFF4] tracking-tighter mix-blend-overlay"
        >
          LOVING HOMES
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl font-light text-[#D8CFBC] mb-12 tracking-widest"
        >
          LUXURY • CARE • ADVENTURE
        </motion.p>
        
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col md:flex-row justify-center gap-6"
        >
            <motion.button
              onClick={scrollToServices}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-[#FFFFF4] text-[#11120D] font-bold tracking-widest hover:bg-[#D8CFBC] transition-colors"
            >
              EXPLORE
            </motion.button>
            <motion.button
               onClick={scrollToContact}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-8 py-3 rounded-full border border-[#FFFFF4] text-[#FFFFF4] font-bold tracking-widest hover:bg-[#FFFFF4]/10 transition-colors"
            >
              BOOK NOW
            </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#FFFFF4]/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#FFFFF4] to-transparent mx-auto mb-2" />
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </div>
  );
};

const ServicesPage = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  return (
    <div id={id} className="min-h-screen pt-24 px-6 md:px-20 pb-20">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-5xl md:text-7xl font-light mb-16 text-[#FFFFF4]"
      >
        OUR SERVICES
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            onClick={() => navigate(`/service/${service.id}`)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-3xl font-serif italic mb-2 text-[#FFFFF4]">{service.title}</h3>
              <p className="text-[#D8CFBC] text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                {service.description}
              </p>
              <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="flex items-center text-[#C5A059] text-sm font-medium">
                  <span className="mr-2">View Details</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const PackagesPage = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  return (
    <div id={id} className="min-h-screen pt-24 px-6 md:px-20 pb-20 flex flex-col items-center">
       <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-light mb-4 text-[#FFFFF4] text-center"
      >
        CURATED PACKAGES
      </motion.h2>
      <p className="text-[#D8CFBC] mb-16 text-center max-w-2xl">Tailored experiences for every temperament.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {PACKAGES.map((pkg, i) => (
            <motion.div
                key={pkg.id}
                onClick={() => navigate(`/book?package=${pkg.id}`)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl border flex flex-col cursor-pointer ${pkg.highlight ? 'bg-[#FFFFF4] text-[#11120D] border-transparent' : 'glass-panel text-[#FFFFF4] border-[#FFFFF4]/10'}`}
            >
                <div className="mb-4">
                    <h3 className="text-2xl font-serif font-bold">{pkg.name}</h3>
                    <p className={`text-sm mt-2 ${pkg.highlight ? 'text-[#11120D]/60' : 'text-[#D8CFBC]'}`}>{pkg.price}</p>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                            <span className={`w-1.5 h-1.5 rounded-full mr-2 ${pkg.highlight ? 'bg-[#11120D]' : 'bg-[#C5A059]'}`} />
                            {feat}
                        </li>
                    ))}
                </ul>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/book?package=${pkg.id}`);
                  }}
                  className={`w-full py-3 rounded-full text-sm font-bold tracking-widest border transition-colors ${
                    pkg.highlight 
                    ? 'border-[#11120D] hover:bg-[#11120D] hover:text-[#FFFFF4]' 
                    : 'border-[#FFFFF4] hover:bg-[#FFFFF4] hover:text-[#11120D]'
                }`}>
                    SELECT
                </button>
            </motion.div>
        ))}
      </div>
    </div>
  );
};

const GalleryPage = ({ id }: { id: string }) => {
    return (
        <div id={id} className="min-h-screen pt-24 px-6 md:px-20 pb-20">
             <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-5xl md:text-7xl font-light mb-16 text-[#FFFFF4] text-right"
            >
                MOMENTS
            </motion.h2>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {GALLERY_ITEMS.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="relative group break-inside-avoid overflow-hidden rounded-2xl"
                    >
                        <img src={item.src} alt={item.alt} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-[#FFFFF4] text-lg font-serif italic">{item.category}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const AboutPage = ({ id }: { id: string }) => {
    return (
        <div id={id} className="min-h-screen pt-32 px-6 md:px-20 pb-20 flex flex-col md:flex-row items-center gap-16">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="md:w-1/2"
            >
                <h2 className="text-4xl md:text-6xl font-light mb-8 text-[#FFFFF4]">A Sanctuary for the Soulful</h2>
                <p className="text-[#D8CFBC] text-lg leading-relaxed mb-6">
                    Loving Homes was founded on a simple principle: dogs deserve more than just a kennel. They deserve a retreat. 
                    Nestled in the quiet hills of Hong Kong, our facility is designed to stimulate the senses and calm the spirit.
                </p>
                <p className="text-[#D8CFBC] text-lg leading-relaxed">
                    Our team consists of certified behaviorists, nutritionists, and genuine dog lovers who ensure every tail wag is authentic.
                </p>
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                 whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                 className="md:w-1/2 relative"
            >
                <div className="absolute inset-0 border border-[#FFFFF4]/20 transform translate-x-4 translate-y-4 rounded-3xl" />
                <img 
                    src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=1000" 
                    alt="Founder with dog" 
                    className="rounded-3xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
            </motion.div>
        </div>
    );
};

const ContactPage = ({ id }: { id: string }) => {
    return (
        <div id={id} className="min-h-screen pt-24 px-6 md:px-20 pb-20 flex items-center justify-center">
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                     <h2 className="text-5xl font-serif italic mb-8 text-[#FFFFF4]">Get in Touch</h2>
                     <div className="space-y-6 text-[#D8CFBC]">
                        <div className="flex items-center space-x-4">
                            <Mail className="text-[#C5A059]" />
                            <span>3172abraham@scss.sc.ke</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Phone className="text-[#C5A059]" />
                            <span>+852 9123 4567</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MapPin className="text-[#C5A059]" />
                            <span>123 Bark Lane, Sai Kung, Hong Kong</span>
                        </div>
                        <div className="flex items-center space-x-4 pt-4">
                            <Instagram className="cursor-pointer hover:text-[#FFFFF4]" />
                        </div>
                     </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="glass-panel p-8 rounded-3xl space-y-6"
                >
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Name</label>
                        <input type="text" className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Dog's Name</label>
                        <input type="text" className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Message</label>
                        <textarea rows={4} className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none transition-colors" />
                    </div>
                    <button type="button" className="w-full bg-[#FFFFF4] text-[#11120D] py-3 rounded-lg font-bold hover:bg-[#D8CFBC] transition-colors">
                        SEND ENQUIRY
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [clicks, setClicks] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [currentUser, setCurrentUser] = useState<{name: string, email: string} | null>(null);

    // Check if user is already logged in on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('loving_homes_current_user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const handleEasterEgg = () => {
        setClicks(prev => prev + 1);
        if (clicks + 1 === 3) {
            alert("🐾 WOOF! You found the hidden dog mode! (Visual effect would trigger here)");
            setClicks(0);
        }
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!isLogin && !formData.name) {
            newErrors.name = 'Name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setStatus('loading');
            
            // Simulation delay
            setTimeout(() => {
                const users = JSON.parse(localStorage.getItem('loving_homes_users') || '[]');

                if (!isLogin) {
                    // Sign Up Logic
                    const existingUser = users.find((u: any) => u.email === formData.email);
                    if (existingUser) {
                        setErrors({ email: 'This email is already registered.' });
                        setStatus('idle');
                        return;
                    }

                    const newUser = { name: formData.name, email: formData.email, password: formData.password };
                    users.push(newUser);
                    localStorage.setItem('loving_homes_users', JSON.stringify(users));
                    localStorage.setItem('loving_homes_current_user', JSON.stringify(newUser));
                    setCurrentUser(newUser);
                    setStatus('success');
                } else {
                    // Login Logic
                    const user = users.find((u: any) => u.email === formData.email && u.password === formData.password);
                    if (user) {
                         localStorage.setItem('loving_homes_current_user', JSON.stringify(user));
                         setCurrentUser(user);
                         setStatus('success');
                    } else {
                        setErrors({ form: 'Invalid email or password.' });
                        setStatus('idle');
                    }
                }
            }, 1000);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('loving_homes_current_user');
        setCurrentUser(null);
        setFormData({ name: '', email: '', password: '' });
        setStatus('idle');
        setIsLogin(true);
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setErrors({});
        setStatus('idle');
        setFormData({ name: '', email: '', password: '' });
    };

    if (currentUser) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
                 
                 <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md glass-panel p-10 rounded-3xl relative z-10 text-center"
                 >
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-[#FFFFF4]/10 flex items-center justify-center">
                             <User size={40} className="text-[#C5A059]" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-serif text-[#FFFFF4] mb-2">Welcome, {currentUser.name}!</h2>
                    <p className="text-[#D8CFBC] mb-8">Your furry friend's preferences are saved.</p>
                    
                    <div className="space-y-4">
                        <button className="w-full py-4 bg-[#FFFFF4]/10 border border-[#FFFFF4]/20 rounded-xl text-[#FFFFF4] hover:bg-[#FFFFF4]/20 transition-colors flex items-center justify-center gap-3">
                             <PawPrint size={18} />
                             View My Bookings
                        </button>
                         <button 
                            onClick={handleLogout}
                            className="w-full py-4 text-[#D8CFBC] hover:text-[#FFFFF4] transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                             <LogOut size={16} />
                             Sign Out
                        </button>
                    </div>
                 </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative">
             {/* Simple visual flourish for login page */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-md glass-panel p-10 rounded-3xl relative z-10"
            >
                <div 
                    onClick={handleEasterEgg}
                    className="flex justify-center mb-8 cursor-pointer"
                >
                    <Bone size={40} className="text-[#FFFFF4]" />
                </div>
                
                <motion.h2 
                    layout="position"
                    key={isLogin ? 'login-title' : 'signup-title'}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-serif text-center mb-6 text-[#FFFFF4]"
                >
                    {isLogin ? 'Owner Portal' : 'Join the Pack'}
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {!isLogin && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                overflow="hidden"
                            >
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-[#FFFFF4]/20'} p-3 text-[#FFFFF4] focus:border-[#FFFFF4] focus:outline-none transition-colors`} 
                                />
                                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-[#FFFFF4]/20'} p-3 text-[#FFFFF4] focus:border-[#FFFFF4] focus:outline-none transition-colors`} 
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            className={`w-full bg-transparent border-b ${errors.password ? 'border-red-500' : 'border-[#FFFFF4]/20'} p-3 text-[#FFFFF4] focus:border-[#FFFFF4] focus:outline-none transition-colors`} 
                        />
                        {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                    </div>

                     {errors.form && <p className="text-red-400 text-sm text-center">{errors.form}</p>}

                    <button 
                        type="submit" 
                        disabled={status === 'loading' || status === 'success'}
                        className={`w-full mt-8 bg-[#FFFFF4] text-[#11120D] py-3 rounded-full font-bold hover:bg-[#D8CFBC] transition-all hover:scale-105 flex justify-center items-center ${status === 'success' ? 'bg-[#C5A059]' : ''}`}
                    >
                        {status === 'loading' ? (
                            <div className="w-5 h-5 border-2 border-[#11120D] border-t-transparent rounded-full animate-spin" />
                        ) : status === 'success' ? (
                            <span className="flex items-center"><CheckCircle size={18} className="mr-2"/> Success</span>
                        ) : (
                            isLogin ? 'ENTER' : 'CREATE ACCOUNT'
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center space-y-2">
                     <p className="text-xs text-[#D8CFBC]">
                        {isLogin ? "Don't have an account?" : "Already a member?"}
                        <button 
                            onClick={toggleMode}
                            className="ml-2 underline hover:text-[#FFFFF4] font-bold"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                    
                    {isLogin && (
                        <p className="text-xs text-[#D8CFBC]">
                            Forgot password? <span className="underline cursor-pointer hover:text-[#FFFFF4]">Reset here</span>
                        </p>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <div className="text-white pt-32 text-center">Service not found</div>;

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-serif text-[#FFFFF4] mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="p-3 bg-[#FFFFF4]/10 rounded-full backdrop-blur-sm"
          >
            {service.id === 'boarding' && <Bone size={32} className="text-[#C5A059]" />}
            {service.id === 'grooming' && <Sparkles size={32} className="text-[#C5A059]" />}
            {service.id === 'training' && <CheckCircle size={32} className="text-[#C5A059]" />}
            {service.id === 'adventure' && <MapPin size={32} className="text-[#C5A059]" />}
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
         <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="glass-panel p-8 md:p-12 rounded-3xl"
         >
            <h2 className="text-3xl font-light text-[#C5A059] mb-6">Overview</h2>
            <p className="text-lg md:text-xl text-[#D8CFBC] leading-relaxed mb-12">
              {service.longDescription || service.description}
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('/book')}
                className="px-8 py-4 bg-[#FFFFF4] text-[#11120D] rounded-full font-bold hover:bg-[#D8CFBC] transition-transform hover:scale-105"
              >
                BOOK THIS SERVICE
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-8 py-4 border border-[#FFFFF4]/30 text-[#FFFFF4] rounded-full font-bold hover:bg-[#FFFFF4]/10 transition-colors"
              >
                BACK TO HOME
              </button>
            </div>
         </motion.div>
      </div>
    </div>
  );
};

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get('package');
  const selectedPackage = PACKAGES.find(p => p.id === packageId);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex justify-center">
      <div className="max-w-3xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-[#FFFFF4] mb-4">Secure Your Spot</h1>
          <p className="text-[#D8CFBC]">
            {selectedPackage 
              ? `You are requesting the ${selectedPackage.name} (${selectedPackage.price})` 
              : "Tell us what your furry friend needs."}
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Your Name</label>
              <input type="text" className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Phone</label>
              <input type="tel" className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
             <div>
              <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Dog's Name</label>
              <input type="text" className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Breed / Age</label>
              <input type="text" className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none" />
            </div>
          </div>

          <div>
             <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Interested In</label>
             <select defaultValue={packageId || "general"} className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none">
                <option value="general">General Inquiry</option>
                <optgroup label="Services">
                  {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </optgroup>
                <optgroup label="Packages">
                  {PACKAGES.map(p => <option key={p.id} value={p.id}>{p.name} - {p.price}</option>)}
                </optgroup>
             </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Dates Required</label>
            <input type="text" placeholder="e.g., Oct 10 - Oct 15" className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#D8CFBC] mb-2">Additional Details</label>
            <textarea rows={4} className="w-full bg-[#11120D]/50 border border-[#FFFFF4]/10 rounded-lg p-3 text-[#FFFFF4] focus:border-[#C5A059] focus:outline-none" />
          </div>

          <button type="button" className="w-full bg-[#C5A059] text-[#11120D] py-4 rounded-lg font-bold hover:bg-[#FFFFF4] transition-colors text-lg">
            CONFIRM BOOKING REQUEST
          </button>
        </motion.form>
      </div>
    </div>
  );
};

// --- Main Layout ---

const AppContent = () => {
  const [activePage, setActivePage] = useState<PageState>(PageState.HOME);
  const location = useLocation();
  
  // Basic scroll spy effect (Only active on home route)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'services', 'packages', 'gallery', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is roughly in view
          if (rect.top <= 200 && rect.bottom >= 200) {
             const mappedState = Object.values(PageState).find(s => s.toLowerCase() === section) || PageState.HOME;
             setActivePage(mappedState);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div className="bg-[#11120D] text-[#FFFFF4] min-h-screen relative selection:bg-[#C5A059] selection:text-black">
      <CustomCursor />
      <ParticleBackground />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="relative z-10">
        <Routes>
           <Route path="/" element={
               <>
                 <Hero id="home" />
                 <ServicesPage id="services" />
                 <PackagesPage id="packages" />
                 <GalleryPage id="gallery" />
                 <AboutPage id="about" />
                 <ContactPage id="contact" />
               </>
           } />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/service/:id" element={<ServiceDetailPage />} />
           <Route path="/book" element={<BookingPage />} />
        </Routes>
      </main>

      <ChatWidget />
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;