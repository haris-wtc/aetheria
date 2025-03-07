import Image from "next/image";
import Reviews from "@/components/reviews";

export function RightPanel() {
  return (
    <div className="flex flex-col items-center h-full w-full p-3">
      <Image
        src="images/hero.png"
        alt="Perfume bottle on tropical leaf background"
        fill
        className="object-cover -z-10"
        priority
      />

      <h3 className="text-white text-3xl font-bold text-center mt-9">
        Aetheria
      </h3>

      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2014-MCEoOUfDkhtIcPZVTpXBXDttubsrmP.png"
        alt="Perfume bottle"
        width={365}
        height={395}
        className="max-w-[365px] w-full"
        priority
      />

      <div className="flex flex-col items-center -mt-12">
        <h2 className="text-white text-4xl md:text-[40px] font-bold text-center mb-8">
          Your story,
          <br />
          your perfume.
        </h2>

        <Reviews />
      </div>
    </div>
  );
}
