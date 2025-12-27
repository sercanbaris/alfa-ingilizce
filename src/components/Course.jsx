import {
  Mic2,
  Award,
  Smartphone,
  FileCheck2,
  Zap
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Konuşma Pratiği",
    description: "Canlı derslerde ana dili İngilizce olan eğitmenlerle limitsiz pratik.",
    icon: Mic2,
    color: "text-rose-500",
    bg: "bg-rose-100",
  },
  {
    title: "Dil Seviyesi Testi",
    description: "Yapay zeka destekli analiz ile seviyenizi nokta atışı belirleyin.",
    icon: FileCheck2,
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
  {
    title: "Dijital Sertifika",
    description: "Uluslararası geçerliliği olan, LinkedIn uyumlu başarı sertifikası.",
    icon: Award,
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    title: "Tam Mobil Uyumluluk",
    description: "Metroda, parkta veya evde. Eğitiminiz cebinizde, bahane yok.",
    icon: Smartphone,
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
];

function Course() {
  return (
    <section className="w-full py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 relative z-10">

        <div className="text-center space-y-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium">
            <Zap size={14} className="fill-yellow-400 text-yellow-500" />
            <span>Hızlandırılmış Öğrenim</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Kursumuzun <span className="underline decoration-4 decoration-primary/30 underline-offset-4">Fark Yaratan</span> Özellikleri
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Sadece ders anlatmıyoruz, bir dil edinme ekosistemi sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.bg} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 -z-10 blur-xl scale-95`} />

              <Card className="flex items-start p-8 gap-6 h-full border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-3xl">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center`}>
                  <feature.icon size={32} strokeWidth={2.5} />
                </div>
                <div className="text-left space-y-3">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Course;
