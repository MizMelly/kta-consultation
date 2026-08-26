import type { FormQuestion } from "../types/forms.types";

const joinTeamQuestions: FormQuestion[] = [
  {
    id: "fullName",
    name: "fullName",
    type: "text",
    question:
      "Hi! Welcome to Konfirm Tech Africa. Let's start with your full name.",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    id: "emailAddress",
    name: "emailAddress",
    type: "email",
    question: "What's the best email address to reach you?",
    placeholder: "name@example.com",
    required: true,
  },
  {
    id: "phoneNumber",
    name: "phoneNumber",
    type: "tel",
    question:
      "What's the best phone or WhatsApp number to reach you?",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    id: "location",
    name: "location",
    type: "text",
    question:
      "Which city and country are you currently based in?",
    placeholder: "For example, Lagos, Nigeria",
    required: true,
  },
  {
    id: "workPreference",
    name: "workPreference",
    type: "radio",
    question: "How would you like to grow with KTA?",
    required: true,
    options: [
      {
        label: "Full-Time",
        value: "full_time",
      },
      {
        label: "Internship",
        value: "internship",
      },
      {
        label: "Volunteer",
        value: "volunteer",
      },
      {
        label: "Talent Community",
        value: "talent_community",
      },
    ],
  },
  {
    id: "areaOfInterest",
    name: "areaOfInterest",
    type: "radio",
    question: "What role or area are you interested in?",
    required: true,
    options: [
      {
        label: "Software Development",
        value: "software_development",
      },
      {
        label: "UI/UX Design",
        value: "ui_ux_design",
      },
      {
        label: "Graphic Design",
        value: "graphic_design",
      },
      {
        label: "Video Editing & Motion Graphics",
        value: "video_editing",
      },
      {
        label: "Digital Marketing",
        value: "digital_marketing",
      },
      {
        label: "Social Media",
        value: "social_media",
      },
      {
        label: "Content Creation",
        value: "content_creation",
      },
      {
        label: "SEO",
        value: "seo",
      },
      {
        label: "Business Development",
        value: "business_development",
      },
      {
        label: "Project Management",
        value: "project_management",
      },
      {
        label: "Other",
        value: "other",
      },
    ],
  },
  {
    id: "preferredRole",
    name: "preferredRole",
    type: "text",
    question: "What role are you interested in?",
    placeholder: "Enter your preferred role",
    required: true,
    condition: {
      field: "areaOfInterest",
      equals: "other",
    },
  },
  {
    id: "aboutApplicant",
    name: "aboutApplicant",
    type: "textarea",
    question: "Tell us a little about yourself.",
    description:
      "Share your skills, experience, what you're currently learning, or what you'd like to contribute.",
    placeholder: "Tell us about yourself",
    required: true,
  },
  {
    id: "portfolioUrl",
    name: "portfolioUrl",
    type: "url",
    question:
      "Do you have a portfolio, website, GitHub, LinkedIn profile, or any other work you'd like us to see?",
    description: "This question is optional.",
    placeholder: "https://",
    required: false,
  },
  {
    id: "professionalProfileLinks",
    name: "professionalProfileLinks",
    type: "textarea",
    question:
      "Do you have any social media or professional profiles you'd like to share?",
    description:
      "You can share LinkedIn, Instagram, X, TikTok, or any other relevant profile. Add one link per line. This question is optional.",
    placeholder: "Paste your profile links here",
    required: false,
  },
  {
    id: "cv",
    name: "cv",
    type: "file",
    question: "Do you have a CV or Resume you'd like to share?",
    description: "This question is optional.",
    required: false,
  },
  {
    id: "videoIntroductionUrl",
    name: "videoIntroductionUrl",
    type: "url",
    question: "Please share your video introduction.",
    description:
      "Record a 2–3 minute video introducing yourself, your skills, and why you're interested in joining Konfirm Tech Africa. Upload it to Google Drive, make sure the link is accessible, and paste the link below.",
    placeholder: "Paste your Google Drive video link",
    required: false,
  },
];

export default joinTeamQuestions;