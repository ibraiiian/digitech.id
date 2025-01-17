import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@digitech.com",
    link: "mailto:info@digitech.com",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "+62 21 1234 5678",
    link: "tel:+622112345678",
  },
  {
    icon: Globe,
    title: "Alamat",
    content: "Jakarta, Indonesia",
    link: "https://maps.google.com",
  },
];

const Contact = () => {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Hubungi Kami
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Siap membantu transformasi digital bisnis Anda. Hubungi kami untuk
            konsultasi gratis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fade-up">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Masukkan email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tulis pesan Anda"
                ></textarea>
              </div>
              <Button className="w-full">Kirim Pesan</Button>
            </form>
          </div>

          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <a
                    href={info.link}
                    className="flex items-center space-x-4 text-secondary hover:text-primary transition-colors"
                  >
                    <info.icon className="h-8 w-8" />
                    <div>
                      <h3 className="font-heading font-bold">{info.title}</h3>
                      <p className="text-secondary/80">{info.content}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;