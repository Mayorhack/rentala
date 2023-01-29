import bedroom from '../assets/bedroom.png';
import hapiness from '../assets/hapiness.png';
import house from '../assets/house.png';
import roommate from '../assets/roommate.png';
import Button from './Button';

const Flexibility = () => {
  return (
    <div className="container py-14 flex gap-16 items-center flex-col md:flex-row">
      <div className="">
        <div className="flex gap-5 mb-5 items-end">
          <div
            className="bg-cover bg-center bg-no-repeat py-8  h-[334px] px-8 md:text-2xl text-lg text-center text-white rounded-[20px]"
            style={{
              backgroundImage: `linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%),url(${bedroom.src})`,
            }}
          >
            <p>Flexible Leases</p>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat py-8  h-[270px] px-4 md:px-8 text-center md:text-2xl text-lg text-white rounded-[20px]"
            style={{
              backgroundImage: `linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%),url(${hapiness.src})`,
            }}
          >
            <p>7-Day Happiness Guaranteed</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div
            className="bg-cover bg-center bg-no-repeat py-8  h-[285px] px-8 text-center md:text-2xl text-lg text-white rounded-[20px]"
            style={{
              backgroundImage: `linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%),url(${house.src})`,
            }}
          >
            <p>Monthly House Cleaning</p>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat py-8  h-96 px-6 md:px-8 text-center md:text-2xl text-lg text-white rounded-[20px]"
            style={{
              backgroundImage: `linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%),url(${roommate.src})`,
            }}
          >
            <p>Choose Your Own Roommate</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <h3 className="text-3xl font-bold">
          Flexibility and options to suit your lifestyle.
        </h3>
        <p className="mt-4 mb-10">
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </p>
        <Button>Search Rooms</Button>
      </div>
    </div>
  );
};

export default Flexibility;
