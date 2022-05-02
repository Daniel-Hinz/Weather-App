export const fetchPlace = async (text) => {
    const key = 'pk.eyJ1Ijoic211cnBoNTEiLCJhIjoiY2wyZ3Z4ZDJmMDd6dzNjbWpsNnB0Z2picyJ9.iOkSzkFGnmo6L871bPjuEg'
    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${key}&cachebuster=1625641871908&autocomplete=true&types=place`
      );
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    } catch (err) {
      return { error: "Unable to retrieve places" };
    }
  }; 
  //code by Wendy de Kock
  //https://javascript.plainenglish.io/create-a-simple-city-autocomplete-field-in-react-f7675d249c74