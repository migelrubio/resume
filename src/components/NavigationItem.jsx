/**
Renders a navigation component with a sticky header.
@component
@returns {JSX.Element} The rendered navigation component.
*/
'use client'
import Link from 'next/link'
import { TbBuilding, TbHome, TbMessage, TbNotification, TbSchool, TbDeviceLaptop } from 'react-icons/tb'
import { usePathname } from 'next/navigation';

const getIconFromName = (icon) => {
    switch (icon) {
      case 'TbHome': return <TbHome className="w-6 h-6"/>
      case 'TbBuilding': return <TbBuilding className="w-6 h-6" />
      case 'TbDeviceLaptop': return <TbDeviceLaptop className="w-6 h-6" />
      case 'TbMessage': return <TbMessage className="w-6 h-6" />
      case 'TbNotification': return <TbNotification className="w-6 h-6" />
    }
  }

export const NavigationItem = ({ text, icon, href}) => {
    const iconEl = getIconFromName(icon);
    const pathname = usePathname();
    const path = '/' + pathname.split('/')[1]
    const active = href == path
    return(
        <Link href={href} className={`${active ? 'text-black border-b-2 border-black' : 'text-neutral-500'} hover:text-black flex flex-col items-center w-20 pb-2 lg:pb-0`}>
            {iconEl}
            <span className="text-xs hidden lg:block">{text}</span>
        </Link>
    )
}