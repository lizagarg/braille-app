import { Link } from 'react-router-dom';
import { DocumentIcon, BookOpenIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import MainCard from '../components/MainCard';
import { Voice } from '../components/Voice';

function Home() {
  return (
    <div className="mx-auto px-4 py-16 h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        BRAILLE VERSE
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        An AI-Powered Dynamic Braille Display
      </p>
      
      <div className="flex space-between justify-center">
        <MainCard title="Upload Document" description="Convert your documents to braille format" link="upload" />
        <MainCard title="Read Book" description="Access our library of braille books" link="book" />
        <MainCard title="Read News" description="Stay updated with latest news in braille" link="news" />
      </div>
      <div className='flex justify-center mt-8'>
        <Voice />
      </div>
    </div>
  );
}

export default Home; 