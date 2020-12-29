import { geocodeByPlaceId } from 'react-google-places-autocomplete';

export default getLocationDetails = (googlePlaceId, description, originalLocation) => {

  let location = originalLocation;
  location.googlePlaceId = googlePlaceId;

  geocodeByPlaceId(googlePlaceId)
      .then(results => {
        results[0].address_components.forEach(address_component => {
          if (address_component.types.indexOf('street_number')) {
            location.streetNumber = address_component.long_name;
          }
          else if (address_component.types.includes('route')) {
            location.street = address_component.long_name;
          }
          else if (address_component.types.includes('postal_code')) {
            location.postalCode = address_component.long_name;
          }
          else if (address_component.types.includes('locality')) {
            location.city = address_component.long_name;
          }
          else if (address_component.types.includes('administrative_area_level_2')) {
            location.county = address_component.long_name;
          }
          else if (address_component.types.includes('administrative_area_level_1')) {
            location.state = address_component.long_name;
          }
          else if (address_component.types.includes('country')) {
            location.country = address_component.long_name;
          }
         });
      })
      .catch(error => console.error(error));
}