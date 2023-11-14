import React , {useEffect} from 'react'
import axios from 'axios'
import { Link , useParams } from 'react-router-dom'


export default function Redirect() {
    const { target } = useParams();

    useEffect(() => {
      const redirectTo = () => {
        try {
          window.location.href = `http://localhost:8080/redirect/${target}`; //tobe configured
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
