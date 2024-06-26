import clsx from "clsx";
import React from "react";

const Container = ({
  as: Component = "div",
  className,
  children,
  // message,
  // locale,
}) => {
  return (
    <Component
      className={clsx(
        "max-w-7xl mx-auto px-6 lg:px-8",
        className,
        // message,
        // locale,
      )}>
      <div className="max-w-2xl mx-auto lg:max-w-none">{children}</div>
    </Component>
  );
};

export default Container;
