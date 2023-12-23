import React from 'react'
import useAuth from '../../hooks/useAuth'
import useRefreshToken from '../../hooks/useRefreshToken';
function Testjwttoken() {
    const {auth} = useAuth();
    const refresh =  useRefreshToken();

    const testclick = async ()=>{
      await refresh();
      console.log(auth);
    }

    return (
    <div>
        testjwttoken
        <button onClick={testclick}>TEst</button>
    </div>
  )
}

export default Testjwttoken