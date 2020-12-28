import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menu = ['Home', 'Post', 'Signin'];
  const [active, setActive] = React.useState(menu[0]);

  const hansleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActive(event.currentTarget.innerHTML);
  };

  const menuRendering = () => {
    return menu.map((item) => {
      return (
        <Link
          to={`/${item.toLowerCase().split(' ').join('')}`}
          key={item}
          className={active === item ? `active item` : `item`}
          onClick={hansleClick}
        >
          {item}
        </Link>
      );
    });
  };
  return <div className='ui secondary pointing menu'>{menuRendering()}</div>;
};

export default Header;
