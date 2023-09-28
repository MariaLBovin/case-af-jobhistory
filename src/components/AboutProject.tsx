import aboutStyles from '../styles/AboutProject.module.css'

export const AboutProject = () => {
  return (
    <section className={aboutStyles.sectionWrapper}>
        <h1>Om Arbetsgivardata</h1>
        <article className={aboutStyles.articleWrapper}>
            <h2>Bakgrund</h2>
            <p>Arbetsförmedlingen har öppnat upp sina omfattande databaser av jobbannonser och platsannonser som har publicerats under en längre tid. 
                Denna datakälla är av stort värde och användbar för många ändamål, inklusive att få insikter i arbetsmarknaden, 
                analysera trender och utveckla applikationer som kan hjälpa arbetssökande och arbetsgivare.
            </p>
            <h2>Projektöversikt</h2>
            <p>I detta projekt använder vi Arbetsförmedlingens Historical Job Ads API för att söka efter platsannonser som har 
                publicerats av en specifik arbetsgivare under ett angivet tidsintervall. Syftet är att skapa en användbar applikation 
                som kan filtrera och presentera relevanta platsannonser för både studenter och yrkesverksamma.
            </p>
            <h2>Projektspecifikationer</h2>
            <p>
                <h3>Sökning efter platsannonser</h3>
                <p>Vi använder API:ets endpoint, historical.api.jobtechdev.se/search, för att söka efter platsannonser som har 
                    publicerats av en specifik arbetsgivare under ett givet tidsintervall. 
                    För att göra detta, använder vi request-parametrar för publiceringsdatum och arbetsgivare.
                </p>
                <h3>Paginering</h3>
                <p>Vi tar emot max 2000 annonser och använder oss av paginering och filtrering av resultat för att presentera dessa 
                    på ett lättillgängligt och tydligt vis.
                </p>
                <h3>Presentation</h3>
                <p>Resultaten presenteras som en lista. För att läsa mer om den specifika annonsen klickar man på vald annons. Från annonsen
                    kan man sedan gå tillbaka till resultatlistan. Man kan även välja att få se resultat / år i ett diagram.
                </p>
            </p>
        </article>
    </section>
  )
}
