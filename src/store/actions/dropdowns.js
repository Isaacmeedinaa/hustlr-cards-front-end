import Industry from "../../models/industry";
import { API_BASE_URL } from '../../constants/urls';

import {
  DROPDOWNS_ARE_LOADING,
  DROPDOWNS_ARE_NOT_LOADING,
} from "./loaders/dropdownsLoader";

export const SET_ORIGINAL_DROPDOWN_DATA = "SET_ORIGINAL_DROPDOWN_DATA";
export const SET_DROPDOWNS = "SET_DROPDOWNS";

export const fetchDropdownData = () => {
  return (dispatch) => {
    dispatch({ type: DROPDOWNS_ARE_LOADING });
    fetch(`${API_BASE_URL}/dropdowns`)
      .then((resp) => resp.json())
      .then((dropdownData) => {
        setIndustries(dropdownData.industries, dropdownData.linkTypes, dropdownData.paymentTypes, dispatch);
      });
  };
};

const setIndustries = (industries, linkTypes, paymentTypes, dispatch) => {
  const originalIndustries = [];
  const originalLinks = [];
  const originalPaymentTypes = [];

  for (const key in industries) {
    originalIndustries.push(
      new Industry(industries[key].id, industries[key].title, industries[key].icon)
    );
  }

  for (const key in linkTypes) {
    originalLinks.push(
      { id: linkTypes[key].id,
        description: linkTypes[key].description,
        placeholder: linkTypes[key].placeholder,
        icon: linkTypes[key].icon,
        iconPrefix: linkTypes[key].iconPrefix
      }
    );
  }

  for (const key in paymentTypes) {
    originalPaymentTypes.push(
      { id: paymentTypes[key].id,
        description: paymentTypes[key].description ,
        icon: paymentTypes[key].icon,
        iconPrefix: paymentTypes[key].iconPrefix 
      }
    );
  }

  let dropdownIndustries = originalIndustries.map((industry) => ({
    value: industry.id,
    label: industry.title,
    icon: industry.icon
  }));

  let dropdownLinkTypes = originalLinks.map((linkType) => ({
    value: linkType.id,
    label: linkType.description,
    icon: linkType.icon,
    iconPrefix: linkType.iconPrefix
  }));

  let dropdownPaymentTypes = originalPaymentTypes.map((paymentType) => ({
    value: paymentType.id,
    label: paymentType.description,
    icon: paymentType.icon,
    iconPrefix: paymentType.iconPrefix,
  }));

  dropdownLinkTypes.sort(dropdownSort);

  dropdownIndustries.sort(dropdownSort);

  dropdownPaymentTypes.sort(dropdownSort);

  dispatch({
    type: SET_ORIGINAL_DROPDOWN_DATA,
    originalIndustries: originalIndustries,
    originalLinks: originalLinks,
    originalPaymentTypes: originalPaymentTypes,
  });
  dispatch({
    type: SET_DROPDOWNS,
    dropdownIndustries: dropdownIndustries,
    dropdownLinkTypes: dropdownLinkTypes,
    dropdownPaymentTypes: dropdownPaymentTypes,
  });
  dispatch({ type: DROPDOWNS_ARE_NOT_LOADING });
}

const dropdownSort = (a, b) =>  {
  if (a.value === null) {
    return -1
  }
  if (b.value === null) {
    return 1;
  }
  if ( a.label < b.label ){
    return -1;
  }
  if ( a.label > b.label ){
    return 1;
  }
  return 0;
}
