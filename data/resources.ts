import type { EditorialResponsibility } from "./contributors";
import type { Source } from "./sources";
import type { ContentSection } from "../components/content/ContentSections";
import { fraudResources } from "./fraud-resources";
import { familyResources } from "./family-resources";
import { authorityResources } from "./authority-resources";
import { resourceEnhancements } from "./resource-enhancements";
import {
  audiences,
  type AudienceId,
  type TopicId,
  type FormatId,
} from "./resource-taxonomy";
export { audiences, topics, formats, formatLabel } from "./resource-taxonomy";
export type { AudienceId, TopicId, FormatId } from "./resource-taxonomy";
export type Resource = {
  slug: string;
  title: string;
  summary: string;
  audience: AudienceId[];
  topics: TopicId[];
  format: FormatId;
  readingMinutes: number;
  publishedAt?: string;
  editorial?: EditorialResponsibility;
  sections?: ContentSection[];
  updatedAt: string;
  download?: { url: string; label: string; fileType: string };
  printView: boolean;
  related: string[];
  intro: string;
  warningSigns: string[];
  actions: { title: string; text: string }[];
  avoid: string[];
  help: string;
  practice: { prompt: string; response: string };
  sources: Source[];
  sourceCheckedAt?: string;
  helpLinks?: Source[];
};
const allAudiences: AudienceId[] = audiences
  .filter((a) => a.id !== "children")
  .map((a) => a.id);
const publication = {
  publishedAt: "2026-10-07",
  updatedAt: "2026-10-07",
  printView: true,
};
const recoverySource = {
  label: "FTC: What to do if you were scammed",
  url: "https://consumer.ftc.gov/articles/what-do-if-you-were-scammed",
};

