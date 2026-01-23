export default function ButtonLink({ children, color, small, onClick, href, download, growX, growY }) {
    const colorMap = {
        primary: "button-primary",
        secondary: "button-secondary",
    };
    return (
        <a
            className={`cursor-pointer inline-block font-medium hover:scale-101 hover:backdrop-brightness-70 hover:shadow-md 
            ${growX ? 'w-full' : 'w-fit'} 
            ${growY ? 'h-full' : 'h-fit'}
            ${color && colorMap[color]}
            ${small ? 'text-xs px-2 py-1 aspect-square rounded-full' : 'px-3 py-2 rounded-[0.75rem]'}`

        }
            href={href}
            target='_blank'
            onClick={onClick ? onClick : null}
            download={download}
        >
            {children}
        </a>
    );
}
