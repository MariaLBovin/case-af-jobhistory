export class ChartLineSeries {
    constructor (
        public yValues: number[],
        public title: string,
    )
    {}
}

export class ChartLineData {
    constructor (
        public data: { 
             xValues: number[]; 
             series: ChartLineSeries[]; 
             xValueNames?: string[]; 
        }, 
        public x:string, 
        public y:string, 
        public title:string, 
        public subTitle?:string, 
        public infoText?:string,
    )   
    {}
}
