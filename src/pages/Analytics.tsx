import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Clock, DollarSign } from "lucide-react";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Usage & Analytics</h1>
          <p className="text-muted-foreground">Monitor your API usage and performance metrics</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,543</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.2%</div>
              <p className="text-xs text-muted-foreground">+0.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.2s</div>
              <p className="text-xs text-muted-foreground">-0.3s from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$234.50</div>
              <p className="text-xs text-muted-foreground">+$45 from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Request Timeline</CardTitle>
            <CardDescription>Your API requests over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Chart placeholder - Request timeline visualization
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Top Endpoints</CardTitle>
              <CardDescription>Most frequently used API endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { endpoint: "/api/tryon", calls: 5234, percentage: 42 },
                  { endpoint: "/api/models", calls: 3421, percentage: 27 },
                  { endpoint: "/api/upload", calls: 2891, percentage: 23 },
                  { endpoint: "/api/status", calls: 997, percentage: 8 },
                ].map((item) => (
                  <div key={item.endpoint} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-mono">{item.endpoint}</span>
                      <span className="text-muted-foreground">{item.calls} calls</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Error Distribution</CardTitle>
              <CardDescription>Error rates by type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "400 Bad Request", count: 45, color: "bg-yellow-500" },
                  { type: "401 Unauthorized", count: 23, color: "bg-orange-500" },
                  { type: "429 Rate Limit", count: 12, color: "bg-red-500" },
                  { type: "500 Server Error", count: 8, color: "bg-destructive" },
                ].map((item) => (
                  <div key={item.type} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${item.color}`} />
                      <span className="text-sm">{item.type}</span>
                    </div>
                    <span className="text-sm font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
