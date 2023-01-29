import { data } from '@/data/propertdata';
import { useReducer } from 'react';
import Button from './Button';
import Pagination from './Pagination';
import PropertyCard from './PropertyCard';

const CHANGEPAGE = 'change';

type Action = {
  type: string;
  payload: object;
};
type State = {
  currentPage: number;
  propsPerPage: number;
};

const propertyReducer = (state: State, action: Action) => {
  switch (action.type) {
    case CHANGEPAGE:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
const initialProp = {
  currentPage: 1,
  propsPerPage: 6,
};

const Properties = () => {
  const [proppertyData, dispatch] = useReducer(propertyReducer, initialProp);
  const indexOfLastItem: number =
    proppertyData.currentPage * proppertyData.propsPerPage;
  const indexOfFirstPage: number = indexOfLastItem - proppertyData.propsPerPage;
  const pagedProp = data.slice(indexOfFirstPage, indexOfLastItem);
  const switchPage = (currentPage: number) => {
    currentPage > 0 &&
    currentPage <= Math.ceil(data.length / proppertyData.propsPerPage)
      ? dispatch({ type: CHANGEPAGE, payload: { currentPage: currentPage } })
      : null;
  };

  return (
    <div className=" bg-[#F5F5F5]">
      <div className="py-14 container">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className="">
            <h3 className="capitalize text-4xl ">list of properties</h3>
            <div className="bg-highlight w-[84px] h-1"></div>
          </div>
          <Button>View all Properties</Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-9 sm:grid-cols-2 justify-center py-16">
          {pagedProp.map((item) => {
            return (
              <PropertyCard
                key={item.id}
                img={item.img}
                type={item.type}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
        <Pagination
          onClick={switchPage}
          currentPage={proppertyData.currentPage}
          totalPages={Math.ceil(data.length / proppertyData.propsPerPage)}
        />
      </div>
    </div>
  );
};

export default Properties;
