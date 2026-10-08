import type { Resource } from "./resources";
import { sources as s } from "./sources";
export const resourceEnhancements: Record<string, Partial<Resource>> = {
  "recognize-a-scam": {
    related: [
      "verify-before-you-trust",
      "human-targeted-attacks",
      "after-a-scam",
    ],
  },
  "suspicious-message": {
    related: ["qr-link-safety", "account-safety", "after-a-scam"],
  },
  "verify-before-you-trust": {
    summary:
      "Verification means independently checking both who is asking and what they want before you send money, credentials or access. Use a contact route you already trust, not one supplied by the suspicious request.",
    readingMinutes: 5,
    updatedAt: "2026-10-07",
    editorial: { reviewedAt: "2026-10-07" },
    sections: [
      {
        id: "why-verify",
        title: "Why familiarity is not enough",
        paragraphs: [
          "A name, voice, photo or video can be imitated. A genuine account can also be taken over. Recognizing a person’s style does not prove they are making this particular request.",
          "Verification is not an accusation. A household or organization can make it a normal step for everyone, especially when a payment destination changes or a request breaks routine.",
        ],
        sourceUrls: [s.ai.url, s.accounts.url],
      },
      {
        id: "separate-channel",
        title: "What out-of-band verification means",
        paragraphs: [
          "Out-of-band means using a separate communication route that the unexpected sender does not control. For example, stop reading a new message and call a number already saved in your contacts. For your bank, use the number on your card or an established app.",
          "Do not take the callback number, support link or second contact from the suspicious conversation. In a workplace, use the established directory and approval process. Check the details of the transaction, not merely whether the person exists.",
        ],
        sourceUrls: [s.nist.url],
      },
      {
        id: "family-verification",
        title: "Use a family phrase as one layer",
        paragraphs: [
          "Families can agree privately on a phrase for unexpected calls. Choose it together and keep it private. If it is shared or exposed, change it.",
          "A phrase is not a guarantee of identity. For a money request, also reach the person through an established number or another trusted person. If you cannot verify the story, delay the transaction rather than guess. Contact emergency services directly if there is an immediate safety concern.",
        ],
        sourceUrls: [s.ai.url, s.family.url],
      },
    ],
    sources: [s.nist, s.ai, s.accounts, s.family, s.recovery],
    related: [
      "ai-impersonation",
      "phone-impersonation",
      "family-emergency-scams",
      "after-a-scam",
    ],
  },
  "ai-impersonation": {
    title: "What is AI impersonation fraud?",
    summary:
      "AI impersonation fraud uses generated or altered voices, images, video or text to pretend to be a trusted person or organization. Verify the request independently before sending money or sharing account access.",
    readingMinutes: 5,
    updatedAt: "2026-10-07",
    editorial: { reviewedAt: "2026-10-07" },
    intro:
      "A convincing representation is not the same as a verified identity. You do not need to decide whether a call is technically a deepfake before pausing it. Check who is asking and why through an established, separate channel.",
    sections: [
      {
        id: "forms-of-impersonation",
        title: "What AI can imitate",
        paragraphs: [
          "Voice cloning produces speech that resembles another person. Synthetic audio may be used in a false family crisis. Generated video can portray a supposed executive or official. Text tools can produce fluent messages and believable profiles.",
          "The underlying fraud still depends on a request: transfer money, disclose credentials, trust a false investment, or bypass a normal check. AI is a tool in the scheme, not proof that every unfamiliar message is AI-generated.",
        ],
        sourceUrls: [s.ai.url],
      },
      {
        id: "accounts-and-authority",
        title: "Impersonation can also start with a real account",
        paragraphs: [
          "An attacker who controls someone’s email or social account may approach their contacts from it. That is account takeover; it does not require AI. Generated messages can be combined with it, so a familiar account alone is insufficient evidence for an unusual request.",
          "For a family emergency, contact the relative or a second trusted person. For an executive or supplier request, use normal payment approvals. For an authority claim, reach the institution independently. The appropriate check depends on the requested action.",
        ],
        sourceUrls: [s.accounts.url, s.nist.url, s.family.url],
      },
      {
        id: "limits-of-detection",
        title: "What appearance cannot establish",
        paragraphs: [
          "A natural voice or polished video does not establish consent to a payment. An odd pause or visual glitch does not establish fraud either. Avoid making a high-stakes decision on a single media clue.",
          "NIST describes multiple approaches to synthetic-content transparency, including provenance and detection. This guide does not promise that a visual inspection or a detection tool can settle identity. Independent confirmation remains the practical next step.",
        ],
        sourceUrls: [
          "https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content",
        ],
      },
    ],
    sources: [
      s.ai,
      s.accounts,
      s.nist,
      s.family,
      {
        label: "NIST: Technical approaches to synthetic-content transparency",
        url: "https://www.nist.gov/publications/reducing-risks-posed-synthetic-content-overview-technical-approaches-digital-content",
        note: "Overview of transparency approaches; not an endorsement of a detection product.",
      },
    ],
    related: [
      "verify-before-you-trust",
      "phone-impersonation",
      "family-emergency-scams",
      "human-targeted-attacks",
      "after-a-scam",
    ],
  },
};
