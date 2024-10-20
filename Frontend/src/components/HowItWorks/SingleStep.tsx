import { HowItWorksStep } from "@/types/howItWorks";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const SingleStep = ({ step }: { step: HowItWorksStep }) => {
  const { icon, title, paragraph } = step;
  return (
    <CardSpotlight className="px-12 py-8 h-full bg-[#121212]" radius={200}>
      <div className="w-full z-200 ">
        <div className="wow fadeInUp" data-wow-delay=".15s">
          
          <h3 className="mb-5 text-xl font-bold text-[#CE85E4] dark:text-[#ffffff] sm:text-2xl lg:text-xl xl:text-2xl">
          
            {title}
          </h3>
          <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default SingleStep;