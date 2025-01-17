import { Card, CardContent } from "@/components/ui/card";
import { Computer, Globe, Database, Shield, LineChart, Phone } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur pembayaran terintegrasi dan analisis data real-time",
    icon: Globe,
    client: "MegaMart Indonesia",
    tech: ["React", "Node.js", "MongoDB"],
    duration: "3 bulan"
  },
  {
    title: "Sistem Manajemen HR",
    description: "Aplikasi pengelolaan SDM berbasis cloud dengan fitur recruitment dan performance tracking",
    icon: Computer,
    client: "PT Maju Bersama",
    tech: ["Vue.js", "Django", "PostgreSQL"],
    duration: "4 bulan"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Dashboard analitik real-time untuk monitoring dan pengambilan keputusan bisnis",
    icon: LineChart,
    client: "DataCorp Solutions",
    tech: ["React", "Python", "AWS"],
    duration: "2 bulan"
  },
  {
    title: "Mobile Banking App",
    description: "Aplikasi perbankan mobile dengan fitur keamanan tingkat tinggi",
    icon: Phone,
    client: "Bank Digital",
    tech: ["React Native", "Node.js", "MongoDB"],
    duration: "6 bulan"
  },
  {
    title: "Security System",
    description: "Implementasi sistem keamanan siber untuk infrastruktur perusahaan",
    icon: Shield,
    client: "SecureNet Corp",
    tech: ["Python", "AWS", "Kubernetes"],
    duration: "3 bulan"
  },
  {
    title: "Database Migration",
    description: "Migrasi dan optimasi database skala besar ke cloud infrastructure",
    icon: Database,
    client: "BigData Solutions",
    tech: ["AWS", "MongoDB", "Python"],
    duration: "4 bulan"
  }
];

const Portfolio = () => {
  return (
    <section id="portofolio" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Portofolio Kami
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Beberapa proyek terbaik yang telah kami kerjakan untuk klien-klien kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <project.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-medium">{project.client}</span>
                  <span className="text-secondary/60">{project.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;