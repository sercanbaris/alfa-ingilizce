import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

function Learning() {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden bg-slate-900">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-16 text-center shadow-2xl flex flex-col items-center gap-10">

          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-100 text-sm font-semibold tracking-wider uppercase mb-4 border border-blue-500/30">
              Dünyanın Kapılarını Açın
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Online İngilizce Kursumuzla <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Tanışmaya Hazır Mısınız?
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-3xl mx-auto font-light">
            Sıradan metotları unutun. Kendi hızınızda, alanında uzman eğitmenler ve
            yenilikçi interaktif yöntemlerle İngilizceyi yaşayarak öğrenin.
            Sınırları kaldırın, hedeflerinize en kısa yoldan ulaşın!
          </p>

          <Button size="lg" className="gap-3 text-lg h-16 px-10 rounded-full shadow-xl shadow-green-500/20 hover:shadow-green-500/40 bg-[#25D366] hover:bg-[#128C7E] text-white border-none transition-all hover:scale-105">
            <FaWhatsapp className="text-3xl" />
            <span className="font-bold">WhatsApp İle Hemen Başla</span>
          </Button>

        </div>
      </div>
    </section>
  );
}

export default Learning;
