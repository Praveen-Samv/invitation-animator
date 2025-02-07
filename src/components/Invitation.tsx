import { useEffect, useState } from "react";

export const Invitation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#FDF8F3] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url(https://cdn.culture.ru/images/c3e1a58b-73bc-5385-b5b1-0319ab2e22af)",
        }}
      />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          {/* Ganesha Icon */}
          <div className={`text-center mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <span className="text-4xl text-secondary">🕉</span>
          </div>

          {/* Main Heading */}
          <div className={`text-center mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <h1 className="text-2xl md:text-3xl text-primary font-serif mb-4">
              You're cordially invited to the
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary font-serif font-bold mb-4">
              Griha Pravesh Ceremony
            </h2>
            <h3 className="text-xl md:text-2xl text-primary font-serif">
              & <br />
              Sri LakshmiVenkateshwara <br />
              swamy kalyanam
            </h3>
          </div>

          {/* Date and Time */}
          <div className={`text-center mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
            <p className="text-2xl md:text-3xl text-primary font-bold mb-2">
              14 TH FEB, 2025
            </p>
            <p className="text-xl text-primary">
              5:00 AM ONWARDS
            </p>
          </div>

          {/* Location */}
          <div className={`text-center mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
            <p className="text-lg md:text-xl text-primary mb-4">
              4-161, Sivanagar, Dharmavaram,<br />
              Sri Satya Sai District<br />
              Andhra Pradesh
            </p>
          </div>

          {/* Invited By */}
          <div className={`text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "1s" }}>
            <p className="text-lg text-primary italic">
              Invited by<br />
              Purushotham & Umadevi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};