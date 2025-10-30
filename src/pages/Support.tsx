import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Support = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Support ticket submitted! We'll get back to you soon.");
  };

  const faqs = [
    {
      question: "How do I get started with TryOn AI?",
      answer: "Start by creating an account, generating an API key, and following our integration guide in the Documentation section."
    },
    {
      question: "What image formats are supported?",
      answer: "We support JPG, PNG, and WEBP formats. Images should be under 10MB in size for optimal processing."
    },
    {
      question: "How long does processing take?",
      answer: "Typical processing time is 1-3 seconds per image, depending on image size and server load."
    },
    {
      question: "Can I use this for commercial purposes?",
      answer: "Yes! All our paid plans include commercial usage rights. Please review our terms of service for details."
    },
    {
      question: "What happens if I exceed my API limit?",
      answer: "Requests beyond your plan limit will return a 429 error. You can upgrade your plan at any time to increase limits."
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Support</h1>
          <p className="text-muted-foreground">Get help with TryOn AI</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>Contact Support</CardTitle>
              </div>
              <CardDescription>Send us a message and we'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your issue in detail..."
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <CardTitle>Quick Help</CardTitle>
              </div>
              <CardDescription>Common resources and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border border-border rounded-lg">
                  <p className="font-medium mb-1">Email Support</p>
                  <a href="mailto:support@tryon.ai" className="text-sm text-primary hover:underline">
                    support@tryon.ai
                  </a>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <p className="font-medium mb-1">Documentation</p>
                  <Button variant="link" className="p-0 h-auto">
                    View API Documentation
                  </Button>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <p className="font-medium mb-1">Status Page</p>
                  <a href="https://status.tryon.ai" className="text-sm text-primary hover:underline">
                    status.tryon.ai
                  </a>
                </div>
                <div className="p-3 border border-border rounded-lg">
                  <p className="font-medium mb-1">Response Time</p>
                  <p className="text-sm text-muted-foreground">
                    Professional: 4 hours<br />
                    Enterprise: 1 hour
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Support;
