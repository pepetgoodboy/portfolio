import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import listCertificate from "../data/ListCertificate";

export default function Certificate() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
    });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="mx-auto w-5/6 font-jakarta">
      <div className="mx-auto py-12">
        <h2
          data-aos="fade-up"
          className="text-4xl font-semibold sm:text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-purple-300 text-transparent mb-8 text-center"
        >
          Certificate
        </h2>
        <p
          data-aos="fade-up"
          className="mx-auto text-gray-500 mb-16 text-center text-lg w-full"
        >
          I'm always learning and growing, and these certifications are proof.
        </p>
        <div data-aos="fade-up" className="relative z-0">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode
            className="static pb-4"
            containerClass="container"
            dotListClass="custom-dot-list-style"
            draggable
            focusOnSelect={true}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {listCertificate.map((certificate) => (
              <div key={certificate.id} className="p-4">
                <div className="relative w-full h-full">
                  <Image src={certificate.image} alt="Certificate" />
                </div>
                <h3 className="text-sm md:text-lg text-center mt-3 text-gray-500 font-medium">
                  {certificate.name}
                </h3>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
