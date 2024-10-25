export function Card({ children, className, title }: CardProps) {
  return (
    <div
      className={`p-4 border border-gray-500 rounded-lg bg-gray-950 ${className}`}
    >
      {title && <h2 className="mb-8 text-xs uppercase font-bold">{title}</h2>}
      {children}
    </div>
  );
}

type CardProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};
