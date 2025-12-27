import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full py-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 px-6">
        <div className="relative w-40 h-16 opacity-90 hover:opacity-100 transition-opacity">
          <Image src="/ingilizce_konusma_ens_logo.jpeg" alt="Logo" fill className="object-contain rounded-md" />
        </div>
        <div className="text-center text-sm md:text-base text-muted/60">
          © {new Date().getFullYear()} All rights reserved by İngilizce Konuşma Enstitüsü
        </div>
      </div>
    </footer>
  );
}

export default Footer;
