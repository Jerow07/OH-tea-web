import Image from 'next/image'

export const Cta = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2>Pedí el tuyo en</h2>
      <div className="m-3">
        <a href="https://www.rappi.com.ar/restaurantes/141248-oh-tea-buenos-aires-buenos-aires" target="_blank" rel="noreferrer"><button className="px-5 pt-3 pb-2 m-4 bg-white text-black rounded-md"><Image src="/webp/rappi.webp" alt="Loveat" width={74} height={29} /></button></a>
      </div>
    </div>
  )
}