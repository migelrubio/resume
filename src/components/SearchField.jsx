/**
Renders a serach field with icon.
@component
@returns {JSX.Element} The rendered navigation component.
*/
import { TbSearch } from 'react-icons/tb'

export const SearchField = () => {
    return(
        <div className="relative">
            <input className="p-2 pl-7 bg-slate-100 rounded" type="search" placeholder='Search'/>
            <TbSearch className="absolute left-0 top-0 ml-2 mt-3"/>
        </div>
    )
}