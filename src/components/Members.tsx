import { Link } from "react-router-dom";
import { TeamMembers } from "@/models/TeammemberClass";
import membersStyles from "@/styles/Members.module.css";

interface ITeamMember {
  member: TeamMembers;
}

export const Members = ({ member }: ITeamMember) => {
  const githubImg = "/github-mark.png";
  const linkedInImg = "/LI-In-Bug.png";
  const personalImg = member.img;

  return (
    <>
      <li className={membersStyles.li}>
        <img
          className={membersStyles.img}
          src={personalImg}
          alt={member.name}
          height={70}
        />
        <article className={membersStyles.article}>
          <h3>{member.name}</h3>
          <a href={`mailto:${member.email}`}>Maila mig</a>
          <div className={membersStyles.div}>
            <Link to={member.gitlink}>
              <img src={githubImg} height={30} />
            </Link>
            <Link to={member.linkedInLink}>
              <img src={linkedInImg} height={30} />
            </Link>
          </div>
        </article>
      </li>
    </>
  );
};
