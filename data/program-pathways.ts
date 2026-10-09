// Planning pathways within the four approved areas, not scheduled offerings.
export const programPathways = [
  {
    id: "older-adult-workshops",
    title: "Older-adult and senior-center workshops",
    audience: "Older adults, caregivers, and senior-center staff.",
    objective:
      "Practice checking a bank or family request through an independent contact before acting.",
    format:
      "Explore a small in-person discussion with optional device practice and printed instructions. Participants should never need to display account balances or share passwords.",
    access:
      "Plan for larger print, clear audio, unhurried repetition, seating, and participation without a smartphone.",
    resource: "online-safety-older-adults",
    label: "Online safety for older adults",
  },
  {
    id: "parent-workshops",
    title: "Parent and caregiver conversations",
    audience:
      "Parents, guardians, and adults supporting children across households.",
    objective:
      "Create a practical help plan and identify privacy, contact, and purchase settings to review with a child.",
    format:
      "Explore a parent education evening or virtual discussion using fictional scenarios. Families can choose one action to try at home.",
    access:
      "Discuss translation, accessible handouts, timing, and ways to participate without sharing family experiences publicly.",
    resource: "internet-safety-parents",
    label: "A practical family internet safety guide",
  },
  {
    id: "school-education",
    title: "School, youth, and teen education",
    audience:
      "Teachers, school support staff, and youth-serving organizations.",
    objective:
      "Practice recognizing pressure, protecting personal information, and finding a trusted adult. Adapt examples to the learners’ stage of development.",
    format:
      "Explore a classroom discussion, youth group activity, or linked family session. Agree on safeguarding and reporting responsibilities with the host before any session.",
    access:
      "Use read-aloud options, plain-language examples, private ways to ask questions, and an option to step away. Never require personal disclosures.",
    resource: "teen-online-safety",
    label: "Teen privacy, scams, and getting help",
  },
  {
    id: "library-learning",
    title: "Library and community learning",
    audience: "Libraries, neighborhood groups, and community organizations.",
    objective:
      "Help participants identify what a suspicious message requests and choose a genuine contact route.",
    format:
      "Explore a facilitated discussion or drop-in learning activity. Hosts can suggest common questions without collecting sensitive incident details.",
    access:
      "Offer printed examples and verbal participation. Discuss language needs, device access, and accessible spaces with the host.",
    resource: "suspicious-message",
    label: "Check a suspicious message",
  },
  {
    id: "train-the-trainer",
    title: "Train-the-trainer development",
    audience:
      "Librarians, educators, volunteers, and other trusted local messengers.",
    objective:
      "Prepare facilitators to explain a verification step, respond without blame, and refer account or exploitation problems to appropriate help.",
    format:
      "Explore practice facilitation and feedback using Foundation guides. A completed curriculum, certification, and instructor network are not currently offered.",
    access:
      "Discuss accessible teaching materials, learner feedback, and clear limits on handling personal accounts or providing professional advice.",
    resource: "verify-before-you-trust",
    label: "Verification before trust",
  },
] as const;
