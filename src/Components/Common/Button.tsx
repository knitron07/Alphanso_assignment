type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
};
function Button({ onClick, label }: ButtonProps) {
  return <button onClick={(e) => onClick(e)}>{label}</button>;
}

export default Button;
