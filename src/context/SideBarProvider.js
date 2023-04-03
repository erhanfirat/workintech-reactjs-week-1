import { createContext, useState } from "react";

export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
  const menuList = [
    {
      path: "/",
      title: "Ana Sayfa",
    },
    {
      path: "/products",
      title: "Ürünler",
    },
    {
      path: "/products-redux",
      title: "Ürünler (Redux)",
    },
    {
      path: "/counter",
      title: "Sayaç",
    },
    {
      path: "/counter-context",
      title: "Sayaç Context API",
    },
  ];
  const [theme, setTheme] = useState("light"); // light | dark
  return (
    <SideBarContext.Provider value={{ menuList, theme, setTheme }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
