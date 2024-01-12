import { ReactNode } from "react";

type CardProps = {
  title: string;
  className?: string;
  children: ReactNode;
};
function Card({ title, children, className }: CardProps) {
  return (
    <div className={`rounded bg-stone-700 p-5 ${className}`}>
      <h1 className="font-body">{title}</h1>
      <hr className="solid my-2" />
      {children}
    </div>
  );
}
export default Card;
