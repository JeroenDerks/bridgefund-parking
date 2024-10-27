import { redirect } from "next/navigation";
import { ROUTES } from "utils/enums";
import * as i from "types";
import { getAccessToken } from "./getAccessToken";

export async function getParkingSessions(
  accessToken: string,
  query?: string
): Promise<i.ParkingSession[]> {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) throw new Error("No access token available");

    const url = `${process.env.NEXT_PUBLIC_API_URL}/parking/sessions/list?${
      query || ""
    }`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data.data?.parkingSessions;
  } catch (error) {
    console.error("There was a problem fetching the parking sessions", error);
    redirect(ROUTES.HOME);
  }
}
