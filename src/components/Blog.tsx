import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Transformasi Digital untuk UKM",
    excerpt: "Panduan lengkap memulai transformasi digital untuk usaha kecil dan menengah.",
    date: "15 Mar 2024",
    author: "Tim DigiTech",
    category: "Digital Transformation",
  },
  {
    title: "Tren Teknologi 2024",
    excerpt: "Eksplorasi tren teknologi terbaru yang akan mengubah lanskap bisnis.",
    date: "10 Mar 2024",
    author: "Tim DigiTech",
    category: "Tech Trends",
  },
  {
    title: "Keamanan Siber untuk Bisnis",
    excerpt: "Tips penting mengamankan data dan infrastruktur digital perusahaan.",
    date: "5 Mar 2024",
    author: "Tim DigiTech",
    category: "Cybersecurity",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Blog & Insights
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Temukan artikel terbaru seputar teknologi dan transformasi digital untuk
            bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-secondary/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-2">
                  {post.title}
                </h3>
                <p className="text-secondary/80 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors cursor-pointer">
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;