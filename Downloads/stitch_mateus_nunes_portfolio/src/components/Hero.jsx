import fotoPerfil from '../assets/perfil-novo.jpeg';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 hero-gradient overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

                <div className="w-24 h-24 rounded-full p-1 bg-linear-to-tr from-primary to-secondary mb-8">
                    <img
                        src={fotoPerfil}
                        alt="Mateus Nunes Profile"
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
                    Olá! Me chamo <span className="text-[#d095ff]">Mateus Nunes</span>
                </h1>

                <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-10 font-medium">
                    Desenvolvedor de Soluções Inteligentes e Automações, transformando processos complexos em fluxos eficientes e escaláveis.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <a className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-variant px-8 py-3 rounded-xl transition-all border border-outline-variant/20" href="https://github.com/teusluv" target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined">terminal</span>
                        <span>Github</span>
                    </a>
                    <a
                        href="https://wa.me/5575991873533?text=Olá,%20gostaria%20de%20um%20orçamento!"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-linear-to-r from-primary to-primary-container text-on-primary-container px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                    >
                        Fazer Orçamento
                    </a>
                </div>

            </div>
        </section>
    );
}