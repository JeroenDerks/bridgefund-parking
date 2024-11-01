import { SubmitButton } from "components/SubmitButton";
import { redirect } from "next/navigation";
import { login } from "lib/auth";
import { ROUTES } from "utils/enums";

export default async function Home() {
  const handleLogin = async (formData: FormData) => {
    "use server";
    await login(formData);
    redirect(ROUTES.DASHBOARD);
  };

  return (
    <section className="flex flex-col w-full h-svh items-center justify-center">
      <div className="bg-slate-600 py-4 px-2 rounded-sm max-w-52">
        <form action={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="block text-gray-800 px-1 mb-2"
            required
            defaultValue={process.env.DEFAULT_EMAIL || ""}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="block text-gray-800 px-1 "
            required
            defaultValue={process.env.DEFAULT_PW || ""}
          />
          <SubmitButton className="w-full mt-4">Log In</SubmitButton>
        </form>
      </div>
    </section>
  );
}
