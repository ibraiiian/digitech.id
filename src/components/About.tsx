import { Check } from "lucide-react";

const values = [
  "Semangat Inovasi",
  "Komitmen Kualitas",
  "Fokus pada Solusi",
  "Integritas",
];

const About = () => {
  return (
    <section id="tentang-kami" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
              Tentang DigiTech.id
            </h2>
            <p className="text-secondary/80 mb-8">
              DigiTech.id adalah perusahaan teknologi yang baru hadir dengan visi
              segar untuk transformasi digital. Meskipun kami adalah pendatang baru,
              tim kami terdiri dari para profesional berpengalaman yang siap
              memberikan solusi inovatif untuk mengoptimalkan proses bisnis Anda
              melalui teknologi terkini.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-secondary">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted p-8 rounded-xl animate-fade-up">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
                <p className="text-secondary">Ahli Teknologi</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-secondary">Proyek Aktif</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-secondary">Teknologi Terkini</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-secondary">Dukungan Teknis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;