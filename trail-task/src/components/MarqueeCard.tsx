import { Icon } from "@iconify/react";

interface MarqueeCardProps {
  domainName: string;
  Totalnumber: string;
  up: boolean;
  percentage: string;
}

export default function MarqueeCard({
  domainName,
  Totalnumber,
  up,
  percentage,
}: MarqueeCardProps) {
  return (
    <div className="bg-[#373458] py-1 px-3 w-auto rounded-md ml-3">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center gap-2 text-white">
          <p className="font-semibold text-white text-sm">{domainName}</p>
          <Icon icon="material-symbols:info-outline" />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-[#9894BC] text-sm">{Totalnumber}</p>
          <div className="flex flex-row items-center">
            {up ? (
              <>
                <Icon icon="uit:arrow-up-right" fontSize={16} color="#26CA54" />
                <p className="text-[#26CA54] text-sm">{percentage}%</p>
              </>
            ) : (
              <>
                <Icon
                  icon="uit:arrow-down-right"
                  fontSize={20}
                  color="#FF7067"
                />
                <p className="text-[#FF7067]">{percentage}%</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
