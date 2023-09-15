/**
Renders a navigation component with a sticky header.
@component
@returns {JSX.Element} The rendered navigation component.
*/
import Link from 'next/link'
import { Container } from '@/components/Container'
import { SearchField } from '@/components/SearchField'
import { NavigationItem } from '@/components/NavigationItem'
import { TbCode } from 'react-icons/tb'


export const Navigation = () => {
    return (
        <div className="sticky top-0 backdrop-blur-xl z-50 bg-white py-2">
        <Container className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="flex items-center gap-2 px-2 lg:px-0">
                <Link href="/">
                    <div className="bg-sky-600 h-10 w-10 rounded text-white font-black flex items-center justify-center text-2xl">
                        <TbCode/>
                    </div>
                </Link>
                <p className='flex flex-col lg:hidden'>
                    <span className="">Miguel Rubio</span>
                    <span className="text-sm text-slate-500">Full-stack Web Developer</span>
                </p>
                <SearchField className="hidden lg:block" />
            </div>
            <div className="flex flex-1 lg:flex-0 justify-around lg:justify-end">
                <NavigationItem text="Home" icon="TbHome" href="/" />
                <NavigationItem text="History" icon="TbBuilding" href="/history" />
                <NavigationItem text="Projects" icon="TbDeviceLaptop" href="/projects" />
                <NavigationItem text="Messaging" icon="TbMessage" href="/messaging" />
                <NavigationItem text="Notifications" icon="TbNotification" href="/notifications" />
            </div>
        </Container>
        </div>
    )
}