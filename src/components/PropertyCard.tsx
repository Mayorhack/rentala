import Image, { StaticImageData } from 'next/image';
type Props = {
  img: string | HTMLImageElement | StaticImageData;
  title: string;
  type: string;
  price: string;
};

const PropertyCard = ({ img, title, type, price }: Props) => {
  return (
    <div className="rounded-[26px] shadow-2xl w-full">
      <Image src={img} alt="" className="w-full" />
      <div className="py-4 px-7">
        <h4 className="text-2xl text-black capitalize font-bold">{title}</h4>
        <p className="text-sm text-[#818181]">{type}</p>
        <h5 className="text-2xl text-highlight pb-5">{price}</h5>
      </div>
      <div className=" text-black border-[#E4E4E4] grid grid-cols-3 border-t-[1px] items-center">
        <div className="py-5  border-r-[1px] text-center">4</div>
        <div className="py-5  border-r-[1px] text-center">4</div>
        <div className="py-5 text-center">2</div>
      </div>
    </div>
  );
};

export default PropertyCard;
