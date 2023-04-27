import React , {useState , useEffect} from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoading from "./SkeletonLoading";
import axios from "axios";


const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        )
        .then((res) => setUserList(res.data))
        setIsLoading(false)
    }, 2000);
  }, []);
  return (
  <div style={{backgroundColor:'#c5ff8f'}}>
            <SkeletonTheme highlightColor="#38ffd1">

{
  isLoading 
  ?
  <>
<SkeletonLoading/>
<SkeletonLoading/>
<SkeletonLoading/>
<SkeletonLoading/>
<SkeletonLoading/>
<SkeletonLoading/>
</>
:
userList.map((user) => (
  <div className="card" key={Math.random()* Date.now()}>
    <img
      src={'https://joesch.moe/api/v1/' + user.first}
      alt="user"
    />
    <h1>
      {user.first} {user.last}
    </h1>
    <h2>{user.email}</h2>
    <h3>{user.address}</h3>
  </div>
))
}
</SkeletonTheme>
    </div>
  )
}

export default Home
