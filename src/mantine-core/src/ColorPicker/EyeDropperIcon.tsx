import React from 'react';

export function EyeDropperIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      {...props}
    >
      <path
        d="M2,14 l1,-3 l6,-6 l2,2 l-6,6 z"
        strokeLinejoin="round"
        strokeWidth="0.5"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M7.5,4.5 l1.5,-1.5 l1.0,1.0 l2,-2 q1,-1,2,0 t0,2 l-2,2 l1.0,1.0 l-1.5,1.5 z"
        strokeLinejoin="round"
        strokeWidth="1"
        stroke="currentColor"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
