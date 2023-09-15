
import { Card } from '@/components/Card'
import Image from 'next/image'

export const Details = () => {

    return(
        <Card>
            <div className="flex lg:flex-col items-center p-4 gap-4">
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
                    <a className="text-sm text-slate-500 hover:text-black" href="mailto:miguelantonio.rubio@gmail.com" target="_blank">miguelantonio.rubio@gmail.com</a>
                    <a className="text-sm text-slate-500 hover:text-black" href="https://www.linkedin.com/in/mrubioh" target="_blank">LinkedIn</a>
                </div>
            </div>
        </Card>
    )
}