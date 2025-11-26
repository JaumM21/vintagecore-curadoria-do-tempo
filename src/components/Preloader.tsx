import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-center space-y-6 animate-fade-in">
        <img
          src={logo}
          alt="VintageCore"
          className="h-24 w-24 mx-auto vintage-shimmer"
        />
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary mb-2">VintageCore</h1>
          <p className="text-sm text-muted-foreground">Curadoria do Tempo</p>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-accent animate-bounce-subtle" style={{ animationDelay: "0s" }}></div>
          <div className="h-2 w-2 rounded-full bg-accent animate-bounce-subtle" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-2 w-2 rounded-full bg-accent animate-bounce-subtle" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
