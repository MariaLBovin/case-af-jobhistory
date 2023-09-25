import homeStyles from "@/styles/Home.module.css";

const Home = () => {
  return (
    <section className={homeStyles.home_container}>
      <div className={homeStyles.msg}>
        <h3>Välkommen till vår datatjänst för Arbetsgivare i Sverige</h3>
        <p>
          Syftet med tjänsten är att underlätta datainhämtning för dig som söker
          historisk data om arbetsgivare och hur deras jobbannonser sett ut
          under en viss period.
        </p>
      </div>
    </section>
  );
};

export default Home;
