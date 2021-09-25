//
import '../styles/globals.css';
import { CheckAuth } from '../auth/CheckAuth';

function MyApp({ Component, pageProps }) {
  
  return (
    <Component {...pageProps} />
    // <CheckAuth>
      
    // </CheckAuth>
 
  );
 
}

export default MyApp
