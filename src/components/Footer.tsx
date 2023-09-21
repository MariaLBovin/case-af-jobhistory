import { Link } from 'react-router-dom';
import footerStyles from '../styles/footer.module.css';

const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<h3 className={footerStyles.h3}>
				<p>
					<Link to='/contact'>Vi bakom tjänsten</Link>
				</p>
			</h3>
		</footer>
	);
};

export default Footer;
