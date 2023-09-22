import { IAd } from '@/models/IAd'
import { Link } from 'react-router-dom'
import listStyle from '../styles/displaySearchReslut.module.css'

interface IResultlistProps {
    hits: IAd[],
    resultsPerPage: number
}

export const ResultList = ({hits, resultsPerPage}: IResultlistProps) => {
    const startIndex = 0;
    const endIndex = startIndex + resultsPerPage

    const filteredAds = hits.slice(startIndex, endIndex)
  return (
    <>
   <ul>
   {filteredAds.map((ad,index)=> (
    <li key={index} 
    className={listStyle.li}
    > 
      <Link to={'lägg till adress'}>
      <h3>{ad.employer.name}</h3>
      <p>{ad.occupation.label}</p>
      <p>Publiceringsdatum {ad.publication_date}</p>
      </Link>
    </li>
   ))}
  </ul>
    </>
  )
}
