import type { Resource } from "./resources";
import { sources as s } from "./sources";
export const resourceEnhancements: Record<string, Partial<Resource>> = {
  "account-safety": {
    updatedAt: "2026-10-08",
    sourceCheckedAt: "2026-10-08",
    sections: [
      {
        id: "recovery-plan",
        title: "Plan how you would regain access",
        paragraphs: [
          "Check which recovery email or phone number belongs to the account. If you no longer control it, update it through the genuine service. Keep recovery codes somewhere private and accessible to you, separate from a shared workshop worksheet.",
          "If you lose access, use the provider’s official recovery process. After regaining control, review recovery settings and other signed-in sessions. Warn contacts if your account sent messages in your name. A stranger promising instant recovery is not the provider’s support team.",
        ],
        sourceUrls: [s.accounts.url],
      },
    ],
    sources: [s.accounts, s.phishing, s.recovery],
    related: [
      "after-a-scam",
      "teen-online-safety",
      "online-safety-older-adults",
    ],
  },
  "recognize-a-scam": {
    related: [
      "verify-before-you-trust",
      "human-targeted-attacks",
      "after-a-scam",
      "government-impersonation",
    ],
  },
  "suspicious-message": {
    updatedAt: "2026-10-08",
    sourceCheckedAt: "2026-10-08",
    sections: [
      {
        id: "message-context",
        title: "A text message is not a safer channel",
        paragraphs: [
          "Smishing is phishing sent by text message. A delivery fee, bank alert, or school notice can use the same pressure as a deceptive email. Check the request in the service you already use, rather than deciding from the sender name or a familiar logo.",
          "For families, practice with a made-up message. Ask what it wants you to do and where you could check separately. Do not ask a child to open a suspicious link as an exercise.",
        ],
        sourceUrls: [s.phishing.url],
      },
    ],
    sources: [s.phishing, s.recovery],
    related: [
      "qr-link-safety",
      "account-safety",
      "after-a-scam",
      "gaming-scams",
      "payment-redirection",
    ],
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
