
import { Card } from '@/components/Card'
import Image from 'next/image'

export const Details = () => {

    return(
        <Card>
            <div className="hidden lg:flex flex-col items-center p-4 gap-4">
                <Image 
                    src="/img/avatar.png" 
                    alt="Avatar" 
                    width={150} 
                    height={150} 
                    className="rounded-lg lg:rounded-full lg:w-14"/>
                <div className="flex flex-col gap-2 items-start lg:items-center lg:text-center">
                    <p>Miguel Rubio</p>
                    <p className="text-sm text-slate-500">Full-stack Web Developer</p>
                    <p className="text-sm text-slate-500">La Paz, Baja California Sur, Mexico</p>
                    <a className="text-sm text-slate-500 hover:text-black hover:underline" href="mailto:miguelantonio.rubio@gmail.com" target="_blank">miguelantonio.rubio@gmail.com</a>
                    <p className="flex justify-evenly w-full">
                    <a className="text-sm text-slate-500 hover:text-black hover:underline" href="https://www.linkedin.com/in/mrubioh" target="_blank">LinkedIn</a>
                    <a className="text-sm text-slate-500 hover:text-black hover:underline" href="/docs/MARH-CV.pdf" target="_blank">CV</a>
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 lg:hidden h-44 p-2">
                <div className="rounded-lg shadow bg-[url('/img/avatar.png')] bg-cover bg-center"></div>
                <a href="mailto:miguelantonio.rubio@gmail.com" target="_blank" className="rounded-lg shadow bg-[url('/img/gmail.avif')] bg-cover"></a>
                <a href="https://www.linkedin.com/in/mrubioh" target="_blank" className="rounded-lg shadow bg-[url('/img/linkedin.webp')] bg-cover bg-center"></a>
                <a href="/docs/MARH-CV.pdf" target="_blank" className="rounded-lg shadow bg-[url('/img/cv.jpg')] bg-cover bg-center"></a>
            </div>
        </Card>
    )
}