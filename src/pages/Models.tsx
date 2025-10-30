import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Settings } from "lucide-react";
import { toast } from "sonner";

const Models = () => {
  const models = [
    {
      id: 1,
      name: "Default Model",
      type: "Standard",
      status: "active",
      description: "General purpose virtual try-on model",
      performance: "98.5%",
      speed: "1.2s"
    },
    {
      id: 2,
      name: "Fashion Pro",
      type: "Advanced",
      status: "active",
      description: "Specialized for fashion and apparel",
      performance: "99.2%",
      speed: "1.8s"
    },
    {
      id: 3,
      name: "Quick Try",
      type: "Fast",
      status: "active",
      description: "Optimized for speed with good accuracy",
      performance: "97.1%",
      speed: "0.6s"
    },
  ];

  const handleConfigure = (name: string) => {
    toast.success(`Configuring ${name}...`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">AI Models</h1>
            <p className="text-muted-foreground">Manage your custom AI models</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Custom Model
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <Card key={model.id} className="shadow-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    <CardDescription className="mt-1">{model.description}</CardDescription>
                  </div>
                  <Badge variant={model.status === "active" ? "secondary" : "outline"}>
                    {model.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">{model.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Performance</span>
                    <span className="font-medium">{model.performance}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg Speed</span>
                    <span className="font-medium">{model.speed}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleConfigure(model.name)}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Configure
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Model Training</CardTitle>
            <CardDescription>Train custom models for specific use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Custom model training allows you to fine-tune AI models for your specific product categories,
                brand aesthetics, or unique requirements. This feature is available on Enterprise plans.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Training Dataset</h4>
                  <p className="text-sm text-muted-foreground">Upload your images</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Configuration</h4>
                  <p className="text-sm text-muted-foreground">Set training parameters</p>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <h4 className="font-medium mb-2">Deploy</h4>
                  <p className="text-sm text-muted-foreground">Test and activate</p>
                </div>
              </div>
              <Button>Start Training Process</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Model Performance</CardTitle>
            <CardDescription>Compare model accuracy and speed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Performance comparison chart placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Models;
