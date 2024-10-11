import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="bg-primary items-center flex flex-col gap-8 py-20 border-b-1 border-white">
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className="font-[800] sm:text-[48px] text-[40px] leading-[42px] sm:leading-[38px] text-white text-center">
          Stay Ahead of The Curve
        </h1>
        <p className="font-[400] text-[20px] leading-[30px] text-[#E4E7EC] text-center px-4">
          Discover Who's Winning And Losing In SEO And Why.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <button className="px-3 py-3 bg-buttonPrimary text-white rounded-md font-[500]">
          Start 14-Day Free Trial
        </button>
        <div className="flex flex-row gap-4 items-center py-4">
          <Icon icon="mingcute:bank-card-line" fontSize={24} color="#F7F8FA" />
          <p className="text-[#F7F8FA] font-[400]">No Credit Card Required</p>
        </div>
      </div>
    </div>
  );
}
