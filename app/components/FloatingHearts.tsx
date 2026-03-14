"use client";

import { FaHeart } from "react-icons/fa";

export default function FloatingHearts() {

  const hearts = new Array(40).fill(0);

  return (
    <div className="heart-rain">

      {hearts.map((_, i) => {

        const left = Math.random() * 100;
        const duration = 5 + Math.random() * 5;
        const delay = Math.random() * 5;
        const size = 10 + Math.random() * 20;

        return (
          <FaHeart
            key={i}
            className="heart"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              fontSize: `${size}px`,
            }}
          />
        );
      })}

    </div>
  );
}