import React from 'react';

function CustomSvg() {
  return (
    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M62.5 33C62.5 49.2924 49.2924 62.5 33 62.5C16.7076 62.5 3.49997 49.2924 3.49997 33C3.49997 16.7076 16.7076 3.5 33 3.5C49.2924 3.5 62.5 16.7076 62.5 33Z"
        fill="url(#paint0_radial_137_67)"
        stroke="url(#paint1_linear_137_67)"
        strokeWidth="7"
      />
      <defs>
        <radialGradient
          id="paint0_radial_137_67"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33 33) rotate(90) scale(39.6)"
        >
          <stop stopColor="#333333" />
          <stop offset="0.34375" stopColor="#333333" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_137_67"
          x1="-19"
          y1="-32.5"
          x2="89.5"
          y2="83.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.201175" stopColor="#9AD6EC" />
          <stop offset="1" stopColor="#1937DA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CustomSvg;
