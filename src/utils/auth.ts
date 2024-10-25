import { cookies } from "next/headers";
import { ACCESSTOKEN } from "./enums";

export async function login(formData: FormData) {
  try {
    const { set } = await cookies();

    const response = await fetch(`${process.env.API_URL}/auth/password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const accessToken = data.data.auth?.accessToken;

    if (!accessToken) throw new Error("No access token");

    const expires = new Date(Date.now() + 3600 * 1000);

    set(ACCESSTOKEN, accessToken, { expires, httpOnly: true });
  } catch (error) {
    console.error("There was a problem with the login request:", error);
  }
}

export async function logout() {
  const { delete: deleteCookies } = await cookies();
  deleteCookies(ACCESSTOKEN);
}
