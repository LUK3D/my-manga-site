import { createFileRoute } from '@tanstack/react-router'
import image from "@/assets/images/bh_girl.webp"
import { BorderBeam } from '@/components/magicui/border-beam'
import { ComicText } from '@/components/magicui/comic-text'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col w-full bg-transparent text-gray-200 ">
      <div className='min-h-[400px] w-full bg-gradient-to-r relative from-stone-900 to-violet-900 grid grid-cols-2 rounded-2xl overflow-hidden'>
        <div className='flex flex-col space-y-4 p-14 '>
          <div className='  text-left w-[200px] p-0 relative mb-4'>
            <ComicText fontSize={5}>NOX</ComicText>
          </div>
          <p className='text-5xl outfit-bold text-white '>Bora ler alguns mangás Juntos?</p>
          <p className='opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta enim animi ipsa. Error inventore nemo optio laboriosam sunt, assumenda ab libero magni dolor asperiores cumque tempore. Maiores laborum cupiditate saepe?</p>
          <div>
            <button
              className='bg-purple-500 outfit-bold px-5 py-2 rounded-md text-white mt-5 active:scale-95 transition hover:saturate-200'
            >COMEÇAR A LER</button>
          </div>
        </div>
        <img className='absolute w-2/6  object-center right-0 -top-2/5 filtered-img' src={image} ></img>
        <BorderBeam duration={8} size={100} />
        <div>
        </div>
      </div>
      <div className='flex flex-col py-4 w-full'>
        <h1 className='outfit-bold uppercase border-l-8 pl-2 border-pink-700'>Lançamentos Recente</h1>
        <div className='w-full flex px-13 pt-5'>
          <Carousel className='w-full' opts={{ loop: true }}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 cursor-pointer" role='button'>
                    <div className='h-[150px] w-full bg-gray-900 rounded-2xl p-4 flex relative overflow-hidden'>
                      <img
                        src="https://img.mangamirai.com/products/BT000190758300100102/book_cover(2).jpg?ver=bba0cb5beca7c347623998a5feda4ac8bc78defe"
                        className={cn([
                          'rounded-lg overflow-hidden'
                        ])}
                        alt="" />
                      <div className='flex flex-col p-4'>
                        <p className='outfit-bold text-xl'>Naruto Shippuden</p>
                        <p>Capítulos: 23/10</p>
                        <div className='flex items-center pt-2'>
                          <p className='px-2  bg-pink-700 text-white rounded-md'>Ação</p>
                        </div>
                      </div>
                      <div className='absolute bottom-0 right-0 bg-amber-500 p-2 rounded-tl-2xl'>
                        <p className='text-amber-950 outfit-bold uppercase'>Novo!</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}