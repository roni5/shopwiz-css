import React, { Component } from 'react';

// Named function good for debug

//export default function Listing(props) {
 // return (
    //<div>
     // <p>Title: {props.listing.title}</p>
     // <p>Type: {props.listing.type}</p>
     // <p>
      //  Location: {props.listing.location.city},
     // {props.listing.location.state},
     // </p>
   // </div>
 // )
//}
//const Listing = ({ listing }) => (
  //<div>
   // <p>Title: {listing.title}</p>
   // <p>Type: {listing.type}</p>
  //  <p>
   //   Location: {listing.location.city},
   //   {listing.location.state},
   //   {listing.location.country}
  //  </p>
 // </div>
//);

const Listing = ({
  listing: {
    title,
    type,
    location: {
      city,
      state,
      country
    }
  }
}) => (
  <div>
    <p>Title: {title}</p>
    <p>Type: {type}</p>
    <p>Location: {city}, {state}, {country}</p>
  </div>
);
export default Listing;