import React from 'react'

export default function Dataa({data,i,toggle}) {
    return (
        <div className={"data" + (data.open ? "open" : "" )}
        key={i} onClick={()=>toggle(i)}>
            <div className={"data-matter"+ (data.open ? "open" : "" )}>{data.matter}</div>

            <div className={"data-question"+(data.open ? "open" : "" )}>{data.question}
            <img className="image" src={require("./unnamed.png").default} alt="man" />
            
            </div>            
            

        </div>
    )
}
