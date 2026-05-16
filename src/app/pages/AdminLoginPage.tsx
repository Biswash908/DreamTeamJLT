import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../lib/supabaseClient';

export function AdminLoginPage() {
  const navigate = useNavigate();
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
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f8] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-[32px] border border-[#e2e8f0] p-8 shadow-[0_24px_80px_rgba(20,20,16,0.08)]">
        <div className="mb-6 text-center">
          <p className="text-[32px] font-['Fredoka:Bold',sans-serif] text-[#2d3436]">Admin Login</p>
          <p className="mt-2 text-sm text-[#6b7280]">Use your username and password to access the dashboard.</p>
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
              className="w-full rounded-3xl border border-[#cbd5e1] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#4ecdc4]/20"
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
              className="w-full rounded-3xl border border-[#cbd5e1] bg-[#f8fafc] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#4ecdc4]/20"
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

        <p className="mt-5 text-xs text-[#64748b]">
          Tip: we use a username-only login experience. Your actual Supabase account email is built behind the scenes.
        </p>
      </div>
    </div>
  );
}
