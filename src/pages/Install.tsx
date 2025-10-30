import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

const Install = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(null), 2000);
  };

  const snippets = {
    javascript: `<!-- Include the TryOn AI SDK -->
<script src="https://cdn.tryon.ai/sdk.js"></script>
<script>
  TryOnAI.init({
    apiKey: 'your-api-key-here',
    containerId: 'tryon-container'
  });
</script>`,
    react: `import TryOnAI from '@tryon-ai/react';

function App() {
  return (
    <TryOnAI
      apiKey="your-api-key-here"
      onResult={(result) => {
        console.log('Try-on result:', result);
      }}
    />
  );
}`,
    python: `from tryon_ai import TryOnClient

client = TryOnClient(api_key='your-api-key-here')

result = client.try_on(
    person_image='path/to/person.jpg',
    garment_image='path/to/garment.jpg'
)

print(result.image_url)`,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Install Code Generator</h1>
          <p className="text-muted-foreground">Get started with code snippets for your platform</p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Integration Code</CardTitle>
            <CardDescription>Choose your platform and copy the code to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="react">React</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>
              
              <TabsContent value="javascript" className="space-y-4">
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{snippets.javascript}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode(snippets.javascript, "js")}
                  >
                    {copied === "js" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="react" className="space-y-4">
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{snippets.react}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode(snippets.react, "react")}
                  >
                    {copied === "react" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="python" className="space-y-4">
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{snippets.python}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyCode(snippets.python, "python")}
                  >
                    {copied === "python" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Installation Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-sm">Copy the code snippet for your platform above</li>
              <li className="text-sm">Replace <code className="bg-muted px-2 py-1 rounded">your-api-key-here</code> with your actual API key</li>
              <li className="text-sm">Integrate the code into your application</li>
              <li className="text-sm">Test the integration using the Try-On Tester</li>
              <li className="text-sm">Monitor your usage in the Analytics dashboard</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Install;
