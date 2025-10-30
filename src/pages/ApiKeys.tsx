import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Plus, Trash2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const ApiKeys = () => {
  const [keys, setKeys] = useState([
    { id: 1, name: "Production Key", key: "sk_live_xxxxxxxxxxxxx", visible: false, created: "2024-01-15" },
    { id: 2, name: "Development Key", key: "sk_test_xxxxxxxxxxxxx", visible: false, created: "2024-01-20" },
  ]);

  const toggleVisibility = (id: number) => {
    setKeys(keys.map(k => k.id === id ? { ...k, visible: !k.visible } : k));
  };

  const copyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success("API key copied to clipboard!");
  };

  const deleteKey = (id: number) => {
    setKeys(keys.filter(k => k.id !== id));
    toast.success("API key deleted successfully!");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">API Keys</h1>
            <p className="text-muted-foreground">Manage your API keys for authentication</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Key
          </Button>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Create New API Key</CardTitle>
            <CardDescription>Generate a new API key for your application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="keyName">Key Name</Label>
                <Input id="keyName" placeholder="Production Key" />
              </div>
              <Button>Generate Key</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Your API Keys</CardTitle>
            <CardDescription>Manage and monitor your existing API keys</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {keys.map((keyItem) => (
                <div key={keyItem.id} className="flex items-center justify-between border border-border p-4 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{keyItem.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        {keyItem.visible ? keyItem.key : "••••••••••••••••"}
                      </code>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleVisibility(keyItem.id)}
                      >
                        {keyItem.visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Created: {keyItem.created}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => copyKey(keyItem.key)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => deleteKey(keyItem.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ApiKeys;
