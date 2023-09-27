interface IDescription {
	text: string;
}

interface IEmployer {
	url: string;
	organization_number: string;
	name: string;
	workplace: string;
}

interface IMustHave {
	languages: string[];
	education: string[];
}

interface INiceToHave {
	languages: string[];
	education: string[];
}

interface IEmploymentType {
	label: string;
}

interface IOccupation {
	label: string;
}

interface IWorkHoursType {
	label: string;
}

export interface IAd {
	id: string;
	headline: string;
	application_deadline: string;
	number_of_vacancies: number;
	publication_date: string;
	description: IDescription;
	employment_type: IEmploymentType;
	working_hours_type: IWorkHoursType;
	duration: IWorkHoursType;
	salary_description: string;
	employer: IEmployer;
	experience_required: string;
	occupation: IOccupation;
	occupation_group: IOccupation;
	occupation_field: IOccupation;
	must_have: IMustHave;
	nice_to_have: INiceToHave;
}
