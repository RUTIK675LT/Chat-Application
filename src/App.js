import React from 'react';
import Navbar from './components/Navbar';
import { auth } from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat';

const style={
  appContainer: `max-w-[720px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] mt-10  relative`,
}

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className= {style.appContainer}>
      <section className={style.sectionContainer}>
      {/* NavBar */}
      <Navbar/>
      {/* Chat comp */}
      {user ? <Chat/> : null}
      
      </section>
    </div>
  );
}

export default App;
