import { useEffect, useState } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const offset = 85;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          window.scrollTo({
            top: elementRect - bodyRect - offset,
            behavior: "smooth",
          });
        }
      }, 300); // تأخير بسيط 300ms لضمان اكتمال بناء عناصر الـ DOM
    }
  }, []);

  // مراقبة الرابط في حال تغير (احتياطياً)
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  if (currentPath !== "/") {
    return <NotFound />;
  }

  return <Home />;
}
