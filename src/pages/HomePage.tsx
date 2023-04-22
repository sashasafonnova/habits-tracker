import React from 'react';
import BlockContainer from '../components/BlockContainer';
import {HomeBlock } from '../modules/Home';





const HomePage: React.FC = () => {
   return (
      <>
         <BlockContainer style={"bg-colorful"}>
            <HomeBlock />
         </BlockContainer> 
         
      </>
   );
}

export default HomePage;