import { Feature } from "@/types/feature";
import { CardSpotlight } from "@/components/ui/card-spotlight";
const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <CardSpotlight className="px-12 py-6 h-full bg-[#121212]" radius={200}>
      <div className="w-full z-200 ">
        <div className="wow fadeInUp" data-wow-delay=".15s">
          {/* <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div> */}
          <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
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

export default SingleFeature;