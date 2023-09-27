import { Link } from "react-router-dom";
// import error404 from "@/assets/notFound.svg";

import notFoundStyles from "@/styles/NotFound.module.css";

const NotFound = () => {
  const error404 = "/notFound.svg";
  return (
    <>
      <div className={notFoundStyles.errorWrapper}>
        <section className={notFoundStyles.infoWrapper}>
          <h2>Något gick fel?</h2>
          <p>Sidan du sökte kunde inte hittas av servern.</p>
          <Link to='/'>Gå tillbaka till startsidan</Link>
          <a
            href='https://storyset.com/web'
            className={notFoundStyles.giveCreed}
          >
            Web illustrations by Storyset
          </a>
        </section>
        <div className={notFoundStyles.imgWrapper}>
          <img
            src={error404}
            alt={error404}
            width={notFoundStyles.imgWidth}
            height={notFoundStyles.imgHeight}
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
