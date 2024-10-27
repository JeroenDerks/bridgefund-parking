"use server";

import { redirect } from "next/navigation";
import { ACCESSTOKEN, ROUTES } from "utils/enums";
import { cookies } from "next/headers";

export async function getAccessToken(): Promise<string> {
  try {
    const { get } = await cookies();

    const accessToken = get(ACCESSTOKEN)?.value;

    if (!accessToken) throw new Error("No access token available");

    return accessToken;
  } catch (error) {
    console.error("There was a problem fetching the parking sessions", error);
    redirect(ROUTES.HOME);
  }
}
