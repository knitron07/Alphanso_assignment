export type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
function Button({ onClick, label, ...rest }: ButtonProps) {
  return (
    <button onClick={(e) => onClick(e)} {...rest}>
      {label}
    </button>
  );
}

export default Button;
