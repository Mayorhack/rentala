import Image from 'next/image';
import min from '../assets/min.png';
import Card from './Card';
import vector from '../assets/Vector.svg';
import community from '../assets/community.svg';
import eye from '../assets/eye.svg';
import plant from '../assets/plant.svg';
import shield from '../assets/shield-star.svg';
import stack from '../assets/stack.svg';

const Mininum = () => {
  return (
    <div className="container py-20">
      <div className="">
        <h3 className="capitalize text-4xl leading-normal font-bold">
          minimum living cost takes care of everything
        </h3>
        <div className="bg-highlight w-3/4 h-1 md:w-[375px]"></div>
      </div>
      <div className="flex flex-col md:flex-row my-11 items-start md:items-center">
        <div className="">
          <Image src={min} alt="min" className="h-[521px] w-[587px]" />
        </div>
        <div className="grid sm:grid-cols-2 p-6 md:grid-cols-[repeat(3,minmax(100px,1fr))] md:gap-10  gap-8">
          <div className="min-w-[159px]">
            <Card className="w-[77px] h-[77px] flex justify-center items-center">
              <Image src={vector} alt="" />
            </Card>
            <p className="mt-5 text-2xl capitalize font-semibold">
              Pay as Little as possible!
            </p>
          </div>
          <div className="min-w-[159px]">
            <Card className="w-[77px] h-[77px] flex justify-center items-center">
              <Image src={community} alt="" />
            </Card>
            <p className="mt-5 text-2xl capitalize font-semibold">
              Enjoy wisdom of community!
            </p>
          </div>
          <div className="min-w-[159px]">
            <Card className="w-[77px] h-[77px] flex justify-center items-center">
              <Image src={stack} alt="" />
            </Card>
            <p className="mt-5 text-2xl capitalize font-semibold">
              Let&apos;s somebody else take care of Landlord!
            </p>
          </div>
          <div className="min-w-[159px]">
            <Card className="w-[77px] h-[77px] flex justify-center items-center">
              <Image src={plant} alt="" />
            </Card>
            <p className="mt-5 text-2xl capitalize font-semibold">
              Enjoy peaceful Environment!
            </p>
          </div>
          <div className="min-w-[159px]">
            <Card className="w-[77px] h-[77px] flex justify-center items-center">
              <Image src={shield} alt="" />
            </Card>
            <p className="mt-5 text-2xl capitalize font-semibold">
              Stay Safe! Save Money!
            </p>
          </div>
          <div className="min-w-[159px]">
            <Card className="w-[77px] h-[77px] flex justify-center items-center">
              <Image src={eye} alt="" />
            </Card>
            <p className="mt-5 text-2xl capitalize font-semibold">
              Pay for what you use !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mininum;
