import type { Resource } from "./resources";
import { sources as s } from "./sources";
const common = {
  audience: [
    "older-adults",
    "youth-families",
    "caregivers",
    "community-organizations",
    "educators-facilitators",
    "digital-confidence",
  ] as Resource["audience"],
  format: "quick-guide" as const,
  updatedAt: "2026-10-09",
  printView: true,
};
// No original publication date is assigned to an unreleased page. Set it on first release.
export const authorityResources: Resource[] = [
  {
    ...common,
    slug: "human-targeted-attacks",
    title: "What is a human-targeted attack?",
    readingMinutes: 4,
    summary:
      "A human-targeted attack uses deception to influence a person into giving money, information, or access. The immediate target is a decision, not necessarily a software weakness.",
    topics: ["social-engineering", "impersonation", "phishing", "scams-fraud"],
    intro:
      "Trust makes ordinary life possible. An attacker can misuse that trust by borrowing an identity, creating urgency, or exploiting concern for someone else. Here, ‘human-targeted attack’ is a practical umbrella term for these situations, not a formal diagnosis or a separate type of software vulnerability.",
    sections: [
      {
        id: "how-it-works",
        title: "How manipulation becomes an attack",
        paragraphs: [
          "Consider an illustrative sequence: a message appears to come from a colleague; it describes a problem; it asks for an exception to a normal process; then it requests a payment or sign-in code. The pressure is aimed at the moment someone decides what to do.",
          "Social engineering is the manipulation. Impersonation supplies a borrowed identity. Phishing carries a deceptive request through a message or site. Fraud describes the dishonest scheme. AI-generated media can make the impersonation more convincing, but AI is not required.",
        ],
        sourceUrls: [s.nist.url, s.ai.url],
      },
      {
        id: "technical-defenses",
        title: "Technical protection and human verification work together",
        paragraphs: [
          "A system-targeted attack might exploit a software flaw. A human-targeted approach might persuade someone to authorize a transfer through a working banking app. These can overlap: a deceptive message may lead to stolen credentials or harmful software.",
          "Updates, message filtering and account protection remain useful. They cannot establish that every story or requested exception is legitimate. Add an independent check before a consequential action; do not interpret this as a reason to abandon technical defenses.",
        ],
        sourceUrls: [s.nist.url],
      },
    ],
    warningSigns: [
      "A claim of authority replaces an explanation you can check.",
      "Fear, secrecy or a deadline discourages a second opinion.",
      "A person uses relationship details as the sole reason you should trust a request.",
    ],
    actions: [
      {
        title: "Name the decision",
        text: "Identify what is being requested: money, passwords or sign-in codes, a download, or access. Pause that action.",
      },
      {
        title: "Separate the story from the evidence",
        text: "Ask what you know independently of the message. A confident tone is not confirmation.",
      },
      {
        title: "Verify through an established route",
        text: "Use a trusted contact or normal approval process. Confirm both the identity and the exact request.",
      },
    ],
    avoid: [
      "Do not assume only inexperienced people can be manipulated.",
      "Pause an unverified payment or account request. For immediate physical danger, contact emergency services directly rather than waiting for the caller’s instructions.",
    ],
    help: "If you acted, focus on the affected account or payment rather than proving the attacker’s identity. Use our after-a-scam checklist and involve your organization’s support team if workplace access was involved.",
    practice: {
      prompt:
        "A supposed manager says the usual approval process is too slow. Where is the attack aimed?",
      response:
        "At your decision to bypass a safeguard. Check with the manager using your established workplace contact, not the new message thread.",
    },
    sources: [s.nist, s.ai, s.scam],
    related: [
      "verify-before-you-trust",
      "ai-impersonation",
      "recognize-a-scam",
      "after-a-scam",
    ],
  },
  {
    ...common,
    slug: "after-a-scam",
    sourceCheckedAt: "2026-10-08",
    updatedAt: "2026-10-09",
    title: "What to do after a scam",
    format: "checklist",
    readingMinutes: 7,
    summary:
      "Stop the interaction, contact the payment provider, and secure affected accounts. Preserve evidence and report what happened. Acting promptly matters, but getting money back is not guaranteed.",
    topics: ["recovery", "financial-fraud", "account-safety", "scams-fraud"],
    intro:
      "Act as soon as you can: prioritize the affected payment, account, or device; do not wait to finish a report before contacting the provider. If more time has passed, still seek help. You do not need a complete account of events before asking for help. Start with the action that could prevent further loss. A trusted person can help make calls or keep notes while you retain control of passwords and private information. This checklist is general guidance; the reporting links below are for the United States.",
    sections: [
      {
        id: "payment-method",
        title: "Contact the provider that handled your payment",
        paragraphs: [
          "Card or bank transfer: call your card issuer, bank or credit union. Payment app: report through the app’s genuine support. Wire-transfer service: contact that service. Say you were deceived, identify the transaction and ask whether it can be stopped, reversed or refunded. Explain whether you made the payment after being deceived or someone else made it; ask which dispute process applies.",
          "Gift card: contact its issuer and keep the card and receipt. Cryptocurrency: contact the exchange or ATM operator used; recovery may be difficult. Cash sent by delivery: contact the carrier promptly to ask whether an undelivered package can be intercepted. Options depend on the method and circumstances; no refund is assured.",
        ],
        sourceUrls: [s.recovery.url],
      },
      {
        id: "choose-a-start",
        title: "Choose the most urgent starting point",
        paragraphs: [
          "Money sent: contact the bank, card issuer or payment service through its genuine app or a known number. Password or sign-in code shared: go directly to the affected service. Device access granted: seek trusted technical help and use another trusted device for sensitive account changes.",
          "Keep a simple incident record: what happened, which accounts were involved, when you contacted support, and the case numbers provided. Avoid posting account numbers or identity documents in a public forum.",
        ],
        sourceUrls: [s.recovery.url, s.accounts.url],
      },
    ],
    warningSigns: [
      "More transfers are requested to release funds or fix the first payment.",
      "You see unfamiliar transactions, login sessions or recovery settings.",
      "Someone promises guaranteed recovery for an upfront fee.",
    ],
    actions: [
      {
        title: "Stop contact and further payments",
        text: "End the conversation. Do not follow more instructions from the person who contacted you.",
      },
      {
        title: "Contact the payment provider",
        text: "Report the suspected fraud and ask whether the payment can be stopped or reversed. Keep receipts and reference numbers. The options vary by payment method and timing.",
      },
      {
        title: "Regain control of accounts",
        text: "Use the service’s official recovery process. Review recovery details and sign out other sessions where available.",
      },
      {
        title: "Replace exposed passwords",
        text: "Choose new, unique passwords. Change them on other accounts where the exposed password was reused.",
      },
      {
        title: "Add multifactor authentication",
        text: "Enable an additional sign-in check and keep recovery codes private. Reject approval prompts you did not initiate.",
      },
      {
        title: "Preserve evidence",
        text: "Keep transaction references, receipts and a timeline privately. For suspected child sexual exploitation, record non-image details such as usernames and where contact occurred. Do not download, copy or forward sexual images of children as evidence. Ask NCMEC or law enforcement how to handle material already present; do not keep it simply to complete this checklist.",
      },
      {
        title: "Report through official channels",
        text: "Use ReportFraud.ftc.gov for scam reports and IdentityTheft.gov for identity-theft recovery guidance. Internet-enabled crime can also be reported to IC3.gov. Reporting does not replace contacting your payment provider.",
      },
      {
        title: "Watch for another approach",
        text: "Be skeptical of anyone contacting you with a promise to recover money. Do not pay an advance recovery fee.",
      },
      {
        title: "Tell affected people",
        text: "Warn family if your account is sending messages in your name. Notify your employer’s designated support team if work accounts, devices or information were involved.",
      },
      {
        title: "Monitor and follow up",
        text: "Check statements and account activity. Follow the tailored steps from your bank or IdentityTheft.gov and keep your case notes together.",
      },
    ],
    avoid: [
      "Do not send another payment to unlock a refund.",
      "Do not apply ordinary receipt-saving advice to sexual images of children. Seek specialist reporting guidance without making copies.",
      "Do not share passwords or one-time codes with anyone offering recovery help.",
    ],
    help: "If you already paid a recovery service that now seems suspicious, contact the payment provider again and include that transaction in your report. For an immediate threat to physical safety, contact local emergency services directly.",
    practice: {
      prompt:
        "An online stranger says they can retrieve your lost transfer for a fee. What is the safer next step?",
      response:
        "Do not pay. Continue through your payment provider’s genuine support channel and the official reporting sites.",
    },
    sources: [
      s.recovery,
      s.accounts,
      s.recoveryScams,
      s.cybertip,
      s.takeItDown,
      s.nist,
      {
        label: "FBI / IC3: Report internet crime",
        url: "https://www.ic3.gov/",
        note: "Official reporting destination; not a promise of individual recovery.",
      },
    ],
    related: [
      "account-safety",
      "verify-before-you-trust",
      "phone-impersonation",
    ],
  },
  {
    ...common,
    slug: "qr-link-safety",
    title: "QR code and suspicious link safety",
    readingMinutes: 4,
    summary:
      "Treat a QR code as a link you have not yet checked. Preview the destination, and use a known app or website for unexpected payments or sign-ins instead of trusting the code or message.",
    topics: ["phishing", "privacy", "everyday-technology", "account-safety"],
    intro:
      "Scanning a code is convenient; its appearance does not show who controls the destination. A sticker at a parking meter or a delivery text can lead to an imitation payment page. You can choose a different way to complete the task.",
    sections: [
      {
        id: "inspect-destination",
        title: "Inspect the destination without opening it",
        paragraphs: [
          "Use your camera’s preview if it shows the address before opening. On a computer, hovering over a link can reveal its destination. On a phone, a link menu may show it; if your device does not offer a safe preview, leave it alone.",
          "Check the site’s address, not just a familiar word in it. You do not need to decode an unfamiliar address to proceed safely: open the service through a bookmark or app you already use. In the illustrative address bank.example.attacker.test, the word ‘bank’ does not make it your bank. A shortened link conceals the eventual destination. HTTPS or a padlock indicates an encrypted connection, not that the operator is honest.",
        ],
        sourceUrls: [s.qr.url, s.phishing.url],
      },
      {
        id: "payment-and-login",
        title: "Payment and login prompts deserve a second check",
        paragraphs: [
          "For parking, check the posted operator and use its independently verified payment option if a sticker looks altered. For a delivery fee, check the order in the retailer’s or carrier’s genuine service.",
          "If a page unexpectedly asks you to sign in or approve a multifactor authentication prompt, stop. Open your usual service separately. Do not approve a login you did not start just because a page says it will fix a problem.",
        ],
        sourceUrls: [s.qr.url, s.phishing.url],
      },
    ],
    warningSigns: [
      "A code is pasted over another payment code.",
      "A text demands a small delivery fee or threatens an account closure.",
      "The destination is unfamiliar, misspelled, shortened or difficult to identify.",
    ],
    actions: [
      {
        title: "Pause before scanning or tapping",
        text: "If the context is unexpected or pressured, do not open the link to investigate it.",
      },
      {
        title: "Choose a known route",
        text: "Use a bookmark, an app you already use, or an address you know. Avoid using the suspicious message’s support number.",
      },
      {
        title: "Ask the real operator",
        text: "Check with staff or the organization through independently obtained contact details before entering payment information.",
      },
    ],
    avoid: [
      "Do not treat a branded QR design as proof of ownership.",
      "Do not install an app or a security update offered by an unexpected page.",
      "Do not enter a password or sign-in code just to test a login page.",
    ],
    help: "If you entered a password or sign-in code, open the real service to change the password and sign out other sessions. Enable multifactor authentication (MFA), an extra sign-in check. If you entered card details, contact the issuer. If you downloaded or ran something suspicious, update security software, scan the device and seek trusted technical help. A click alone does not establish what happened; describe exactly which actions you took.",
    practice: {
      prompt:
        "A parking-payment code leads to a site you do not recognize. What can you do instead?",
      response:
        "Do not enter card details. Confirm the operator independently and find its verified payment method or ask authorized staff.",
    },
    sources: [s.qr, s.phishing, s.accounts, s.recovery],
    related: ["suspicious-message", "account-safety", "after-a-scam"],
  },
  {
    ...common,
    slug: "phone-impersonation",
    title: "How to handle a phone impersonation scam",
    readingMinutes: 4,
    summary:
      "Caller ID is not proof of identity. If a caller pressures you for money, codes or access, hang up and contact the person or organization through a number you already trust.",
    topics: ["impersonation", "scams-fraud", "ai-deception", "financial-fraud"],
    intro:
      "A call can display your bank’s name and still come from an impersonator. You do not have to stay on the line to be polite or to establish whether a threat is real. A separate call gives you room to check.",
    sections: [
      {
        id: "common-stories",
        title: "Different stories, the same pressure",
        paragraphs: [
          "A fake bank employee may ask you to move money to protect it. A supposed agency official may use fear of arrest. A tech-support caller may ask to control your computer. A supposed relative may describe an emergency. Each story creates a reason to act before checking.",
          "Caller ID spoofing changes the displayed number or name. AI can also imitate a voice. Neither a familiar display nor familiar speech confirms the caller’s identity.",
        ],
        sourceUrls: [s.phone.url, s.ai.url],
      },
      {
        id: "callback-plan",
        title: "Make an independent callback",
        paragraphs: [
          "End the original call completely. Find a number on your bank card, statement, established contact list or the organization’s genuine site. Start a new call yourself; do not accept a transfer from the suspicious caller as verification.",
          "Tell the real organization what was requested. You do not need to debate with the original caller or announce that you suspect a scam. A simple ‘I will call back through my usual number’ is enough.",
        ],
        sourceUrls: [s.phone.url],
      },
    ],
    warningSigns: [
      "The caller demands that you stay on the line or keep the call secret.",
      "They ask for a password, one-time code, remote access or an unusual payment.",
      "They refuse to let you use your normal bank or family contact.",
    ],
    actions: [
      {
        title: "Hang up",
        text: "Stop the conversation before paying or sharing information. For an unwanted robocall, avoid pressing buttons to reach someone or opt out.",
      },
      {
        title: "Verify independently",
        text: "Call the genuine organization or person using a known number. Ask whether the bank requested that transfer or account change. Do not move savings to an account supplied by the caller while checking.",
      },
      {
        title: "Bring in support",
        text: "Ask a trusted person to help you slow down and check. For a supposed family emergency, reach a second family contact.",
      },
    ],
    avoid: [
      "Do not call back solely from the incoming caller ID.",
      "Do not install remote-support software at an unexpected caller’s direction.",
      "Do not share a sign-in code to prove you own an account.",
    ],
    help: "If you paid or shared access, follow the after-a-scam checklist. Save the call time, displayed number, message and payment details. Call your financial provider directly if money or card details were involved.",
    practice: {
      prompt:
        "A caller knows your name and some account details. Does that make a request for your sign-in code safe?",
      response:
        "No. Stop the call and ask your provider through a known number. Possession of personal details does not authorize a new request.",
    },
    sources: [s.phone, s.scam, s.ai, s.recovery],
    related: [
      "verify-before-you-trust",
      "family-emergency-scams",
      "ai-impersonation",
      "after-a-scam",
    ],
  },
  {
    ...common,
    slug: "family-emergency-scams",
    title: "Family emergency scams: pause and check",
    readingMinutes: 4,
    summary:
      "A family emergency scam uses a false crisis involving a relative to pressure you into paying. Contact your loved one or another trusted person independently before sending money, even if the voice sounds familiar.",
    topics: [
      "impersonation",
      "ai-deception",
      "social-engineering",
      "financial-fraud",
    ],
    intro:
      "Concern for family is a strength, not a weakness. A calm verification plan helps you act on that concern without following a stranger’s instructions. This guide can be used together by older adults, adult children, caregivers and community educators.",
    sections: [
      {
        id: "emergency-story",
        title: "What the story may sound like",
        paragraphs: [
          "Someone claims a relative has been arrested, injured in an accident or taken to hospital. A second speaker may pretend to be a lawyer or official. Secrecy and immediate payment demands keep you from comparing the story with what others know.",
          "The caller may use a spoofed number or an imitated voice. A distressed voice is a reason to care, not a reason to skip a separate identity check.",
        ],
        sourceUrls: [s.family.url, s.ai.url],
      },
      {
        id: "family-plan",
        title: "Agree on a family plan before an emergency",
        paragraphs: [
          "Choose trusted contacts together and keep their numbers easy to find. Agree that anyone may hang up and call back when money or sensitive information is requested. Practice the words you would use, without putting anyone on the spot.",
          "A private family phrase can be an additional check. Keep it out of public posts and shared practice worksheets, and change it if exposed. Treat it as one layer, not a guarantee: knowing a phrase does not replace confirming the situation through a contact you trust.",
        ],
        sourceUrls: [s.ai.url],
      },
    ],
    warningSigns: [
      "The caller says not to tell other family members.",
      "Payment is demanded through gift cards, cryptocurrency or a wire transfer.",
      "You cannot speak with the relative through their usual number, and the caller discourages checking elsewhere.",
    ],
    actions: [
      {
        title: "Pause the payment",
        text: "Do not send money during the call. Write down the claimed situation so you can check it calmly.",
      },
      {
        title: "Reach the relative separately",
        text: "Use the number already saved for them. If there is no answer, contact another trusted person who can help establish where they are.",
      },
      {
        title: "Check claimed institutions",
        text: "Use independently obtained contact details if the story names a hospital or agency. Do not rely on a second speaker supplied by the caller.",
      },
      {
        title: "Respond to confirmed needs",
        text: "Once you have independent confirmation, discuss the appropriate next step through the trusted channel. If you believe someone faces immediate physical danger, contact local emergency services directly.",
      },
    ],
    avoid: [
      "Do not give the caller more family details while trying to test them.",
      "Do not blame someone for believing a voice or worrying about family.",
      "Do not pay a supposed official simply because another caller vouches for them.",
    ],
    help: "If money was sent, contact the payment provider promptly and preserve messages and receipts. Tell the affected relative so they can warn other contacts. Use the after-a-scam resource for further steps; no one can guarantee recovery.",
    practice: {
      prompt:
        "A supposed grandchild says, ‘Please do not tell my parents.’ How can you help safely?",
      response:
        "End the call and contact the grandchild or another trusted relative through established numbers. You can be supportive while checking a frightening story.",
    },
    sources: [s.family, s.ai, s.recovery],
    related: [
      "verify-before-you-trust",
      "phone-impersonation",
      "ai-impersonation",
      "after-a-scam",
    ],
  },
];
