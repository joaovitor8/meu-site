import Image from "next/image"

export const Footer = () => {
  return (
    <div className="h-screen flex items-center justify-between flex-col">
      <h2 className="text-3xl">Contato</h2>
      <div className="flex items-center justify-center h-20">
        <a href="https://twitter.com/Joao_Ezeki" target="_blank" className="hover:bg-blue-400 rounded-md p-3"> <Image src={"/icons/redesSociais/twitter.png"} alt={""} height={50} width={50}/> </a>
        <a href="https://www.linkedin.com/in/joaovitorezequiel/" target="_blank" className="hover:bg-blue-600 rounded-md p-3"> <Image src={"/icons/redesSociais/linkedin.png"} alt={""} height={50} width={50}/> </a>
        <a href="https://github.com/joaovitor8" target="_blank" className="hover:bg-gray-600 rounded-md p-3"> <Image src={"/icons/redesSociais/github.png"} alt={""} height={50} width={50}/> </a>
        <a href="" className="hover:bg-red-600 rounded-md p-3"> <Image src={"/icons/redesSociais/envelope.png"} alt={""} height={50} width={50}/> </a>
        <a href="" className="hover:bg-green-600 rounded-md p-3"> <Image src={"/icons/redesSociais/whatsapp.png"} alt={""} height={50} width={50}/> </a>
      </div>
      <div className="animate-rgbAnim h-5 w-full"></div>
    </div>
  )
}
