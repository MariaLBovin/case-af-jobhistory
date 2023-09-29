import { IAd } from '@/models/IAd';
// import listStyle from '@/styles/displaySearchReslut.module.css';
import reslutListStyles from '@/styles/ResultList.module.css';
import { Link } from 'react-router-dom';

interface IResultlistProps {
	filteredAds: IAd[];
}

export const ResultList = ({ filteredAds }: IResultlistProps) => {
	const formatedDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString(undefined);
	};

	if (filteredAds.length === 0) {
		return <p>Vi kunde tyvärr inte hitta några annonser!</p>;
	}

	return (
		<>
			<ul>
				{filteredAds.map((ad, index) => (
					<li key={index} className={reslutListStyles.li}>
						<Link to={`/ad/${ad.id}`}>
							<h3>{ad.employer.name}</h3>
							<p>{ad.occupation.label}</p>
							<p>Publiceringsdatum {formatedDate(ad.publication_date)}</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
