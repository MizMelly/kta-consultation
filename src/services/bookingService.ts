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

  const bookingPayload = {
    ...bookingData,
    formattedTime: formatBookingTime(
      bookingData.selectedTime,
    ),
  };

  const response = await fetch(bookingApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingPayload),
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
    const parsedResponse =
      JSON.parse(responseText) as Partial<BookingApiResponse>;

    return {
      success: parsedResponse.success ?? true,
      message:
        parsedResponse.message ??
        "Your consultation has been booked successfully.",
    };
  } catch {
    return {
      success: true,
      message: responseText,
    };
  }
}

function formatBookingTime(time: string): string {
  const [hourValue, minuteValue] = time.split(":");
  const hour = Number(hourValue);

  const period = hour >= 12 ? "PM" : "AM";
  const twelveHourValue = hour % 12 || 12;

  return `${twelveHourValue}:${minuteValue} ${period}`;
}