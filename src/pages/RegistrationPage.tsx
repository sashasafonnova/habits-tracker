import React from 'react';

import BlockContainer from '../components/BlockContainer';
import { FormSignUp } from '../modules/Registration';
import ArrowBack from '../components/ArrowBack';



const LoginPage: React.FC = () => {
   return (
      <>

         <BlockContainer style="bg-colorful">
            <ArrowBack />
         </BlockContainer>
         
         <BlockContainer style="bg-colorful">
            <FormSignUp />
         </BlockContainer>

      </>
   );
}

export default LoginPage;