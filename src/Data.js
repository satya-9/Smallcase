
import React from 'react'; 


export default function Dataf({data,i,toggle}) {
    return (
        <div className={"data" + (data.open ? "open" : "" )}
        key={i} onClick={()=>{
            toggle(i)
        }}>
            <div className={"data-question"+(data.open ? "open" : "" )}>{data.question}
            <img className="image" src={require("./download.png").default} alt="man" />
            
            </div>
            <div className={"data-matter"+ (data.open ? "open" : "" )}>{data.matter}</div>
            
            

        </div>
    )
}
