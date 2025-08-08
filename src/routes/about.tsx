import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <div className="p-2 text-gray-400">A paixão por mangás é a nossa força motriz. Na NOX, acreditamos que a arte e a narrativa das histórias em quadrinhos japonesas devem ser acessíveis a todos, em qualquer lugar.
                              Nossa plataforma foi criada por fãs, para fãs. Queremos oferecer um espaço onde a sua jornada de leitura seja única, com ferramentas intuitivas para organizar sua biblioteca, descobrir novos títulos e se conectar com uma comunidade que compartilha do mesmo amor por essa cultura.
                              Junte-se a nós e faça parte da nossa história, enquanto exploramos um universo sem limites, quadro a quadro. Na NOX, o próximo capítulo está sempre esperando por você.
  </div>
}