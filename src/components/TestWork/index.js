import styles from './index.module.scss'
import homeImg from './img/Vector.svg';
import bookImg from './img/Vector2.svg';
import searchImg from './img/Vector3.svg';
import optionalImg from './img/Vector4.svg';
import poiskImg from './img/search.svg';
import krygImg from './img/кругБелки.png';
import belokImg from './img/малекулаБелка.png';
import mikroImg from './img/малекулаМикр.png';
import probiotikiImg from './img/прибиотики.svg';
import banochka from './img/Баночка.svg';
import { useState, useRef } from 'react';

const TestWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prevIndex) =>
        prevIndex === positions.length - 1 ? 0 : prevIndex + 1
      );
    } else if (isRightSwipe) {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? positions.length - 1 : prevIndex - 1
      );
    }
  };

  const positions = [
    {
      className: styles.microElement,
      style: {
        width: '287.42px',
        height: '306.69px',
        top: '82px',
        right: '559px',
        left: 'auto',
        zIndex: 1
      },
      fontSize: '20px'
    },
    {
      className: styles.probiotics,
      style: {
        width: '389.35px',
        height: '402.1px',
        top: '178px',
        left: '297px',
        zIndex: 3
      },
      fontSize: '35px'
    },
    {
      className: styles.protein,
      style: {
        width: '658.56px',
        height: '702.72px',
        top: '371px',
        right: '91px',
        left: 'auto',
        zIndex: 3
      },
      fontSize: '70px'
    }
  ];

  const getElementPosition = (elementIndex) => {
    const carouselPosition = (elementIndex - activeIndex + positions.length) % positions.length;
    return positions[carouselPosition];
  };

  return (
    <div
      className={styles.containerWork}
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.containerWork__header}>
        <h2 className={styles.containerWork__header_h2}>ИДЕАЛЬНОЙ ПИЩЕЙ ДЛЯ ГРУДНОГО РЕБЕНКА ЯВЛЯЕТСЯ МОЛОКО МАТЕРИ</h2>
      </div>

      <div className={styles.containerWork__descriptions}>
        <h1 className={styles.containerWork__descriptions_h1}>Экспертное решение для роста и развития</h1>

        <div className={styles.containerWork__descriptions_dates}>
          <div className={styles.containerWork__descriptions_dates_carusel}>
            <div
              className={`${styles.containerWork__descriptions_dates_carusel__malekyls} ${styles.microElement}`}
              style={{
                ...getElementPosition(0).style,
                transition: 'all 0.5s ease-in-out'
              }}
            >
              <img
                className={styles.containerWork__descriptions_dates_carusel__malekyls_fonImg}
                src={krygImg}
                alt='kryg'
              />
              <img
                className={styles.containerWork__descriptions_dates_carusel__malekyls_malekyl}
                src={mikroImg}
                alt='mikro'
              />
              <p className={styles.containerWork__descriptions_dates_carusel__malekyls_p2} style={{ fontSize: getElementPosition(0).fontSize }}>Микроэлементы</p>
            </div>

            <img
              className={styles.containerWork__descriptions_dates_carusel_img}
              src={banochka}
              alt='banochka'
            />

            <div
              className={`${styles.containerWork__descriptions_dates_carusel__malekyls} ${styles.probiotics}`}
              style={{
                ...getElementPosition(1).style,
                transition: 'all 0.5s ease-in-out'
              }}
            >
              <img
                className={styles.containerWork__descriptions_dates_carusel__malekyls_fonImg}
                src={krygImg}
                alt='kryg'
              />
              <img
                className={styles.containerWork__descriptions_dates_carusel__malekyls_malekyl}
                src={probiotikiImg}
                alt='probiotiki'
              />
              <p className={styles.containerWork__descriptions_dates_carusel__malekyls_p3} style={{ fontSize: getElementPosition(1).fontSize }}>Пробиотики</p>
            </div>

            <div
              className={`${styles.containerWork__descriptions_dates_carusel__malekyls} ${styles.protein}`}
              style={{
                ...getElementPosition(2).style,
                transition: 'all 0.5s ease-in-out'
              }}
            >
              <img
                className={styles.containerWork__descriptions_dates_carusel__malekyls_fonImg}
                src={krygImg}
                alt='kryg'
              />
              <img
                className={styles.containerWork__descriptions_dates_carusel__malekyls_malekyl}
                src={belokImg}
                alt='belok'
              />
              <p className={styles.containerWork__descriptions_dates_carusel__malekyls_p}
                style={{ fontSize: getElementPosition(2).fontSize }}>Белок</p>
            </div>
          </div>

          <div className={styles.containerWork__descriptions_dates_info}>
            <div className={styles.containerWork__descriptions_dates_info_pagDate}>
              <button className={styles.containerWork__descriptions_dates_info_pagDate_button}>
                Оптимальное количество белка
              </button>

              <p className={styles.containerWork__descriptions_dates_info_pagDate_text}>
                1,11г <span className={styles.containerWork__descriptions_dates_info_pagDate_text_span}></span>100мл
              </p>
            </div>

            <div className={styles.containerWork__descriptions_dates_info_paginations}>
              <div className={styles.containerWork__descriptions_dates_info_paginations_buttons}>
                <button
                  className={`${styles.containerWork__descriptions_dates_info_paginations_buttons_button} ${activeIndex === 0 ? styles.active : ''
                    }`}
                  onClick={() => handleButtonClick(0)}
                >
                  Оптимальное качество белка
                </button>

                <button
                  className={`${styles.containerWork__descriptions_dates_info_paginations_buttons_button} ${activeIndex === 1 ? styles.active : ''
                    }`}
                  onClick={() => handleButtonClick(1)}
                >
                  Оптимальный аминокислотный профиль
                </button>

                <button
                  className={`${styles.containerWork__descriptions_dates_info_paginations_buttons_button} ${activeIndex === 2 ? styles.active : ''
                    }`}
                  onClick={() => handleButtonClick(2)}
                >
                  Оптимальное соотношение сыворотка/казеин, %
                </button>
              </div>

              <img
                className={styles.containerWork__descriptions_dates_info_paginations_img}
                src={poiskImg}
                alt='search'
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerWork__footer}>
        <div className={styles.containerWork__footer_icons}>
          <img
            className={styles.containerWork__footer_icons_img}
            src={homeImg}
            alt='footer img'
          />

          <img
            className={styles.containerWork__footer_icons_img}
            src={bookImg}
            alt='footer img'
          />

          <img
            className={styles.containerWork__footer_icons_img}
            src={searchImg}
            alt='footer img'
          />

          <img
            className={styles.containerWork__footer_icons_img}
            src={optionalImg}
            alt='footer img'
          />
        </div>

        <p className={styles.containerWork__footer_p}>ИНФОРМАЦИЯ ТОЛЬКО ДЛЯ МЕДИЦИНСКИХ РАБОТНИКОВ. ТОЛЬКО ДЛЯ ВНУТРЕННЕГО ИСПОЛЬЗОВАНИЯ</p>
      </div>
    </div>
  )
}

export default TestWork;