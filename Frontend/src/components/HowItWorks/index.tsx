import SectionTitle from "../Common/SectionTitle";
import SingleStep from "./SingleStep";
import howItWorksData from "./howItWorksData";

const HowItWorks = () => {
  return (
    <>
      <section id="how-it-works" className="py-16 md:py-20 lg:py-28 bg-black">
        <div className="container">
          <SectionTitle
            title={
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A2C8] via-[#D8BFD8] to-[#E0B0FF]">
                How it Works?
              </span>
            }
            paragraph="Our simple process for asset tokenization and lending"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksData.map((step) => (
              <SingleStep key={step.id} step={step} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;