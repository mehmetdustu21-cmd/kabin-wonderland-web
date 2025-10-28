import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Alışveriş Deneyiminizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-lg text-white/90">
            e kabin ile tanışın ve geleceğin alışveriş teknolojisini bugünden deneyimleyin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group bg-white text-primary hover:bg-white/90 shadow-glow text-base px-8"
              asChild
            >
              <a href="tel:08503463864">
                <Phone className="mr-2 h-5 w-5" />
                Bize Ulaşın
              </a>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur text-base px-8"
                >
                  Demo İzle
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Demo Video</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video URL'nizi buraya ekleyebilirsiniz</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
