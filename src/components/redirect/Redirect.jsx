import React , {useEffect} from 'react'
import axios from 'axios'
import { Link , useParams } from 'react-router-dom'


export default function Redirect() {
    const { target } = useParams();

    useEffect(() => {
      const redirectTo = () => {
        try {
          window.location.href = `${import.meta.env.VITE_ACTIVE_SERVER}/redirect/${target}`; //tobe configured
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      redirectTo();
    }, [target]);

  return (
    <Link to="/:target"></Link>
  )
}
