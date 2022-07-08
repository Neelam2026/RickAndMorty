import { useEffect, useState } from "react"
import { BasicModal } from "./Box"
import InfiniteScroll from "react-infinite-scroll-component";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../styles/Home.css"
export const Home=()=>{
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [name,setName]=useState("rick")
    const [count,setcount]=useState(1)
    
    useEffect(()=>{
     Getdata()
    
    },[name])

    const Getdata=async() =>{
       
        try{
            
            let Data= await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
            let FetchData=await Data.json()
            setData(FetchData.results)
            setcount(FetchData.info.count)
           
        }
        catch(error){
          console.log(error)
        }

     }
     
     const GetdataAgain=async()=>{
         try{      
                setPage(page+1)
                let Data1= await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`);
                let FetchData1=await Data1.json()
                setData([
                  ...data.concat(FetchData1.results)]
                )
              
            }
               catch(error){
           console.log(error)
        }
     }

return (
  
    <div className="container">
    <h1 className="heading">Rick and Morty Search</h1>
    <input placeholder="🔍 Search For Contact" type="text" onInput={(e)=>{setName(e.target.value)}} className="searchInput"></input>
             {data ?
           

            <InfiniteScroll
            dataLength={data.length}
            next={GetdataAgain}
            hasMore={data.length<=count}
            loader={<h3 id="load">......Loding</h3>}
            scrollableTarget="scrollableDiv"
          >
         
        {data.map((e,i)=>{
            return (
              
                <div key={e.id+i} >
                <div><BasicModal  prop={e}/>
                <div className="dataDiv">
                       <div><img src={e.image}  className="imgDiv"></img></div>
                        <div className="div2">{e.name}</div>
                        <div className="div3">{e.status==="Alive" ? `🟢${e.status}` : e.status==="Dead" ? `🔴${e.status}` :e.status==="Unknown" ? `⚫` :`🔘${e.status}`}</div>
                        <div className="div2">{e.species}</div>
                        
                    </div>
                </div>
                </div>
            )
        })}
      
      </InfiniteScroll>

   : 
         <div id="noResult">
          <h1>Sorry☹️  No Result Found</h1>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/search-result-not-found-3428237-2902696.png" style={{width:"40%",height:"400px"}}></img>
          </div> 
 }
    </div>
)

}



     