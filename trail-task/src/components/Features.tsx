import { Icon } from "@iconify/react";
import toplayer from "../assets/TopLayer.png";
import bottomlayer from "../assets/BottomLayer.png";

export default function Features() {
  return (
    <div className="flex flex-col items-center sm:gap-10 gap-4 sm:px-20 px-4">
      {/*  */}
      <div className="sm:max-w-5xl w-full flex flex-col sm:gap-6 gap-6">
        <h1 className="font-[700] sm:text-[48px] text-[30px] sm:leading-[58px] leading-[36px] text-center text-[#21215B] w-full">
          Gain an advantage over your competitors with next-level SEO
          intelligence
        </h1>
        <p className="font-[400] sm:text-[20px] text-[16px] sm:leading-[24px] leading-[20px] text-center text-[#2C2C7A]">
          Click the tabs below to see what makes SiteCurve standout from other
          SEO tools.
        </p>
      </div>
      {/*  */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="sm:flex hidden gap-5 w-full mx-auto">
          {" "}
          {/* Set a max width for larger screens */}
          <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md sm:w-[249px] w-[200px] justify-center hover:border border-[#4B42F4] hover:text-[#4B42F4]">
            <Icon
              icon="uit:arrow-up-right"
              fontSize={22}
              color="#404452"
              className="hover:text-[#4B42F4]"
            />
            <p>Winners & Losers</p>
          </div>
          <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md sm:w-[249px] w-[200px] justify-center hover:border border-[#4B42F4] hover:text-[#4B42F4]">
            <Icon icon="ph:medal-fill" fontSize={22} color="#404452" />
            <p>Leaderboards</p>
          </div>
          <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md sm:w-[249px] w-[200px] justify-center hover:border border-[#4B42F4] hover:text-[#4B42F4]">
            <Icon icon="tdesign:time" fontSize={22} color="#404452" />
            <p>New Entrants</p>
          </div>
          <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md sm:w-[249px] w-[200px] justify-center hover:border border-[#4B42F4] hover:text-[#4B42F4]">
            <Icon icon="mdi:google" fontSize={22} color="#404452" />
            <p>Unique SEO Metrics</p>
          </div>
          <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md sm:w-[249px] w-[200px] justify-center hover:border border-[#4B42F4] hover:text-[#4B42F4]">
            <Icon icon="tabler:folder" fontSize={22} color="#404452" />
            <p>Portfolios</p>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden max-w-full snap-x snap-mandatory space-x-3 overflow-scroll rounded-full p-2 px-1 hide-scrollbar">
        <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md w-68 shrink-0 justify-center hover:border hover:border-[#4B42F4] hover:text-[#4B42F4] border border-[#EDEDF0]">
          <Icon
            icon="uit:arrow-up-right"
            fontSize={22}
            color="#404452"
            className="hover:text-[#4B42F4]"
          />
          <p>Winners & Losers</p>
        </div>
        <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md w-68 shrink-0 justify-center hover:border hover:border-[#4B42F4] hover:text-[#4B42F4] border border-[#EDEDF0]">
          <Icon icon="ph:medal-fill" fontSize={22} color="#404452" />
          <p>Leaderboards</p>
        </div>
        <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md w-68 shrink-0 justify-center hover:border hover:border-[#4B42F4] hover:text-[#4B42F4] border border-[#EDEDF0]">
          <Icon icon="tdesign:time" fontSize={22} color="#404452" />
          <p>New Entrants</p>
        </div>
        <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md w-68 shrink-0 justify-center hover:border hover:border-[#4B42F4] hover:text-[#4B42F4] border border-[#EDEDF0]">
          <Icon icon="mdi:google" fontSize={22} color="#404452" />
          <p>Unique SEO Metrics</p>
        </div>
        <div className="flex flex-row gap-2 px-4 py-2 bg-white rounded-md w-68 shrink-0 justify-center hover:border hover:border-[#4B42F4] hover:text-[#4B42F4] border border-[#EDEDF0]">
          <Icon icon="tabler:folder" fontSize={22} color="#404452" />
          <p>Portfolios</p>
        </div>
      </div>
      {/*  */}
      <div className="sm:h-[660px] bg-white w-full flex sm:flex-row flex-col sm:justify-between sm:px-8 px-4 rounded-md">
        {/*  */}
        <div className="flex flex-col gap-8 sm:max-w-[500px] w-full px-2 sm:py-2 py-8 justify-center">
          <h1 className="font-[600] sm:text-[40px] text-[35px] leading-[45px] sm:leading-[50px] text-[#353A44] ">
            See which websites are winning and losing rank on your keywords
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2">
              <Icon
                icon="mdi:tick-circle-outline"
                fontSize={24}
                color="#4B42F0"
              />
              <p>View the biggest rank movers over custom time periods</p>
            </div>
            <div className="flex flex-row gap-2">
              <Icon
                icon="mdi:tick-circle-outline"
                fontSize={24}
                color="#4B42F0"
              />
              <p>Sort by share of voice, curve, volatility scores</p>
            </div>
            <div className="flex flex-row gap-2">
              <Icon
                icon="mdi:tick-circle-outline"
                fontSize={24}
                color="#4B42F0"
              />
              <p>Analyze shifts in specific categories and niches</p>
            </div>
          </div>
          <div>
            <button className="px-2 py-2 bg-buttonPrimary rounded-md text-white">
              Get Started
            </button>
          </div>
        </div>
        {/*  */}
        <div className="relative py-10 bg-white">
          <img src={toplayer} alt="toplayer" className="relative z-10 pl-10" />
          <img
            src={bottomlayer}
            alt="bottomlayer"
            className="absolute sm:bottom-0 -bottom-12 sm:right-[90px] right-[40px] pl-10 py-14"
          />
        </div>
        {/*  */}
      </div>
    </div>
  );
}
