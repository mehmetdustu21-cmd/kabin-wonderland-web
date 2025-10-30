import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Activity, AlertCircle, TrendingUp, Search } from "lucide-react";

const Admin = () => {
  const stats = [
    { title: "Total Users", value: "2,543", icon: Users, change: "+125 this month" },
    { title: "Active Sessions", value: "456", icon: Activity, change: "Real-time" },
    { title: "Error Rate", value: "0.3%", icon: AlertCircle, change: "-0.2% from last week" },
    { title: "Revenue", value: "$45,230", icon: TrendingUp, change: "+18% this month" },
  ];

  const users = [
    { id: 1, name: "Company A", email: "contact@companya.com", plan: "Enterprise", usage: "98%", status: "active" },
    { id: 2, name: "Company B", email: "info@companyb.com", plan: "Professional", usage: "45%", status: "active" },
    { id: 3, name: "Company C", email: "hello@companyc.com", plan: "Starter", usage: "89%", status: "warning" },
    { id: 4, name: "Company D", email: "support@companyd.com", plan: "Professional", usage: "12%", status: "active" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Admin Panel</h1>
            <p className="text-muted-foreground">System administration and user management</p>
          </div>
          <Badge variant="destructive">Admin Access</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="shadow-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Monitor and manage all platform users</CardDescription>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="pl-9 w-64" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between border border-border p-4 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge variant="outline">{user.plan}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">Usage: {user.usage}</p>
                    </div>
                    <Badge variant={user.status === "active" ? "secondary" : "outline"}>
                      {user.status}
                    </Badge>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Rate Limit Configuration</CardTitle>
              <CardDescription>Manage API rate limits by plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Starter", "Professional", "Enterprise"].map((plan) => (
                  <div key={plan} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <span className="font-medium">{plan}</span>
                    <div className="flex items-center gap-2">
                      <Input className="w-32" defaultValue={plan === "Enterprise" ? "Unlimited" : "1000"} />
                      <span className="text-sm text-muted-foreground">req/min</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>System Metrics</CardTitle>
              <CardDescription>Real-time platform performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CPU Usage</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "45%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Memory Usage</span>
                    <span className="font-medium">62%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "62%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Storage</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "78%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
