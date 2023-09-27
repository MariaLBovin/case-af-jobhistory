import { GoBackButton } from "./GoBackButton";
import { Team } from "./Team";
import { AboutProject } from "./AboutProject";
import contactStyles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <><GoBackButton></GoBackButton>
      <div className={contactStyles.divWrapper}>
      <AboutProject></AboutProject>
      <Team></Team>
        </div>
    </>
  );
};

export default Contact;
