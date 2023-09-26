import { teamMembers } from "@/arrays/teammembers";
import { Members } from "@/components/Members";

const Team = () => {
  return (
    <>
      <ul>
        {teamMembers.map((member, index) => (
          <Members member={member} key={index}></Members>
        ))}
      </ul>
    </>
  );
};
export default Team;