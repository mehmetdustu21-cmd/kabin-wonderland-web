import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Integrations = () => {
  const integrations = [
    { name: "Shopify", description: "Connect with Shopify stores", status: "available", logo: "🛍️" },
    { name: "WooCommerce", description: "WordPress e-commerce integration", status: "available", logo: "🛒" },
    { name: "Wix", description: "Wix website builder integration", status: "available", logo: "🎨" },
    { name: "İkas", description: "Turkish e-commerce platform", status: "available", logo: "🇹🇷" },
    { name: "Ticimax", description: "Turkish e-commerce solution", status: "available", logo: "📦" },
    { name: "Custom HTML", description: "Direct HTML integration", status: "available", logo: "💻" },
  ];

  const handleConnect = (name: string) => {
    toast.success(`${name} integration initiated!`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Integrations</h1>
          <p className="text-muted-foreground">Connect TryOn AI with your e-commerce platform</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <Card key={integration.name} className="shadow-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{integration.logo}</div>
                    <div>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {integration.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{integration.status}</Badge>
                  <Button size="sm" onClick={() => handleConnect(integration.name)}>
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Integration Guide</CardTitle>
            <CardDescription>Follow these steps to integrate with your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="text-sm">Select your e-commerce platform from the list above</li>
              <li className="text-sm">Click "Connect" and follow the authentication process</li>
              <li className="text-sm">Configure your try-on widget settings</li>
              <li className="text-sm">Add products you want to enable try-on for</li>
              <li className="text-sm">Test the integration on your store</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Integrations;
