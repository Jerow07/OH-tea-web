import styled from 'styled-components'
import { Overlay } from '../../components/Overlay'

const FirstConcept = styled.div`
  display: flex;
  align-items: center;
  min-height: 360px;
  background: url('/webp/bg-concepto2.webp');
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  @media (min-width: 768px) {
    min-height: 80vh;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  overflow: hidden;
  padding: 0 2rem;
  color: #FFF;
  text-align: justify;
  font-size: 1.25rem;
  line-height: 1.75rem;
  z-index: 1;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2remm;
  }
`

const ContentRight = styled.div`
  @media(min-width: 768px) {
    width: 50%;
    margin-left: 45%;
    padding: 0 3rem;
  }
`

const ContentLeft = styled.div`
  @media(min-width: 768px) {
    width: 50%;
    margin-right: 45%;
    padding: 0 3rem;
  }
`

export const Concepto = () => {
  return (
    <section id='concepto' className="relative overflow-hidden">
      <FirstConcept>
        <Overlay height="100vh"/>
        <Content>
          <ContentRight>
            <h2 className="text-center mb-8 text-4xl" style={{ textShadow: '0 0 .25rem rgba(0,0,0,.1)' }}>Concepto</h2><br />
            <p style={{ textShadow: '0 0 .25rem rgba(0,0,0,.1)' }}>Combinamos ingredientes de primera calidad, años de experiencia y prácticas reflexivas para elaborar deliciosas mezclas de té, con sabores en capas para que disfrutes al beber.</p><br />
          </ContentRight>
        </Content>
      </FirstConcept>
      <div className="relative flex items-center" style={{ minHeight: '80vh', background: 'url(/webp/bg-concepto.webp)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <Content>
          <ContentLeft>
            <p style={{ textShadow: '0 0 .25rem rgba(0,0,0,.1)' }}>
              Nos esforzamos por utilizar los mejores tés, botánicos e ingredientes premium de regiones conocidas por su excelencia. Es fácil notar la diferencia en nuestros vibrantes sabores.
            </p>
          </ContentLeft>
        </Content>
      </div>
    </section>
  )
}