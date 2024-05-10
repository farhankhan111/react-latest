import '../../../src/assets/css/main.css';
import '../../../src/assets/css/bootstrap.min.css';
import SearchForm from './SearchForm';
import OffersComponent from './Offers';
import {useState} from "react";

const Home = () => {

    const [stage, setStage] = useState('listing');
    const renderComponentBasedOnStage = () => {
        switch (stage) {
            case 'listing':
                return <OffersComponent />
            case 'selecting':
            // Add more cases for each stage
            default:
                return <SearchForm />
        }
    };

    return (
      <div>
          {renderComponentBasedOnStage()}
      </div>
    );
}

export default Home;