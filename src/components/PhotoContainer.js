import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound'

const PhotoContainer = props => { 
  
  const results = props.data;
  let imgs;

  if (results.length) {
    imgs = results.map(img => {
      let id = img.id;
      let path = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
      return <Photo className="size" url={`${path}`} key={id} />
    } );    
  } else {
    imgs = <NotFound />
  }

  return(
    <ul>
      {imgs}
    </ul>
  );
}

export default PhotoContainer;
