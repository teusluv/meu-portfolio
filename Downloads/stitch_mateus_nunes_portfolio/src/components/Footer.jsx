export function Footer() {
    return (
        <footer className="bg-[#000000] w-full py-12 px-6 flex flex-col md:grid md:grid-cols-3 items-center gap-6 border-t border-white/5 font-['Inter'] text-sm tracking-wide uppercase">

            <div className="md:justify-self-start text-lg font-black text-white">
                Mateus Nunes
            </div>

            <div className="md:justify-self-center text-white/40 text-center normal-case">
                © 2026 Mateus Nunes. Developer of Intelligent Solutions.
            </div>

            <div className="md:justify-self-end flex gap-8">
                <a className="text-white/40 hover:text-[#d095ff] transition-colors opacity-80 hover:opacity-100" href="https://github.com/teusluv" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="text-white/40 hover:text-[#d095ff] transition-colors opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/teus-luv?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="text-white/40 hover:text-[#d095ff] transition-colors opacity-80 hover:opacity-100" href="https://instagram.com/teusluv" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>

        </footer>
    );
}