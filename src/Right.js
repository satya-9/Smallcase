import React from 'react'

export default function Right({data,i,toggle}) {
    return (
        <div className={"data" + (data.open ? "openr" : "" )}
        key={i} onClick={()=>toggle(i)}>

            <div className={"data-question"+(data.open ? "open" : "" )}>{data.question}            
            </div>            
            <div className={"data-matter"+ (data.open ? "open" : "" )}>{data.matter}</div>

            

        </div>
    )
}
