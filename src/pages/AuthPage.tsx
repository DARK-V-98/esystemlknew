import { useState, FormEvent, ReactNode } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithPopup, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, updateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { Mail, Lock, User, ArrowLeft, AlertCircle } from 'lucide-react';

export default function AuthPage() {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Back button */}
      <button onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-mono text-foreground/50 hover:text-accent transition-colors cursor-pointer">
        <ArrowLeft size={16} /> Back to site
      </button>

      {/* Flip container */}
      <div className="w-full max-w-md" style={{ perspective: '1200px' }}>
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformStyle: 'preserve-3d', position: 'relative', minHeight: '520px' }}
        >
          {/* SIGN IN — front */}
          <div style={{ backfaceVisibility: 'hidden', position: 'absolute', width: '100%' }}>
            <SignInCard onFlip={() => setFlipped(true)} />
          </div>

          {/* SIGN UP — back */}
          <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', width: '100%' }}>
            <SignUpCard onFlip={() => setFlipped(false)} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Sign In ── */
function SignInCard({ onFlip }: { onFlip: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try { await signInWithPopup(auth, googleProvider); navigate('/'); }
    catch (e: any) { setError(e.message); }
  };

  const handleEmail = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try { await signInWithEmailAndPassword(auth, email, password); navigate('/'); }
    catch (e: any) { setError(friendlyError(e.code)); }
    finally { setLoading(false); }
  };

  return (
    <div className="glass rounded-[2rem] p-8 sm:p-10">
      <p className="text-xs font-mono text-accent tracking-[0.4em] uppercase mb-2">Welcome back</p>
      <h2 className="text-3xl font-black uppercase tracking-tight text-foreground mb-8">Sign In</h2>

      <GoogleBtn onClick={handleGoogle} label="Sign in with Google" />
      <Divider />

      <form onSubmit={handleEmail} className="space-y-4">
        <Field icon={<Mail size={16} />} type="email" placeholder="Email address" value={email} onChange={setEmail} />
        <Field icon={<Lock size={16} />} type="password" placeholder="Password" value={password} onChange={setPassword} />
        {error && <ErrorMsg msg={error} />}
        <SubmitBtn loading={loading} label="Sign In" />
      </form>

      <p className="text-center text-sm text-foreground/40 mt-6">
        No account?{' '}
        <button onClick={onFlip} className="text-accent font-semibold hover:underline cursor-pointer">Sign Up</button>
      </p>
    </div>
  );
}

/* ── Sign Up ── */
function SignUpCard({ onFlip }: { onFlip: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try { await signInWithPopup(auth, googleProvider); navigate('/'); }
    catch (e: any) { setError(e.message); }
  };

  const handleEmail = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name) await updateProfile(cred.user, { displayName: name });
      navigate('/');
    } catch (e: any) { setError(friendlyError(e.code)); }
    finally { setLoading(false); }
  };

  return (
    <div className="glass rounded-[2rem] p-8 sm:p-10">
      <p className="text-xs font-mono text-accent tracking-[0.4em] uppercase mb-2">Get started</p>
      <h2 className="text-3xl font-black uppercase tracking-tight text-foreground mb-8">Sign Up</h2>

      <GoogleBtn onClick={handleGoogle} label="Sign up with Google" />
      <Divider />

      <form onSubmit={handleEmail} className="space-y-4">
        <Field icon={<User size={16} />} type="text" placeholder="Full name" value={name} onChange={setName} />
        <Field icon={<Mail size={16} />} type="email" placeholder="Email address" value={email} onChange={setEmail} />
        <Field icon={<Lock size={16} />} type="password" placeholder="Password (min 6 chars)" value={password} onChange={setPassword} />
        {error && <ErrorMsg msg={error} />}
        <SubmitBtn loading={loading} label="Create Account" />
      </form>

      <p className="text-center text-sm text-foreground/40 mt-6">
        Already have an account?{' '}
        <button onClick={onFlip} className="text-accent font-semibold hover:underline cursor-pointer">Sign In</button>
      </p>
    </div>
  );
}

/* ── Shared sub-components ── */
function GoogleBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick}
      className="w-full flex items-center justify-center gap-3 border border-black/15 rounded-xl py-3 px-4 hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer font-medium text-sm">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      {label}
    </button>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-black/10" />
      <span className="text-xs font-mono text-foreground/30 uppercase">or</span>
      <div className="flex-1 h-px bg-black/10" />
    </div>
  );
}

function Field({ icon, type, placeholder, value, onChange }: {
  icon: ReactNode; type: string; placeholder: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus-within:border-accent transition-colors">
      <span className="text-foreground/30">{icon}</span>
      <input type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}
        required className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-foreground/30" />
    </div>
  );
}

function SubmitBtn({ loading, label }: { loading: boolean; label: string }) {
  return (
    <button type="submit" disabled={loading}
      className="w-full bg-accent text-white py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors cursor-pointer disabled:opacity-60 mt-2">
      {loading ? 'Please wait...' : label}
    </button>
  );
}

function ErrorMsg({ msg }: { msg: string }) {
  return (
    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
      <AlertCircle size={16} /> {msg}
    </div>
  );
}

function friendlyError(code: string) {
  const map: Record<string, string> = {
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/email-already-in-use': 'This email is already registered.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/invalid-credential': 'Invalid email or password.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}
