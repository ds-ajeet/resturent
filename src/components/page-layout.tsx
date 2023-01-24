import * as React from "react";
// import Site from "../types/Site";
// import Header from "./Header";
// import Footer from "./Footer";

type Props = {
  // _site: Site;
  children?: React.ReactNode;
};

const PageLayout = ({children }: Props) => {
  return (
    <div className="min-h-screen">
    
      {children}
    </div>
  );
};

export default PageLayout;
