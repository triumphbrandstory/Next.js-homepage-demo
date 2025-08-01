import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  id?: string;
  isMobileMenuOpen?: boolean;
}

const LayoutContainer = ({
  className,
  children,
  id,
  isMobileMenuOpen,
}: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${className}`}
      id={id}
    >
      <div
        className={`w-[350px] md:w-[704px] lg:w-[980px] ${isMobileMenuOpen && "!w-full"
          }`}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
