import styles from './imageCollection.module.css';
import { collection } from "../data/collection";
import { useEffect } from 'react';

export default function ImageCollection() {

  useEffect(()=> {
    const track = document.getElementById("cards-track");
    
  }, [])

  return (
    <div id={styles['cards-track']}>
      {
        collection.map((item)=>{
          const image = new Image();
          image.src = item.src;
          console.log(item.name, image.naturalWidth);

          return (
            <div key={item.name} 
              className={styles['card-image']}>
                <img src={image.src} alt={item.name} />
            </div>
          )
        })
      }
    </div>
  )
}