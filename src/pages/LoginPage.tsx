import React from 'react';
import { FormSignIn } from '../modules/Login';
import BlockContainer from '../components/BlockContainer';
import ArrowBack from '../components/ArrowBack';


const LoginPage: React.FC = () => {

   React.useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


   return (
      <>

         <BlockContainer style="bg-colorful">
            <ArrowBack />
         </BlockContainer>

         <BlockContainer style="bg-colorful">
            <FormSignIn />
         </BlockContainer>
      </>
   );
}

export default LoginPage;