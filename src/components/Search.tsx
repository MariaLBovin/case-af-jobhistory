import { Inputfield } from "./Inputfield";

const Search = () => {

  const handleValue = (value: string | number) => {
    console.log(value);
    
  }
  return <div>
    <Inputfield handleValue={handleValue}/>
   </div>;
};

export default Search;
