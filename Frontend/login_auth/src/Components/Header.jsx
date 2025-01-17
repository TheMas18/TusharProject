import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import '../Dashboard.css'
import axios from 'axios'
import { useEffect,useState } from 'react'


function Header({OpenSidebar}) {

  /*const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/api/register')
    .then(users=>setUsers(users.data))
    .catch(err=>console.log(err))
  },[])*/


  

   /* const [username, setUsername] = useState("");
  
    // Corrected getData function
    const getData = async (username) => {
      try {
        const result = await axios.get("http://localhost:3000/api/users/profile", {
          params: { username },
        });
        console.log(result.data);
        return result.data; // Make sure to return the data
      } catch (err) {
        console.error(err);
        return null;
      }
    };
  
    useEffect(() => {
      const fetchUsername = async () => {
        const data = await getData({username});
        if (data && data.username) {
          setUsername(data.username);
        }
      };
      fetchUsername();
    }, []);
  
  */
  

  
  

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h1>Expense Master</h1>
        </div>
        <div className='header-right'>
            <BsFillBellFill button className='icon'/>
            <BsFillEnvelopeFill button className='icon'/>
            <BsPersonCircle button className='icon'/>
        </div>
    </header>
  )
}

export default Header

/*{users.map(user=>{users.name})}
{username ? username : "Loading..."}
*/