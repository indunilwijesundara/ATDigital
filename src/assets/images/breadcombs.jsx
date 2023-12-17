import React from 'react';

export const BreadcrumbSVG = ({ width = 31, height = 25,color="white", fillColor = 'white', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect y="0.5" width="31" height="4" rx="2" fill={fillColor} />
      <rect y="10.5" width="31" height="4" rx="2" fill={fillColor} />
      <rect y="20.5" width="31" height="4" rx="2" fill={fillColor} />
    </svg>
  );
};
