import Carlos from "../assets/Imagemcliente.jpg";
import Ana from "../assets/Imagemcliente.jpg";
import Açucena from "../assets/Imagemcliente.jpg";

export function Testimonials() {
    return (
        <section className="py-24 px-6 bg-surface-container-lowest" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-black mb-16 text-center">O que dizem os clientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-surface-container p-10 rounded-2xl border border-outline-variant/10 relative">
                        <div className="absolute -top-4 -left-4 text-primary opacity-20">
                            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                        </div>
                        <div className="flex gap-1 mb-6 text-primary">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            ))}
                        </div>
                        <p className="text-on-surface text-lg italic mb-8">
                            "O Mateus transformou completamente nossa operação logística com automações simples e geniais."
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={Carlos} alt="Carlos" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-bold">Carlos M.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-container p-10 rounded-2xl border border-outline-variant/10 relative">
                        <div className="absolute -top-4 -left-4 text-primary opacity-20">
                            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                        </div>
                        <div className="flex gap-1 mb-6 text-primary">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            ))}
                        </div>
                        <p className="text-on-surface text-lg italic mb-8">
                            "Profissional extremamente competente e com uma visão técnica invejável. A entrega superou todas as expectativas."
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={Ana} alt="Ana" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-bold">Ana P.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface-container p-10 rounded-2xl border border-outline-variant/10 relative">
                        <div className="absolute -top-4 -left-4 text-primary opacity-20">
                            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                        </div>
                        <div className="flex gap-1 mb-6 text-primary">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            ))}
                        </div>
                        <p className="text-on-surface text-lg italic mb-8">
                            "Mateus é um profissional dedicado, esforçado e com um grande potencial, me ajudou muito com a automação de processos em empresas."
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={Açucena} alt="Açucena" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <p className="font-bold">Açucena T.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}