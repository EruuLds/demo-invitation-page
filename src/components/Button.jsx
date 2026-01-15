export default function Button({ children, color, targetForm, onClick }) {
  const colorMap = {
    primary: "button-primary",
    secondary: "button-secondary"
  };

  return (
    <button
      className={`px-3 py-2 rounded-[0.5rem] cursor-pointer font-medium hover:scale-101 hover:backdrop-brightness-70 hover:shadow-md ${
        color && colorMap[color]
      }`}
      type={targetForm ? 'submit' : 'button'}
      form={targetForm ? targetForm : null}
      onClick={onClick}
      
    >
      {children}
    </button>
  );
}
