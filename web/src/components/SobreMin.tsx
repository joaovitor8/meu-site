
export const SobreMin = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-4/5 w-[95%] flex flex-col items-center justify-between p-5">
        <h2 className="text-3xl">Sobre min</h2>
        <div className="h-4/5 w-full flex">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <p className="text-xl">Developer</p>
            <p>Web</p>
            <p>Front-End</p>
          </div>
          <div className="w-1/2 flex flex-col justify-between p-5 bg-gray-800 rounded-xl shadow-white shadow-sombraLadosIguais">
            <p className="text-center">Olá, me chamo João Vitor, sou um jovem entusiasta da tecnologia com uma paixão por aprender e crescer na área, atualmente sou aluno na ADA e estou estudando desenvolvimento Front-End com ReactJS.</p>
            <p>Ultima atualização: ??/??/20??</p>
          </div>
        </div>
      </div>
    </div>
  )
}
