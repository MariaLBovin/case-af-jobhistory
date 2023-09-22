import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { JobAdsContext } from '../context/JobAdsContext';
import { useAd } from '../hooks/useAd';
import NotFound from './NotFound';

const Ad = () => {
	const { id } = useParams();
	const { adsResponse } = useContext(JobAdsContext);

	const ad = useAd(id, adsResponse);

	if (!ad) {
		return <NotFound></NotFound>;
	}

	return (
		<section>
			<h2>{ad.headline}</h2>
			<article>
				<h3>{ad.employer.name}</h3>
				<span>{ad.occupation.label}</span>
				<span>{new Date(ad.publication_date).toLocaleDateString('sv-SE')}</span>
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
						<span>
							Publicerad:{' '}
							{new Date(ad.publication_date).toLocaleDateString('sv-SE')}
						</span>
					</li>
				</ul>
			</article>
		</section>
	);
};
export default Ad;
