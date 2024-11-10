import React, { useState, useEffect } from "react";

export const Carousel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(autoplay);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {children}
      <CarouselNavigation onPrev={prevSlide} onNext={nextSlide} />
    </div>
  );
};

const CarouselNavigation: React.FC<{
  onPrev: () => void;
  onNext: () => void;
}> = ({ onPrev, onNext }) => (
  <>
    <CarouselPrevious onClick={onPrev}>Previous</CarouselPrevious>
    <CarouselNext onClick={onNext}>Next</CarouselNext>
  </>
);

export const CarouselContent: React.FC<{
  children: React.ReactNode;
  activeIndex: number;
}> = ({ children, activeIndex }) => {
  return (
    <div className="flex transition-transform duration-300 ease-in-out">
      {React.Children.map(children, (child, index) => {
        return (
          <CarouselItem key={index} active={index === activeIndex}>
            {child}
          </CarouselItem>
        );
      })}
    </div>
  );
};

export const CarouselItem: React.FC<{
  children: React.ReactNode;
  active?: boolean;
}> = ({ children, active = false }) => {
  return (
    <div
      className={`w-full ${
        active ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500`}
    >
      {children}
    </div>
  );
};

export const CarouselNext: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
    >
      {children}
    </button>
  );
};

export const CarouselPrevious: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
    >
      {children}
    </button>
  );
};
