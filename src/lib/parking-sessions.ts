import { redirect } from "next/navigation";
import { ACCESSTOKEN, ROUTES } from "utils/enums";
import { cookies } from "next/headers";
import * as i from "types";

export async function getParkingSessions(): Promise<i.ParkingSession[]> {
  try {
    const { get } = await cookies();

    const accessToken = get(ACCESSTOKEN)?.value;

    if (!accessToken) throw new Error("No access token available");

    const url = `${process.env.API_URL}/parking/sessions/list?offset=0&limit=100`;
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
