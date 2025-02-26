import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Contacts = {
  address: "123 Main Street, Anytown, USA",
  phone: "+1 (555) 123-4567",
  email: "TechHeimSupport@gmail.com",
};

export const trimTitle = (title) => {
  if (title.length > 50) {
    return `${title.slice(0, 50)}...`;
  } else return title;
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
