import React from 'react';
import { Target, Users2, TrendingUp } from "lucide-react"; 
import { useInView } from "@/hooks/use-in-view"; 

// NOTE: Substitua pelo caminho real do seu GIF! 
const animatedGif = '/img/demandagif.gif'; 

const Demand: React.FC = () => {
    const { ref, isInView } = useInView();

    const mediaAnimationClass = isInView 
        ? 'opacity-100 translate-y-0 transition-all duration-1000 delay-300' 
        : 'opacity-0 translate-y-10'; 
        
    // A animação dos cards já está configurada com base no isInView e delay

    return (
        <section 
            id="demand" 
            // 1. MUDANÇA: Tiramos o min-h-screen e o justify-center
            // O snap-start garante que a seção comece na borda da tela.
            className="snap-start flex flex-col items-center py-20 
                       bg-gray-950 text-white relative overflow-hidden" 
            style={{ 
                background: 'radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 70%)'
            }}
        >
            <div className="container mx-auto px-4 relative z-10">
                
                {/* O 'ref' para o useInView */}
                <div ref={ref} className="max-w-6xl mx-auto w-full"> {/* Adicionado w-full */}
                    
                    {/* Título da Seção (Centralizado no Topo) */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                            Nosso Mercado
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                        <p className="text-lg text-gray-400 max-w-8xl mx-auto">
                            Atuamos em regiões com alta demanda por saúde, focando em comunidades que enfrentam desafios geográficos e de acesso.
                        </p>
                    </div>

                    {/* Conteúdo Principal: Cards (Esquerda) e GIF (Direita) */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16">
                        
                        {/* Lado Esquerdo: CARDS (5/12) */}
                        <div className="w-full lg:w-5/12 order-2 lg:order-1">
                            <div className="grid grid-cols-1 gap-6">
                                
                                {/* CARD 1: Foco Regional */}
                                <div className={`bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                                        <Target className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Foco Regional</h3>
                                    <p className="text-gray-400">
                                        Porto Velho e região metropolitana, priorizando as comunidades rurais e ribeirinhas com acesso limitado.
                                    </p>
                                </div>

                                {/* CARD 2: Público-Alvo */}
                                <div className={`bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                                        <Users2 className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Público-Alvo</h3>
                                    <p className="text-gray-400">
                                        Comunidades com <strong>+500 habitantes</strong> localizadas a <strong>+10km</strong> de uma unidade de saúde eficiente, garantindo o foco na população isolada.
                                    </p>
                                </div>

                                {/* CARD 3: Potencial de Crescimento */}
                                <div className={`bg-gray-800 rounded-xl p-6 md:p-8 shadow-xl transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                                        <TrendingUp className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Potencial de Crescimento</h3>
                                    <p className="text-gray-400">
                                        Atuamos em um mercado com demanda não atendida significativa, permitindo uma rápida escala e impacto social positivo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-7/12 order-1 lg:order-2 flex justify-center lg:justify-end lg:pt-0">
                          {/* MUDANÇA AQUI: max-w-lg foi alterado para max-w-full */}
                          <div className={`max-w-full ${mediaAnimationClass}`}> 
                              <img 
                                  src={animatedGif} 
                                  alt="Animação do mapa com os pontos de demanda marcados" 
                                  className="w-full h-auto rounded-xl shadow-2xl"
                              />
                          </div>
                      </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demand;