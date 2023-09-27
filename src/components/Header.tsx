import { Link } from "react-router-dom";
import headerStyles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.h1}>
        <Link to='/'>Arbetsgivardata</Link>
      </h1>
    </header>
  );
};

export default Header;
