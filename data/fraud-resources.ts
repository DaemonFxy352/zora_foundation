import type { Resource } from "./resources";
import { sources as s } from "./sources";
const government = {
  label: "FTC: Avoid government impersonation scams",
  url: "https://consumer.ftc.gov/articles/how-avoid-government-impersonation-scam",
};
const agencies = {
  label: "USAGov: Official agency directory",
  url: "https://www.usa.gov/agency-index",
};
const payments = {
  label: "FBI: Business email compromise and payment verification",
  url: "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise",
};
const common = {
  updatedAt: "2026-10-08",
  sourceCheckedAt: "2026-10-08",
  printView: true,
  format: "quick-guide" as const,
  readingMinutes: 4,
};
export const fraudResources: Resource[] = [
  {
    ...common,
    slug: "government-impersonation",
    title: "Government impersonation scams: check before you respond",
    summary:
      "Do not let a claimed badge, agency name, or threat rush a payment. End the exchange and check the specific request through the agency’s genuine contact route.",
    audience: [
      "older-adults",
      "caregivers",
      "community-organizations",
      "digital-confidence",
    ],
    topics: ["impersonation", "financial-fraud", "social-engineering"],
    intro:
      "Government impersonation uses the appearance of official authority to obtain money or personal information. This guide addresses unexpected requests in the United States. It does not determine whether a tax, benefit, immigration, or court matter is valid; check genuine correspondence with the agency or an appropriate professional.",
    sections: [
      {
        id: "check-the-claim",
        title: "Separate the claimed authority from the requested action",
        paragraphs: [
          "A caller may name a real agency, display an official-looking number, or know details about you. Those details do not establish that the person represents the agency. Notice what you are being asked to do: reveal information, make an unusual payment, or remain on the line.",
          "For a practice discussion, imagine a caller says a benefit will stop unless you pay immediately. Ask the group to identify a separate contact route, not to decide the person’s benefits status. A participant should not need to reveal any actual case information.",
        ],
        sourceUrls: [government.url],
      },
      {
        id: "find-the-agency",
        title: "Find the agency independently",
        paragraphs: [
          "Use established correspondence you already trust or the official USAGov agency directory. Start again from that route rather than using a phone number or link supplied by the caller. If you need assistance navigating, ask someone you trust while keeping private identifiers out of shared notes.",
          "Checking a suspicious message does not mean ignoring a genuine notice. If you have an actual deadline or case, verify it directly and seek qualified help where needed. This safety guide cannot interpret an individual legal obligation.",
        ],
        sourceUrls: [agencies.url],
      },
    ],
    warningSigns: [
      "Immediate payment is demanded through gift cards, cryptocurrency, a wire, or a payment app.",
      "The person threatens arrest or loss of benefits to prevent an independent check.",
      "Someone tells you to move money to protect it or keep the interaction secret.",
    ],
    actions: [
      {
        title: "End the pressure",
        text: "Do not make a payment or share identifiers while on the unexpected call.",
      },
      {
        title: "Choose a genuine contact route",
        text: "Reach the agency through established contact information. Caller ID is not verification.",
      },
      {
        title: "Ask about the exact matter",
        text: "Describe the request through the verified route. Do not merely ask whether the named agency exists.",
      },
      {
        title: "Keep your next step manageable",
        text: "If you need help, ask a trusted person to sit with you while you find the agency. Use private notes for any genuine case details.",
      },
    ],
    avoid: [
      "Do not transfer money because a caller claims it must be kept safe from an investigation.",
      "Do not use a badge number, email logo, or knowledge of your address as proof.",
      "Do not send identity documents to a contact supplied by the suspicious message.",
    ],
    help: "If you paid, contact the payment provider through its genuine support route promptly. If identifiers were shared, use IdentityTheft.gov for tailored next steps. Keep messages and transaction details privately and report the attempted impersonation. Recovery is not guaranteed.",
    practice: {
      prompt:
        "A caller gives you an employee number and says you must pay today. What can you verify without continuing the call?",
      response:
        "Use the agency’s independently located contact route to ask about the matter. The number supplied by the caller cannot verify the caller.",
    },
    sources: [government, agencies, s.recovery],
    related: ["phone-impersonation", "verify-before-you-trust", "after-a-scam"],
  },
  {
    ...common,
    slug: "payment-redirection",
    title: "Payment redirection scams: verify changed payment details",
    summary:
      "Treat an unexpected change of bank details or payment instructions as a reason to pause. Verify the exact change through an established contact before sending money.",
    audience: [
      "community-organizations",
      "educators-facilitators",
      "caregivers",
      "older-adults",
    ],
    topics: ["financial-fraud", "impersonation", "phishing", "account-safety"],
    intro:
      "Payment redirection tricks a person or organization into paying the wrong recipient. It can appear in an invoice, purchase, property transaction, or familiar email thread. Business email compromise is one way this happens: an attacker imitates or gains access to trusted communications. A real-looking invoice is not proof that the destination is correct.",
    sections: [
      {
        id: "the-change",
        title: "Check the change, not just the sender",
        paragraphs: [
          "A genuine email account can be compromised, and a similar-looking address can imitate a supplier. Replies within the same thread may reach the attacker. A familiar tone or an apparently normal conversation is not an independent check.",
          "Imagine a community group receives a message changing the account for a venue deposit. A useful practice is to state exactly what changed, identify the group’s established venue contact, and pause the payment until that contact confirms the instructions. Use fictional details; do not share actual financial records in a workshop.",
        ],
        sourceUrls: [payments.url],
      },
      {
        id: "shared-process",
        title: "Make verification an ordinary process",
        paragraphs: [
          "Before the next payment, agree who can approve a change and where reliable contact details are kept. Use a contact established before the unexpected request, not a number in the new signature or attached invoice.",
          "For a small volunteer group, write a plain-language rule such as: payment changes wait for a separate callback and the usual approval. The rule should also apply to urgent requests from a senior person. This is a planning example, not a claim that a particular procedure guarantees prevention.",
        ],
        sourceUrls: [payments.url],
      },
    ],
    warningSigns: [
      "Bank details change shortly before payment is due.",
      "Someone asks to bypass the normal approval process or keep a payment confidential.",
      "A familiar sender suddenly requests gift cards, an unusual destination, or a different contact channel.",
    ],
    actions: [
      {
        title: "Pause before sending",
        text: "Leave the transfer unfinished while the changed instructions are checked.",
      },
      {
        title: "Call an established contact",
        text: "Use a number from your existing records. Confirm the precise payment change, not only the person’s name.",
      },
      {
        title: "Keep normal approvals",
        text: "Use the organization’s established payment process. Do not treat urgency as permission to bypass it.",
      },
      {
        title: "Protect the account too",
        text: "Use unique passwords and available multifactor authentication. Report unexpected account access to the designated support team.",
      },
    ],
    avoid: [
      "Do not verify new instructions by replying only to the same email thread.",
      "Do not use a newly supplied phone number to approve its own payment change.",
      "Do not assume a small test payment proves who controls the destination.",
    ],
    help: "If a transfer was sent, contact your financial institution immediately and ask it to contact the receiving institution. Notify the relevant organizational support team, preserve the instructions and transaction identifiers privately, and report internet-enabled fraud to IC3. Do not promise or assume recovery.",
    practice: {
      prompt:
        "An invoice arrives from a familiar account, but its bank details have changed. What exactly needs confirmation?",
      response:
        "Confirm that the genuine recipient authorized the new payment destination, through a contact established independently of this message. Keep the normal payment approval in place.",
    },
    sources: [payments, s.accounts, s.recovery],
    related: [
      "verify-before-you-trust",
      "suspicious-message",
      "account-safety",
      "after-a-scam",
    ],
  },
];
