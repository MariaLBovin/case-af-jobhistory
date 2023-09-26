import { IAd } from "@/models/IAd";
import { Link } from "react-router-dom";
import reslutListStyles from "@/styles/ReslutList.module.css";

interface IResultlistProps {
  filteredAds: IAd[];
}

export const ResultList = ({filteredAds}: IResultlistProps) => {


  
	const formatedDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString(undefined);
	};

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
