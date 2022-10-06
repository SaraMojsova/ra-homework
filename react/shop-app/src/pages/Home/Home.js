import Slider from "../../components/Slider/Slider";
import imagesCollection from "../../helpers/imagesCollection.js";
const Home = () => {

    return (
      <div>
        <Slider images={imagesCollection} />
      </div>
    )
  }
  export default Home;