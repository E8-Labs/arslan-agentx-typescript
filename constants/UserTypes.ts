export const UserTypes = {
  RealEstateAgent: "RealEstateAgent",
  SolarRep: "SolarRep",
  SalesDevRep: "SalesDevRep",
  MarketerAgent: "MarketerAgent",
  WebsiteAgent: "WebsiteAgent",
  InsuranceAgent: "InsuranceAgent",
  RecruiterAgent: "RecruiterAgent",
  TaxAgent: "TaxAgent",
  DebtCollectorAgent: "DebtCollectorAgent",
  MedSpaAgent: "MedSpaAgent",
  LoanOfficerAgent: "LoanOfficerAgent",
  LawAgent: "LawAgent",
} as const;

// Optional: if you want to create a type for UserType keys:
export type UserType = keyof typeof UserTypes;

// Optional: if you want a type for UserType values:
export type UserTypeValue = (typeof UserTypes)[keyof typeof UserTypes];
