export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl font-['Inter'] antialiased tracking-tight shadow-[0_8px_30px_rgb(157,78,221,0.1)]">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                <div className="text-xl font-bold tracking-tighter text-white uppercase">Mateus Nunes</div>
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-white/70 hover:text-white transition-all duration-300" href="#about">Sobre</a>
                    <a className="text-white/70 hover:text-white transition-all duration-300" href="#experience">Experiência</a>
                    <a className="text-white/70 hover:text-white transition-all duration-300" href="#projects">Projetos</a>
                    <a className="text-white/70 hover:text-white transition-all duration-300" href="#skills">Habilidades</a>
                    <a className="text-white/70 hover:text-white transition-all duration-300" href="#testimonials">Depoimentos</a>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-3 text-[#d095ff]">
                        <span className="material-symbols-outlined">terminal</span>
                        <span className="material-symbols-outlined">code</span>
                    </div>
                    <a
                        href="https://wa.me/5575991873533?text=Olá,%20gostaria%20de%20um%20orçamento!"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="bg-primary text-on-primary-container px-5 py-2 rounded-md font-semibold text-sm scale-95 active:scale-90 transition-transform">
                            Fazer Orçamento
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}