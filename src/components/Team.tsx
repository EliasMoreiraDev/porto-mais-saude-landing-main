import { useInView } from "@/hooks/use-in-view";
import { User } from "lucide-react";

const Team = () => {
  const { ref, isInView } = useInView();

  const teamMembers = [
    {
      name: "Douglas Legramante",
      expertise: "Analista de sistemas\nProf. de Informática",
      img: '/public/img/douglas.png'
      
    },
    {
      name: "Elias Moreira",
      expertise: "Técnico em informática\nCursando Ads IFRO",
      img: '/public/img/elias.jpeg'
    },
    {
      name: "Jackeline Martins",
      expertise: "Técnica em Agronomia\nCursando Arquitetura e Urbanismo IFRO",
      img: '/public/img/jackeline.jpeg'
    },
    {
      name: "João Vinícius",
      expertise: "Cursando Técnico em Informática IFRO",
      img: "/public/img/joao"
    },
    {
      name: "Sankeis Pacheco",
      expertise: "Engenheiro Civil\nProf. de Edificações",
      img: '/public/img/sankeis'
    }
  ];

  return (
    <section id="equipe" className="min-h-screen snap-start flex flex-col items-center justify-center py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-5">
        <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-foreground mb-4">
              Nossa Equipe
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissionais dedicados a levar saúde para onde ela é necessária
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-700 delay-${100 + (index * 200)} ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center">
                    <img className="w-24 h-24 rounded-full" src={member.img} alt="" />
                  </div>
                  <h3 className="text-x font-bold text-card-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
