import { useEffect, useState } from "react";

type BackgroundVideoProps = {
  showImageOnly?: boolean;
  imageUrl?: string;
};

export default function BackgroundVideo({
  showImageOnly = false,
  imageUrl = "/assets/background.png",
}: BackgroundVideoProps) {
  const [isVideoSupported, setIsVideoSupported] = useState<boolean>(false);

  useEffect(() => {
    const checkVideoAutoplaySupport = async () => {
      const video = document.createElement("video");
      video.src = "/banerVideo.mp4";
      video.muted = true;
      video.playsInline = true;

      try {
        await video.play();
        video.remove();
        setIsVideoSupported(true);
      } catch {
        video.remove();
        setIsVideoSupported(false);
      }
    };

    checkVideoAutoplaySupport();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!showImageOnly && isVideoSupported ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/banerVideo.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
        />
      )}
    </div>
  );
}
