import { Link } from "react-router";

type CardProps = {
  title: string;
  label: string;
  link: string;
};

const Card = ({ title, label, link }: CardProps) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg shadow-lg overflow-hidden max-w-xl md:mx-auto bg-white my-2 mx-4">
      <div className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5">
        <img
          src="/project-thubmnail.svg"
          alt="project-logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{label}</p>
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          Ver Proyecto
        </Link>
      </div>
    </div>
  );
};

Card.displayName = "Card";

export default Card;
