import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Team = () => {
  const [members] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "owner", avatar: "👤" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "admin", avatar: "👤" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "developer", avatar: "👤" },
    { id: 4, name: "Alice Williams", email: "alice@example.com", role: "viewer", avatar: "👤" },
  ]);

  const handleInvite = () => {
    toast.success("Team invitation sent!");
  };

  const handleRemove = (name: string) => {
    toast.success(`${name} removed from team`);
  };

  const getRoleBadge = (role: string) => {
    const variants: Record<string, any> = {
      owner: "default",
      admin: "secondary",
      developer: "outline",
      viewer: "outline"
    };
    return <Badge variant={variants[role]}>{role}</Badge>;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Team Management</h1>
          <p className="text-muted-foreground">Manage team members and their roles</p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserPlus className="mr-2 h-5 w-5" />
              Invite Team Member
            </CardTitle>
            <CardDescription>Add a new member to your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="colleague@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="viewer">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button onClick={handleInvite} className="w-full">
                  Send Invite
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Manage your team members and their permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {members.map((member) => (
                <div key={member.id} className="flex items-center justify-between border border-border p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{member.avatar}</div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getRoleBadge(member.role)}
                    {member.role !== "owner" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemove(member.name)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Roles & Permissions</CardTitle>
            <CardDescription>Understanding team member roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Owner</h4>
                  <Badge>Full Access</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Full access to all features, billing, and team management
                </p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Admin</h4>
                  <Badge variant="secondary">High Access</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Can manage API keys, integrations, and invite team members
                </p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Developer</h4>
                  <Badge variant="outline">Standard Access</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Can create API keys and access documentation
                </p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Viewer</h4>
                  <Badge variant="outline">Read Only</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  View-only access to analytics and logs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Team;
