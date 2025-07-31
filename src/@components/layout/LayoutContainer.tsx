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
        className={`w-[350px] md:w-[704px] lg:w-[960px] xl:w-[1200px] 2xl:w-[1220px] 3xl:w-[1440px] ${isMobileMenuOpen && "!w-full"
          }`}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
