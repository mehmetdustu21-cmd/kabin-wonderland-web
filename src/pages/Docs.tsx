import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Docs = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">API Documentation</h1>
          <p className="text-muted-foreground">Complete API reference and guides</p>
        </div>

        <Tabs defaultValue="getting-started" className="space-y-6">
          <TabsList>
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Quick start guide to integrate TryOn AI</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold mt-4">Installation</h3>
                <p>Install the TryOn AI SDK using npm or yarn:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>npm install @tryon-ai/sdk</code>
                </pre>

                <h3 className="text-lg font-semibold mt-6">Basic Usage</h3>
                <p>Initialize the client with your API key:</p>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`import TryOnAI from '@tryon-ai/sdk';

const client = new TryOnAI({
  apiKey: 'your-api-key-here'
});`}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authentication">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>How to authenticate your API requests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">API Keys</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    All API requests must include your API key in the Authorization header:
                  </p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`Authorization: Bearer sk_live_xxxxxxxxxxxxx`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Rate Limits</h3>
                  <p className="text-sm text-muted-foreground">
                    API requests are rate limited based on your plan:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                    <li>Starter: 100 requests/minute</li>
                    <li>Professional: 500 requests/minute</li>
                    <li>Enterprise: Unlimited</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints">
            <div className="space-y-4">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-mono text-lg">POST /api/v1/tryon</CardTitle>
                    <Badge>Primary</Badge>
                  </div>
                  <CardDescription>Generate virtual try-on images</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Request Body</h4>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{`{
  "person_image": "base64_encoded_image",
  "garment_image": "base64_encoded_image",
  "model": "default"
}`}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Response</h4>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{`{
  "result_url": "https://cdn.tryon.ai/result.jpg",
  "request_id": "req_xxxxx",
  "processing_time": 1.23
}`}</code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-mono text-lg">GET /api/v1/models</CardTitle>
                    <Badge variant="secondary">Info</Badge>
                  </div>
                  <CardDescription>List available AI models</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2">Response</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`{
  "models": [
    {
      "id": "default",
      "name": "Default Model",
      "description": "Standard virtual try-on"
    }
  ]
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>Real-world integration examples</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">JavaScript Example</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`const response = await fetch('https://api.tryon.ai/v1/tryon', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_live_xxxxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    person_image: personImageBase64,
    garment_image: garmentImageBase64
  })
});

const result = await response.json();
console.log(result.result_url);`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Python Example</h3>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`import requests

response = requests.post(
    'https://api.tryon.ai/v1/tryon',
    headers={'Authorization': 'Bearer sk_live_xxxxx'},
    json={
        'person_image': person_image_base64,
        'garment_image': garment_image_base64
    }
)

result = response.json()
print(result['result_url'])`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Docs;
