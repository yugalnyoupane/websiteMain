const Team = ({ image, Role, Name }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img src={image} alt={Name} className="w-24 h-24 rounded-full mb-2" />
      <p className="font-medium text-lg">{Name}</p>
      <p className="text-sm text-gray-500">{Role}</p>
    </div>
  );
};

export default Team;
