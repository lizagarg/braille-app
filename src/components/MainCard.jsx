import { Link } from 'react-router-dom';
import { DocumentIcon, BookOpenIcon, NewspaperIcon } from '@heroicons/react/24/outline';

const iconMap = {
  'Upload Document': DocumentIcon,
  'Read Book': BookOpenIcon,
  'Read News': NewspaperIcon,
};

function MainCard({ title, description, link }) {
  const Icon = iconMap[title];
  
  return (
    <Link to={`/${link}`} className="group">
      <div className="bg-white rounded-lg shadow p-8 hover:shadow-xl transition-shadow duration-300 mx-4">
        <Icon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </Link>
  );
}

export default MainCard;
