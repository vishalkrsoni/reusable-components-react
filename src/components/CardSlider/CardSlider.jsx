import React, { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";
import './CardSlider';



const Card = ({ title, description, image }) => (
  <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img className="card-image" src={image} alt={title} />
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
  </div>
);


const CardSlider = ({ cards }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const animatingRef = useRef(false);

  const animation = useSpring({
    from: { transform: "translateY(-100%)", opacity: 1 },
    to: { transform: "translateY(100%)", opacity: 0 },
    config: { duration: 1500 },
    onStart: () => {
      animatingRef.current = true;
    },
    onRest: () => {
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % cards.length);
        animatingRef.current = false;
      }, 0);
    }
  });


  useEffect(() => {
    if (!animatingRef.current) {
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % cards.length);
      }, 1500);
    }
  }, [ currentIndex ]);


  return (
    <div className="card-slider">
      {cards.map((card, i) => {
        const animationProps = useSpring({
          transform:
            i === currentIndex
              ? "translateY(0%)"
              : i === (currentIndex + 1) % cards.length
                ? "translateY(100%)"
                : "translateY(-100%)",
          opacity: i === currentIndex ? 1 : 0,
          config: { duration: 1500 }
        });

        return (
          <animated.div
            key={i}
            className="card-slider-animated-div"
            style={animationProps}
          >
            <Card {...card} />
          </animated.div>
        );
      })}
    </div>
  );
};



export default CardSlider;
