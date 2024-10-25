import { Header } from "components/Header";

export default function InAppLayout({ children }: InAppLayoutProps) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center py-10">
        <div className="max-w-4xl w-full">{children}</div>
      </div>
    </>
  );
}

type InAppLayoutProps = {
  children: React.ReactNode;
};
