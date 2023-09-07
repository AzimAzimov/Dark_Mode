import { Inter } from 'next/font/google'
// import Preloader from 'components/preloader/Preloader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Context',
  description: 'ffff'
}

export default function Home() {
  return (
    <div className={`flex h-[100vh] items-center justify-center ${inter.className}`}>
      {/* <Preloader /> */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque totam officia minus ipsum provident
      perspiciatis molestias quia ratione voluptates molestiae ducimus similique atque, illo pariatur possimus magnam
      quisquam repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque totam officia
      minus ipsum provident perspiciatis molestias quia ratione voluptates molestiae ducimus similique atque, illo
      pariatur possimus magnam quisquam repellendus?
    </div>
  )
}
