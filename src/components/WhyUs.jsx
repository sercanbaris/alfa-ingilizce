import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  GraduationCap,
  UserCog,
  Clock,
  Laptop,
  Layers,
} from "lucide-react";

const features = [
  {
    title: "Uzman Eğitmenler",
    description: "Alanında fark yaratmış, sertifikalı ve deneyimli eğitmenler ile öğrenin.",
    icon: GraduationCap,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Kişiselleştirilmiş Eğitim",
    description: "Sizin hedeflerinize ve öğrenme hızınıza özel olarak tasarlanmış müfredat.",
    icon: UserCog,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Esnek Ders Saatleri",
    description: "Hayat akışınıza engel olmadan, dilediğiniz zaman ve yerde derse katılın.",
    icon: Clock,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "İnteraktif Materyaller",
    description: "Sıkıcı kitaplar yok! Videolar, oyunlar ve canlı testler ile eğlenerek öğrenin.",
    icon: Laptop,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Her Seviyeye Uygun",
    description: "Sıfırdan zirveye. İster başlangıç ister ileri seviye olun, yeriniz hazır.",
    icon: Layers,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

function WhyUs() {
  return (
    <section className="w-full py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">

        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl animate-in slide-in-from-bottom-5 duration-700 fade-in">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm">
            Neden Bizi Seçmelisiniz?
          </h2>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            İngilizce Öğrenme Yolculuğunuzda <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Mükemmeli Hedefleyin
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto pt-2">
            Sadece bir kurs değil, sizi hedeflerinize taşıyacak bir eğitim deneyimi tasarladık.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <CardHeader className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}

          {/* Call to Action Card (Fills the last slot nicely) */}
          <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl shadow-lg text-white space-y-4 hover:shadow-2xl transition-shadow cursor-pointer group">
            <h3 className="text-2xl font-bold">Daha Fazlası Mı?</h3>
            <p className="text-blue-100">Bize katılın ve farkı kendi gözlerinizle görün.</p>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;
