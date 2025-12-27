import programPic from "../img/computer_learning.png";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { BookOpen, Briefcase, GraduationCap, School } from "lucide-react";

const programs = [
  {
    title: "Genel İngilizce Kursu",
    description: "Temel dil becerilerini geliştirin, günlük hayatta rahatça konuşun.",
    icon: BookOpen,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "İş İngilizcesi",
    description: "Global dünyada kariyer basamaklarını hızla tırmanın.",
    icon: Briefcase,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    title: "Sınav Hazırlık",
    description: "TOEFL, IELTS gibi akademik sınavlarda hedeflediğiniz skoru alın.",
    icon: GraduationCap,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Çocuklar için İngilizce",
    description: "Geleceğin dünya vatandaşları için eğlenceli dil eğitimi.",
    icon: School,
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
];

function Programs() {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Text & Grid Content */}
        <div className="flex flex-col gap-10 order-2 lg:order-1">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-800 leading-tight">
              “Size Uygun Bir <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                İngilizce Programı
              </span>
              <span className="text-slate-800"> Var!”</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-indigo-500 pl-4 py-1 bg-indigo-50/50 rounded-r-lg">
              Sizin hedefleriniz, sizin programınız. Her seviyeye ve ihtiyaca en uygun çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm group">
                <CardHeader className="space-y-3 pb-2">
                  <div className={`w-12 h-12 rounded-xl ${program.bg} ${program.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <program.icon size={24} strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="bg-white/50 absolute inset-0 rounded-full blur-3xl scale-90 -z-10" />
          <div className="relative w-full max-w-lg aspect-square animate-in slide-in-from-right-10 duration-1000 fade-in">
            <Image
              src={programPic}
              alt="Programs"
              fill
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Programs;
