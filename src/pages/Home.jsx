import { Link } from 'react-router-dom';
import { DocumentIcon, BookOpenIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import MainCard from '../components/MainCard';

function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        BRAILLE VERSE
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        An AI-Powered Dynamic Braille Display
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <MainCard 
          title="Upload Document" 
          description="Convert your documents to braille format" 
          link="upload" 
        />
        <MainCard 
          title="Read Book" 
          description="Access our library of braille books" 
          link="book" 
        />
        <MainCard 
          title="Read News" 
          description="Stay updated with latest news in braille" 
          link="news" 
        />
      </div>
    </div>
  );
}

export default Home; 