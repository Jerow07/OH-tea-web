import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'

export const Slogan = () => {

  return (
    <div className="flex justify-center items-center" style={{ height: '42.5vh', minHeight: '400px' }}>
      <div className="md:w-5/12 md:h-6/12 absolute flex flex-col divide-solid md:flex-row md:divide-x-2">
        <div className="self-center md:mr-8">
          <Image src="/webp/logo-image.webp" alt="Logo de Oh Tea!" width={192} height={192} className="rounded-full" />
        </div>
        <div className="w-full flex items-center text-center md:text-left">
          <h1 className="text-3xl font-medium mt-4 md:mt-0 md:ml-8 md:text-5xl">
            <Typewriter
              loop
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={['Redescubrí el arte del té', 'Ahora existe un té para cada momento']}
            />
          </h1>
        </div>
      </div>
    </div>
  )
}