import { IMAGE } from "@/constants/images";
import { cn } from "@/utils/classnames";

type ISlideImageProps = {
  image: IMAGE;
  active: boolean;
};

const SlideImage = ({ image, active }: ISlideImageProps) => {
  const imageClass = cn("w-24 h-24", { "pad:w-28 pad:h-28": active }, "rounded-md pad:rounded-lg");

  if (active)
    return (
      <div className="flex items-center justify-center">
        <div className="absolute">
          <div className="gradient-border-frame pad:gradient-border-frame-desktop p-2" />
        </div>
        <img src={image.thumbnail} alt="img-thumbnail" className={imageClass} />
      </div>
    );

  return <img src={image.thumbnail} alt="img-thumbnail" className={imageClass} />;
};

export default SlideImage;
