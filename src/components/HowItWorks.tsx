import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "İletişime Geçin",
    description: "Ekibimizle görüşün ve işletmenizin ihtiyaçlarını paylaşın.",
  },
  {
    number: "02",
    title: "Platformunuza Entegre Edin",
    description: "E-ticaret sitenize kolay entegrasyon ile hızlı başlangıç yapın.",
  },
  {
    number: "03",
    title: "Ürünlerinizi Ekleyin",
    description: "Ürün katalojınızı sisteme yükleyin ve sanal deneme için hazırlayın.",
  },
  {
    number: "04",
    title: "Sonuçları Görün",
    description: "Detaylı raporlar ile iade oranlarındaki düşüşü ve satış artışını takip edin.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nasıl <span className="gradient-text">Çalışır?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 basit adımda işletmenizi dönüştürün
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border/50 relative overflow-hidden group hover:shadow-card transition-all duration-300"
            >
              <div className="absolute -right-6 -top-6 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="mb-4 inline-block">
                  <span className="text-3xl font-bold gradient-text">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
