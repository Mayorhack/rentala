import Image from 'next/image';
import ceo from '../assets/ceo.png';
import media from '../assets/media.png';

const Reviews = () => {
  return (
    <div className="bg-[rgba(244,81,30,0.07)]  py-10 md:p-0">
      <div className="container flex flex-col md:flex-row items-center gap-10">
        <div className="relative md:w-1/2 ">
          <div className="absolute left-[-55px] top-[-32px]">
            <svg
              width="71"
              height="60"
              viewBox="0 0 71 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M70.6886 9.37093C60.1011 14.577 54.8074 20.6941 54.8074 27.7223C59.3201 28.243 63.0517 30.0868 66.0024 33.2538C68.953 36.4208 70.4283 40.0867 70.4283 44.2516C70.4283 48.6768 68.9964 52.4078 66.1325 55.4447C63.2687 58.4816 59.6672 60 55.3281 60C50.4682 60 46.2593 58.0261 42.7011 54.0781C39.143 50.1301 37.364 45.3363 37.364 39.6963C37.364 22.7765 46.8232 9.54452 65.742 0L70.6886 9.37093ZM33.3246 9.37093C22.6503 14.577 17.3132 20.6941 17.3132 27.7223C21.9127 28.243 25.6877 30.0868 28.6384 33.2538C31.589 36.4208 33.0643 40.0867 33.0643 44.2516C33.0643 48.6768 31.6107 52.4078 28.7034 55.4447C25.7962 58.4816 22.1731 60 17.8339 60C12.974 60 8.78679 58.0261 5.27206 54.0781C1.75734 50.1301 0 45.3363 0 39.6963C0 22.7765 9.41585 9.54452 28.2478 0L33.3246 9.37093Z"
                fill="#F4511E55"
              />
            </svg>
          </div>
          <p className="text-xl leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <div className="flex gap-5 mt-7 mb-16">
            <Image src={ceo} alt="ceo" />
            <div className="">
              <p className="text-highlight">Harry Wilson</p>
              <p>Property Owner</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="rounded-full w-2 h-2 bg-highlight"></div>
            <div className="rounded-full w-2 h-2 bg-[#D9DBE1]"></div>
            <div className="rounded-full w-2 h-2 bg-[#D9DBE1]"></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-24 h-24 bg-highlight flex items-center justify-center rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5396 12.7031L3.42823 21.7267C2.14579 22.4917 0.5 21.5654 0.5 20.0232V1.97593C0.5 0.436145 2.14342 -0.492614 3.42823 0.274834L18.5396 9.29846C18.8313 9.46985 19.0738 9.71759 19.2425 10.0166C19.4112 10.3155 19.5 10.6551 19.5 11.0008C19.5 11.3465 19.4112 11.686 19.2425 11.985C19.0738 12.284 18.8313 12.5317 18.5396 12.7031Z"
                fill="white"
              />
            </svg>
          </div>
          <Image src={media} alt="media" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
