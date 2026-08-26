import type {
  BookingApiResponse,
  BookingFormData,
} from "../types/booking.types";

const bookingApiUrl =
  import.meta.env.VITE_KTA_BOOKING_API_URL;

export async function submitBooking(
  bookingData: BookingFormData,
): Promise<BookingApiResponse> {
  if (!bookingApiUrl) {
    throw new Error("The booking service is not configured.");
  }

  const response = await fetch(bookingApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  if (!response.ok) {
    throw new Error(
      "We could not complete your booking. Please try again.",
    );
  }

  return readResponse(response);
}

async function readResponse(
  response: Response,
): Promise<BookingApiResponse> {
  const responseText = await response.text();

  if (!responseText) {
    return {
      success: true,
      message: "Your consultation has been booked successfully.",
    };
  }

  try {
    return JSON.parse(responseText) as BookingApiResponse;
  } catch {
    return {
      success: true,
      message: responseText,
    };
  }
}