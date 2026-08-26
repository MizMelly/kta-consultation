import type {
  JoinTeamApiResponse,
  JoinTeamFormData,
} from "../types/joinTeam.types";

const joinTeamApiUrl =
  import.meta.env.VITE_KTA_JOIN_TEAM_API_URL;

export async function submitJoinTeamApplication(
  applicationData: JoinTeamFormData,
): Promise<JoinTeamApiResponse> {
  if (!joinTeamApiUrl) {
    throw new Error(
      "The application service is not configured.",
    );
  }

  const formData = createApplicationPayload(applicationData);

  const response = await fetch(joinTeamApiUrl, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(
      "We could not submit your application. Please try again.",
    );
  }

  return readResponse(response);
}

function createApplicationPayload(
  applicationData: JoinTeamFormData,
): FormData {
  const formData = new FormData();

  formData.append("fullName", applicationData.fullName);
  formData.append(
    "emailAddress",
    applicationData.emailAddress,
  );
  formData.append(
    "phoneNumber",
    applicationData.phoneNumber,
  );
  formData.append("location", applicationData.location);

  formData.append(
    "workPreference",
    applicationData.workPreference,
  );
  formData.append(
    "areaOfInterest",
    applicationData.areaOfInterest,
  );
  formData.append(
    "preferredRole",
    applicationData.preferredRole,
  );

  formData.append(
    "aboutApplicant",
    applicationData.aboutApplicant,
  );
  formData.append(
    "portfolioUrl",
    applicationData.portfolioUrl,
  );
  formData.append(
    "professionalProfileLinks",
    applicationData.professionalProfileLinks,
  );
  formData.append(
    "videoIntroductionUrl",
    applicationData.videoIntroductionUrl,
  );

  if (applicationData.cv) {
    formData.append("cv", applicationData.cv);
  }

  return formData;
}

async function readResponse(
  response: Response,
): Promise<JoinTeamApiResponse> {
  const responseText = await response.text();

  if (!responseText) {
    return {
      success: true,
      message: "Your application was submitted successfully.",
    };
  }

  try {
    return JSON.parse(responseText) as JoinTeamApiResponse;
  } catch {
    return {
      success: true,
      message: responseText,
    };
  }
}