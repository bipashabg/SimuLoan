import React from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A2C8] via-[#D8BFD8] to-[#E0B0FF]">
              Main Features
            </span>
          }
          paragraph="Take a look at our unique features!"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;