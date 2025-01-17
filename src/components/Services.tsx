import { Code, Cloud, LineChart, Globe, Shield, Users, Database, Phone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Pengembangan Website & Aplikasi",
    description: "Solusi digital berbasis teknologi terkini untuk kebutuhan bisnis Anda.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Implementasi dan manajemen infrastruktur cloud yang aman dan scalable.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Analisis data untuk insight bisnis yang lebih baik dan pengambilan keputusan.",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategi pemasaran digital yang efektif untuk meningkatkan presence online.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Proteksi data dan sistem dari ancaman siber dengan solusi keamanan modern.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Konsultasi teknologi untuk membantu transformasi digital bisnis Anda.",
  },
  {
    icon: Database,
    title: "System Integration",
    description: "Integrasi sistem dan aplikasi untuk operasional yang lebih efisien.",
  },
  {
    icon: Phone,
    title: "Mobile Solutions",
    description: "Pengembangan aplikasi mobile untuk menjangkau pengguna lebih luas.",
  },
];

const Services = () => {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Layanan Kami
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan teknologi untuk membantu bisnis Anda
            berkembang di era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-muted hover:bg-primary transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="h-12 w-12 text-primary group-hover:text-white mb-6 transition-colors" />
              <h3 className="text-xl font-heading font-bold text-secondary group-hover:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-secondary/80 group-hover:text-white/90 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;