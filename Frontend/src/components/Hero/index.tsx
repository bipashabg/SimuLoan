import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-black md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f776ad] via-[#ff9bc8] to-[#ffb0d9] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Secure Asset-Tokenization and Lending
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-gray-500 sm:text-lg md:text-xl">
                  Unlock the value of your assets through our privacy-focused, decentralized lending platform. Tokenize real-world collateral, secure loans with zk-proof verified creditworthiness, and participate in a new era of transparent yet private peer-to-peer finance.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-sm bg-[#DC92EF] px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="#f776ad" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#f776ad" stopOpacity="0" />
                <stop offset="1" stopColor="#f776ad" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#f776ad" stopOpacity="0" />
                <stop offset="1" stopColor="#f776ad" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="#f776ad" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="#f776ad" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 93.3907C91.6866 120.106 110.465 125.811 137.675 130.762C164.885 135.713 197.48 145.131 220.407 182.363"
              stroke="url(#paint3_linear_25:218)"
            />
            <path
              d="M-124.682 51.9531C-94.1619 49.8375 -25.5886 63.7069 24.6446 85.2148C69.1926 109.155 103.906 112.283 130.507 116.546C157.107 120.809 195.267 128.946 220.942 169.611"
              stroke="url(#paint4_linear_25:218)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="362.889"
                y1="72.3303"
                x2="160.389"
                y2="174.209"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="#ff9bc8" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="362.889"
                y1="72.3303"
                x2="160.389"
                y2="174.209"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="#ffb0d9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="362.889"
                y1="72.3303"
                x2="160.389"
                y2="174.209"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="#ff9bc8" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="362.889"
                y1="72.3303"
                x2="160.389"
                y2="174.209"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="#ffb0d9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="362.889"
                y1="72.3303"
                x2="160.389"
                y2="174.209"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f776ad" />
                <stop offset="1" stopColor="#ff9bc8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;