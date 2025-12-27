import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section className="w-full py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary">
            Sıkça Sorulan Sorular (FAQ)
          </h2>
          <p className="text-xl text-muted-foreground italic">
            “Aklınıza Takılan Sorulara Cevaplar”
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">Hangi seviyede olduğumu nasıl bileceğim?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Seviye tespit sınavımız ile başlangıçtan ileri seviyeye kadar mevcut bilginizi ölçüyor ve size en uygun eğitim programını öneriyoruz.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">Sertifikamı nereden alabilirim?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Kursu başarıyla tamamladığınızda, profilinizdeki "Sertifikalarım" bölümünden dijital sertifikanızı anında indirebilirsiniz.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">Derslere nasıl erişim sağlarım?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Kayıt olduktan sonra kullanıcı panelinizden tüm ders videolarına, materyallere ve canlı ders takvimine 7/24 erişebilirsiniz.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold">Bize nereden ulaşabilirsin?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              İletişim sayfamızdaki form aracılığıyla veya whatsapp destek hattımız üzerinden bize dilediğiniz zaman ulaşabilirsiniz.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default Faq;
