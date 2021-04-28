import {useState,useEffect} from "react"
import "./loading.css";

function Loading(props){
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[]);

    return(
        <>
        {Loading ? 
        <div id="loading" className="loading w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="logo">
                <h1>D</h1>
            </div>
        </div>
         :

        props.children
        
        }
        </>
    )
}

export default Loading;