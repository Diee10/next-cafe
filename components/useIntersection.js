import { useEffect, useRef, useState } from 'react';

function useIntersection(opciones={}) {
    const newRef = useRef();
    const [isIntersecting, setIsIntersecting] = useState(false);
 
    useEffect(()=>{
      const elemento = newRef.current
      const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry=>{
          setIsIntersecting(entry.isIntersecting)
          //observer.unobserve(newRef.current)
        })
      },
      opciones)
      if(elemento){
        observer.observe(elemento);
      }
      return ()=>{
        if(elemento){
            observer.unobserve(elemento)
        }
      }
      
    },[opciones])
    return [newRef,isIntersecting];
}

export default useIntersection