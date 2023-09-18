import { DigiButton } from "@digi/arbetsformedlingen-react";
import { ButtonVariation } from "@digi/arbetsformedlingen";

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
    </div>
  );
};

export default Home;
