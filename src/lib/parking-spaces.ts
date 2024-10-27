import { redirect } from "next/navigation";
import { ACCESSTOKEN, ROUTES } from "utils/enums";
import { cookies } from "next/headers";
import * as i from "types";

export async function getParkingSpaces(): Promise<i.ParkingSpace[]> {
  try {
    const { get } = await cookies();

    const accessToken = get(ACCESSTOKEN)?.value;

    if (!accessToken) throw new Error("No access token available");

    const response = await fetch(`${process.env.API_URL}/parking/spaces/list`, {
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

    return data.data?.parkingSpaces;
  } catch (error) {
    console.error("There was a problem fetching the parking spaces", error);
    redirect(ROUTES.HOME);
  }
}
