import { DigiButton } from "@digi/arbetsformedlingen-react";
import { ButtonVariation } from "@digi/arbetsformedlingen";
import SearchResults from "./SearchResults";

const Home = () => {
  const handleClick = () => console.log("You clicked me");

  return (
    <div>
      <DigiButton
        onAfOnClick={handleClick}
        afVariation={ButtonVariation.PRIMARY}
      >
        Klicka
      </DigiButton>
      <SearchResults></SearchResults>
    </div>
  );
};

export default Home;
