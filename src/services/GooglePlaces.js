import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import CardLocation from '../models/cardLocation';

export const fetchGoogleLocationDetails = (googlePlaceId) => {

  return geocodeByPlaceId(googlePlaceId);
}

export const extractGoogleLocationDetails = (results, location, googlePlaceId) => {
  
  // If the original location never existed, it will be missing properties.
  // It will ony have googlePlaceId and description. So create a new object with all the necessary properties and save 
  // the googlePlaceId and the description
  if (location.id === null || location.id === undefined) {
    let locationDescription = location.description;
    location = new CardLocation();
    location.description = locationDescription;

  }
  else {
    let locationDescription = location.description;
    let locationId = location.id;
    let cardId = location.cardId;
    location = new CardLocation();
    location.description = locationDescription;
    location.id = locationId;
    location.cardId = cardId;
  }

  location.googlePlaceId = googlePlaceId;

  results[0].address_components.forEach(address_component => {
    if (address_component.types.includes('street_number')) {
      location.streetNumber = address_component.long_name;
    }
    if (address_component.types.includes('route')) {
      location.street = address_component.long_name;
    }
    if (address_component.types.includes('postal_code')) {
      location.postalCode = address_component.long_name;
    }
    if (address_component.types.includes('locality')) {
      location.city = address_component.long_name;
    }
    if (address_component.types.includes('administrative_area_level_2')) {
      location.county = address_component.long_name;
    }
    if (address_component.types.includes('administrative_area_level_1')) {
      location.state = address_component.long_name;
    }
    if (address_component.types.includes('country')) {
      location.country = address_component.long_name;
    }
  });

  return location;
}