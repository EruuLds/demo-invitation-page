export default function ButtonLink({ children, color, small, onClick, href, download, grow }) {
    const colorMap = {
        primary: "button-primary",
        secondary: "button-secondary",
    };
    return (
        <a
            className={`cursor-pointer inline-block font-medium hover:scale-101 hover:backdrop-brightness-70 hover:shadow-md 
            ${grow ? 'w-full' : 'w-fit'}
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
