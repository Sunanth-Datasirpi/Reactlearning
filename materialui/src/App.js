import "./App.css";
import BasicButtons from "./Components/BasicButtons";
import BasicPagination from "./Components/BasicPagination";
import BasicTable from "./Components/BasicTable";
import ButtonAppBar from "./Components/ButtonAppBar";
import ColorCheckboxes from "./Components/ColourCheckBoxes";
import ComboBox from "./Components/ComboBox";
import CountrySelect from "./Components/CountrySelect";
import LetterAvatars from "./Components/LetterAvatars";
import RecipeReviewCard from "./Components/RecipieReviewCard";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      Material UI
      <ComboBox />
      <br />
      <CountrySelect />
      <br />
      <BasicButtons />
      <br />
      <ColorCheckboxes />
      <br />
      <LetterAvatars />
      <br />
      <BasicTable />
      <br />
      {/* <RecipeReviewCard />
      <br /> */}
      <BasicPagination />
    </div>
  );
}

export default App;
