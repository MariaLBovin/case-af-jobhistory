import { useParams } from 'react-router-dom';
import { useAd } from '../hooks/useAd';
import NotFound from './NotFound';

const Ad = () => {
	const { id } = useParams();

	const ad = useAd(id);

	if (!ad) {
		return <NotFound></NotFound>;
	}

	return (
		<section>
			<h2>{ad.headline}</h2>
			<article>
				<h3>{ad.employer.name}</h3>
				<span>{ad.occupation.label}</span>
				<span>{ad.publication_date}</span>
			</article>
			<article>
				<ul>
					<li>
						<span>Omfattning: </span>
						{ad.working_hours_type.label}
					</li>
					<li>
						<span>Varaktighet: </span>
						{ad.duration.label}
					</li>
					<li>Anställningform: {ad.employment_type.label}</li>
				</ul>
			</article>
			<article>
				<h2>Arbetslivserfarenhet</h2>
				{ad.experience_required ? (
					<p>{ad.experience_required}</p>
				) : (
					<p>'Ej specificerad'</p>
				)}
			</article>
			<article>
				<h2>Om Jobbet</h2>
				<p>{ad.description.text}</p>
			</article>
			<article>
				<h2>Om anställningen</h2>
				<ul>
					<li>
						<h4>Lön: </h4>
						{ad.salary_description}
					</li>
					<li>
						<h4>Arbetsgivaren:</h4>
						<span>{ad.employer.name}</span>
						<span>{ad.employer.organization_number}</span>
					</li>
					<li>
						<h4>Om annonsen:</h4>
						<span>Annons-id: {ad.id}</span>
						<span>Publicerad: {ad.publication_date}</span>
					</li>
				</ul>
			</article>
		</section>
	);
};
export default Ad;
