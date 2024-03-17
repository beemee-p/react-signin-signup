import React from "react";

interface ViewProps<T extends React.ElementType> {
  as?: T;
}

const View = <T extends React.ElementType = "div">({
  as,
  ...props
}: ViewProps<T>) => {
  const Element = as || "div";

  return <Element {...props} />;
};

export default View;
