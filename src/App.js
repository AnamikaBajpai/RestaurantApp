import React, {  Fragment} from 'react';
 import Header from './Components/Layout/Header';
 import Meals from './Components/Meals/Meals';


function App() {
  return (
    <div>
      <Fragment>
        <Header />
        <main>
          <Meals />
        </main>
      </Fragment>
      
    </div>
  );
}

export default App;
