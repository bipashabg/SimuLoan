import { HowItWorksStep } from "@/types/howItWorks";

const howItWorksData: HowItWorksStep[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.822 0-16-7.178-16-16S11.178 4 20 4s16 7.178 16 16-7.178 16-16 16z"/>
        <path d="M20 8c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12S26.617 8 20 8zm0 22c-5.514 0-10-4.486-10-10S14.486 10 20 10s10 4.486 10 10-4.486 10-10 10z"/>
        <path d="M22 14h-4v8h-4v4h8v-12z"/>
      </svg>
    ),
    title: "Connect Wallet",
    paragraph: "User connects their digital wallet to our platform, enabling secure transactions and asset management.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M37 0H3C1.35 0 0 1.35 0 3v34c0 1.65 1.35 3 3 3h34c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zm-1 36H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h32c.55 0 1 .45 1 1v32z"/>
        <path d="M30 10H10c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-2 16H12V14h16v12z"/>
        <path d="M15 18h10v4H15z"/>
      </svg>
    ),
    title: "Mint Asset Token",
    paragraph: "User submits asset details to mint a token, creating a digital representation of their real-world asset.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M36 0H4C1.8 0 0 1.8 0 4v32c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM4 36V4h32v32H4z"/>
        <path d="M30 12H10c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2zm-2 12H12V16h16v8z"/>
        <path d="M15 20h10v2H15z"/>
      </svg>
    ),
    title: "Request Loan",
    paragraph: "User requests a loan against their asset token, leveraging their digital asset as collateral.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.822 0-16-7.178-16-16S11.178 4 20 4s16 7.178 16 16-7.178 16-16 16z"/>
        <path d="M28 12H12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V14c0-1.1-.9-2-2-2zm-2 12H14v-8h12v8z"/>
        <path d="M18 20h4v2h-4z"/>
      </svg>
    ),
    title: "Loan Processing",
    paragraph: "The loan is processed, and funds are transferred to the user. User can repay the loan within the specified timeframe.",
  },
];

export default howItWorksData;