import { Team } from "@/components/Team";
import { AboutProject } from "./AboutProject";
import contactStyles from '../styles/contact.module.css'
import { GoBackButton } from "./GoBackButton";

const Contact = () => {
  return (
    <>
      <GoBackButton></GoBackButton>
      <div className={contactStyles.divWrapper}>
      <AboutProject></AboutProject>
      <Team></Team>
      </div>
      
    </>
  );
};

export default Contact;
