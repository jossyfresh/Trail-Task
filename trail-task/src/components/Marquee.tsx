import Marquee from "react-fast-marquee";
import MarqueeCard from "./MarqueeCard";

const data = [
  {
    id: 1,
    domainName: "garagegymreviews.com",
    Totalnumber: "4.2M",
    up: false,
    percentage: "52",
  },
  {
    id: 2,
    domainName: "capitalone.com",
    Totalnumber: "4.2M",
    up: true,
    percentage: "52",
  },
  {
    id: 3,
    domainName: "chase.com",
    Totalnumber: "4.2M",
    up: false,
    percentage: "52",
  },
  {
    id: 4,
    domainName: "citi.com",
    Totalnumber: "4.2M",
    up: true,
    percentage: "52",
  },
  {
    id: 5,
    domainName: "costco.com",
    Totalnumber: "4.2M",
    up: true,
    percentage: "52",
  },
  {
    id: 6,
    domainName: "amex.com",
    Totalnumber: "4.2M",
    up: false,
    percentage: "52",
  },
  {
    id: 7,
    domainName: "youtube.com",
    Totalnumber: "4.2M",
    up: false,
    percentage: "52",
  },
  {
    id: 8,
    domainName: "figma.com",
    Totalnumber: "4.2M",
    up: true,
    percentage: "52",
  },
  {
    id: 9,
    domainName: "google.com",
    Totalnumber: "4.2M",
    up: true,
    percentage: "52",
  },
  {
    id: 10,
    domainName: "microsoft.com",
    Totalnumber: "4.2M",
    up: true,
    percentage: "52",
  },
];
export default function Marquees() {
  return (
    <div className="flex flex-row w-full">
      <Marquee pauseOnHover gradient gradientColor="#1C1A33" gradientWidth={50}>
        {data.map((item) => (
          <MarqueeCard
            key={item.id}
            domainName={item.domainName}
            Totalnumber={item.Totalnumber}
            up={item.up}
            percentage={item.percentage}
          />
        ))}
      </Marquee>
    </div>
  );
}
