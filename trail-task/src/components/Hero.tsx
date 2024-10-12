import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <div className="flex flex-col py-10 items-center gap-7 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="font-[800] text-[40px] md:text-[50px] lg:text-[60px] max-w-4xl leading-[40px] sm:leading-[50px] md:leading-[55px] lg:leading-[65px] text-center text-[#353A44]">
        Discover Who’s Winning and Losing in SEO and Why
      </div>

      {/* Description Section */}
      <div className="font-[400] text-[20px] leading-[28px] md:leading-[32px] text-center text-[#353A44] max-w-3xl">
        Spot winning and losing websites across your competitive landscape in
        different niches, website types, and business models.
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 w-[90%]  mx-auto justify-center">
        <button
          style={{
            border: "0.5px solid",
            borderImageSource:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)",
            borderImageSlice: 1,
          }}
          className="px-4 py-3 bg-buttonPrimary text-white rounded-md text-sm sm:text-base font-medium flex items-center justify-center"
        >
          Create Landscape -<span className="font-bold">&nbsp;it's Free</span>
        </button>
        <button
          style={{
            boxShadow: "0px 0px 0px 1px #ECEFF4, 0px 1px 2px 0px #080B121A",
          }}
          className="px-4 py-3 bg-white text-[#212330] rounded-md border border-gray-300 text-sm sm:text-base font-medium"
        >
          Schedule Demo
        </button>
      </div>
      {/* Credit Card Info Section */}
      <div className="flex flex-row gap-4 items-center">
        <Icon icon="mingcute:bank-card-line" fontSize={24} color="#404452" />
        <p className="text-[#5F6575] text-sm sm:text-base font-[400]">
          No Credit Card Required
        </p>
      </div>
    </div>
  );
}
