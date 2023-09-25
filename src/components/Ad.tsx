import { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobAdsContext } from "@/context/JobAdsContext";
import { useAd } from "@/hooks/useAd";
import NotFound from "@/components/NotFound";
import adStyles from "@/styles/ad.module.css";

const Ad = () => {
  const { id } = useParams();
  const { adsResponse } = useContext(JobAdsContext);

  const ad = useAd(id, adsResponse);

  if (!ad) {
    return <NotFound></NotFound>;
  }

  return (
    <section className={adStyles.sectionWrapper}>
      <h2>{ad.headline}</h2>

      <article className={`${adStyles.articleWrapper} ${adStyles.articleInfo}`}>
        <h3>{ad.employer.name}</h3>
        <span>{ad.occupation.label}</span>
        <span>
          Publicerad:
          {new Date(ad.publication_date).toLocaleDateString("sv-SE")}
        </span>
      </article>

      <article
        className={`${adStyles.articleUlWrapper} ${adStyles.articleShort}`}
      >
        <ul>
          <li>
            <span>Omfattning: </span>
            <p>{ad.working_hours_type.label}</p>
          </li>
          <li>
            <span>Varaktighet: </span>
            <p>{ad.duration.label}</p>
          </li>
          <li>
            <span>Anställningform: </span>
            <p>{ad.employment_type.label}</p>
          </li>
        </ul>
      </article>

      <article className={adStyles.articleExperience}>
        <h2>Arbetslivserfarenhet</h2>
        {ad.experience_required ? (
          <p>{ad.experience_required}</p>
        ) : (
          <p>Ej specificerad</p>
        )}
      </article>

      <article className={adStyles.articleAbout}>
        <h2>Om Jobbet</h2>
        <p>{ad.description.text}</p>
      </article>

      <article className={adStyles.articleUlWrapper}>
        <h2>Om anställningen</h2>
        <ul>
          <li>
            <div>
              <span>Lön: </span>
              <div>
                {ad.salary_description
                  ? ad.salary_description
                  : "Ej specificerad"}
              </div>
            </div>
          </li>
          <li>
            <div>
              <span>Arbetsgivaren: </span>
              <div>
                <div>{ad.employer.name}</div>

                <div>
                  {ad.employer.organization_number
                    ? ad.employer.organization_number
                    : "Org nr: ej angivet"}
                </div>
              </div>
            </div>
          </li>

          <li>
            <div>
              <span>Annonsen:</span>

              <div>
                <span>Annons-id:</span>
                {ad.id}
                <span>Publicerad:</span>
                {new Date(ad.publication_date).toLocaleDateString("sv-SE")}
              </div>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
};
export default Ad;
