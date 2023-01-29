import Button from './Button';
import Card from './Card';
import FormInput from './FormInput';

const AddProperty = () => {
  return (
    <div className="container py-14">
      <h3 className="text-black text-2xl mb-9">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h3>
      <Card className="w-full py-6">
        <>
          <h3 className="text-3xl text-highlight text-center">
            Add An New Property
          </h3>
          <form action="" className=" md:p-16 sm:p-8  p-4">
            <div
              className="grid gap-6 mb-8"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(318px,1fr))',
              }}
            >
              <FormInput
                label="Name"
                placeholder="Enter Name"
                required
                input
                type="name"
              />
              <FormInput
                label="Address"
                placeholder="Enter Address"
                required
                input
                type="address"
              />
              <FormInput
                label="Unit Number"
                placeholder="Enter Unit"
                required
                input
                type="text"
              />
              <FormInput
                label="City"
                placeholder="Select City"
                required
                input={false}
                type="text"
              />
              <FormInput
                label="State"
                placeholder="Select State"
                required
                input={false}
                type="text"
              />
              <FormInput
                label="Room Type"
                placeholder="Select Room Type"
                required
                input={false}
                type="text"
              />
              <FormInput
                label="Price"
                placeholder="Enter Price"
                required
                input
                type="text"
              />
              <FormInput
                label="Room Type"
                placeholder="Select Room Type"
                required
                input={false}
                type="text"
              />
            </div>
            <div className="mb-7">
              <label
                htmlFor=""
                className="text-[#252B42] mb-[5px] text-lg font-semibold mr-1"
              >
                Description
                <span className="text-highlight">*</span>
              </label>

              <textarea
                placeholder="Enter Description"
                className="py-3 px-5 outline-1 border-[#E6E6E6] bg-[#f9f9f9] rounded text-[#737373] w-full h-28"
              />
            </div>
            <label
              htmlFor=""
              className="text-[#252B42] mb-1 text-lg font-semibold mr-1"
            >
              Upload Photos
              <span className="text-highlight">*</span>
            </label>
            <div className="border border-dashed rounded-xl py-7 text-center border-[#F4511E]">
              <h4>
                Drag your images here, or
                <label
                  className="text-highlight cursor-pointer"
                  htmlFor="upload"
                >
                  {' browse'}
                </label>
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  className="hidden"
                />
              </h4>
              <p className="text-[rgba(0,0,0,0.5)]">
                Supported: JPG, JPEG, PNG
              </p>
            </div>
            <div className="w-full flex justify-center mt-14">
              <Button>Add New Property</Button>
            </div>
          </form>
        </>
      </Card>
    </div>
  );
};

export default AddProperty;
