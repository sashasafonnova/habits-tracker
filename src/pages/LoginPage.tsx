import React from 'react';
import { LoginContent } from '../modules/Login';
import BlockContainer from '../components/BlockContainer';


const LoginPage: React.FC = () => {
   return (
      <>
         <BlockContainer style="login">
               <LoginContent />
         </BlockContainer>
      </>
   );
}

export default LoginPage;