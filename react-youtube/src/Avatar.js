import React, {Component} from 'react';
import './Avatar.css';
import 'tachyons'
import AvatarList from './AvatarList';

class Avatar extends Component {

    constructor(){
        super();
            this.state = {
                message: "Welcome to Avatar world"
            }
        
    }

    messageChange() {
        this.setState({
            message: "Thank you For Subscribing"
        })
    }

    render(){
        const avatarArrayList = [
            {
                id:0,
                name:'Pooja',
                work: 'Frontend Developer'
            },
    
            {
                id:1,
                name:'Trek',
                work: 'Backend Developer'
            },
    
            {
                id:2,
                name:'Smith',
                work: 'Database Engineer'
            },
            {
                id:3,
                name:'Ruby',
                work: 'Cloud Engineer'
            }
    
        ]
    
        const avatarCardList = avatarArrayList.map((avatarcard, i) => {
            return <AvatarList key={i} id={avatarArrayList[i].id} name={avatarArrayList[i].name} work={avatarArrayList[i].work}></AvatarList>
        })

        return(
            <div className="mainpage">
                <h1 className="tc">{this.state.message}</h1>
                {avatarCardList}
                <br></br>
               {/* <AvatarList id={avatarArrayList[0].id} name={avatarArrayList[0].name} work={avatarArrayList[0].work}></AvatarList>
               <AvatarList id={avatarArrayList[1].id} name={avatarArrayList[1].name} work={avatarArrayList[1].work}></AvatarList>
               <AvatarList id={avatarArrayList[2].id} name={avatarArrayList[2].name} work={avatarArrayList[2].work}></AvatarList>
               <AvatarList id={avatarArrayList[3].id} name={avatarArrayList[3].name} work={avatarArrayList[3].work}></AvatarList> */}
            <button onClick={() => this.messageChange()}>Subscribe</button>
            </div>
            
        )
    }
}

//-----functional component ---//

// const Avatar = () => {
   
//     const avatarArrayList = [
//         {
//             id:0,
//             name:'Pooja',
//             work: 'Frontend Developer'
//         },

//         {
//             id:1,
//             name:'Trek',
//             work: 'Backend Developer'
//         },

//         {
//             id:2,
//             name:'Smith',
//             work: 'Database Engineer'
//         },
//         {
//             id:3,
//             name:'Ruby',
//             work: 'Cloud Engineer'
//         }

//     ]

//     const avatarCardList = avatarArrayList.map((avatarcard, i) => {
//         return <AvatarList id={avatarArrayList[i].id} name={avatarArrayList[i].name} work={avatarArrayList[i].work}></AvatarList>
//     })

//     return(
//         <div className="mainpage">
//             <h1 className="tc">Welcome to Avatar world</h1>
//             {avatarCardList}
//             <br></br>
//            {/* <AvatarList id={avatarArrayList[0].id} name={avatarArrayList[0].name} work={avatarArrayList[0].work}></AvatarList>
//            <AvatarList id={avatarArrayList[1].id} name={avatarArrayList[1].name} work={avatarArrayList[1].work}></AvatarList>
//            <AvatarList id={avatarArrayList[2].id} name={avatarArrayList[2].name} work={avatarArrayList[2].work}></AvatarList>
//            <AvatarList id={avatarArrayList[3].id} name={avatarArrayList[3].name} work={avatarArrayList[3].work}></AvatarList> */}
//         <button>Subscribe</button>
//         </div>
        
//     )
// }

export default Avatar