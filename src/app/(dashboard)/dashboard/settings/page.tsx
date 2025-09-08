'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useSession } from '@/lib/auth-client';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Download, Upload, FileText, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Settings saved successfully');
    }, 1000);
  };

  return (
    <div className="space-y-8 pb-24">
      {/* Header part */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-500 mt-2">Manage your account and preferences</p>
      </div>

      {/* Grid part*/}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Settings part*/}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                  Update your personal information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      className="rounded-lg"
                      defaultValue={session?.user?.name?.split(' ')[0] || ''}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      className="rounded-lg"
                      defaultValue={session?.user?.name?.split(' ').slice(1).join(' ') || ''}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="rounded-lg"
                    defaultValue={session?.user?.email || ''}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" className="rounded-lg" placeholder="Your company name" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notification Settings part*/}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Configure how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: 'Email notifications',
                    desc: 'Receive notifications via email',
                    checked: true,
                  },
                  {
                    title: 'Lead responses',
                    desc: 'Get notified when leads respond',
                    checked: true,
                  },
                  {
                    title: 'Campaign updates',
                    desc: 'Updates about campaign performance',
                    checked: false,
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked={item.checked}
                        className="h-5 w-5 rounded-md border-gray-300 text-linkbird-500 focus:ring-linkbird-500"
                      />
                    </div>
                    {i < 2 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* API Settings part*/}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardHeader>
                <CardTitle>API Access</CardTitle>
                <CardDescription>Manage your API keys and integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="apiKey"
                      type="password"
                      value="lnk_••••••••••••••••••••••••••••"
                      readOnly
                      className="rounded-lg"
                    />
                    <Button variant="outline">Regenerate</Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Keep your API key secure and don&apos;t share it publicly
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar part*/}
        <div className="space-y-8">
          {/* Account Overview */}
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Account Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-linkbird-500 flex items-center justify-center text-white font-semibold text-lg">
                  {session?.user?.name?.charAt(0) || 'U'}
                </div>
                <div>
                  <p className="font-medium">{session?.user?.name}</p>
                  <p className="text-sm text-gray-500">{session?.user?.email}</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Plan</span>
                  <span className="font-medium">Professional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Storage used</span>
                  <span className="font-medium">2.4 GB / 10 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Member since</span>
                  <span className="font-medium">Jan 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions section*/}
          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="w-4 h-4" /> Export Data
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Upload className="w-4 h-4" /> Import Contacts
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <FileText className="w-4 h-4" /> Download Reports
              </Button>
              <Separator />
              <Button variant="destructive" className="w-full justify-start gap-2">
                <Trash2 className="w-4 h-4" /> Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sticky Save Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0F1724] border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-linkbird-500 hover:bg-linkbird-600 rounded-lg"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
}
