import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Yapay Zeka Teknolojisi",
    description: "Gelişmiş AI algoritmaları ile kıyafetler vücudunuza tam oturur şekilde görüntülenir.",
  },
  {
    icon: Zap,
    title: "Anlık Deneme",
    description: "Saniyeler içinde farklı kıyafetleri deneyin, karşılaştırın ve karar verin.",
  },
  {
    icon: Shield,
    title: "Güvenli & Özel",
    description: "Tüm verileriniz şifreli ve güvenli. Gizliliğiniz bizim önceliğimiz.",
  },
  {
    icon: Smartphone,
    title: "Her Yerden Erişim",
    description: "Masaüstü, tablet veya mobil cihazınızdan dilediğiniz yerden alışveriş yapın.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Neden <span className="gradient-text">e kabin?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern teknoloji ile alışveriş deneyiminizi bir üst seviyeye taşıyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300 group"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
