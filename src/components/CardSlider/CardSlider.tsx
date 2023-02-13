// import React, { useState, useEffect, useRef } from "react";
// import { useSpring, animated } from "react-spring";

// interface CardProps {
//   title: string;
//   description: string;
//   image: string;
// }

// const Card: React.FC<CardProps> = ({ title, description, image }) => (
//   <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//     <img src={image} alt={title} />
//     <h3>{title}</h3>
//     <p>{description}</p>
//   </div>
// );

// interface CardSliderProps {
//   cards: CardProps[];
// }

// const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
//   const [ currentIndex, setCurrentIndex ] = useState(0);
//   const animatingRef = useRef(false);

//   const animation = useSpring({
//     from: { transform: "translateY(100%)" },
//     to: { transform: "translateY(0%)" },
//     config: { duration: 1000 },
//     onStart: () => {
//       animatingRef.current = true;
//     },
//     onRest: () => {
//       setTimeout(() => {
//         setCurrentIndex((currentIndex + 1) % cards.length);
//         animatingRef.current = false;
//       }, 500);
//     }
//   });

//   useEffect(() => {
//     if (!animatingRef.current) {
//       setCurrentIndex((currentIndex + 1) % cards.length);
//     }
//   }, [ currentIndex ]);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <animated.div style={animation}>
//         <Card {...cards[ currentIndex ]} />
//       </animated.div>
//     </div>
//   );
// };

// export default CardSlider;




// const CardSlider = ({ cards }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const animatingRef = useRef(false);

//   const animation = useSpring({
//     from: { transform: "translateY(-100%)", opacity: 1 },
//     to: { transform: "translateY(100%)", opacity: 0 },
//     config: { duration: 1500 },
//     onStart: () => {
//       animatingRef.current = true;
//     },
//     onRest: () => {
//       setTimeout(() => {
//         setCurrentIndex((currentIndex + 1) % cards.length);
//         animatingRef.current = false;
//         setTimeout(() => {
//           setCurrentIndex((currentIndex + 1) % cards.length);
//         }, 0);
//       }, 0);
//     }
//   });

//   return (
//     <div className="card-slider">
//       {cards.map((card, i) => {
//         const animationProps = useSpring({
//           transform:
//             i === currentIndex
//               ? "translateY(0%)"
//               : i === (currentIndex + 1) % cards.length
//                 ? "translateY(100%)"
//                 : "translateY(-100%)",
//           opacity: i === currentIndex ? 1 : 0,
//           config: { duration: 1500 }
//         });

//         return (
//           <animated.div
//             key={i}
//             className="card-slider-animated-div"
//             style={animationProps}
//           >
//             <Card {...card} />
//           </animated.div>
//         );
//       })}
//     </div>
//   );
// };
