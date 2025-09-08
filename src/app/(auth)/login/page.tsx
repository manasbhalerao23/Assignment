'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from '@/lib/auth-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn.email({ email, password });
      if (result.error) {
        setError(result.error.message || 'Login failed');
      } else {
        router.push('/dashboard');
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn.social({
        provider: 'google',
        callbackURL: '/dashboard',
      });
    } catch {
      setError('Google sign-in failed');
      setIsLoading(false);
    }
  };

  return (
    <div
      className={` flex min-h-screen items-center justify-center 
      bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#060C14] dark:to-[#060C14] px-4`}
    >
      <Card className="w-full max-w-md bg-white dark:bg-[#0F1724] border border-gray-200 dark:border-[#2A2A2A] shadow-xl rounded-2xl">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 bg-linkbird-500 rounded-2xl flex items-center justify-center shadow-md">
              <span className="dark:text-white  text-black font-bold text-lg">LB</span>
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white">
            Welcome back
          </CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Sign in to continue to <span className="font-medium text-linkbird-500">Linkbird.ai</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 
              text-red-600 dark:text-red-400 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="dark:bg-[#1A1F2C] dark:text-white focus-visible:ring-linkbird-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-900 dark:text-gray-200">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="dark:bg-[#1A1F2C] dark:text-white focus-visible:ring-linkbird-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-linkbird-500 hover:bg-linkbird-600 transition-all duration-200 py-2.5 hover:cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-2xl"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-white dark:bg-[#0F1724] text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full dark:bg-[#1A1F2C] dark:text-white hover:shadow-md transition-all duration-200 rounded-2xl hover:cursor-pointer "
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don’t have an account?{' '}
              <Link href="/register" className="text-linkbird-500 hover:text-linkbird-600 font-medium hover:text-gray-900 dark:hover:text-gray-100">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
