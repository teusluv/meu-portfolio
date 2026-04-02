export function About() {
    return (
        <section className="py-24 px-6 bg-surface-container-lowest" id="about">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7">
                        <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                            <span className="w-12 h-1 bg-primary rounded-full"></span> Sobre mim
                        </h2>
                        <p className="text-on-surface-variant leading-relaxed text-lg mb-6">
                            Especialista no desenvolvimento de ecossistemas digitais automatizados e especialista em Spring Boot. Unindo inteligência artificial e engenharia de software, crio ferramentas robustas que não apenas funcionam, mas evoluem com o negócio.
                        </p>
                        <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                            Acredito que a tecnologia deve ser invisível e potente. Desenvolvo desde integrações complexas com n8n até backends robustos com Spring Boot e Node.js.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-primary font-medium">
                                <span className="material-symbols-outlined">email</span> teusluv2@gmail.com
                            </div>
                            <div className="flex items-center gap-2 text-primary font-medium">
                                <span className="material-symbols-outlined">location_on</span> Brasil
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 aspect-square relative">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-outline-variant/20 bg-surface-container">
                            <img alt="Code on screen" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZJrU-wLIVnqgc1cjh1Fd6DFpqqrJMsJUuDA8bwNNndoNqjVQE3Mx0-jDoZoe64veau2LF4Xhms9ugjlqANd2F3QsJKrFpOtvo6TQanaZEsXhnJ0atPRbLHJgnmNsRjPMlAM4xJriN3N4uA4syqsVtGLoM0N1giBSFPRVwar98IqhOIC5mzn1dFUGdh838OanIF4jFlFWGi_lw6KDDBVrEjvMAoymQXnvJeyVyWjMs83mx4_Y3cpVs4imyA57WuNnxHgo5Y_Pr8HbZ" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}