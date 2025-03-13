import React from "react";
import styles from "@assets/scss/home.module.scss";
import dynamic from "next/dynamic";

const Translations = dynamic(() => import("@/commons/Translations"), {
  ssr: false,
});

const EventComponent = () => {
  return (
    <div className="mt-20">
      <h3 className="px-3 inline-block md:hidden uppercase font-icie_medium text-orange1 text-base sm:text-xl text-[27.88px] tracking-[0.15rem] pb-2 text-center">
        <Translations text="eventOrganizing" />
      </h3>

      <div
        className={`${styles.event} h-[200px] md:h-[450px] lg:h-[500px] xl:h-svh text-center`}
      >
        <div
          className={`${styles.title} -mt-5 relative z-0 bg-white inline-block px-10 rounded-full`}
        >
          <h3 className=" hidden md:inline-block font-icie_medium text-orange1 text-base sm:text-xl text-[27.88px] tracking-[0.15rem] py-6">
            <Translations text="eventOrganizing" />
          </h3>
          {/* <Image className='w-full h-full absolute -top-[5px] right-0 -z-[1]' alt='' src={bgTitle} /> */}
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
