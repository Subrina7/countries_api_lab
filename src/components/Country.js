const Country = ({country, visitedCountry, setVisitedCountry}) => {

    // capital city, the local currency, its (continental) region and a link to the relevant Google Maps page.
    // const currencySymbol = Object.keys(country.currencies[0].name)
    // // console.log(currencySymbol);

    const visitedCountryList = (index) => {
        const visitedCountryIndex = visitedCountry.findIndex(
            (country) => country.name.common ===countries[index].name.common
        )

    return (  
        <>
        <h3>Country: {country.name.common} 
        <input
        type = "checkbox"
         id = "checkbox"/></h3>
         <h2>Visited countries</h2>{
            visitedCountryList.map((country, index)=> )
         }
        <p>Capital city: {country.capital}</p>
        {/* <p>{country.currencies}</p> */}
        <p>Continent: {country.region}</p>
        <p>Flag: {country.flag}</p>
        </>
    );
}
 
export default Country;