import contactStyles from '../styles/Contact.module.css';
import { AboutProject } from './AboutProject';
import GoBackButton from './GoBackButton';
import Team from './Team';

const Contact = () => {
	return (
		<div className={contactStyles.container}>
			<GoBackButton></GoBackButton>
			<div className={contactStyles.divWrapper}>
				<AboutProject></AboutProject>
				<Team></Team>
			</div>
		</div>
	);
};

export default Contact;
