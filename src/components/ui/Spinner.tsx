import { CirclesWithBar } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className=" w-28 mx-auto my-56">
      <CirclesWithBar
        height="100"
        width="100"
        color="#7E7E7E"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
};

export default Spinner;
