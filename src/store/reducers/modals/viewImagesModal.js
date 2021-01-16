import {
  OPEN_VIEW_IMAGES_MODAL,
  CLOSE_VIEW_IMAGES_MODAL,
  NEXT_IMAGE,
  PREVIOUS_IMAGE,
} from "../../actions/modals/viewImagesModal";

const initialState = {
  modalIsOpen: false,
  images: [],
  currentImgUrl: "",
  currentImgIndex: null,
};

const viewImagesModal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_VIEW_IMAGES_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        images: action.images,
        currentImgUrl: action.currentImgUrl,
        currentImgIndex: action.currentImgIndex,
      };

    case CLOSE_VIEW_IMAGES_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        images: action.images,
        currentImgUrl: action.currentImgUrl,
        currentImgIndex: action.currentImgIndex,
      };

    case NEXT_IMAGE:
      let nextCurrentImgIndex = state.currentImgIndex;

      console.log("next image case");

      const nextNewCurrentImgItem = state.images[nextCurrentImgIndex + 1];

      return {
        ...state,
        currentImgUrl: nextNewCurrentImgItem.url,
        currentImgIndex: nextCurrentImgIndex + 1,
      };

    case PREVIOUS_IMAGE:
      let prevCurrentImgIndex = state.currentImgIndex;

      console.log("prev image case");

      const prevNewCurrentImgItem = state.images[prevCurrentImgIndex - 1];

      return {
        ...state,
        currentImgUrl: prevNewCurrentImgItem.url,
        currentImgIndex: prevCurrentImgIndex - 1,
      };

    default:
      return state;
  }
};

export default viewImagesModal;
