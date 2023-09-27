import { ChartLineData, ChartLineSeries, } from "@/models/IChartdata";
import { BarChartVariation, QuoteMultiContainerHeadingLevel } from "@digi/arbetsformedlingen";
import { DigiBarChart } from "@digi/arbetsformedlingen-react"
import statisticsStyle from '../styles/Statistics.module.css'
import { useContext } from "react";
import { IJobAdsContext, JobAdsContext } from "@/context/JobAdsContext";


const Statistics = () => {
    const { adsResponse } = useContext<IJobAdsContext>(JobAdsContext);

    const yearCount: { year: string, count: number }[] = []

    adsResponse.hits.forEach((hit) => {
        const year = hit.publication_date.split('-')[0]

        const existingYear = yearCount.find(years => years.year === year);

        if(existingYear) {
            existingYear.count++
        } else {
            yearCount.push({year, count: 1})
        }

    })

    console.log(yearCount);

    const yValues = yearCount.map(years => years.count);
    const xValues = yearCount.map(years => parseInt(years.year, 10));
    const xValuesNames = yearCount.map(years => years.year);

    const chartLineSeries = new ChartLineSeries(yValues, 'Antal Annonser')
    const chartLineData = new ChartLineData({
        xValues: xValues,
        series: [chartLineSeries],
        xValueNames: xValuesNames,
      },
      "År",
      "Antal annonser",
      "Antal annonser per år")
    
  return (
        <div className={statisticsStyle.statisticsDiv}>
        <DigiBarChart
        afChartData={chartLineData}
        afHeadingLevel={QuoteMultiContainerHeadingLevel.H2}
        afVariation={BarChartVariation.Vertical}

        ></DigiBarChart>
        </div>
  )
}

export default Statistics