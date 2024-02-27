import React from "react";

const Title = ({ children }: React.PropsWithChildren) => (
  <h1 className="text-4xl text-black font-bold">{children}</h1>
);

export default Title;
