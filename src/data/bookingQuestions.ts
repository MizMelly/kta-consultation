import type { FormQuestion } from "../types/forms.types";

export const bookingQuestions: FormQuestion[] = [
  {
    id: "full-name",
    name: "fullName",
    type: "text",
    question: "Welcome! To get started, what's your name?",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    id: "business-name",
    name: "businessName",
    type: "text",
    question: "What's your business name?",
    placeholder: "Enter your business or organisation name",
    required: true,
  },
  {
    id: "business-description",
    name: "businessDescription",
    type: "textarea",
    question: "What does your business do?",
    description:
      "Give us a brief description of your business and what you offer.",
    placeholder: "Tell us about your business",
    required: true,
  },
  {
    id: "online-presence",
    name: "onlinePresence",
    type: "radio",
    question: "Does your business currently have an online presence?",
    required: true,
    options: [
      {
        label: "Yes, I have a website",
        value: "website",
      },
      {
        label: "Yes, I use social media",
        value: "social_media",
      },
      {
        label: "Yes, I have both",
        value: "both",
      },
      {
        label: "No, I don't have either",
        value: "neither",
      },
    ],
  },
  {
    id: "website-url",
    name: "websiteUrl",
    type: "url",
    question: "Please share your website link.",
    placeholder: "https://yourwebsite.com",
    required: true,
    condition: {
      field: "onlinePresence",
      includes: "website",
    },
  },
  {
    id: "social-media-url",
    name: "socialMediaUrl",
    type: "url",
    question: "Please share your main social media page.",
    placeholder: "https://",
    required: true,
    condition: {
      field: "onlinePresence",
      includes: "social_media",
    },
  },
{
  id: "businessGoal",
  name: "businessGoal",
  type: "radio",
  question: "What are you looking to achieve?",
  required: true,
  options: [
    {
      label: "Build my online presence",
      value: "Build my online presence",
    },
    {
      label: "Get more customers",
      value: "Get more customers",
    },
    {
      label: "Improve my website",
      value: "Improve my website",
    },
    {
      label: "Improve my social media",
      value: "Improve my social media",
    },
    {
      label: "Run digital marketing campaigns",
      value: "Run digital marketing campaigns",
    },
    {
      label: "Automate parts of my business",
      value: "Automate parts of my business",
    },
    {
      label: "I'm not sure yet",
      value: "I'm not sure yet",
    },
  ],
},
  {
    id: "digital-challenge",
    name: "biggestDigitalChallenge",
    type: "textarea",
    question: "What's your biggest digital challenge right now?",
    placeholder: "Describe the main challenge you are facing",
    required: true,
  },
  {
    id: "requested-services",
    name: "requestedServices",
    type: "checkbox",
    question: "What would you like KTA to help you with?",
    description: "You can select more than one option.",
    required: true,
    options: [
      {
        label: "Website design and development",
        value: "website_development",
      },
      {
        label: "Mobile application development",
        value: "mobile_app_development",
      },
      {
        label: "Branding and graphic design",
        value: "branding_and_design",
      },
      {
        label: "Digital marketing",
        value: "digital_marketing",
      },
      {
        label: "Business strategy and consultation",
        value: "business_consultation",
      },
      {
        label: "I'm not sure yet,",
        value: "I'm not sure yet",
      },
    ],
  },
  {
    id: "phone-number",
    name: "phoneNumber",
    type: "tel",
    question: "What's the best phone or WhatsApp number to reach you?",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    id: "email-address",
    name: "emailAddress",
    type: "email",
    question: "Finally, what's your email address?",
    placeholder: "name@example.com",
    required: true,
  },
];

export default bookingQuestions;
