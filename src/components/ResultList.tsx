import { IAd } from "@/models/IAd";
import { Link, useParams } from "react-router-dom";
import listStyle from "@/styles/displaySearchReslut.module.css";

interface IResultlistProps {
  filteredAds: IAd[];
}

export const ResultList = ({filteredAds}: IResultlistProps) => {

	const {page, result} =useParams()
  
	const formatedDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString(undefined);
	};

	return (
		<>
			<ul>
				{filteredAds.map((ad, index) => (
					<li key={index} className={listStyle.li}>
						<Link to={`/ad/${ad.id}/${page}/${result}`}>
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
