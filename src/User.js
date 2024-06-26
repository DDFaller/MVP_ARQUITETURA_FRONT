import { useState } from "react";




const userStatus = [
  undefined,
  'newUser',
  'authenticated'
]
function UserRegistration(){


  return<>
  
  </>
}


function UserLogin() {

  function createUser(){
    return 
  }
  return (
    <div className="UserLogin">
    <form onSubmit={createUser()}>
        <div  className="UserName">
          <input type="text"></input>    
        </div>
        <div  className="UserPassword">
          <input type="password"></input>   
        </div>
    </form>
    </div>
  );
}

function User(){
  const [user,setUser] = useState()

  return<>
  {
  
  }
  </>
}

export default User;