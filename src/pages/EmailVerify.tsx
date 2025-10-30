import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const EmailVerify = () => {
  const handleResend = () => {
    toast.success("Verification email resent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle p-4">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Mail className="h-12 w-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold gradient-text text-center">
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-center">
            We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleResend} variant="outline" className="w-full">
            Resend Verification Email
          </Button>
          <div className="text-center text-sm">
            <Link to="/login" className="text-primary hover:underline">
              Back to login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerify;
