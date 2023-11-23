import React, { useState } from "react";
import { Dots } from "./componets/Dots/Dots";
import { NextButton } from "./componets/NextButton/NextButton";
import { PrevButton } from "./componets/PreButton/PreButton";

import styles from "./Silder.module.css";

type Props = {
  slides: any[];
  children: (props: any) => JSX.Element;
  visibleItemsNumber?: number;
};

export const Slider = React.memo<Props>(
  ({ slides, children, visibleItemsNumber = 5 }) => {
    const [start, setStart] = useState(0);

    const isControlsVisible = slides.length > visibleItemsNumber;

    const visibleItems = isControlsVisible
      ? slides
          .concat(slides.slice(0, visibleItemsNumber))
          .slice(start, start + visibleItemsNumber)
      : slides;

    const onNextClick = () => {
      setStart(start + 1 >= slides.length ? 0 : start + 1);
    };

    const onPrevClick = () => {
      setStart(start - 1 >= 0 ? start - 1 : slides.length - 1);
    };

    return (
      <div>
        <div className={styles.slides}>
          {isControlsVisible && (
            <PrevButton onClick={onPrevClick} className={styles.navButtons} />
          )}

          <ul className={styles.list}>
            {visibleItems.map((slide: any) =>
              children ? children(slide) : null
            )}
          </ul>

          {isControlsVisible && (
            <NextButton onClick={onNextClick} className={styles.navButtons} />
          )}
        </div>

        {isControlsVisible && (
          <div className={styles.dotsControls}>
            <Dots
              items={slides.length}
              active={start}
              onClick={(active: number) => setStart(active)}
            />
          </div>
        )}
      </div>
    );
  }
);

