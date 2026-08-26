const allowedCvExtensions = ["pdf", "doc", "docx"];

export const acceptedCvFileTypes = [
  ".pdf",
  ".doc",
  ".docx",
];

export function validateCvFile(
  file: File | null,
  maximumSizeInMb?: number,
): string {
  if (!file) {
    return "";
  }

  const extension = getFileExtension(file.name);

  if (!allowedCvExtensions.includes(extension)) {
    return "Please upload your CV as a PDF, DOC, or DOCX file.";
  }

  if (
    maximumSizeInMb &&
    file.size > convertMbToBytes(maximumSizeInMb)
  ) {
    return `Your CV must not be larger than ${maximumSizeInMb} MB.`;
  }

  return "";
}

function getFileExtension(fileName: string): string {
  return fileName.split(".").pop()?.toLowerCase() ?? "";
}

function convertMbToBytes(sizeInMb: number): number {
  return sizeInMb * 1024 * 1024;
}