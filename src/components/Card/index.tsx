export function Card({ children }: CardProps) {
  return (
    <div className="p-4 border border-gray-400 rounded-lg">{children}</div>
  );
}

type CardProps = {
  children: React.ReactNode;
};
