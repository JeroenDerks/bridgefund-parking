export function Card({ children }: CardProps) {
  return (
    <div className="p-4 border border-gray-500 rounded-lg bg-gray-950">
      {children}
    </div>
  );
}

type CardProps = {
  children: React.ReactNode;
};
