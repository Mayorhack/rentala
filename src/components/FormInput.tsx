import ReactSelect from 'react-select';

type Props = {
  label: string;
  placeholder: string;
  input: boolean;
  type: string;
  required: boolean;
};

const FormInput = ({ label, placeholder, input, type, required }: Props) => {
  return (
    <div>
      <label
        htmlFor=""
        className="text-[#252B42] mb-1 text-lg font-semibold block mr-1"
      >
        {label} {required ? <span className="text-highlight">*</span> : null}
      </label>
      {input ? (
        <input
          type={type}
          placeholder={placeholder}
          className="py-3 px-5 outline-1 h-[66px] border-[#E6E6E6] bg-[#f9f9f9] rounded text-[#737373] leading-7 sm:w-full w-[300px]"
        />
      ) : (
        <ReactSelect
          placeholder={placeholder}
          options={[{ label: 'Neighbourhood', value: 'neighbourhood' }]}
          classNames={{
            control: () =>
              'py-3 px-5 outline-1 border-[#E6E6E6] bg-[#f9f9f9] rounded text-[#737373] w-full leading-7 sm:w-full w-[300px]',
          }}
          noOptionsMessage={() => 'All Type'}
        />
      )}
    </div>
  );
};

export default FormInput;
