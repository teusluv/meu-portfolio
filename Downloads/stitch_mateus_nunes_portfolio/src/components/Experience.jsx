export function Experience() {
    return (
        <section className="py-24 px-6 bg-background" id="experience">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-black mb-12 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">work</span>Experiências
                        </h2>
                        <div className="space-y-12 border-l-2 border-surface-variant ml-4 pl-8">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary neon-glow"></div>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">Novembro 2024 - Presente</span>
                                <h3 className="text-xl font-bold mb-1">Desenvolvedor de Automações e Full Stack</h3>
                                <p className="text-on-surface-variant text-sm mb-4">Freelance / Consultoria</p>
                                <p className="text-on-surface-variant">Desenvolvimento de aplicações robustas com Java e React, aliado à automação inteligente de processos utilizando n8n.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-black mb-12 flex items-center gap-3">
                            <span className="material-symbols-outlined text-secondary">school</span> Educação
                        </h2>
                        <div className="space-y-12 border-l-2 border-surface-variant ml-4 pl-8">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-secondary"></div>
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">Jan 2025 - Dez 2028</span>
                                <h3 className="text-xl font-bold mb-1">Ciência da Computação</h3>
                                <p className="text-on-surface-variant text-sm mb-4">Unifacs</p>
                                <p className="text-on-surface-variant">Bacharelado com foco em fundamentos teóricos sólidos, complexidade computacional e desenvolvimento de sistemas inteligentes de alto desempenho.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}