import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function RollOver() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-60"
    >
      <CarouselContent>
        <CarouselItem className="flex flex-col gap-3">
          <Image
            src="/typescript.png"
            height={300}
            width={300}
            alt="typescript logo"
          />
          <p className="text-center text-gray-400 font-bold">Typescript</p>
        </CarouselItem>
        <CarouselItem className="flex flex-col gap-3">
          <Image
            src="/java-script.png"
            height={300}
            width={300}
            alt="typescript logo"
          />
          <p className="text-center text-gray-400 font-bold">Javascript</p>
        </CarouselItem>
        <CarouselItem className="flex flex-col gap-3">
          <Image
            src="/python.png"
            height={300}
            width={300}
            alt="typescript logo"
          />
          <p className="text-center text-gray-400 font-bold">Python</p>
        </CarouselItem>
        <CarouselItem className="flex flex-col gap-3">
          <Image
            src="/html.png"
            height={300}
            width={300}
            alt="typescript logo"
          />
          <p className="text-center text-gray-400 font-bold">HTML</p>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-gray-400" />
      <CarouselNext className="bg-gray-400" />
    </Carousel>
  );
}
