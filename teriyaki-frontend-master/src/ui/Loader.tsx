import SquareLoader from "react-spinners/SquareLoader";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white">
      <SquareLoader size={150} />
    </div>
  );
};

export default Loader;
