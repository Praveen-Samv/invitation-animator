import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export const Invitation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const address = "4-161, Sivanagar, Dharmavaram, Sri Satya Sai District, Andhra Pradesh";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#FDF8F3] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0yNCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6TTAgMThjMy4zMTQgMCA2LTIuNjg2IDYtNlMyLjY4NiA2IDAgNnMtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTAgMGMzLjMxNCAwIDYtMi42ODYgNi02UzIuNjg2IDYgMCA2cy02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMTIgMjRjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTAgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMjQgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0xMiAyNGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0tMzYgMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgZmlsbD0iIzFCNEQzRSIvPjwvZz48L3N2Zz4=')] bg-repeat opacity-10" />
      </div>

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

          {/* Location with Map Link */}
          <div 
            className={`text-center mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} 
            style={{ animationDelay: "0.8s" }}
          >
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block p-4 rounded-lg transition-all duration-300 hover:bg-primary/5"
            >
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-lg md:text-xl text-primary group-hover:text-primary/80 transition-colors duration-300">
                4-161, Sivanagar, Dharmavaram,<br />
                Sri Satya Sai District<br />
                Andhra Pradesh
              </p>
              <span className="inline-block mt-2 text-sm text-primary/60 group-hover:text-primary/80 transition-colors duration-300">
                View on Google Maps
              </span>
            </a>
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