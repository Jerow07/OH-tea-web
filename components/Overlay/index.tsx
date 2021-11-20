import styled from 'styled-components'

interface IProps {
  md?: boolean;
  opacity?: number;
  height?: string;
}

const StyledOverlay = styled.div<IProps>`
  position: absolute;  
  width: 100%;
  height: ${props => props.height};
  background: rgba(0,0,0,${props => props.opacity});
  z-index: 0;
  @media (min-width: 768px) {
    display: ${props => props.md ? 'none' : 'block'}
  }
`

export const Overlay: React.FC<IProps> = ({ md = false, opacity = .25, height = '80vh' }) => {
  return (
    <StyledOverlay md={md} opacity={opacity} height={height} />
  )
}