export default function ButtonLink({ children, color, onClick, href, download }) {
    const colorMap = {
        primary: "button-primary",
        secondary: "button-secondary",
    };
    return (
        <a
            className={`px-3 py-2 rounded-[0.75rem] cursor-pointer inline-block font-medium hover:scale-101 hover:backdrop-brightness-70 hover:shadow-md ${
                color && colorMap[color]
            }`}
            href={href}
            target='_blank'
            onClick={onClick ? onClick : null}
            download={download}
        >
            {children}
        </a>
    );
}
