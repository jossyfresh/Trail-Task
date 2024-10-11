import { Icon } from "@iconify/react";
import creditcardlandscape from "../assets/creditcardlandscape.png";

export default function CreditCardLandscape() {
  return (
    <div className="sm:px-14 px-2 sm:py-10  flex flex-col mx-auto gap-6">
      <div className="">
        <img src={creditcardlandscape} alt="a" className="w-full h-full" />
      </div>
      <div className="flex flex-row items-center mx-auto gap-2 px-4">
        <div className="sm:flex hidden">
          <Icon icon="ic:sharp-search" color="#404452" fontSize={24} />
        </div>
        <p className="text-lg">
          Discover existing landscapes:{" "}
          <span className="text-[#4B42F0]">Real Estate Agents</span>,{" "}
          <span className="text-[#4B42F0]">Credit Cards</span>,{" "}
          <span className="text-[#4B42F0]">Lawyers</span>
        </p>
      </div>
    </div>
  );
}