const launchResources: Resource[] = [
  {
    slug: "recognize-a-scam",
    title: "Recognize a scam",
    summary:
      "Notice pressure, unusual payment requests, and stories that need an independent check.",
    audience: allAudiences,
    topics: [
      "scams-fraud",
      "financial-fraud",
      "social-engineering",
      "recovery",
    ],
    format: "quick-guide",
    readingMinutes: 3,
    ...publication,
    related: ["verify-before-you-trust", "suspicious-message"],
    intro:
      "A scam is an attempt to trick someone into giving away money, information, or access. It can arrive in an ordinary call, message, or conversation. You do not have to decide whether a story is true while someone is pressuring you.",
    warningSigns: [
      "Someone demands an immediate decision, threatens consequences, or asks you to keep the conversation secret.",
      "A prize, refund, job, or investment requires you to pay first or share sensitive information unexpectedly.",
      "A caller insists on gift cards, cryptocurrency, or a money transfer, or tells you to move savings to a ‘safe’ account.",
      "The person objects when you say you want to check with someone else. A familiar name or caller ID is not proof of identity.",
    ],
    actions: [
      {
        title: "Pause the request",
        text: "Stop before sending money or information. End the call or step away from the message. You can say, ‘I need time to check this.’",
      },
      {
        title: "Check a separate way",
        text: "Use a number from a statement, card, or contact you already trust. Ask whether the organization actually made the request.",
      },
      {
        title: "Bring in another perspective",
        text: "Talk through the request with someone you trust. Describe what you were asked to do, not just who the person claimed to be.",
      },
    ],
    avoid: [
      "Do not move money or share a sign-in code because a caller says it will protect you.",
      "Do not use the contact details supplied by the suspicious person to verify their own story.",
      "Do not assume a polished website, official-looking logo, or personal details make a request genuine.",
    ],
    help: "If you sent money, contact the bank or payment service through its official channel promptly and ask about stopping or reversing the transaction. Save messages and payment details. Recovery is not guaranteed, but asking quickly can help. Being deceived is not a personal failure.",
    practice: {
      prompt:
        "A caller says your bank account is at risk and tells you to transfer money before hanging up. What could you do first?",
      response:
        "End the call. Use the number on your bank card to ask the bank directly about your account. Do not make the transfer while you check.",
    },
    sources: [
      {
        label: "FTC: How to avoid a scam",
        url: "https://consumer.ftc.gov/articles/how-avoid-scam",
      },
      recoverySource,
    ],
  },
  {
    slug: "verify-before-you-trust",
    title: "Verify before you trust",
    summary:
      "Use a separate, familiar contact method before acting on an unexpected request.",
    audience: allAudiences,
    topics: [
      "impersonation",
      "social-engineering",
      "financial-fraud",
      "everyday-technology",
    ],
    format: "checklist",
    readingMinutes: 3,
    ...publication,
    related: ["recognize-a-scam", "ai-impersonation"],
    intro:
      "Verification means checking a request somewhere other than the conversation that delivered it. This works whether someone claims to be a relative, a colleague, a charity, or a company. You can be caring and careful at the same time.",
    warningSigns: [
      "A familiar person contacts you from a new number and asks for money or a favor involving your account.",
      "An organization changes payment details unexpectedly or sends an urgent request to confirm information.",
      "The person gives you a number to call but discourages you from using your usual contact.",
      "A request feels out of character, even if the name, photo, or voice seems familiar.",
    ],
    actions: [
      {
        title: "Identify the request",
        text: "Ask yourself: am I being asked to pay, sign in, share a code, or install something? Leave that action unfinished while you check.",
      },
      {
        title: "Choose your own route",
        text: "Call a saved number, open an app you already use, or type a known website address. A number copied from the suspicious message is not an independent check.",
      },
      {
        title: "Ask about the specific request",
        text: "Tell the person or organization what was requested. If you cannot reach them, wait. A demand for speed does not make the request more trustworthy.",
      },
      {
        title: "Decide after checking",
        text: "If the request is confirmed through a trusted channel, use that channel to discuss next steps. If it is not confirmed, do not proceed.",
      },
    ],
    avoid: [
      "Do not treat caller ID, a display name, or a profile picture as identification.",
      "Do not rely on a second person introduced by the original caller as an independent source.",
      "Do not let someone else watch your screen or guide you through a payment while you verify.",
    ],
    help: "If you are uncertain, ask a trusted person to sit with you while you contact the organization. For a workplace request, use your organization’s known reporting process. If information or money has already been shared, contact the affected service promptly.",
    practice: {
      prompt:
        "A message from a ‘new number’ says a family member needs you to pay a bill. What is an independent check?",
      response:
        "Call the family member’s previously saved number or reach another trusted contact who can speak with them directly. Do not just reply to the new number.",
    },
    sources: [
      {
        label: "CFPB: Warning signs of fraud and scams",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-are-some-classic-warning-signs-of-possible-fraud-and-scams-en-2094/",
      },
      recoverySource,
    ],
  },
  {
    slug: "ai-impersonation",
    title: "When a familiar voice may not be real",
    summary:
      "Respond calmly to possible AI impersonation without having to become a deepfake expert.",
    audience: [
      "older-adults",
      "youth-families",
      "caregivers",
      "community-organizations",
      "educators-facilitators",
    ],
    topics: ["ai-deception", "impersonation", "social-engineering"],
    format: "quick-guide",
    readingMinutes: 3,
    ...publication,
    related: ["verify-before-you-trust", "recognize-a-scam"],
    intro:
      "Artificial intelligence can be used to imitate a person’s voice or create misleading images and video. A familiar voice can feel convincing. Instead of trying to prove whether something is AI-generated, check the person and the request through a separate channel.",
    warningSigns: [
      "An unexpected emergency call asks for urgent money or secrecy.",
      "A familiar voice makes an unusual request and will not let you call back.",
      "A video or audio clip is offered as the only proof that a person or offer is genuine.",
      "You are discouraged from contacting another family member, colleague, or trusted organization.",
    ],
    actions: [
      {
        title: "Give yourself a moment",
        text: "You do not need a technical explanation to pause. Say, ‘I’m going to check and call back.’",
      },
      {
        title: "Reach the person separately",
        text: "Call the number you already have for them. If they do not answer, try a trusted family member or colleague who can help confirm the situation.",
      },
      {
        title: "Make a plan together",
        text: "Discuss in advance how your household will check unusual requests for money. Keep trusted contact details somewhere easy to find.",
      },
    ],
    avoid: [
      "Do not rely only on whether a voice sounds natural or a video looks convincing.",
      "Do not send money while an unverified caller keeps you on the line.",
      "Do not shame someone for believing a familiar voice. Focus on the next safe action.",
    ],
    help: "If someone appears to be in immediate danger, contact local emergency services directly. If money was sent, contact the payment provider through its official channel. If a young person receives a threatening request, help them involve a trusted adult without fear of punishment.",
    practice: {
      prompt:
        "You hear what sounds like a loved one asking for emergency money. Do you have to identify an AI voice before you can pause?",
      response:
        "No. You can end the call and check using a familiar number. The same verification step is useful whether the impersonation uses AI or not.",
    },
    sources: [
      {
        label: "FTC: AI and family emergency scams",
        url: "https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes",
      },
      recoverySource,
    ],
  },
  {
    slug: "suspicious-message",
    title: "What to do with a suspicious message",
    summary:
      "A simple checklist for unexpected texts, emails, and direct messages.",
    audience: allAudiences,
    topics: ["phishing", "scams-fraud", "privacy", "recovery"],
    format: "checklist",
    readingMinutes: 3,
    ...publication,
    related: ["verify-before-you-trust", "account-safety"],
    intro:
      "Phishing is a message that tries to get you to reveal information, open a harmful attachment, or visit a misleading website. It may look ordinary and contain no spelling mistakes. Focus on what the message asks you to do.",
    warningSigns: [
      "An unexpected delivery fee, invoice, prize, or account warning asks you to act through a link.",
      "A message asks for a password, payment details, or a verification code.",
      "An attachment or QR code arrives without a clear reason you can confirm.",
      "The message uses urgency to keep you from opening your usual app or contacting the sender separately.",
    ],
    actions: [
      {
        title: "Leave links and attachments alone",
        text: "Do not open them while deciding. You can check an account without using anything in the message.",
      },
      {
        title: "Open your usual app or website",
        text: "Look for the claimed issue there, or contact the organization using details you already trust.",
      },
      {
        title: "Report, then remove",
        text: "Use your email or messaging app’s report-spam or report-phishing option. Save relevant evidence first if you lost money or need to report an incident, then delete the message.",
      },
    ],
    avoid: [
      "Do not reply to prove the sender is real, and do not use an unsubscribe link in a suspicious message.",
      "Do not assume a padlock symbol or professional writing proves a site belongs to the organization.",
      "Do not forward an active suspicious link to friends as a warning; describe it or share a screenshot with personal details hidden.",
    ],
    help: "If you entered a password, change it through the genuine service and change any other accounts using that password. If you shared payment details, contact the provider. If you opened a file and suspect harmful software, update your security software, run a scan, and seek trusted technical help if needed.",
    practice: {
      prompt:
        "A text says a parcel cannot be delivered until you pay a small fee. You are expecting a parcel. What next?",
      response:
        "Check the order through the shop or delivery service you normally use. Expecting a parcel does not verify the text or its link.",
    },
    sources: [
      {
        label: "FTC: Recognize and avoid phishing",
        url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
      },
      {
        label: "NIST: Phishing guidance",
        url: "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing",
      },
    ],
  },
  {
    slug: "account-safety",
    title: "Make your accounts safer",
    summary:
      "Build a manageable routine for passwords, extra sign-in protection, and account recovery.",
    audience: allAudiences,
    topics: ["account-safety", "privacy", "everyday-technology", "recovery"],
    format: "checklist",
    readingMinutes: 4,
    ...publication,
    related: ["suspicious-message", "verify-before-you-trust"],
    intro:
      "Start with one important account, such as your email. Email often helps you reset passwords elsewhere, so protecting it matters. You do not have to fix every setting at once; work through these steps at a comfortable pace.",
    warningSigns: [
      "A sign-in alert describes activity you do not recognize.",
      "You receive a code or approval request for a sign-in you did not start.",
      "Your recovery email or phone number changes without your permission.",
      "People receive messages from your account that you did not send.",
    ],
    actions: [
      {
        title: "Use a different password for each account",
        text: "Choose long passwords that are hard to guess. A password manager can create and remember them for you; protect the manager with a strong password and its available extra sign-in protection.",
      },
      {
        title: "Add a second sign-in step",
        text: "Turn on multifactor authentication, sometimes called two-step verification. It adds a check beyond your password. Follow the service’s instructions; an authenticator app or security key can provide stronger protection than a text-message code.",
      },
      {
        title: "Keep a way back in",
        text: "Check that your recovery email and phone number are current. Store backup codes in a safe place separate from the device you normally use. Do not share them.",
      },
      {
        title: "Keep devices current",
        text: "Install software updates and use a screen lock. Review account activity through the genuine app or website, rather than a link in an unexpected alert.",
      },
    ],
    avoid: [
      "Do not reuse an email password on other sites.",
      "Do not approve unexpected sign-in prompts or give a caller your one-time code.",
      "Do not let someone providing informal help keep a copy of your passwords or recovery codes.",
    ],
    help: "If you cannot sign in or see activity you do not recognize, use the service’s official account-recovery process. From a device you trust, change the password, review recovery details, and sign out unfamiliar sessions where the service allows it. A trusted helper can guide you while you keep control of private information.",
    practice: {
      prompt:
        "Your phone asks you to approve a sign-in, but you have not tried to log in. Should you approve it to make the alert go away?",
      response:
        "No. Deny the request, then open the service directly to review your account. Repeated unexpected prompts are a reason to check your password and security settings.",
    },
    sources: [
      {
        label: "FTC: Protect your personal information",
        url: "https://consumer.ftc.gov/articles/protect-your-personal-information-hackers-and-scammers",
      },
      {
        label: "CISA: Require multifactor authentication",
        url: "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication",
      },
    ],
  },
];
export const resources: Resource[] = [
  ...launchResources.map((r) => ({ ...r, ...resourceEnhancements[r.slug] })),
  ...authorityResources,
  ...familyResources,
  ...fraudResources,
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
export type ResourceSummary = Pick<
  Resource,
  | "slug"
  | "title"
  | "summary"
  | "audience"
  | "topics"
  | "format"
  | "readingMinutes"
  | "printView"
>;
export function resourceSummaries(): ResourceSummary[] {
  return resources.map(
    ({
      slug,
      title,
      summary,
      audience,
      topics,
      format,
      readingMinutes,
      printView,
    }) => ({
      slug,
      title,
      summary,
      audience,
      topics,
      format,
      readingMinutes,
      printView,
    }),
  );
}
