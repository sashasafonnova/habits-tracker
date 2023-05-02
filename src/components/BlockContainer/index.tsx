import React from "react";


type BlockContainerProps = {
   children: JSX.Element;
   style?: string;
}


const BlockContainer: React.FC<BlockContainerProps> = ( {children, style} ) => {


   return (
      <div className={style}>
         <div className="container">
            {children}
         </div>
      </div>
   );
}

export default BlockContainer; 

