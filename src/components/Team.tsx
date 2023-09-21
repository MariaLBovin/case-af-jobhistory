import { teamMembers } from "../arrays/teammembers"
import { Members } from "./Members"


export const Team = () => {
  return (
    <>
      <ul>
        {teamMembers.map((member, index) => (
          <Members member={member} key={index}></Members>
        ))}
      </ul>
    </>
  )
}
