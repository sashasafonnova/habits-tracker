import React from 'react';
import BlockContainer from '../components/BlockContainer';
import {HomeBlock } from '../modules/Home';





const HomePage: React.FC = () => {

   React.useEffect(() => {
      window.scrollTo(0, 0);
   }, []);


   return (
      <>
         <BlockContainer style={"bg-colorful"}>
            <HomeBlock />
         </BlockContainer> 
         
      </>
   );
}

export default HomePage;