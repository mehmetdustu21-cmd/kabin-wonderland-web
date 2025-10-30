import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Billing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: ["1,000 API calls/month", "Basic support", "Standard models", "Email integration"],
      current: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      features: ["10,000 API calls/month", "Priority support", "Advanced models", "All integrations", "Custom CORS"],
      current: true,
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      features: ["Unlimited API calls", "24/7 dedicated support", "Custom models", "All integrations", "SLA guarantee", "Team management"],
      current: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Billing & Plans</h1>
          <p className="text-muted-foreground">Manage your subscription and billing</p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>You are currently on the Professional plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">$99<span className="text-sm text-muted-foreground">/month</span></p>
                <p className="text-sm text-muted-foreground mt-1">Next billing date: February 20, 2024</p>
              </div>
              <Button variant="outline">Manage Subscription</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`shadow-card ${plan.current ? "border-primary border-2" : ""}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.current && <Badge>Current</Badge>}
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.current ? "secondary" : "default"}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Upgrade"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>Your recent invoices and payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "January 20, 2024", amount: "$99.00", status: "Paid" },
                { date: "December 20, 2023", amount: "$99.00", status: "Paid" },
                { date: "November 20, 2023", amount: "$99.00", status: "Paid" },
              ].map((invoice, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                  <div>
                    <p className="font-medium">{invoice.date}</p>
                    <p className="text-sm text-muted-foreground">{invoice.amount}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{invoice.status}</Badge>
                    <Button variant="ghost" size="sm">Download</Button>
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

export default Billing;
