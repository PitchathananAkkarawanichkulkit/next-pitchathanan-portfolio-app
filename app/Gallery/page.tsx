import Image from "next/image";
import P1 from "@/assets/images/P1.jpg";

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <Image src={P1} alt="P1" width={500} height={500} />
      </div>
      <div>
        <Image src={P1} alt="P1" width={500} height={500} />
      </div>
      <div>
        <Image src={P1} alt="P1" width={500} height={500} />
      </div>
      <div>
        <Image src={P1} alt="P1" width={500} height={500} />
      </div>
      <div>
        <Image src={P1} alt="P1" width={500} height={500} />
      </div>
      <div>
        <Image src={P1} alt="P1" width={500} height={500} />
      </div>
    </div>
  );
}
