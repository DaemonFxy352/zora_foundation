export type Handout = {
  slug: string;
  resource: string;
  title: string;
  summary: string;
  preparedAt: string;
  status: "draft";
  steps: string[];
  practice: string;
  response: string;
  help: string;
};
const common = { preparedAt: "2026-10-08", status: "draft" as const };
export const handouts: Handout[] = [
  {
    ...common,
    slug: "family-verification",
    resource: "verify-before-you-trust",
    title: "Family scam verification checklist",
    summary:
      "Agree on a way to check unexpected requests before an emergency message arrives.",
    steps: [
      "Pause any request for money, sign-in codes, account access, or secrecy.",
      "End the call or message exchange. Call the person through a number already known to you.",
      "If you cannot reach them, check with another trusted person. Do not use a number supplied by the request.",
      "Ask about the exact request, not just whether the voice sounds familiar.",
      "If your family uses a private phrase, treat it as one layer, not a guarantee. Keep it off this sheet.",
      "Wait to send money until the situation is independently confirmed.",
    ],
    practice:
      "Who could you contact separately if a family member cannot answer? Write a role, not private contact details.",
    response:
      "If already acted: stop further payments and contact the affected bank or service directly.",
    help: "For an immediate threat to physical safety, contact local emergency services directly. Do not send money as a substitute for emergency help.",
  },
  {
    ...common,
    slug: "voice-cloning-response",
    resource: "ai-impersonation",
    title: "AI voice cloning scam response guide",
    summary:
      "A familiar voice is not proof of identity. Verify the request through another route.",
    steps: [
      "Pause when a voice asks for urgent money, credentials, or secrecy.",
      "Do not rely on background noise, emotion, or apparent voice quality to decide whether audio is genuine.",
      "End the exchange and call a known number yourself.",
      "Confirm the situation with a second trusted person if needed.",
      "Check both who is asking and what they want. Keep normal payment checks in place.",
      "If the request remains unverified, do not transfer money or share access.",
    ],
    practice:
      "An urgent voice says a relative needs money. Name one independent way to check, without using the caller’s number.",
    response:
      "If already paid or shared access: contact the payment provider or affected service promptly through genuine support.",
    help: "AI detection guesses cannot establish identity. An immediate physical emergency requires local emergency services, not a payment to the caller.",
  },
  {
    ...common,
    slug: "parent-conversation",
    resource: "internet-safety-parents",
    title: "Parent internet safety conversation guide",
    summary:
      "Use an ordinary moment to practice asking for help. Adapt the conversation to the child’s understanding.",
    steps: [
      "Ask: What do you enjoy online, and what would you like help understanding?",
      "Choose one familiar app together. Discuss who can contact the child and see their information.",
      "Agree which purchases and downloads need adult help.",
      "Ask: What could you do if someone asked for a password, private picture, or secret conversation?",
      "Name more than one trusted adult the child could approach.",
      "Practice your response: Thank you for telling me. Let’s work through this together.",
    ],
    practice:
      "Choose one setting or family habit to revisit together. Do not record passwords or a child’s private experience here.",
    response:
      "If something happened: listen without blame, stop unwanted contact, and help with the platform’s reporting process.",
    help: "For suspected child sexual exploitation, use NCMEC CyberTipline guidance linked below. Never download or forward intimate images to ask for help. Immediate danger requires emergency help.",
  },
  {
    ...common,
    slug: "teen-safety",
    resource: "teen-online-safety",
    title: "Teen online safety checklist",
    summary:
      "Protect your privacy and keep help available. You do not have to handle threats alone.",
    steps: [
      "Check what a stranger could learn from your public profile and location settings.",
      "Use different passwords for different accounts and enable an extra sign-in check.",
      "Keep sign-in codes private, even if a friend’s account asks for one.",
      "Check unexpected account warnings by opening the genuine app, not a message link.",
      "Find the block and report controls before you need them.",
      "Choose a trusted adult you could contact if something becomes uncomfortable or threatening.",
    ],
    practice:
      "A friend’s account asks for your login code. What separate way could you use to reach the friend?",
    response:
      "If threatened over intimate images: do not pay or send more images. Seek a trusted adult and NCMEC support. This is not your fault.",
    help: "Do not download or forward intimate images. NCMEC’s Take It Down has eligibility and platform limits; read its instructions. For immediate danger, seek emergency help.",
  },
  {
    ...common,
    slug: "older-adult-scam-prevention",
    resource: "online-safety-older-adults",
    title: "Older adult scam prevention checklist",
    summary:
      "Take time to check. Keep control of your decisions, accounts, and private information.",
    steps: [
      "Pause when an unexpected caller or message requests money, information, or device access.",
      "For bank questions, use the number on your card or statement, or your usual banking app.",
      "Verify urgent family requests through a known contact, even if the voice sounds familiar.",
      "Do not call a repair number in an alarming pop-up. Choose a trusted support provider independently.",
      "Ask for explanations at your own pace. Helpers do not need to keep your passwords or codes.",
      "Keep genuine support contact information accessible and separate from passwords.",
    ],
    practice:
      "Choose one everyday task to practice with a helper. What would make it easier: larger text, written steps, or a slower pace?",
    response:
      "If already acted: stop the exchange and contact the bank or affected service directly. Ask about available recovery options; recovery is not guaranteed.",
    help: "This is general education. A trusted person can help with practical steps while you retain control. Contact emergency services for immediate physical danger.",
  },
  {
    ...common,
    slug: "suspicious-message-worksheet",
    resource: "suspicious-message",
    title: "Suspicious message verification worksheet",
    summary:
      "Use a fictional example or summarize a request without recording personal details. Do not open suspicious links for practice.",
    steps: [
      "Identify the claimed sender: a bank, delivery service, school, colleague, or someone else.",
      "Name the action requested: payment, sign-in, download, information, or a reply.",
      "Notice any deadline, threat, secrecy request, or unusual payment method.",
      "Choose a separate route to check: a known app, established website, or trusted number.",
      "Check the exact request through that route. A logo or sender name does not confirm it.",
      "Leave the requested action unfinished while checking.",
    ],
    practice:
      "Complete on paper: The request is _____. I can check separately by _____. Until then I will _____.",
    response:
      "If credentials were entered, use the real service to secure the account. If money was sent, contact the payment provider promptly.",
    help: "Use the after-a-scam guide for detailed next steps. Never write passwords, account numbers, or private incident evidence on a group worksheet.",
  },
  {
    ...common,
    slug: "after-scam-immediate-actions",
    resource: "after-a-scam",
    title: "After a scam: immediate action guide",
    summary:
      "Start with the affected payment or account. You do not need a perfect timeline before asking for help.",
    steps: [
      "End contact and stop further payments. Do not follow another instruction from the suspected scammer.",
      "Contact the bank, card issuer, or payment provider through genuine support. Ask whether the payment can be stopped or reversed.",
      "Secure affected accounts: follow official recovery instructions, replace exposed passwords, and check recovery details.",
      "Enable additional sign-in protection and review other active sessions where available.",
      "Keep messages, receipts, transaction identifiers, and case numbers safely. Do not post sensitive evidence publicly.",
      "Report through appropriate official channels and monitor affected accounts. Be wary of anyone offering guaranteed recovery for an upfront fee.",
    ],
    practice:
      "First contact: _____. Time contacted: _____. Reference number: _____. Keep completed notes private.",
    response:
      "If device access was granted, seek trusted technical help and use another trusted device for sensitive account changes. Tell workplace support if work access was affected.",
    help: "U.S. reporting: ReportFraud.ftc.gov, IdentityTheft.gov, and IC3.gov. Reporting does not replace contacting your payment provider and does not guarantee recovery. Immediate physical danger requires emergency services.",
  },
];
export function getHandout(slug: string) {
  return handouts.find((h) => h.slug === slug);
}
export function handoutForResource(slug: string) {
  return handouts.find((h) => h.resource === slug);
}
