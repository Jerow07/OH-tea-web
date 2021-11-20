import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Icon } from '../Icon'

const MobileNav = styled.div`
  display: none;
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: rgba(0,0,0,.85);
  z-index: 9;
`

export const Header = () => {

  const toggleMobileNav = (show: boolean) => {
    let mobileNav = document.getElementById('mobileNav')
    if (mobileNav) mobileNav.style.display = show ? 'block' : 'none';

  }

  return (
    <header>
      <nav className="flex md:hidden text-center list-none max-w-screen-lg justify-between items-center font-medium p-8 m-auto">
        <div onClick={() => toggleMobileNav(true)}><Icon type="menu" color="#FFF" size="18" /></div>
        <div className="relative w-28 h-8 md:w-64 md:h-10">
          <Image src="/webp/logo.webp" alt="Oh! Tea" layout="fill" objectFit="contain" className="text-center" />
        </div>
        &nbsp;
        <MobileNav id="mobileNav">
          <nav className="flex md:hidden text-center list-none max-w-screen-lg justify-between items-center font-medium p-8 m-auto">
            <div onClick={() => toggleMobileNav(false)}><Icon type="close" color="#FFF" size="18" /></div>
            <div className="relative w-28 h-8 md:w-64 md:h-10">
              <Image src="/webp/logo.webp" alt="Oh! Tea" layout="fill" objectFit="contain" className="text-center" />
            </div>
            &nbsp;
          </nav>
          <div onClick={() => toggleMobileNav(false)}>
            <Link href="#concepto" passHref><li className="flex-1 cursor-pointer my-8 mx-4 p-2 md:mx-6">Concepto</li></Link>
            <Link href="#contacto" passHref><li className="flex-1 cursor-pointer my-8 mx-4 p-2 md:mx-6">Contacto</li></Link>
            <li href="#franquicia" className="flex-1 cursor-pointer my-8 mx-4 p-2 md:mx-6">Franquicias</li>
            <a href="https://store.ohtea.com.ar"><li className="flex-1 cursor-pointer my-8 mx-4 p-2 md:mx-6">Store</li></a>
          </div>
        </MobileNav>
      </nav>
      <nav className="hidden md:flex text-center list-none max-w-screen-lg justify-between items-center font-medium p-8 m-auto">
        <Link href="#concepto" passHref><li className="flex-1 cursor-pointer my-2 mx-4 p-2 md:mx-6">Concepto</li></Link>
        <Link href="#contacto" passHref><li className="flex-1 cursor-pointer my-2 mx-4 p-2 md:mx-6">Contacto</li></Link>
        <div className="relative w-28 h-8 md:w-64 md:h-10">
          <Image src="/webp/logo.webp" alt="Oh! Tea" layout="fill" objectFit="contain" className="flex-1" />
        </div>

        <li className="flex-1 cursor-pointer my-2 mx-4 p-2 md:mx-6">Franquicias</li>
        <a href="https://store.ohtea.com.ar"><li className="flex-1 cursor-pointer my-2 mx-4 p-2 md:mx-6">Store</li></a>
      </nav>
    </header>
  )
}
