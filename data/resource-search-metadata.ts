// Search snippets may be shorter than the visible teaching title/summary.
// Canonical slugs and public guidance are not changed by these overrides.
export const resourceSearchMetadata: Record<string, {
  searchTitle?: string;
  searchDescription?: string;
}> = {
  "government-impersonation": {
    searchTitle: "Government impersonation scams",
    searchDescription: "Recognize government impersonation scams, find a genuine agency contact, and check an unexpected demand before sharing information or paying.",
  },
  "payment-redirection": {
    searchTitle: "Payment redirection scams",
    searchDescription: "Check changed bank details and invoice instructions through an established contact. Learn how payment redirection works and what to do if money was sent.",
  },
  "gaming-scams": {
    searchTitle: "Gaming scams and account safety",
    searchDescription: "Help young players check offers, protect gaming accounts, and ask for help with pressure or threats. Practice with fictional examples, not suspicious links.",
  },
  "internet-safety-parents": {
    searchTitle: "Internet safety for parents",
    searchDescription: "Build a family plan for online scams, privacy, purchases, and asking for help. Find practical conversations and settings to review with children.",
  },
  "online-safety-kids": { searchTitle: "Online safety for children" },
  "online-safety-older-adults": {
    searchTitle: "Online safety for older adults",
    searchDescription: "Practice safer calls, messages, payments, and account access. A digital safety guide for older adults and helpers that respects privacy and independence.",
  },
  "teen-online-safety": { searchTitle: "Teen online safety and privacy" },
  "after-a-scam": {
    searchDescription: "What to do after a scam: contact the payment provider, secure affected accounts, use official reporting routes, and watch for recovery scams.",
  },
  "ai-impersonation": {
    searchDescription: "Learn how AI voice impersonation scams work and verify an urgent call through a separate contact. You do not need to identify a deepfake to pause.",
  },
  "family-emergency-scams": {
    searchTitle: "Family emergency scams",
    searchDescription: "Check an urgent request from someone claiming to be family. Use a separate contact, protect private information, and plan how your household will verify calls.",
  },
  "human-targeted-attacks": {
    searchDescription: "Understand how social engineering, impersonation, and phishing target decisions. Learn to identify the request and verify it through a separate channel.",
  },
  "phone-impersonation": {
    searchTitle: "Phone impersonation scams",
    searchDescription: "Check a caller claiming to be your bank, a relative, or an organization. Caller ID is not proof: end the call and use contact details you already trust.",
  },
  "qr-link-safety": {
    searchDescription: "Check unexpected QR codes and short links before signing in or paying. Learn safer ways to reach a service and respond if you shared information.",
  },
  "verify-before-you-trust": {
    searchDescription: "Verify both the person and the request before sending money or sharing access. Use a trusted contact route that is separate from the suspicious message.",
  },
};
