import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold27: "font-poppins font-semibold",
  txtInterSemiBold21: "font-inter font-semibold",
  txtInterBold48: "font-bold font-inter",
  txtLatoRegular16: "font-lato font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
