import { Link } from 'react-router-dom';
import { BadgeDollarSign } from 'lucide-react';
import { User } from 'lucide-react';
import { CornerDownLeft } from 'lucide-react';
import { Airplay } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  useAuth();
  
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex justify-center">
            <img 
                  src={'https://media.discordapp.net/attachments/865077720043618304/1344730462349955124/Spotify-logo.png?ex=67c1f956&is=67c0a7d6&hm=8e89a9e305c5e8941fb86728a7e829c46818bfa7c807debebd0edb0780eb1753&=&format=webp&quality=lossless&width=1394&height=419'} 
                  className="w-auto h-10 rounded-full object-cover mr-0"
                />
            </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-green-200 transition-colors">
                <Airplay size={25}/>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-green-200 transition-colors">
                <User size={25}/>
              </Link>
            </li>
            <li>
              <Link to="/withdraw" className="hover:text-green-200 transition-colors">
              <BadgeDollarSign size={25}/>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="hover:text-green-200 transition-colors">
                <CornerDownLeft size={25}/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;