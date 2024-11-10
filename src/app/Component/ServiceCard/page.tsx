import {
  GraphicDesignCard,
  FrontendDevelopmentCard,
  VideoEditingCard,
} from "@/components/ui/ServicesCard/page";

const ServiceCard = () => {
  return (
    <>
      <div className="flex mt-11">
        <div className="flex justify-center cursor-pointer min-w-full md:min-w-[25rem] lg:min-w-[26rem]">
          <GraphicDesignCard />
        </div>
        <div className="flex justify-center cursor-pointer min-w-full md:min-w-[25rem] lg:min-w-[26rem]">
          <FrontendDevelopmentCard />
        </div>
        <div className="flex justify-center cursor-pointer min-w-full md:min-w-[25rem] lg:min-w-[26rem]">
          <VideoEditingCard />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
