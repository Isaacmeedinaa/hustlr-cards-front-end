import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteLink, setLink, updateLink } from "../../../../store/actions/card";

import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

const CardFormSocialMediaLink = (props) => {

  const dispatch = useDispatch();

  const [originalLink, setOriginalLink] = useState({});
  const [updatedLink, setUpdatedLink] = useState(props.link);

  const linkLoader = useSelector(state => state.linkLoader);

  useEffect(() => {
    const cardString = localStorage.getItem('card');
    const cardObj = JSON.parse(cardString);
    const linkIndex = cardObj.links.findIndex(link => link.id === props.link.id);
    setOriginalLink(cardObj.links[linkIndex]);

    dispatch(setLink(updatedLink))

  }, [dispatch, updatedLink, props.link.id]);

  const onLinkUrlChange = (event) => {
    const linkToUpdate = {...updatedLink};
    linkToUpdate.url = event.target.value;

    setUpdatedLink(linkToUpdate);
  }
  
  return (
    <div className="card-form-social-media-input-group">
      <span className="card-form-social-media-icon-wrapper" >
        <FontAwesomeIcon 
          icon={[props.link.type.iconPrefix, props.link.type.icon]}
          transform="grow-4"/>
      </span>
      <input
        className="card-form-social-media-input"
        placeholder={props.link.type.placeholder}
        value={updatedLink.url}
        name="social-media-link"
        onChange={(event) => onLinkUrlChange(event)}
      />
      { originalLink.url !== updatedLink.url ?
        <button className="primary-color card-form-link-btn"
          onClick={() => dispatch(updateLink(updatedLink))}>
          {
            linkLoader.updatingLoader && linkLoader.updatingLinkId === updatedLink.id ? 
            <Loader type="TailSpin" color="#2ecc71" width={22} height={22} /> 
            : "Save"
          }  
        </button> : null }
      <button onClick={() => dispatch(deleteLink(updatedLink.id))}
        className="primary-color card-form-link-btn">
      { linkLoader.deletingLoader && linkLoader.deletingLinkId === updatedLink.id ? 
        <Loader type="TailSpin" color="#2ecc71" width={22} height={22} /> :
        "Delete"
      }
      </button>
    </div>
  );
}

export default CardFormSocialMediaLink;