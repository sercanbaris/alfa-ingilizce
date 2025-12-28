import onlineEducation from "../img/harikulade.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function Begining() {
  return (
    <div className="flex flex-col w-full min-h-screen relative overflow-hidden bg-background text-foreground transition-colors duration-300">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-3xl md:blur-[120px] mix-blend-normal md:mix-blend-multiply dark:mix-blend-screen dark:bg-blue-900/20" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-3xl md:blur-[120px] mix-blend-normal md:mix-blend-multiply dark:mix-blend-screen dark:bg-purple-900/20" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] bg-teal-400/20 rounded-full blur-3xl md:blur-[120px] mix-blend-normal md:mix-blend-multiply dark:mix-blend-screen dark:bg-teal-900/20" />
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 relative z-50">
        <div className="w-32 md:w-48 relative h-16">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col-reverse lg:flex-row w-full flex-1 max-w-7xl mx-auto items-center justify-between p-6 md:px-12 pb-20 gap-12 lg:gap-8">

        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 z-10 max-w-2xl">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-semibold animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="flex items-center gap-1"><Star size={14} className="fill-blue-700 dark:fill-blue-300" /> Kaliteli Dil Platformu</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1]">
            Global Dünyaya <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              İngilizce İle Bağlanın.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
            Kalıplaşmış cümleleri ezberlemek yerine, ana diliniz gibi konuşmayı öğrenin.
            Hayallerinizdeki kariyer sadece bir dil uzakta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <Button size="lg" className="h-16 px-8 rounded-full text-lg bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:-translate-y-1 gap-3">
              <FaWhatsapp className="w-6 h-6" />
              Ücretsiz Ön Görüşme
            </Button>
          </div>

        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-lg aspect-square lg:w-[600px] lg:h-[600px]">
            {/* Blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full blur-2xl md:blur-3xl -z-10 opacity-70" />

            <Image
              src={onlineEducation}
              alt="Online Education"
              fill
              className="object-contain drop-shadow-2xl animate-in zoom-in-95 duration-1000"
              priority
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Begining;
