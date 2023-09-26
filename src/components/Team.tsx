import { teamMembers } from "@/arrays/teammembers";
import { Members } from "@/components/Members";
import contactStyles from '../styles/Contact.module.css'

export const Team = () => {
  return (
    <>
      <ul className={contactStyles.ul}>
        {teamMembers.map((member, index) => (
          <Members member={member} key={index}></Members>
        ))}
      </ul>
    </>
  );
};
