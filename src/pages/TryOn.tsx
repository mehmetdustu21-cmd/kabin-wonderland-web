import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Shirt } from "lucide-react";
import { toast } from "sonner";

const TryOn = () => {
  const [personImage, setPersonImage] = useState<string | null>(null);
  const [garmentImage, setGarmentImage] = useState<string | null>(null);

  const handlePersonUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGarmentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGarmentImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTryOn = () => {
    toast.success("Try-on processing started! This may take a few moments.");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Try-On Tester</h1>
          <p className="text-muted-foreground">Test virtual try-on with your images</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                Person Image
              </CardTitle>
              <CardDescription>Upload an image of a person</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  {personImage ? (
                    <img src={personImage} alt="Person" className="max-h-64 mx-auto rounded" />
                  ) : (
                    <div className="space-y-2">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload person image</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePersonUpload}
                    className="hidden"
                    id="person-upload"
                  />
                  <label htmlFor="person-upload">
                    <Button variant="outline" className="mt-4" asChild>
                      <span>Choose File</span>
                    </Button>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shirt className="mr-2 h-5 w-5" />
                Garment Image
              </CardTitle>
              <CardDescription>Upload an image of a garment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  {garmentImage ? (
                    <img src={garmentImage} alt="Garment" className="max-h-64 mx-auto rounded" />
                  ) : (
                    <div className="space-y-2">
                      <Shirt className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload garment image</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleGarmentUpload}
                    className="hidden"
                    id="garment-upload"
                  />
                  <label htmlFor="garment-upload">
                    <Button variant="outline" className="mt-4" asChild>
                      <span>Choose File</span>
                    </Button>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-card">
          <CardContent className="pt-6">
            <Button 
              className="w-full" 
              size="lg" 
              onClick={handleTryOn}
              disabled={!personImage || !garmentImage}
            >
              Generate Try-On Result
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TryOn;
