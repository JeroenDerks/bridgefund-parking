import { Header } from "components/Header";

export default function InAppLayout({ children }: InAppLayoutProps) {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center py-10">
        <div className="max-w-6xl">{children}</div>
      </div>
    </>
  );
}

type InAppLayoutProps = {
  children: React.ReactNode;
};
