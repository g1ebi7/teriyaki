import { Swiper } from "swiper/react";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import cl from "classnames";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

interface ISwiper {
  children?: React.ReactNode;
  className?: string;
  scroll?: boolean;
  handleSlide?: () => void;
}

const CustomSwiper = ({
  children,
  className,
  scroll = true,
  handleSlide,
}: ISwiper) => {
  return (
    <Swiper
      style={{
        //@ts-ignore
        "--swiper-pagination-color": "#FFF",
        "--swiper-pagination-bullet-size": "12px;",
      }}
      modules={[Scrollbar, Autoplay, A11y, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={scroll}
      loop
      a11y={{
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      }}
      autoplay={{ disableOnInteraction: false }}
      className={cl(className)}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
