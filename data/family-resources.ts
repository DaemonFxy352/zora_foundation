import type { Resource } from "./resources";

// Source checks are not a claim of named expert review or publication approval.
// Assign original publication dates when these guides are first released.
export const familyResources: Resource[] = [
  {
    slug: "internet-safety-parents",
    title: "Internet safety for parents: a practical family guide",
    summary:
      "Build a family routine for privacy, online contact, purchases, and asking for help. Start with one device and one conversation, then revisit the plan as children grow.",
    audience: ["youth-families", "caregivers", "educators-facilitators"],
    topics: ["privacy", "account-safety", "everyday-technology"],
    format: "quick-guide",
    readingMinutes: 4,
    updatedAt: "2026-10-08",
    sourceCheckedAt: "2026-10-08",
    printView: true,
    intro:
      "Internet safety is a shared practice, not a one-time warning. A useful plan tells children what to do when something feels wrong and tells adults how to respond calmly. Adapt the suggestions to your child’s understanding, communication needs, and experience; age alone does not determine readiness.",
    sections: [
      {
        id: "family-plan",
        title: "Make a plan you can actually use",
        paragraphs: [
          "Write a short agreement together: which services we use, who can contact us, when purchases need permission, and whom we ask for help. Leave space for the child’s questions. A younger child might draw the person they would ask; a teenager might choose a private way to start a difficult conversation.",
          "Use an ordinary example rather than asking children to disclose an upsetting experience. Try: “Someone in a game offers a prize and asks for your address. What would you want me to help you check?” Practice the adult response too: “Thank you for telling me. We can work through this together.”",
        ],
        sourceUrls: ["https://consumer.ftc.gov/articles/kids-video-games"],
      },
      {
        id: "privacy-check",
        title: "Check information and settings together",
        paragraphs: [
          "Read what a service collects before creating an account. Consider whether it needs location, photos, contacts, or a public profile. The FTC explains U.S. parents’ choices for services covered by children’s privacy rules; coverage is not a guarantee that a service is suitable for your child.",
          "Choose one setting to review together today. Ask your child to explain who can see a post or contact the account. If neither of you understands the setting, use the service’s official help before turning it on.",
        ],
        sourceUrls: [
          "https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online",
        ],
      },
    ],
    warningSigns: [
      "A contact asks a child to hide conversations, purchases, or gifts from trusted adults.",
      "A reward requires a password, personal information, or moving to an unfamiliar website.",
      "Someone pressures a child to share images or threatens consequences if they stop responding.",
    ],
    actions: [
      {
        title: "Agree on a help route",
        text: "Name more than one trusted adult. Make clear that asking for help matters more than following every rule perfectly.",
      },
      {
        title: "Set boundaries before use",
        text: "Review contact and purchase controls. Use separate age-appropriate accounts instead of an unrestricted adult profile.",
      },
      {
        title: "Revisit after changes",
        text: "When a new game, device, or feature arrives, repeat the conversation. Ask what has changed rather than assuming the previous settings still fit.",
      },
      {
        title: "Connect generations",
        text: "Agree that unexpected family money requests will be checked through a known number. Let children see adults pause and verify too.",
      },
    ],
    avoid: [
      "Do not promise that parental controls catch every risk.",
      "Do not demand a public retelling of a child’s distressing experience.",
      "Do not forward intimate images while asking others for advice.",
    ],
    help: "Listen without blaming. Help the child stop unwanted contact and use the platform’s reporting tools. For suspected sexual exploitation, use NCMEC’s guidance below; an immediate physical threat calls for local emergency help. Account or payment problems should also go to the affected service through its genuine support channel.",
    practice: {
      prompt:
        "Your child says they clicked a link after breaking a device rule. What do you say first?",
      response:
        "“Thank you for telling me. Let’s work out what happened and what needs help.” Handle the safety issue before discussing household rules.",
    },
    sources: [
      {
        label: "FTC: Kids and video games",
        url: "https://consumer.ftc.gov/articles/kids-video-games",
      },
      {
        label: "FTC: Protecting your child’s privacy online",
        url: "https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online",
      },
      {
        label: "NCMEC: Sextortion warning signs and support",
        url: "https://www.missingkids.org/netsmartz/topics/sextortion",
      },
      {
        label: "NCMEC: Take It Down",
        url: "https://takeitdown.ncmec.org/",
        note: "For intimate images taken before age 18; participating platforms only. Never download or forward an image to use this service.",
      },
    ],
    related: [
      "online-safety-kids",
      "teen-online-safety",
      "gaming-scams",
      "verify-before-you-trust",
    ],
    helpLinks: [
      {
        label: "NCMEC CyberTipline: report suspected child sexual exploitation",
        url: "https://www.missingkids.org/gethelpnow/cybertipline",
      },
      {
        label: "NCMEC: Sextortion warning signs and support",
        url: "https://www.missingkids.org/netsmartz/topics/sextortion",
      },
      {
        label: "NCMEC: Take It Down",
        url: "https://takeitdown.ncmec.org/",
        note: "For intimate images taken before age 18; participating platforms only. Never download or forward an image to use this service.",
      },
    ],
  },
  {
    slug: "online-safety-kids",
    title: "Online safety for kids: practice with a trusted adult",
    summary:
      "Pause, ask, and get help when a game or message asks for something unexpected. These short activities are for children and a trusted adult to read together.",
    audience: ["children", "youth-families", "educators-facilitators"],
    topics: ["privacy", "everyday-technology"],
    format: "quick-guide",
    readingMinutes: 4,
    updatedAt: "2026-10-08",
    sourceCheckedAt: "2026-10-08",
    printView: true,
    intro:
      "You can enjoy games and learning online while asking questions about things you do not understand. You do not have to solve a worrying message yourself. If someone tricks or upsets you, you deserve help. Adults: read aloud if useful, take breaks, and let the child point or draw instead of answering in words.",
    sections: [
      {
        id: "practice-together",
        title: "Three small activities to try together",
        paragraphs: [
          "For a child beginning to use a device: draw a pause button on paper. Pretend a game asks a question you do not understand. Point to the button and practice putting the device down to ask for help. The goal is knowing you can stop, not guessing a correct answer.",
          "For a child starting to message: make two pretend messages. One asks about a favorite game; the other asks where you live. Talk about why a home address needs adult help. Use made-up examples, not the child’s actual address or school.",
          "For a child becoming more independent: ask an adult to help find the report or block button in a familiar app. Point it out without submitting a pretend report. Decide what you will say if you want help later: “Something happened online and I want to talk.”",
        ],
        sourceUrls: [
          "https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips",
        ],
      },
    ],
    warningSigns: [
      "Someone says you must keep an online conversation secret from adults who care for you.",
      "A player asks for your password, address, school, or pictures.",
      "A message makes you feel worried, rushed, or afraid to leave.",
    ],
    actions: [
      {
        title: "Stop and step away",
        text: "You do not need to reply or win an argument. Put the device down and find help.",
      },
      {
        title: "Ask an adult you trust",
        text: "Choose someone who listens and helps you feel safe. If the first person cannot help, try another trusted adult.",
      },
      {
        title: "Let an adult handle reports",
        text: "Show where the problem happened if you feel able. You do not need to keep reading upsetting messages.",
      },
      {
        title: "Look out for friends",
        text: "If a friend is worried about something online, help them reach a trusted adult. Do not share embarrassing messages about them.",
      },
    ],
    avoid: [
      "Do not give out a password to earn a prize.",
      "Do not meet someone from an online game without a trusted adult’s involvement.",
      "Do not send a message back just because someone says you have to.",
    ],
    help: "If you already answered, clicked, or shared something, you can still get help. Tell a trusted adult what you remember. Adults: handle account changes and reporting, reassure the child, and seek appropriate specialist support for threats or exploitation.",
    practice: {
      prompt:
        "A player offers a reward if you share your home address. What could you do?",
      response:
        "Leave the request unanswered and ask a trusted adult. You do not have to decide whether the prize is real.",
    },
    sources: [
      {
        label: "NCMEC: Tips for tweens",
        url: "https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips",
      },
      {
        label: "NCMEC: Gaming safety",
        url: "https://www.missingkids.org/netsmartz/topics/gaming",
      },
    ],
    related: ["internet-safety-parents", "gaming-scams"],
    helpLinks: [
      {
        label: "NCMEC CyberTipline: report suspected child sexual exploitation",
        url: "https://www.missingkids.org/gethelpnow/cybertipline",
      },
      {
        label: "NCMEC: Sextortion warning signs and support",
        url: "https://www.missingkids.org/netsmartz/topics/sextortion",
      },
      {
        label: "NCMEC: Take It Down",
        url: "https://takeitdown.ncmec.org/",
        note: "For intimate images taken before age 18; participating platforms only. Never download or forward an image to use this service.",
      },
    ],
  },
  {
    slug: "teen-online-safety",
    title: "Teen online safety: privacy, scams, and getting help",
    summary:
      "Protect your accounts and personal boundaries without handling threats alone. Check unexpected requests, choose what you share, and know where to get support.",
    audience: ["teenagers", "youth-families", "educators-facilitators"],
    topics: ["privacy", "account-safety", "social-engineering"],
    format: "quick-guide",
    readingMinutes: 4,
    updatedAt: "2026-10-08",
    sourceCheckedAt: "2026-10-08",
    printView: true,
    intro:
      "Online friendships and communities can matter a great deal. Safety is about keeping choices and support available, not treating every interaction as dangerous. An account, image, or convincing conversation does not establish someone’s identity or intentions.",
    sections: [
      {
        id: "privacy-in-practice",
        title: "Choose what a stranger can learn",
        paragraphs: [
          "Try a profile check without posting anything new: what could someone learn from your username, bio, location settings, and visible posts? Decide which details you want public. Check with a friend before sharing information or an image about them.",
          "For a school discussion, use a fictional profile. Ask students which details they would remove and why. Do not ask students to display their own accounts, disclose passwords, or describe personal harm in front of a group.",
        ],
        sourceUrls: [
          "https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips",
        ],
      },
      {
        id: "threats-and-support",
        title: "If someone threatens to share intimate images",
        paragraphs: [
          "This is not your fault, and you do not have to manage it alone. Do not pay or send more images. Reach a trusted adult and follow NCMEC’s reporting guidance. A threat is a reason to seek help, not a reason to remain in the conversation.",
          "NCMEC’s Take It Down can help limit sharing of intimate images taken before age 18 on participating platforms. Use only files already on your device; do not download, send, or forward images to use it. It cannot guarantee removal everywhere.",
        ],
        sourceUrls: ["https://www.missingkids.org/netsmartz/topics/sextortion"],
      },
    ],
    warningSigns: [
      "A new friend wants passwords, private images, money, or secrecy as proof of trust.",
      "A supposed account warning asks you to sign in through a message link.",
      "Someone pressures you to act before talking to another person.",
    ],
    actions: [
      {
        title: "Use an independent route",
        text: "Open the actual app or website to check an account warning. Ask a friend through a known contact if their request seems unusual.",
      },
      {
        title: "Separate accounts",
        text: "Use unique passwords and turn on an additional sign-in check. Keep recovery details current and private.",
      },
      {
        title: "Keep a support option",
        text: "Think of an adult you could approach even if talking to a parent feels difficult. You can start with “I need help with something online.”",
      },
      {
        title: "Respond to bullying with support",
        text: "Use platform reporting and blocking tools. Ask a trusted adult or school support person to help if harassment continues or affects school life.",
      },
    ],
    avoid: [
      "Do not share sign-in codes with someone offering to recover an account.",
      "Do not retaliate by posting someone else’s private information.",
      "Do not circulate intimate images as evidence or entertainment.",
    ],
    help: "For account access, go to the service’s official recovery page and ask a trusted adult for help if needed. For threats or exploitation, use NCMEC’s support below. If you are in immediate danger, seek emergency help and stay with someone you trust.",
    practice: {
      prompt:
        "A friend’s account asks for a login code so they can enter a contest. What can you check?",
      response:
        "Contact your friend another way. The account may be compromised; a code can give someone access to your account.",
    },
    sources: [
      {
        label: "NCMEC: Tips for tweens",
        url: "https://www.missingkids.org/blog/2019/post-update/your-netsmartz-tween-tips",
      },
      {
        label: "FTC: Recognize and avoid phishing scams",
        url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
      },
      {
        label: "NCMEC: Sextortion warning signs and support",
        url: "https://www.missingkids.org/netsmartz/topics/sextortion",
      },
      {
        label: "NCMEC: Take It Down",
        url: "https://takeitdown.ncmec.org/",
        note: "For intimate images taken before age 18; participating platforms only. Never download or forward an image to use this service.",
      },
    ],
    related: [
      "account-safety",
      "ai-impersonation",
      "gaming-scams",
      "internet-safety-parents",
    ],
    helpLinks: [
      {
        label: "NCMEC CyberTipline: report suspected child sexual exploitation",
        url: "https://www.missingkids.org/gethelpnow/cybertipline",
      },
      {
        label: "NCMEC: Sextortion warning signs and support",
        url: "https://www.missingkids.org/netsmartz/topics/sextortion",
      },
      {
        label: "NCMEC: Take It Down",
        url: "https://takeitdown.ncmec.org/",
        note: "For intimate images taken before age 18; participating platforms only. Never download or forward an image to use this service.",
      },
    ],
  },
  {
    slug: "gaming-scams",
    title: "Gaming scams: a guide for players and parents",
    summary:
      "Treat offers of free currency, account upgrades, or trades as requests to check—not reasons to share a password. Practice safer purchases and know how to report unwanted contact.",
    audience: ["teenagers", "youth-families", "educators-facilitators"],
    topics: ["scams-fraud", "account-safety", "privacy"],
    format: "quick-guide",
    readingMinutes: 4,
    updatedAt: "2026-10-08",
    sourceCheckedAt: "2026-10-08",
    printView: true,
    intro:
      "Games bring together purchases, messaging, and social pressure. A scam may look like a helpful player or an account notice. The examples here are practice scenarios, not claims about any particular game. Adults can use this guide alongside a child rather than expecting them to manage account or payment problems alone.",
    sections: [
      {
        id: "check-the-request",
        title: "Follow the request, not the reward",
        paragraphs: [
          "Imagine a message offering rare items if you sign in on another website. The important question is not whether the item looks appealing: it is why the offer needs your account access. Open the game’s official store or support area independently instead of following the message.",
          "Another practice example: a player asks to borrow an account to improve its ranking. Discuss what access the player would receive and what could be changed. A friendly conversation is not a safeguard for account access.",
        ],
        sourceUrls: [
          "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
        ],
      },
      {
        id: "before-playing",
        title: "Agree on purchases and contact",
        paragraphs: [
          "Check the game’s age rating, contact settings, and purchase controls with an adult. A rating does not cover every interaction. Decide who approves spending and how to leave an uncomfortable conversation.",
          "Have the child show how the game works before discussing rules. Ask what makes an offer seem convincing and which part they would want help checking. Use a fictional example rather than testing the child with a real suspicious link.",
        ],
        sourceUrls: ["https://consumer.ftc.gov/articles/kids-video-games"],
      },
    ],
    warningSigns: [
      "A reward requires logging in outside the service or sharing a sign-in code.",
      "A player asks for personal details or insists that contact move to a private channel.",
      "A trade requires sending payment first through an unrelated service.",
    ],
    actions: [
      {
        title: "Keep purchases in known channels",
        text: "Check offers within the official game or store. Do not trust a message simply because it uses familiar artwork.",
      },
      {
        title: "Protect access",
        text: "Use a unique password and available multifactor authentication. Never lend an account to a player promising rewards.",
      },
      {
        title: "Find the reporting tools",
        text: "With adult help where needed, locate block, mute, and report controls before there is a problem.",
      },
      {
        title: "Keep useful records safely",
        text: "For a disputed purchase, keep receipts and transaction identifiers. Use official support, not a person messaging you with a recovery offer.",
      },
    ],
    avoid: [
      "Do not install a tool sent by a player to unlock rewards.",
      "Do not share passwords, codes, or payment-card details in chat.",
      "Do not blame a child for reporting a mistake.",
    ],
    help: "If a password was shared, use the platform’s genuine recovery process and change it anywhere it was reused. Ask the payment provider about an unauthorized payment. If someone pressures a child for sexual content or threatens them, seek NCMEC support; do not forward intimate images.",
    practice: {
      prompt:
        "A teammate says a free-item link expires in two minutes. What can you do?",
      response:
        "Let the offer expire. Check the official game store independently and ask for help if you already entered account information.",
    },
    sources: [
      {
        label: "FTC: Kids and video games",
        url: "https://consumer.ftc.gov/articles/kids-video-games",
      },
      {
        label: "NCMEC: Gaming safety",
        url: "https://www.missingkids.org/netsmartz/topics/gaming",
      },
      {
        label: "FTC: Recognize and avoid phishing scams",
        url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
      },
      {
        label: "FTC: What to do if you were scammed",
        url: "https://consumer.ftc.gov/articles/what-do-if-you-were-scammed",
      },
      {
        label: "NCMEC: Sextortion warning signs and support",
        url: "https://www.missingkids.org/netsmartz/topics/sextortion",
      },
    ],
    related: [
      "account-safety",
      "suspicious-message",
      "teen-online-safety",
      "internet-safety-parents",
    ],
    helpLinks: [
      {
        label: "NCMEC CyberTipline: report suspected child sexual exploitation",
        url: "https://www.missingkids.org/gethelpnow/cybertipline",
      },
      {
        label: "NCMEC: Sextortion warning signs and support",
        url: "https://www.missingkids.org/netsmartz/topics/sextortion",
      },
      {
        label: "NCMEC: Take It Down",
        url: "https://takeitdown.ncmec.org/",
        note: "For intimate images taken before age 18; participating platforms only. Never download or forward an image to use this service.",
      },
    ],
  },
  {
    slug: "online-safety-older-adults",
    title: "Online safety for older adults: a practical guide",
    summary:
      "Build a comfortable routine for banking, messages, device help, and family requests. Choose a pace that works for you and keep control of your private information.",
    audience: [
      "older-adults",
      "caregivers",
      "digital-confidence",
      "community-organizations",
    ],
    topics: ["everyday-technology", "financial-fraud", "account-safety"],
    format: "quick-guide",
    readingMinutes: 4,
    updatedAt: "2026-10-08",
    sourceCheckedAt: "2026-10-08",
    printView: true,
    intro:
      "You do not need to master every device feature to make safer decisions. Start with tasks you actually use: checking a balance, reading a message, or contacting family. Experience varies at every age. A helpful supporter explains choices and lets you decide, rather than taking over.",
    sections: [
      {
        id: "personal-routine",
        title: "Make a small safety routine",
        paragraphs: [
          "Choose one routine to practice this week. For banking, write down where you normally open the service and where you would find its genuine phone number. Keep the instructions accessible, but do not put passwords or sign-in codes on a shared instruction sheet.",
          "For a library or senior-center discussion, use a fictional bank notice. Ask participants to point out the requested action and choose a separate way to check it. No one needs to open a personal account, reveal a balance, or explain a past loss to participate.",
        ],
        sourceUrls: [
          "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
        ],
      },
      {
        id: "device-help",
        title: "Get help without surrendering control",
        paragraphs: [
          "An unexpected call or pop-up offering device repair may be a tech support scam. Do not call the number in an alarming pop-up or allow remote access because an unsolicited caller requests it. Seek support through an established provider you chose.",
          "Before a practice session, tell a helper what you want to learn and what you want to do yourself. Ask for larger text, slower steps, or written reminders. A good stopping point is completing one useful task comfortably, not finishing a checklist quickly.",
        ],
        sourceUrls: [
          "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams",
        ],
      },
    ],
    warningSigns: [
      "A supposed bank employee tells you to move money to protect it.",
      "A caller demands secrecy or objects when you want a second opinion.",
      "An unexpected device warning asks you to call, pay, or grant remote access.",
    ],
    actions: [
      {
        title: "Use a known starting point",
        text: "Open the banking app or website you normally use. Check an unexpected message through a number from a statement or card.",
      },
      {
        title: "Make family checks routine",
        text: "Agree on how to call family back if a message requests urgent money. A familiar voice or caller ID is not enough.",
      },
      {
        title: "Review account protection",
        text: "Use unique passwords and available additional sign-in checks. Ask a trusted helper to explain settings while you keep passwords and codes private.",
      },
      {
        title: "Choose your support people",
        text: "Identify someone you can call for a second opinion and a trusted source of device help. Keep genuine contact details accessible.",
      },
    ],
    avoid: [
      "Do not transfer savings while remaining on a call that pressures you.",
      "Do not let a helper keep your sign-in codes or passwords.",
      "Do not assume that being deceived means losing the right to make your own decisions.",
    ],
    help: "End the interaction and contact the affected bank or service directly. If remote access was granted, seek trusted technical help and use another trusted device for sensitive account changes. Keep transaction details and ask the payment provider about recovery options; repayment is not guaranteed.",
    practice: {
      prompt:
        "A pop-up says the device is infected and displays a repair number. What would you do?",
      response:
        "Do not call the displayed number. Close the warning if possible and contact a support provider through details you already trust.",
    },
    sources: [
      {
        label: "FTC: Recognize and avoid phishing scams",
        url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams",
      },
      {
        label: "FTC: Spot, avoid, and report tech support scams",
        url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams",
      },
      {
        label: "FTC: What to do if you were scammed",
        url: "https://consumer.ftc.gov/articles/what-do-if-you-were-scammed",
      },
    ],
    related: [
      "phone-impersonation",
      "family-emergency-scams",
      "after-a-scam",
      "account-safety",
    ],
  },
];
