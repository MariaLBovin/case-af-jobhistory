import { teamMembers } from '@/arrays/teammembers';
import { Members } from '@/components/Members';
import contactStyles from '../styles/Contact.module.css';

const Team = () => {
	return (
		<>
			<ul className={contactStyles.membersList}>
				{teamMembers.map((member, index) => (
					<Members member={member} key={index}></Members>
				))}
			</ul>
		</>
	);
};
export default Team;
