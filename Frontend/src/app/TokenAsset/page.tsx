import Breadcrumb from "@/components/Common/Breadcrumb";
import Minter from "@/components/TokenAsset";
import Contact from "@/components/TokenAsset";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const TokenAsset = () => {
  return (
    <>
     

      <Minter />
    </>
  );
};

export default TokenAsset;
