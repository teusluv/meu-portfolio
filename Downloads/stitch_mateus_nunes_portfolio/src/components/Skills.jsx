const skillsData = [
    { category: "Front-end", icon: "brush", techs: ["React.js", "Next.js", "TypeScript"] },
    { category: "Back-end", icon: "storage", techs: ["Node.js", "Python", "Spring Boot", "FastAPI"] },
    { category: "Database", icon: "database", techs: ["SQL", "Supabase", "PostgreSQL"] },
    { category: "Automation", icon: "settings_suggest", techs: ["n8n", "Docker"] }
];

export function Skills() {
    return (
        <section className="py-24 px-6 bg-surface-container-lowest" id="skills">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">Tech Stack</h2>
                    <p className="text-on-surface-variant">Ferramentas que domino para construir o futuro.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((group, index) => (
                        <div key={index} className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
                            <h3 className="text-primary font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined">{group.icon}</span> {group.category}
                            </h3>

                            <div className="space-y-4">
                                {group.techs.map((tech, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-surface-container-low rounded-lg">
                                        <span className="font-medium">{tech}</span>
                                        <span className="text-[10px] bg-secondary-container/30 text-secondary px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                            Expert
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}