/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider(props) {
  const { datas } = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {datas.map((data, i) => {
          return (
            <div key={i} className="shadow-xl rounded-2xl">
              <img
                src={data}
                className="h-[300px] w-[400px]  sm:h-[300px] sm:w-[100%]"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageSlider;
