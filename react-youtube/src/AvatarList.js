import React from 'react';
import 'tachyons'

const AvatarList = (props) => {
    return(
        <div className="avatar_design bg-purple ma4 dib pa4 grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="pooja"/>
           <h2 className="tc">{props.name}</h2>
           <p className="tc">{props.work}</p>
        </div>
    )
}

export default AvatarList; 