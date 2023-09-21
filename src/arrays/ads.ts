import { IAd } from "@/models/IAd";

export const newAd1: IAd = {
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
  
export const newAd2: IAd = {
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