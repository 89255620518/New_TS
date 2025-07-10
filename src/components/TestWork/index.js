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

const TestWork = () => {

    return (
        <div className={styles.containerWork}>
            <div className={styles.containerWork__header}>
                <h2 className={styles.containerWork__header_h2}>ИДЕАЛЬНОЙ ПИЩЕЙ ДЛЯ ГРУДНОГО РЕБЕНКА ЯВЛЯЕТСЯ МОЛОКО МАТЕРИ</h2>
            </div>

            <div className={styles.containerWork__descriptions}>
                <h1 className={styles.containerWork__descriptions_h1}>Экспертное решение для роста и развития</h1>

                <div className={styles.containerWork__descriptions_dates}>
                    <div className={styles.containerWork__descriptions_dates_carusel}>
                        <div className={`${styles.containerWork__descriptions_dates_carusel__malekyls} ${styles.microElement}`}>
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
                            <p className={styles.containerWork__descriptions_dates_carusel__malekyls_p2}>Микроэлементы</p>
                        </div>

                        <img
                            className={styles.containerWork__descriptions_dates_carusel_img}
                            src={banochka}
                            alt='banochka'
                        />

                        <div className={`${styles.containerWork__descriptions_dates_carusel__malekyls} ${styles.probiotics}`}>
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
                            <p className={styles.containerWork__descriptions_dates_carusel__malekyls_p3}>Пробиотики</p>
                        </div>

                        <div className={`${styles.containerWork__descriptions_dates_carusel__malekyls} ${styles.protein}`}>
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
                            <p className={styles.containerWork__descriptions_dates_carusel__malekyls_p}>Белок</p>
                        </div>
                    </div>

                    <div className={styles.containerWork__descriptions_dates_info}>
                        <div className={styles.containerWork__descriptions_dates_info_pagDate}>
                            <button className={styles.containerWork__descriptions_dates_info_pagDate_button}>Оптимальное количество белка</button>

                            <p className={styles.containerWork__descriptions_dates_info_pagDate_text}>
                                1,11г <span className={styles.containerWork__descriptions_dates_info_pagDate_text_span}></span>100мл
                            </p>
                        </div>

                        <div className={styles.containerWork__descriptions_dates_info_paginations}>
                            <div className={styles.containerWork__descriptions_dates_info_paginations_buttons}>
                                <button className={styles.containerWork__descriptions_dates_info_paginations_buttons_button}>Оптимальное качество белка</button>

                                <button className={styles.containerWork__descriptions_dates_info_paginations_buttons_button}>Оптимальный аминокислотный профиль</button>

                                <button className={styles.containerWork__descriptions_dates_info_paginations_buttons_button}>Оптимальное соотношение сыворотка/казеин, %</button>
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