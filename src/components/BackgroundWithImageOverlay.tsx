import Image from "next/image";

const BackgroundWithImageOverlay = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Image as background */}
      <Image src={imgSrc} alt="Background" layout="fill" objectFit="cover" priority />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient" />
    </div>
  );
};

export default BackgroundWithImageOverlay;
