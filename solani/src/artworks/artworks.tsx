import Nav from '../components/nav';
import styles from './artworks.module.css';
import { collection } from "../data/collection";
import { useState } from 'react';

export default function Artworks() {
  const [listOpen, setListOpen] = useState(false);
  const [displayImage, setDisplayImage] = useState(collection[0].src);

  const containerHidden = { 
    transform: 'translateX(200px)',
    opacity: '0'
  };
  const containerVisible = { 
    transform: 'translateX(0)',
    opacity: '1'
  };

  return (
    <>
      <Nav />
      <div className={styles['list-button']} onClick={()=>setListOpen(!listOpen)}>
        <span>LIST</span>
      </div>
      <div className={styles['list-container']}
        style={listOpen ? containerHidden : containerVisible}
        onMouseLeave={()=>{setListOpen(!listOpen)}}>
        {collection.map((item)=>{
          return (
            <div className={styles['image-container']}
              onClick={()=>setDisplayImage(item.src)}>
              <img className={styles['image']} src={item.src}/>
            </div> 
          )})
        }
        <div className={styles['progress-bar']}>
          <div className={styles['progress']}></div>
        </div>
      </div>
      <div className={styles['main-image-container']}>
        <img className={styles['main-image']} src={displayImage} />
      </div>
    </>
  )
}