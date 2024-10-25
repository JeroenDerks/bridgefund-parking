export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`p-4 border border-gray-500 rounded-lg bg-gray-950 ${className}`}
    >
      {children}
    </div>
  );
}

type CardProps = {
  children: React.ReactNode;
  className?: string;
};
