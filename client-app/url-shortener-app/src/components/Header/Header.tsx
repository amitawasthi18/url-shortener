import * as React from 'react';

interface  IHeaderProps {
}

const Header: React.FunctionComponent< IHeaderProps> = () => {
  return (
     <div className='bg-slate-900'>
         <div className='container mx-auto p-2 '>
            <nav className='py-5'>
                <div className='text-base text-white'>URL SHORTENER</div>
                </nav>
         </div>
     </div>
  );
};

export default Header;
