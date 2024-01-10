import React from "react";

// (auth) is a route group
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="flex min-h-screen w-full 
      items-center justify-center"
    >
      {children}
    </main>
  );
};

export default Layout;
