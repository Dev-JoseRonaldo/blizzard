import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen flex flex-col items-center justify-start bg-[url(https://res.cloudinary.com/devjoseronaldo/image/upload/v1672246112/blizzard/hero/diablo-bg_ne2uma.png)] bg-cover bg-no-repeat">
      <div className="flex gap-5 w-full mx-auto justify-center">
        <Header />
      </div>
    </div>
  )
}
