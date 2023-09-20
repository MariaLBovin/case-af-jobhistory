import { IAd } from "@/models/IAd";
import { Link } from "react-router-dom";

const newAd1: IAd = {
  id: "12345",
  headline: "Ledig tjänst",
  application_deadline: "2023-12-31",
  publication_date: "2023-12-31",
  number_of_vacancies: 3,
  description: {
    text: "Detta är en jobbannons."
  },
  employment_type: {
    label: "Heltid"
  },
  salary_description: "Konkurrenskraftig lön",
  employer: {
    url: "https://www.arbetsgivare.com",
    organization_number: "1234567890",
    name: "Arbetsgivare AB",
    workplace: "Stockholm"
  },
  occupation: {
    label: "Webbutvecklare"
  },
  occupation_group: {
    label: "IT och telekommunikation"
  },
  occupation_field: {
    label: "Teknik och naturvetenskap"
  },
  must_have: {
    languages: ["JavaScript"],
    education: ["Universitetsexamen"]
  },
  nice_to_have: {
    languages: ["Python"],
    education: ["Masterexamen"]
  }
};

const newAd2: IAd = {
  id: "12345",
  headline: "Ledig tjänst",
  application_deadline: "2023-12-31",
  publication_date:"2023-12-31",
  number_of_vacancies: 3,
  description: {
    text: "Detta är en jobbannons."
  },
  employment_type: {
    label: "Heltid"
  },
  salary_description: "Konkurrenskraftig lön",
  employer: {
    url: "https://www.arbetsgivare.com",
    organization_number: "1234567890",
    name: "Arbetsgivare AB",
    workplace: "Stockholm"
  },
  occupation: {
    label: "Webbutvecklare"
  },
  occupation_group: {
    label: "IT och telekommunikation"
  },
  occupation_field: {
    label: "Teknik och naturvetenskap"
  },
  must_have: {
    languages: ["JavaScript"],
    education: ["Universitetsexamen"]
  },
  nice_to_have: {
    languages: ["Python"],
    education: ["Masterexamen"]
  }
};

const ads :IAd[] = [newAd1, newAd2]

const SearchResults = () => {
  return <>
  SearchResults
  <ul>
   {ads.map((ad,index)=> (
    <li key={index}>
      <h3>{ad.employer.name}</h3>
      <p>{ad.occupation.label}</p>
      <p>Publiceringsdatum {ad.publication_date}</p>
      <Link to={'addera länk'}></Link>
    </li>
   ))}
  </ul>
  </>;
};

export default SearchResults;
