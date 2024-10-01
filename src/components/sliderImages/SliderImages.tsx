import { TouchEvent, useEffect, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoIosImage } from 'react-icons/io';
import style from './SliderImages.module.css';

interface ISliderImages {
  slides: string[]
}

const SliderImages = ({ slides }: ISliderImages): JSX.Element | null => {


  const [current, setCurrent] = useState<number>(0);
  const [disableArrows, setDisableArrows] = useState<boolean>(true);

  useEffect(() => {
    if (slides[1] !== undefined)
      setDisableArrows(false)
  }, [slides])

  // touch handle
  const [currentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);

  const handleTouchStart = (e: TouchEvent<HTMLButtonElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLButtonElement>) => {
    const touchIndex = e.touches[0].clientX;
    const deltaX = touchStart - touchIndex;
    let newIndex = currentIndex;
    if (deltaX > 50) {
      newIndex = (currentIndex + 1) % slides.length;
    }
    if (deltaX < -50) {

      newIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    setCurrent(newIndex)
  };
  //  -touch handle

  // arrow handle
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  // ---arrow handle
  return (
    <section className={style.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <IoIosImage className={style.slider_loading_sign} />

      {!disableArrows && <IoIosArrowDropleftCircle className={style.left_arrow} onClick={prevSlide} />}
      {!disableArrows && <IoIosArrowDroprightCircle className={style.right_arrow} onClick={nextSlide} />}

      {(slides !== undefined) && slides.map((slide, index) => {
        return (
          <div
            className={index === current
              ? (`${style.slide} ${style.active}`)
              : `${style.slide}`}

            key={index}>
            {index === current && (
              <img src={slide} alt='image' className={style.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default SliderImages;
