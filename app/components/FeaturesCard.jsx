const FeaturesCard = ({ title, subtitle }) => {
  return (
    <div className="sm:w-[30rem] w-[20rem] px-3 py-[4rem] border borderStyle space-y-3 rounded-[5px]">
      <h1 className="text-secondaryColor font-semibold capitalize">{title}</h1>
      <h3 className="text-tetiaryColor">{subtitle}</h3>
    </div>
  );
};

export default FeaturesCard;
