import { Animacao } from "@/components/Animacao"
import { Sobre } from "@/components/sobre"
import { Projetos } from "@/components/Projetos"
import { Habilidades } from "@/components/Habilidades"

export default function Home() {
  return (
    <main>
      <Animacao />
      <Sobre />
      <Habilidades />
      <Projetos />
    </main>
  )
}
