import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Settings = () => {
  const handleSaveProfile = () => {
    toast.success("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    toast.success("Password changed successfully!");
  };

  const handleSaveCORS = () => {
    toast.success("CORS origins updated!");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="cors">CORS Origins</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Inc." />
                </div>
                <Button onClick={handleSaveProfile}>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to keep your account secure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current Password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New Password</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm New Password</Label>
                  <Input id="confirm" type="password" />
                </div>
                <Button onClick={handleChangePassword}>Change Password</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cors">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>CORS Origins</CardTitle>
                <CardDescription>
                  Manage allowed origins for cross-origin requests
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Allowed Origins</Label>
                  <Input placeholder="https://example.com" />
                  <p className="text-sm text-muted-foreground">
                    Enter one origin per line. Use * to allow all origins (not recommended for production)
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="border border-border rounded-lg p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">https://mystore.com</span>
                      <Button variant="ghost" size="sm">Remove</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono">https://shop.example.com</span>
                      <Button variant="ghost" size="sm">Remove</Button>
                    </div>
                  </div>
                </div>
                <Button onClick={handleSaveCORS}>Save Origins</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
