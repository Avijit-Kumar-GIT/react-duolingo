export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
    type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
    description: string;
  }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Insurance at a high level",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
    tiles: [
      { type: "star", description: "Introduction to Insurance" },
      { type: "book", description: "Types of Insurance" },
      { type: "star", description: "What are insurance providers?" },
      { type: "treasure" },
      { type: "book", description: "Insurance Policies and Basic Documents" },
      { type: "trophy", description: "Unit 1 Review" },
    ],
  },
  {
    unitNumber: 2,
    description: "Auto Insurance",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "fast-forward", description: "Auto Insurance Crash Course" },
      { type: "dumbbell", description: "Types of Auto Insurance" },
      { type: "book", description: "Auto Insurance Claims" },
      { type: "treasure" },
      { type: "star", description: "Auto Insurance Discounts" },
      { type: "book", description: "Factors Affecting Auto Insurance Rates" },
      { type: "star", description: "Minimum Auto Insurance Requirements" },
      { type: "book", description: "Auto Insurance for New Drivers" },
      { type: "treasure" },
      { type: "dumbbell", description: "Police Officers and Auto Insurance" },
      { type: "trophy", description: "Unit 2 Review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Health Insurance",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "Health Insurance Crash Course" },
      { type: "book", description: "Health Insurance Plans" },
      { type: "star", description: "Health Insurance Enrollment" },
      { type: "treasure" },
      { type: "book", description: "Health Insurance Claims" },
      { type: "star", description: "Understanding Health Insurance Coverage" },
      { type: "treasure" },
      { type: "dumbbell", description: "Health Savings Accounts (HSAs) and Flexible Spending Accounts (FSAs)" },
      { type: "book", description: "Health Insurance Benefits" },
      { type: "trophy", description: "Unit 3 Review" },
    ],
  },
];
