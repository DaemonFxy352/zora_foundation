export type Source = { label: string; url: string; note?: string };
// Primary guidance read during this content pass. Notes identify the supported scope.
export const sources = {
  mfa: {
    label: "FTC: Use two-factor authentication to protect your accounts",
    url: "https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts",
    note: "Comparison of text codes, authenticator apps and security keys; follow your provider’s setup instructions.",
  },
  cybertip: {
    label: "NCMEC CyberTipline: report suspected child sexual exploitation",
    url: "https://www.missingkids.org/gethelpnow/cybertipline",
  },
  takeItDown: {
    label: "NCMEC: Take It Down eligibility and safe use",
    url: "https://takeitdown.ncmec.org/faq/",
    note: "Do not download or ask someone to send intimate images to use the service. Ask NCMEC for help if you do not have the original device.",
  },
  aiExploitation: {
    label: "FBI / IC3: Manipulated images and sextortion",
    url: "https://www.ic3.gov/PSA/2023/PSA230605",
    note: "Altered ordinary photos can be used for threats; seek help without circulating explicit material.",
  },
  scam: {
    label: "FTC: How to avoid a scam",
    url: "https://consumer.ftc.gov/articles/how-avoid-scam",
    note: "Impersonation, pressure, unusual payments and independent checking.",
  },
  recovery: {
    label: "FTC: What to do if you were scammed",
    url: "https://consumer.ftc.gov/articles/what-do-if-you-were-scammed",
    note: "Actions depend on payment method, information shared and device access.",
  },
  recoveryScams: {
    label: "FTC: Refund and recovery scams",
    url: "https://consumer.ftc.gov/articles/refund-and-recovery-scams",
    note: "Upfront-fee recovery offers can cause further loss.",
  },
  family: {
    label: "FTC: Scammers use fake emergencies to steal your money",
    url: "https://consumer.ftc.gov/articles/scammers-use-fake-emergencies-steal-your-money",
    note: "Emergency impersonation and checking the story with trusted contacts.",
  },
  phone: {
    label: "FTC: Phone scams",
    url: "https://consumer.ftc.gov/articles/phone-scams",
    note: "Caller ID spoofing, impersonation and ending unwanted calls.",
  },
  ai: {
    label: "FBI / IC3: Generative AI and financial fraud",
    url: "https://www.ic3.gov/PSA/2024/PSA241203",
    note: "Synthetic text, images, audio and video; independent verification and family phrases.",
  },
  qr: {
    label: "FTC: Harmful links hidden in QR codes",
    url: "https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information",
    note: "Tampered payment codes, delivery pretexts and checking a destination.",
  },
  phishing: {
    label: "FTC: Recognize and avoid phishing scams",
    url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
    note: "Unexpected links, account pretexts, reporting and account protection.",
  },
  nist: {
    label: "NIST: Phishing guidance",
    url: "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing",
    note: "Phishing as social engineering and ways organizations can respond.",
  },
  accounts: {
    label: "FTC: Recover a hacked email or social media account",
    url: "https://consumer.ftc.gov/articles/how-recover-your-hacked-email-or-social-media-account",
    note: "Account recovery, signing out sessions and checking recovery details.",
  },
} satisfies Record<string, Source>;
