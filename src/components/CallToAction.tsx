import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import logo from "@/assets/logo.png";
const CallToAction = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="contato" className="min-h-screen snap-end flex flex-col items-center justify-center py-20 bg-gradient-to-br from-primary via-primary-light to-accent/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="mb-8 animate-fade-in-up flex justify-center">
        <img
          src={logo}
          alt="Porto+Saúde"
          className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 self-center">
        <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Faça Parte Desta Transformação
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Vamos levar saúde até onde ela ainda não chega.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-yellow-300" />
              <strong className="text-lg md:text-xl text-yellow-300">
                sankeis.silva@ifro.edu.br
              </strong>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-yellow-300" />
              <strong className="text-lg md:text-xl text-yellow-300">
                (69) 9 9215-9681
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
