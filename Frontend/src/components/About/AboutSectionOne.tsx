import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import anim from "./anim-removebg-preview (1).png"; // Correctly import the image

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-black">
      <div className="container mx-auto">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text Section (Left Side) */}
            <div className="w-full px-4 lg:w-1/2 mt-9">
              <SectionTitle
                title="Empowering Financial Freedom Through Decentralization"
                paragraph="We are a passionate team of four students trying to revolutionize the lending landscape. Our project, a decentralized lending dApp, enables users to tokenize real-world assets into ERC-721 NFTs, serving as collateral for loans. With a focus on privacy, we leverage zk-proofs to verify financial data without revealing sensitive information, ensuring a secure and trustworthy lending process. Built on the Polygon network, our platform utilizes Solidity for smart contracts and IPFS for efficient storage. As we embark on this journey for the hackathon, we aim to empower users with innovative financial solutions that prioritize security, accessibility, and user control. Join us in reshaping the future of finance!"
                mb="44px"
              />
            </div>

            {/* Image Section (Right Side) */}
            <div className="w-full  px-4 lg:w-1/2 mt-9">
              <Image
                src={anim} // The imported image
                alt="Empowering Financial Freedom"
                className="w-full h-auto object-cover" // Make sure the image scales correctly
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
