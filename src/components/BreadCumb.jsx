import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className='p-4 fixed top-[48px] md:left-16 w-full overflow-x-auto bg-white'>
      <ol className="breadcrumb flex items-center">
        <li className="breadcrumb-item">
          <Link to="/" className="text-gray-500 hover:text-gray-800">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={name}>
              <span className="text-gray-400 mx-2">/</span>
              <li className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                {isLast ? (
                  <span className="text-gray-900 font-semibold capitalize">{name}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-500 hover:text-gray-700 capitalize">{name}</Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCumb;