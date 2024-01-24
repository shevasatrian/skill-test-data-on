import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Catalog',
    path: '/catalog',
  },
  {
    id: 3,
    name: 'Order Status',
    path: '/order-status',
  },
  {
    id: 4,
    name: 'Distributors',
    path: '/distributors',
  },
  {
    id: 5,
    name: 'Upload',
    path: '/upload',
  },
  {
    id: 6,
    name: 'Logout',
    path: '/login',
  },
];

const Header = () => {

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    // If you need to perform additional actions before navigating, you can do them here
    if (path === '/login') {
      // Perform logout actions, such as clearing session variables
    }

    // Navigate to the specified path
    navigate(path);
  };
  return (
    <>
        <div className="w-full">
          <div className='flex'>
            <img className="w-28 p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt="" />
            <div className='pl-2 py-1'>
              <h1 className="text-amber-700 text-3xl italic font-bold">Coffee Valley</h1>
              <h3 className="text-gray-900 text-lg italic font-bold">Taste the love in every cup</h3>
              <p className="text-gray-900 text-base">One Alewife Center 3rd Floor</p>
              <p className="text-gray-900 text-base">Cambridge, MA 02140</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-center text-white gap-[1px]">
            {data.map((item) => (
              <button 
              key={item.id} 
              className="w-1/5 py-2 bg-red-800"
              onClick={() => handleButtonClick(item.path)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
    </>
  );
};

export default Header;