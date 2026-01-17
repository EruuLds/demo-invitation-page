import { useDataContext } from "../../../hooks/useDataContext";

export default function Button({ children, color, small, targetForm, onClick }) {
  const { loading, initialLoading } = useDataContext()
  const colorMap = {
    primary: "button-primary",
    secondary: "button-secondary"
  };

  return (
    <button
      className={`rounded-[0.5rem] cursor-pointer font-medium hover:scale-101 hover:backdrop-brightness-70 hover:shadow-md 
        ${color && colorMap[color]}
        ${small ? 'text-sm px-2 py-1 aspect-square' : 'px-3 py-2'}`
      }
      type={targetForm ? 'submit' : 'button'}
      form={targetForm ? targetForm : null}
      onClick={onClick}
      disabled={(initialLoading || loading)}
    >
      {children}
    </button>
  );
}
