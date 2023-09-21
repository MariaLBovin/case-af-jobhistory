
import { Link } from 'react-router-dom';
import { TeamMembers } from '../models/TeammemberClass'


interface ITeamMember {
  member: TeamMembers;
}

export const Members = ({member} : ITeamMember) => {

  const githubImg = '../assets/github-mark.png'

  return (
    <>
    <li>
      <h3>{member.name}</h3>
      <a href={`mailto:${member.email}`}>Maila mig</a>
      <Link to='https://github.com/JoeldelPilar'>
      <img src={githubImg}/>
      </Link>
    </li>
    
    </>
  )
}
