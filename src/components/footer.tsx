export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-gray-300 py-8 pb-20 mt-10 w-full">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white">NOX</h2>
                    <p className="text-sm mt-1">O seu portal de mangás online</p>
                </div>

                <div className="text-center md:text-right text-sm space-y-1">
                    <p>
                        &copy; {new Date().getFullYear()} NOX. Todos os direitos reservados.
                    </p>
                    <p>
                        Feito com ❤️ por fãs de mangá.
                    </p>
                </div>
            </div>
        </footer>
    )
}
