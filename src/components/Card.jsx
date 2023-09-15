
export const Card = ({ children, className = "" }) => {
    return(
        <div className={`w-full bg-white rounded-none lg:rounded-lg drop-shadow-sm ${className}`}>
            { children }
        </div>
    )
}