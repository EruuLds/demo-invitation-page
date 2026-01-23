import { useDataContext } from "../../../hooks/useDataContext";

export default function Button({ children, color, small, targetForm, onClick, disabled, growX, growY }) {
  const { loading, initialLoading } = useDataContext()
  const colorMap = {
    primary: "button-primary",
    secondary: "button-secondary",
    transparent: "button-transparent"
  };

  return (
    <button
      className={`cursor-pointer font-medium hover:scale-101 hover:backdrop-brightness-85 hover:shadow-md 
        ${growX ? 'w-full' : 'w-fit'}
        ${growY ? 'h-full' : 'h-fit'}
        ${color && (disabled ? 'button-disabled' : colorMap[color])}
        ${small ? 'text-xs px-2 py-1 aspect-square rounded-full' : 'px-3 py-2 rounded-[0.75rem]'}`
      }
      type={targetForm ? 'submit' : 'button'}
      form={targetForm ? targetForm : null}
      onClick={onClick}
      disabled={disabled ?? (initialLoading || loading)}
    >
      {children}
    </button>
  );
}
