interface CardProps {
    children: React.ReactNode;
  }
  
const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="bg-gradient-to-t from-greenStart to-greenEnd mt-12 ml-2 mr-2 w-90 rounded-md drop-shadow-lg  md:mx-auto md:w-96 ">
      <div className="px-10 pb-10">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
