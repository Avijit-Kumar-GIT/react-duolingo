export type Companion = {
    unitNumber: number;
    description: string;
    backgroundColor: `bg-${string}`;
    textColor: `text-${string}`;
    borderColor: `border-${string}`;
    terms: Term[];
    objectives: Objective[];
    // tiles: Tile[];
};

export type Objective = {
    key: string;
    obj: string;
}

export type Term = {
    key: string;
    definition: string;
};

export type KeyTerm = Term["key"];

export const companions: readonly Companion[] = [
    {
        unitNumber: 1,
        description: "Insurance Basics",
        backgroundColor: "bg-[#58cc02]",
        textColor: "text-[#58cc02]",
        borderColor: "border-[#46a302]",
        terms: [
            { key: "Insurance", definition: "A contract that provides financial protection against losses or risks in exchange for regular payments (premiums)." },
            { key: "Premium", definition: "The amount of money paid to an insurance company to maintain coverage. It's typically paid on a regular basis, such as monthly or annually." },
            { key: "Policy", definition: "The written contract specifying the terms and conditions of insurance coverage, including what is covered, the premium amount, and the duration of coverage." },
            { key: "Coverage", definition: "The scope of protection provided by an insurance policy, outlining what types of losses or events are eligible for compensation." },
            { key: "Deductible", definition: "The amount of money an insured person must pay out of pocket before the insurance company covers the remaining expenses." },
            { key: "Claim", definition: "A formal request made by the policyholder to the insurance company to seek compensation for a covered loss or event." },
            { key: "Underwriting", definition: "The process of evaluating an applicant's risk factors and determining whether to provide insurance and at what cost." },
            { key: "Liability", definition: "Legal responsibility for causing harm or damage to another person or their property, often covered by insurance policies." },
            { key: "Coverage Limit", definition: "The maximum amount an insurance policy will pay out for a covered loss." }
        ],
        objectives: [
            { key: "Understanding Insurance Basics", obj: "Have a solid understanding of the fundamental concepts of insurance, including what insurance is, why it's important, and how it helps manage financial risks" },
            { key: "Comprehending Policy Essentials", obj: "Be able to describe the essential components of an insurance policy, such as premiums, deductibles, coverage limits, and beneficiaries, and understand how these elements work together to provide protection" },
            { key: "Recognizing Common Types of Insurance", obj: "Be able to identify and differentiate between common types of insurance, including auto insurance, health insurance, homeowners/renters insurance, and life insurance, and explain their purposes and significance in everyday life" },

        ]
        //   tiles: [
        //     { type: "star", description: "Introduction to Insurance" },
        //     { type: "book", description: "Types of Insurance" },
        //     { type: "star", description: "What are insurance providers?" },
        //     { type: "treasure" },
        //     { type: "book", description: "Insurance Policies and Basic Documents" },
        //     { type: "trophy", description: "Unit 1 Review" },
        //   ],
    },
    {
        unitNumber: 2,
        description: "Auto Insurance",
        backgroundColor: "bg-[#ce82ff]",
        textColor: "text-[#ce82ff]",
        borderColor: "border-[#a568cc]",
        terms: [
            { key: "", definition: "" }
        ],
        objectives: [
            { key: "", obj: "" }
        ]
        //   tiles: [
        //     { type: "fast-forward", description: "Auto Insurance Crash Course" },
        //     { type: "dumbbell", description: "Types of Auto Insurance" },
        //     { type: "book", description: "Auto Insurance Claims" },
        //     { type: "treasure" },
        //     { type: "star", description: "Auto Insurance Discounts" },
        //     { type: "book", description: "Factors Affecting Auto Insurance Rates" },
        //     { type: "star", description: "Minimum Auto Insurance Requirements" },
        //     { type: "book", description: "Auto Insurance for New Drivers" },
        //     { type: "treasure" },
        //     { type: "dumbbell", description: "Police Officers and Auto Insurance" },
        //     { type: "trophy", description: "Unit 2 Review" },
        //   ],
    },
    {
        unitNumber: 3,
        description: "Health Insurance",
        backgroundColor: "bg-[#00cd9c]",
        textColor: "text-[#00cd9c]",
        borderColor: "border-[#00a47d]",
        terms: [
            { key: "", definition: "" }
        ],
        objectives: [
            { key: "", obj: "" }
        ]
        //   tiles: [
        //     { type: "fast-forward", description: "Health Insurance Crash Course" },
        //     { type: "book", description: "Health Insurance Plans" },
        //     { type: "star", description: "Health Insurance Enrollment" },
        //     { type: "treasure" },
        //     { type: "book", description: "Health Insurance Claims" },
        //     { type: "star", description: "Understanding Health Insurance Coverage" },
        //     { type: "treasure" },
        //     { type: "dumbbell", description: "Health Savings Accounts (HSAs) and Flexible Spending Accounts (FSAs)" },
        //     { type: "book", description: "Health Insurance Benefits" },
        //     { type: "trophy", description: "Unit 3 Review" },
        //   ],
    },
];
