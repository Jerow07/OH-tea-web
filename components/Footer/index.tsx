import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="absolute w-full bg-green-900 text-white text-center p-2">
      <div className="flex items-center">
        <nav className="flex flex-1 flex-col md:flex-row text-center list-none items-center font-medium pb-12 pt-6 lg:mx-64">
          <Link href="#concepto" passHref><li className="flex-1 cursor-pointer my-2 mx-4 p-2 md:mx-6">Concepto</li></Link>
          <Link href="#contacto" passHref><li className="flex-1 cursor-pointer my-2 mx-4 p-2 md:mx-6">Contacto</li></Link>
          <Link href="#" passHref><li className="flex-1 cursor-pointer my-2 mx-4 p-2 md:mx-6">Franquicias</li></Link>
          <a href="https://store.ohtea.com.ar" className="flex-1"><li className="flex-1 cursor-pointer my-2 mx-4 p-2 md:mx-6">Store</li></a>
        </nav>
        <Link href="/" passHref>
          <div className="mr-8">
            <Image src="/webp/logo-image.webp" alt="Oh! Tea" width={96} height={96} className="rounded-full cursor-pointer" />
          </div>
        </Link>
      </div>
      <span className="absolute bottom-0 transform -translate-x-1/2 pb-2 text-gray-400 text-xs">© 2021 Oh! Tea. Todos los derechos reservados.</span>
    </footer>
  )
}
