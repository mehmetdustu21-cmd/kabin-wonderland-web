import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const Logs = () => {
  const logs = [
    { id: 1, timestamp: "2024-01-20 14:32:15", type: "request", endpoint: "/api/tryon", status: 200, duration: "1.2s" },
    { id: 2, timestamp: "2024-01-20 14:31:48", type: "error", endpoint: "/api/tryon", status: 400, duration: "0.3s" },
    { id: 3, timestamp: "2024-01-20 14:30:22", type: "request", endpoint: "/api/models", status: 200, duration: "0.8s" },
    { id: 4, timestamp: "2024-01-20 14:29:55", type: "request", endpoint: "/api/upload", status: 200, duration: "2.1s" },
    { id: 5, timestamp: "2024-01-20 14:28:31", type: "error", endpoint: "/api/tryon", status: 429, duration: "0.1s" },
    { id: 6, timestamp: "2024-01-20 14:27:09", type: "request", endpoint: "/api/status", status: 200, duration: "0.2s" },
  ];

  const getStatusBadge = (status: number) => {
    if (status >= 200 && status < 300) return <Badge variant="secondary" className="bg-green-500/10 text-green-700">Success</Badge>;
    if (status >= 400 && status < 500) return <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700">Client Error</Badge>;
    return <Badge variant="destructive">Server Error</Badge>;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Logs</h1>
          <p className="text-muted-foreground">Monitor API requests and error logs</p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Request & Error Logs</CardTitle>
                <CardDescription>Real-time monitoring of your API activity</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search logs..." className="pl-9 w-64" />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {logs.map((log) => (
                <div key={log.id} className="flex items-center justify-between border border-border p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground font-mono">{log.timestamp}</span>
                      {getStatusBadge(log.status)}
                      <span className="text-sm font-mono">{log.endpoint}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Status: {log.status}</span>
                      <span>•</span>
                      <span>Duration: {log.duration}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">View Details</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Total Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12,543</div>
              <p className="text-sm text-muted-foreground">Last 24 hours</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Error Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1.8%</div>
              <p className="text-sm text-muted-foreground">Last 24 hours</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Avg Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1.2s</div>
              <p className="text-sm text-muted-foreground">Last 24 hours</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Logs;
