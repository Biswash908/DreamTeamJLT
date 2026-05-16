import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useDarkMode } from '../context/DarkModeContext';
import { supabase } from '../lib/supabaseClient';

export function AdminLoginPage() {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const ADMIN_USERNAME = (import.meta as any).env?.VITE_ADMIN_USERNAME?.toString().trim().toLowerCase();
  const ADMIN_EMAIL = (import.meta as any).env?.VITE_ADMIN_EMAIL?.toString().trim();

  useEffect(() => {
    const checkSession = async () => {
      if (!supabase) return;
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        navigate('/admin/dashboard', { replace: true });
      }
    };

    checkSession();
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    if (!username.trim() || !password) {
      setErrorMessage('Please enter your username and password.');
      return;
    }

    if (!supabase) {
      setErrorMessage('Supabase is not configured.');
      return;
    }

    if (!ADMIN_USERNAME || !ADMIN_EMAIL) {
      setErrorMessage('Admin login is not configured. Please set the environment values.');
      return;
    }

    const trimmedUsername = username.trim().toLowerCase();
    if (trimmedUsername !== ADMIN_USERNAME) {
      setErrorMessage('Unknown username. Please use the admin username.');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message || 'Unable to sign in.');
      return;
    }

    if (data.session) {
      navigate('/admin/dashboard', { replace: true });
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'} px-4 py-12`}>
      <div className={`w-full max-w-md rounded-[32px] p-8 shadow-[0_24px_80px_rgba(20,20,16,0.18)] ${isDarkMode ? 'bg-[#111827] border border-[#323d56]' : 'bg-white border border-[#ffe5ee]'}`}>
        <div className="mb-6 text-center">
          <p className="text-[32px] font-['Fredoka:Bold',sans-serif] text-[#ff6b6b]">Admin Login</p>
          <p className={`mt-2 text-sm ${isDarkMode ? 'text-[#94a3b8]' : 'text-[#6b7280]'}`}>Use your username and password to access the dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2" htmlFor="admin-username">
              Username
            </label>
            <input
              id="admin-username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter username"
              className={`w-full rounded-3xl border ${isDarkMode ? 'border-[#374151] bg-[#0f172a] text-[#f8fafc]' : 'border-[#cbd5e1] bg-[#f8fafc] text-[#111827]'} px-4 py-3 text-sm outline-none transition focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#4ecdc4]/20`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#475569] mb-2" htmlFor="admin-password">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className={`w-full rounded-3xl border ${isDarkMode ? 'border-[#374151] bg-[#0f172a] text-[#f8fafc]' : 'border-[#cbd5e1] bg-[#f8fafc] text-[#111827]'} px-4 py-3 text-sm outline-none transition focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#4ecdc4]/20`}
            />
          </div>

          {errorMessage ? (
            <div className="rounded-3xl bg-[#fee2e2] px-4 py-3 text-sm text-[#b91c1c]">
              {errorMessage}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-3xl bg-[#4ecdc4] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3bb7a5] disabled:cursor-not-allowed disabled:bg-[#94d6cb]"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>

      <div className="mt-6 text-center text-sm">
        <Link
          to="/"
          className="text-[#4ecdc4] transition hover:text-[#3bb7a5]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
