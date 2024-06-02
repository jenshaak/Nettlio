import React from "react";
import timeglassISand from "../public/timeglassISand.jpg";
import sparegrisRosa from "../public/sparegrisRosa.jpg";
import signingContract from "../public/signingContract.jpg";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="flex flex-col items-center gap-20 w-10/12">
      <div className="flex justify-center items-center gap-20 w-full">
        <div className="w-6/12">
          <Image src={timeglassISand} alt="time saved" />
        </div>
        <div className="w-3/12">
          <h2>Saving Time</h2>
          <p className="">
            All done for you - your site will be up and running in days. No need
            to learn coding and website hosting.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-20 w-full">
        <div className="w-3/12">
          <h2>Saving Money</h2>
          <p className="">
            No need to get hire large IT firms, taking large setup costs and
            monthly payments to maintain the site. We provide affordable setup
            costs, with NO recurring fees.
          </p>
        </div>
        <div className="w-6/12">
          <Image src={sparegrisRosa} alt="saving money" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-20 w-full">
        <div className="w-6/12">
          <Image src={signingContract} alt="time saved" />
        </div>
        <div className="w-3/12">
          <h2>Money Back Guaranteed</h2>
          <p className="">
            If you dont like it, we will take the site down, and you will get
            your money back.
          </p>
        </div>
      </div>
    </section>
  );
}
