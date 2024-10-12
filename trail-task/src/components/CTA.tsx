import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";

export default function CTA() {
  return (
    <div className="flex flex-row sm:px-28 sm:py-20 py-4">
      {/*  */}
      <div className="flex sm:justify-between sm:flex-row flex-col sm:gap-8 w-full relative ">
        {/*  */}
        <div
          style={{
            boxShadow: "0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A",
          }}
          className="flex flex-col sm:w-[400px]   bg-white px-5 py-5 rounded-lg gap-3"
        >
          <h1 className="font-[700] text-[22px] leading-[30px] text-black">
            Add keywords or websites
          </h1>
          <p className="leading-[28px] font-[400] text-[16px] text-black">
            Get started by importing your keywords or websites alongside your
            preferred device, language, and location.
          </p>
          <div className="w-full">
            <img src={cover1} alt="" className="w-full" />
          </div>
        </div>
        {/*  */}
        <div
          style={{
            boxShadow: "0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A",
          }}
          className="flex flex-col sm:w-[440px] bg-white px-5 py-5 rounded-lg gap-3"
        >
          <h1 className="font-[700] text-[22px] leading-[30px] text-black">
            Build landscape
          </h1>
          <p className="leading-[28px] font-[400] text-[16px] text-black">
            SiteCurve uses AI to categorize all keywords and websites in the
            search results to build your custom SEO landscape.
          </p>
          <div className="w-full">
            <img src={cover2} alt="" className="w-full" />
          </div>
        </div>
        {/*  */}
        <div
          style={{
            boxShadow: "0px 2px 4px -2px #0000000D, 0px 4px 6px -1px #0000001A",
          }}
          className="flex flex-col sm:w-[400px]  bg-white px-5 py-5 rounded-lg gap-3"
        >
          <h1 className="font-[700] text-[22px] leading-[30px] text-black">
            Uncover insights
          </h1>
          <p className="leading-[28px] font-[400] text-[16px] text-black">
            SiteCurve pulls fresh rank data, giving you an automated, up-to-date
            view of winning and losing websites each day.
          </p>
          <div className="w-full">
            <img src={cover3} alt="" className="w-full" />
          </div>
        </div>
        <div className="absolute bottom-[50px] left-[750px]">
          <img src={arrow1} alt="" className="w-20" />
        </div>
        <div className="absolute  left-[305px] top-[40px]">
          <img src={arrow2} alt="" className="w-20" />
        </div>
      </div>
    </div>
  );
}
