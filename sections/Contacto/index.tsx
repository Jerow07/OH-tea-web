import styled from 'styled-components'
import { Overlay } from '../../components/Overlay'
import { ContactForm } from '../../components/ContactForm'
import { Icon } from '../../components/Icon'

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  margin: 0 2rem;
  color: #FFF;
  font-size: 1.125rem;
  line-height: 1.75rem;
  z-index: 1;
  @media (min-width: 768px) {
    width: 40%;
    margin-left: 15%;
  }
`

export const Contacto = () => {
  return (
    <section id='contacto' className="flex items-center" style={{ minHeight: '80vh', background: 'url(/webp/bg-contacto.webp), #FBA690', backgroundRepeat: 'no-repeat, no-repeat', backgroundPosition: 'right, left', backgroundSize: 'cover, cover' }}>
      <Overlay md opacity={.15} height="120%" />
      <ContactContainer>
        <h2 className="text-center text-4xl my-4 text-shadow-black" style={{ textShadow: '0 0 .25rem rgba(0,0,0,.2)' }}>Contacto</h2>
        <p>Si hay algo que quieras decirnos, podes escribirlo acá</p>
        <ContactForm />
        <br />
        <span>O escribinos un email con tu inquietud o sugerencia a <b>info@ohtea.com.ar</b></span><br />
        <div className="flex justify-between my-8 text-white">
          <a href="https://www.instagram.com/ohtea_argentina/" target="_blank" rel="noreferrer"><Icon type="instagram" color="#FFF" size="48"></Icon></a>
          <a href="https://www.facebook.com/ohteaargentina" target="_blank" rel="noreferrer"><Icon type="facebook" color="#FFF" size="48"></Icon></a>
          <a href="https://wa.me/message/T7UGIMZQPJEON1" target="_blank" rel="noreferrer"><Icon type="whatsapp" color="#FFF" size="48"></Icon></a>
        </div>
      </ContactContainer>
    </section>
  )
}
// Encontranos en:
//         <ul>
//           <li className="py-1">Cabildo 1600, Belgrano, Buenos Aires.</li>
//           <li className="py-1">Honduras 4787, Palermo Soho, Buenos Aires.</li>
//         </ul>
//         <span>Todos los días de 10 a 19 hs.</span>