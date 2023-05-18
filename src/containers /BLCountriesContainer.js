import Country from "../components/Country";
import{useState, useEffect} from "react";


const BLCountriesContainer = () => {
    
    const[countries, setCountries] = useState([]);
    const[visitedCountry, setVisitedCountry] = useState([]);
    
    const fetchCountries = async () => {
        const data = await fetch ("https://restcountries.com/v3.1/all")
        const jsonData = await data.json();

        setCountries(jsonData);
    }

    useEffect(() => {
        fetchCountries();

    }, [])

    const countryComponents = countries.map((country) => {
		return <Country country={country} /> 
	})

    return (

    // allign countries if visited or checkbox 
        <>
        {countryComponents}
        </>
        

    );
}

export default BLCountriesContainer;