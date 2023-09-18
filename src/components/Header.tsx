import headerStyles from '../styles/header.module.css';


const Header = () => {
  return <header 
  className={headerStyles.header}
  >
    <h1 
    className={headerStyles.h1}
    >
      Arbetsgivardata
      </h1>
  </header>;
};

export default Header;
