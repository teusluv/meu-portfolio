import BlogSimples from '../assets/BlogSimples.png';
import Portfolio from '../assets/Portfolio.png';
import ApiControleFinanceiro from '../assets/ApiControleFinanceiro.png';
export function Projects() {
    return (
        <section className="py-24 px-6 bg-background" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-black mb-4">Projetos em Destaque</h2>
                        <p className="text-on-surface-variant max-w-xl">Uma seleção das minhas explorações técnicas e soluções reais desenvolvidas para o ecossistema open-source.</p>
                    </div>
                    <a className="text-primary font-bold flex items-center gap-2 border-b border-primary/20 pb-1" href="https://github.com/teusluv" target="_blank" rel="noopener noreferrer">
                        Ver todos no Github <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="group bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary/50 transition-all duration-500">
                        <div className="h-48 relative overflow-hidden">
                            <img alt="Api Controle Financeiro"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src={ApiControleFinanceiro} />
                            <div className="absolute inset-0 bg-linear-to-t from-surface-container to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-3">Criação de Api de Controle Financeiro</h3>
                            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">API REST para processamento de pagamentos, criada para integração rápida com lojas, marketplaces e serviços. Suporta: criação de pagamentos, confirmação via webhooks, consulta de status, reembolsos e logs de auditoria.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="text-[10px] px-2 py-1 bg-surface-variant rounded uppercase font-bold tracking-widest">Spring Boot</span>
                                <span className="text-[10px] px-2 py-1 bg-surface-variant rounded uppercase font-bold tracking-widest">PostgreSQL</span>
                            </div>
                            <a className="text-primary font-bold text-sm flex items-center gap-2 group/link" href="https://github.com/teusluv/Api_ControleFinaceiro.git" target="_blank" rel="noopener noreferrer">
                                Explorar Repo <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">link</span>
                            </a>
                        </div>
                    </div>

                    <div className="group bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary/50 transition-all duration-500">
                        <div className="h-48 relative overflow-hidden">
                            <img alt="Blog Simples"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src={BlogSimples} />
                            <div className="absolute inset-0 bg-linear-to-t from-surface-container to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-3">Blog Simples</h3>
                            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">O BlogSimples é uma aplicação backend (com potencial integração frontend) desenvolvida para gerenciar publicações, comentários e usuários. O objetivo principal deste projeto é consolidar conhecimentos em desenvolvimento web moderno, aplicando conceitos de API RESTful, Persistência de Dados e Injeção de Dependências. A aplicação permite que usuários criem, editem e excluam postagens, além de interagir através de comentários, servindo como uma base sólida para sistemas de gerenciamento de conteúdo (CMS).</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="text-[10px] px-2 py-1 bg-surface-variant rounded uppercase font-bold tracking-widest">Spring Boot</span>
                                <span className="text-[10px] px-2 py-1 bg-surface-variant rounded uppercase font-bold tracking-widest">PostgreSQL</span>
                                <span className="text-[10px] px-2 py-1 bg-surface-variant rounded uppercase font-bold tracking-widest">Docker</span>
                            </div>
                            <a className="text-primary font-bold text-sm flex items-center gap-2 group/link" href="https://github.com/teusluv/BlogSimples.git" target="_blank" rel="noopener noreferrer">
                                Explorar Repo <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">link</span>
                            </a>
                        </div>
                    </div>

                    <div className="group bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/10 hover:border-primary/50 transition-all duration-500">
                        <div className="h-48 relative overflow-hidden">
                            <img alt="Supabase Backend"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src={Portfolio} />
                            <div className="absolute inset-0 bg-linear-to-t from-surface-container to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-3">Portfólio</h3>
                            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Portfólio pessoal construído para apresentar meus projetos, habilidades e experiências como Desenvolvedor de Soluções Inteligentes e Automações, com foco em ecossistemas digitais, Spring Boot e inteligência artificial.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="text-[10px] px-2 py-1 bg-surface-variant rounded uppercase font-bold tracking-widest">React</span>
                                <span className="text-[10px] px-2 py-1 bg-surface-variant rounded uppercase font-bold tracking-widest">Tailwind</span>
                            </div>
                            <a className="text-primary font-bold text-sm flex items-center gap-2 group/link" href="https://github.com/teusluv/meu-portfolio.git" target="_blank" rel="noopener noreferrer">
                                Explorar Repo <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">link</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}