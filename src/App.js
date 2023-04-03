import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { Nopage } from './Components/Nopage';
import Usercomponents from './Components/Usercomponents';
import { UserDetails } from './Components/userDetails';
import {data} from './Data/data';


function App() {
  const [user, setUser] = useState(data)
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
        <Usercomponents
        user={user}
        setUser={setUser}
        /> 
        </Route>

        <Route path="/adduser">
         <AddUser
          user={user}
          setUser={setUser}
         />
        </Route>

        <Route path="/edit/:id">
          <EditUser
          user={user}
          setUser={setUser}
          />

        </Route>

        <Route path="/user/:id">
          <UserDetails user={user}/>
        </Route>
        
        <Route path="**">
          <Nopage/>
        </Route>

      </Switch>
            
    </div>
  );
}

export default App;
