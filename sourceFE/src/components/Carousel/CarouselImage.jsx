import "./css/CarouselImage.css";
import { useState, useEffect } from "react";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import { PropTypes } from "prop-types";
export const CarouselItem = ({ dataCarousel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastClickTime > 3000) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, lastClickTime]);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    setLastClickTime(Date.now());
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    setLastClickTime(Date.now());
  };
  return (
    <>
      <div className=" flex flex-col items-center bg-slate-100  min-h-[412px]">
        <div className="carousel-container relative overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => setLastClickTime(Date.now())}
          >
            <div
              className="carousel-slide flex"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              <img src={banner1} alt="Image 1" className="carousel-image" />
              <img src={banner2} alt="Image 2" className="carousel-image" />
              <img src={banner3} alt="Image 3" className="carousel-image" />
            </div>
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 ml-2 my-auto text-white  rounded-full p-2 text-2xl"
            onClick={goToPrevSlide}
          >
            {"<"}
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 mr-2 my-auto text-white rounded-full p-2 text-2xl"
            onClick={goToNextSlide}
          >
            {">"}
          </button>
        </div>
        <div className="text-center max-w-[310px] pt-2 pb-3 ">
          <h4>
            <a
              className="font-bold hover:underline  max-w-[310px] line-clamp-1 text-xl"
              href="/book/my-enchanting-system_22600918205369205"
              title="The Boss Behind The Game The Boss Behind The Game The Boss Behind"
            >
              The Boss Behind The Game The Boss Behind The Game The Boss Behind
            </a>
          </h4>
          <p className="mb8 tac fw400 lh20 fs14 ls0.2 tac ell">
            {" "}
            <a
              className=" hover:underline"
              href="/stories/novel-games-male"
              title="Games"
            >
              Games
            </a>{" "}
            · <span>Slashing Blade</span>{" "}
          </p>
          <p className="  line-clamp-6 leading-normal  text-justify tracking-wide		">
            "Did I really die?" Cain Lisworth woke up in the adventurer guild,
            he had returned to the start of his journey after being killed by
            the cosmos guards. Armed with his knowledge, he started his life
            once again trying to break the heavenly orders and escape the mortal
            world. This time, without mistakes he will raise back to the top and
            reclaim his throne as the strongest enchanter in history! **** This
            story finally has a Discord server. Please visit it to see character
            art, or demand art to be created for a specific character. Only ask
            how someone looks, and I will get it out.
          </p>
        </div>
      </div>
    </>
  );
};

CarouselItem.propTypes = {
  dataCarousel: PropTypes.array.isRequired,
};
