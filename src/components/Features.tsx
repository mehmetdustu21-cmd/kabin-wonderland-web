import { Card } from "@/components/ui/card";
import { TrendingDown, Users, Zap, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "İade Oranlarını Azaltın",
    description: "Müşterileriniz ürünleri sanal olarak deneyerek daha bilinçli alışveriş yapar, iadeler %70'e kadar azalır.",
  },
  {
    icon: Users,
    title: "Müşteri Memnuniyeti",
    description: "Yenilikçi alışveriş deneyimi ile müşteri sadakatini ve memnuniyetini artırın.",
  },
  {
    icon: Zap,
    title: "Kolay Entegrasyon",
    description: "Mevcut e-ticaret platformunuza kolayca entegre edin. Tek satır kod ile başlayın.",
  },
  {
    icon: HeadphonesIcon,
    title: "7/24 Teknik Destek",
    description: "Profesyonel destek ekibimiz her zaman yanınızda. Sorunsuz bir deneyim için buradayız.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Neden <span className="gradient-text">E Kabin?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İşletmeniz için ölçülebilir değer yaratan, kanıtlanmış çözümler
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
