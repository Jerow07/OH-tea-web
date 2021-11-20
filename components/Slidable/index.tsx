import Image from 'next/image'

interface IProps {
  imageUrl: string;
}

export const Slidable:React.FC<IProps> = ({ imageUrl }) => {
  return (
    <>
      <div className="w-full blur-md brightness-50 transform scale-105" style={{ height: '80vh', background: 'url(' + imageUrl + ')', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
      <Image src={imageUrl} alt="oh tea" layout="fill" objectFit="contain" className="absolute top-1/2 left-1/2" />
    </>
  )
}