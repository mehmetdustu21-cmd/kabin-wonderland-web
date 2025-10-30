import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Key, 
  Shirt, 
  BarChart3, 
  Code, 
  Puzzle, 
  FileText, 
  Settings, 
  CreditCard, 
  BookOpen, 
  HelpCircle, 
  Users, 
  Box,
  ShieldCheck
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "API Keys", href: "/api-keys", icon: Key },
    { name: "Try-On Tester", href: "/try-on", icon: Shirt },
    { name: "Usage & Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Install Code", href: "/install", icon: Code },
    { name: "Integrations", href: "/integrations", icon: Puzzle },
    { name: "Logs", href: "/logs", icon: FileText },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Billing & Plans", href: "/billing", icon: CreditCard },
    { name: "Documentation", href: "/docs", icon: BookOpen },
    { name: "Support", href: "/support", icon: HelpCircle },
    { name: "Team", href: "/team", icon: Users },
    { name: "Models", href: "/models", icon: Box },
    { name: "Admin Panel", href: "/admin", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-card border-r border-border">
          <div className="p-6">
            <h1 className="text-2xl font-bold gradient-text">TryOn AI</h1>
          </div>
          <nav className="px-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
