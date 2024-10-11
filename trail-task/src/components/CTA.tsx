import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";

export default function CTA() {
  return (
    <div className="flex flex-row sm:px-28 px-5 sm:py-20 py-4">
      {/*  */}
      <div className="flex sm:justify-between sm:flex-row flex-col gap-8 w-full relative ">
        {/*  */}
        <div className="flex flex-col sm:max-w-[380px] w-full  bg-white px-5 py-5 rounded-lg gap-3">
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
        <div className="flex flex-col max-w-[380px] bg-white px-5 py-5 rounded-lg gap-3">
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
        <div className="flex flex-col max-w-[380px] bg-white px-5 py-5 rounded-lg gap-3">
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
        <div className="sm:absolute hidden bottom-[50px] left-[800px]">
          <img src={arrow1} alt="" />
        </div>
        <div className="sm:absolute hidden left-[335px] top-[40px]">
          <img src={arrow2} alt="" />
        </div>
      </div>
    </div>
  );
}
