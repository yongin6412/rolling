import { useCallback, useEffect, useRef, useState } from "react";
import RollingPaperCard from "../rolling-paper-card/RollingPaperCard";
import {
  getCustomRecipient,
  getRecipientsList,
} from "../../../../services/api";
import styles from "./CardList.module.scss";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";

function CardList({ order = "", isMobile, isPhone, onClick }) {
  const [cardList, setCardList] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const swiperRef = useRef(null);

  const handleLoad = useCallback(async () => {
    const { results, next, previous } = await getRecipientsList({
      sort: order,
    });
    setPrevUrl(previous);
    setNextUrl(next);
    setCardList(results);
  }, [order]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  const handleNextButtonClick = async () => {
    if (nextUrl) {
      const {
        next,
        previous,
        results: fetchedCards,
      } = await getCustomRecipient(nextUrl);
      setNextUrl(next);
      setPrevUrl(previous);
      setCardList((currentCardList) => {
        const newCards = fetchedCards.filter(
          (newCard) =>
            !currentCardList.some(
              (existingCard) => existingCard.id === newCard.id
            )
        );
        return [...currentCardList, ...newCards];
      });
      if (!isMobile) {
        setTimeout(() => {
          swiperRef.current.update();
          swiperRef.current.slideNext();
        }, 100);
      }
    }
  };

  // 이전 슬라이드
  const handlePrevButtonClick = async () => {
    const { next, previous } = await getCustomRecipient(prevUrl);
    setNextUrl(next);
    setPrevUrl(previous);
    swiperRef.current.slidePrev();
  };

  const handleReachEnd = () => {
    handleNextButtonClick();
  };

  const swiperSettings = {
    className: styles.swiper,
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = prevButtonRef.current;
      swiper.params.navigation.nextEl = nextButtonRef.current;
    },
    modules: [Navigation],
    slidesPerView: "auto",
    slidesPerGroup: 1,
    onSwiper: handleSwiper,
    spaceBetween: 20,
    onReachEnd: () => (!isMobile ? null : handleReachEnd()),
    breakpoints: {
      1920: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  };
  return (
    <>
      {cardList.length !== 0 ? (
        <div className={styles.cardList}>
          <Swiper {...swiperSettings}>
            {cardList.map((cardInfo) => (
              <SwiperSlide
                onClick={() => onClick(cardInfo.id)}
                key={cardInfo.id}
                className={styles.swiperSlide}
              >
                <RollingPaperCard
                  name={cardInfo.name}
                  messageCount={cardInfo.messageCount}
                  recentMessages={cardInfo.recentMessages}
                  backgroundImage={cardInfo.backgroundImageURL}
                  backgroundColor={cardInfo.backgroundColor}
                  topReactions={cardInfo.topReactions}
                  isPhone={isPhone}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {!isMobile && (
            <>
              {nextUrl && (
                <button
                  onClick={handleNextButtonClick}
                  ref={nextButtonRef}
                  className={styles.customSwiperButtonNext}
                />
              )}
              {prevUrl && (
                <button
                  onClick={handlePrevButtonClick}
                  ref={prevButtonRef}
                  className={styles.customSwiperButtonPrev}
                />
              )}
            </>
          )}
        </div>
      ) : (
        <div className={styles.initializeCardList} />
      )}
    </>
  );
}

export default CardList;
