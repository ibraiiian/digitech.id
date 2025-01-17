import { ArrowRight, Code, Cloud, LineChart } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Solusi Digital Modern",
    description: "Menghadirkan solusi teknologi terkini untuk bisnis Anda"
  },
  {
    icon: Cloud,
    title: "Cloud-First Approach",
    description: "Infrastruktur berbasis cloud yang aman dan scalable"
  },
  {
    icon: LineChart,
    title: "Analisis Data",
    description: "Insight bisnis berbasis data untuk keputusan yang lebih baik"
  }
];

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-white -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary mb-6">
              DigiTech<span className="text-primary">.id</span> – Mewujudkan Transformasi Digital Anda
            </h1>
            <p className="text-xl md:text-2xl text-secondary/80 mb-8">
              Partner teknologi terpercaya untuk membangun masa depan digital yang lebih baik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#layanan"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Pelajari Layanan Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary/80">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;