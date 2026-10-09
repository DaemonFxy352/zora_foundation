export const audiences = [
  {
    id: "children",
    label: "Children with a trusted adult",
    description:
      "Simple practice activities to read together, with adult help for settings and reporting.",
  },
  {
    id: "teenagers",
    label: "Teenagers",
    description:
      "Practical choices about privacy, messages, relationships, and asking for support.",
  },
  {
    id: "older-adults",
    label: "Older adults",
    description:
      "Practical ways to check unexpected requests and use everyday technology with confidence.",
  },
  {
    id: "youth-families",
    label: "Parents & families",
    description:
      "Conversation starters and shared habits for messages, accounts, and online relationships.",
  },
  {
    id: "caregivers",
    label: "Caregivers",
    description:
      "Support someone’s safety while respecting their choices, privacy, and independence.",
  },
  {
    id: "community-organizations",
    label: "Libraries, senior centers & community organizations",
    description:
      "Plain-language guidance to share at a front desk, in a group, or during a conversation.",
  },
  {
    id: "educators-facilitators",
    label: "Educators & facilitators",
    description:
      "Starting points for guided discussions and practical learning activities.",
  },
  {
    id: "digital-confidence",
    label: "People building digital confidence",
    description:
      "Small, manageable steps for safer accounts, messages, and everyday decisions.",
  },
] as const;
export const topics = [
  { id: "scams-fraud", label: "Scams & Fraud" },
  { id: "impersonation", label: "Impersonation" },
  { id: "phishing", label: "Phishing & Suspicious Messages" },
  { id: "ai-deception", label: "AI-Generated Deception" },
  { id: "privacy", label: "Online Privacy" },
  { id: "account-safety", label: "Account & Password Safety" },
  { id: "financial-fraud", label: "Financial Fraud" },
  { id: "social-engineering", label: "Social Engineering" },
  { id: "everyday-technology", label: "Safer Everyday Technology Use" },
  { id: "recovery", label: "Recovery After a Scam" },
] as const;
export const formats = [
  {
    id: "quick-guide",
    label: "Quick Guides",
    description: "Short practical guidance for common risks.",
    status: "Available now",
  },
  {
    id: "checklist",
    label: "Checklists",
    description: "Step-by-step actions people can use in the moment.",
    status: "Available now",
  },
  {
    id: "printable",
    label: "Printable Resources",
    description:
      "Materials for libraries, senior centers, schools, and community groups.",
    status: "All current guides support printing",
  },
  {
    id: "short-lesson",
    label: "Short Lessons",
    description: "Brief educational content for self-paced learning.",
    status: "Planned",
  },
  {
    id: "workshop",
    label: "Workshop Materials",
    description: "Resources for community-based training and group sessions.",
    status: "In development",
  },
  {
    id: "toolkit",
    label: "Facilitator Toolkits",
    description:
      "Preparation and teaching materials for trusted local leaders.",
    status: "In development",
  },
  {
    id: "video",
    label: "Videos",
    description: "Short educational and explainer content.",
    status: "Planned",
  },
] as const;
export type AudienceId = (typeof audiences)[number]["id"];
export type TopicId = (typeof topics)[number]["id"];
export type FormatId = (typeof formats)[number]["id"];
export function formatLabel(id: FormatId) {
  return formats.find((format) => format.id === id)!.label;
}
