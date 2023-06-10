import React from 'react';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';


const App = () => {
  return (
    <>
      <SignIn name="SignIn" component={SignIn} options={{headerShown:true}}/>
      <SignUp name="SignUp" component={SignUp} options={{headerShown:true}}/>
    </>
  );
};

export default App;
