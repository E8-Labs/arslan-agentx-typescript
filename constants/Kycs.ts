import { UserTypes } from "./UserTypes";

// Define the KYC Question type
type KycQuestion = {
  id: number;
  question: string;
  sampleAnswers: string[];
};

// Seller
const DefaultSellerKycsNeed: KycQuestion[] = [
  {
    id: 1,
    question: "Why have you decided to sell your home?",
    sampleAnswers: [],
  },
  {
    id: 2,
    question:
      "Are there any significant life changes prompting this decision, such as job relocation or changes in the family?",
    sampleAnswers: [],
  },
];

const DefaultSellerKycsMotivation: KycQuestion[] = [
  {
    id: 1,
    question: "What's your primary motivation for selling now rather than waiting?",
    sampleAnswers: [],
  },
  {
    id: 2,
    question:
      "How important is the selling price to you versus the speed of the sale?",
    sampleAnswers: [],
  },
  {
    id: 3,
    question:
      "Are there any specific factors that would influence your decision to accept an offer or reject it?",
    sampleAnswers: [],
  },
];

const DefaultSellerKycsUrgency: KycQuestion[] = [
  {
    id: 1,
    question: "When do you hope to have your home sold?",
    sampleAnswers: [],
  },
  {
    id: 2,
    question:
      "Are there any specific events or dates driving this timeline (e.g., starting a new job, school for kids, purchasing another property)?",
    sampleAnswers: [],
  },
  {
    id: 3,
    question:
      "How would it impact you if the sale took longer than anticipated?",
    sampleAnswers: [],
  },
];

export const SellerKycsQuestions = {
  DefaultSellerKycsNeed,
  DefaultSellerKycsMotivation,
  DefaultSellerKycsUrgency,
} as const;

// Buyer
const DefaultBuyerKycsNeed: KycQuestion[] = [
  {
    id: 1,
    question: "What area are you looking in?",
    sampleAnswers: [],
  },
  {
    id: 2,
    question:
      "What type of home are you looking for? Single family, townhouse, condo, apartment, etc",
    sampleAnswers: [],
  },
  {
    id: 3,
    question: "Are you a first time home buyer?",
    sampleAnswers: [],
  },
];

const DefaultBuyerKycsMotivation: KycQuestion[] = [
  {
    id: 1,
    question: "Why is now the right time?",
    sampleAnswers: [],
  },
  {
    id: 2,
    question: "Are you looking to downsize or upsize?",
    sampleAnswers: [],
  },
  {
    id: 3,
    question: "Are you relocating for work?",
    sampleAnswers: [],
  },
];

const DefaultBuyerKycsUrgency: KycQuestion[] = [
  {
    id: 1,
    question: "When do you expect to move into your new place?",
    sampleAnswers: [],
  },
  {
    id: 2,
    question: "When do you plan on buying a home?",
    sampleAnswers: [],
  },
  {
    id: 3,
    question: "When do you plan to move into your new home?",
    sampleAnswers: [],
  },
];

export const BuyerKycsQuestions = {
  DefaultBuyerKycsNeed,
  DefaultBuyerKycsMotivation,
  DefaultBuyerKycsUrgency,
} as const;

// Other User
const OtherUserKycQuestionsNeed: KycQuestion[] = [
  {
    id: 1,
    question: "What obstacles are keeping you from reaching your objectives right now?",
    sampleAnswers: [],
  },
];

const OtherUserKycQuestionsMotivation: KycQuestion[] = [
  {
    id: 1,
    question: "Why is this a priority for you at this moment?",
    sampleAnswers: [],
  },
];

const OtherUserKycQuestionsUrgency: KycQuestion[] = [
  {
    id: 1,
    question: "Are you aiming to address this immediately, or are you exploring options?",
    sampleAnswers: [],
  },
];

export const OtherUsersKycsQuestions = {
  OtherUserKycQuestionsNeed,
  OtherUserKycQuestionsMotivation,
  OtherUserKycQuestionsUrgency,
} as const;

export function GetKycQuestionsForUser(
  userType: string = UserTypes.RealEstateAgent,
  kycType: "seller" | "buyer" = "seller",
  category: "need" | "motivation" | "urgency" = "need"
): KycQuestion[] {
  if (userType === UserTypes.RealEstateAgent) {
    if (kycType === "seller") {
      if (category === "need") return DefaultSellerKycsNeed;
      if (category === "motivation") return DefaultSellerKycsMotivation;
      if (category === "urgency") return DefaultSellerKycsUrgency;
    } else {
      if (category === "need") return DefaultBuyerKycsNeed;
      if (category === "motivation") return DefaultBuyerKycsMotivation;
      if (category === "urgency") return DefaultBuyerKycsUrgency;
    }
  } else {
    if (category === "need") return OtherUserKycQuestionsNeed;
    if (category === "motivation") return OtherUserKycQuestionsMotivation;
    if (category === "urgency") return OtherUserKycQuestionsUrgency;
  }

  // Default fallback (should not hit)
  return [];
}
