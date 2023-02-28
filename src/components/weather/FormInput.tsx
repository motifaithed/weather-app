import { useRef, FormEvent } from "react";
const FormInput: React.FC<{onSubmit:any}> = (props) => {
    const cityRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (cityRef.current?.value === "") {
            return;
          }
        props.onSubmit(cityRef.current?.value)
    }
    return <form
    className="bg-white mt-12 ml-2 mr-2 w-90 rounded-md drop-shadow-lg  md:mx-auto md:w-96"
    onSubmit={handleSubmit}
  >
    <div className="mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  border-gray-300 outline-none focus:outline-none"
        id="username"
        type="text"
        placeholder="Please input City and Press Enter"
        defaultValue=""
        ref={cityRef}
      />
    </div>
  </form>
}

export default FormInput;