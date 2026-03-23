import styles from './imageCollection.module.css';
import { collection } from "../data/collection";
import { useState, useEffect, useRef } from 'react';

export default function ImageCollection() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [mousePosX, setMousePosX] = useState(0);
  const cardsTrack = useRef<HTMLDivElement>(null);

  useEffect(()=> {
    const element = cardsTrack.current;
    if (!element) return;
    
    // Observe track for changes in size
    const resizeObserver = new ResizeObserver(() => {
      setScrollWidth(element.scrollWidth);
    });
    resizeObserver.observe(element);

    // Track mousePosition
    const updateMousePos = (e:MouseEvent) => {
      setMousePosX(e.clientX);
    }
    window.addEventListener('mousemove', updateMousePos);

    // Normalize width of cardsTrack with the width of the viewport
    const track = (scrollWidth - window.innerWidth) + 0.05*window.innerWidth;
    const mouseProgress = mousePosX / window.innerWidth;
    const trackProgress = mouseProgress * track; 
    element.animate(
      { transform: `translateX(-${trackProgress}px)` }, 
      { duration: 1200, fill: "forwards", easing: "ease-in" }
    );
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', updateMousePos);
    }
  }, [mousePosX])

  return (
    <>
      <div ref={cardsTrack} id={styles['cards-track']} style={{}}>
        {
          collection.map((item)=>{
            return (
              <a key={item.name} 
                className={styles['card-image']}
                href='/'>
                  <img src={item.src} alt={item.name} draggable='false'/>
              </a>
            )
          })
        }
      </div>
      {/* DEBUG: Check positions
        <div className={'debugPOS'}>
          <span>{mousePosX-30} - {innerWidth} / </span>
          <span>{scrollWidth} / </span>
          <span>{
            (mousePosX / window.innerWidth)
            *
            ((scrollWidth - window.innerWidth) + (0.05 * window.innerWidth))}
          </span>
        </div>
      */}
    </>
  )
}
