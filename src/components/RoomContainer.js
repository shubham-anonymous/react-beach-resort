
// import React from 'react'
// import RoomList from './RoomList'
// import RoomFilter from './RoomFilter'
// import {withRoomConsumer, RoomConsumer} from '../context'
// import Loading from './Loading'


// function RoomContainer({context}){
//     const {loading, sortedRooms, rooms } = context;
//     if(loading){
//         return <Loading></Loading>
//     }
//     return(
//             <>
//             <RoomFilter rooms={rooms}>
//                 </RoomFilter>
//                  <RoomList rooms={sortedRooms}>
//                    </RoomList>
//                  </>
//     )

// }

// export default withRoomConsumer(RoomContainer)



import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import {RoomCunsumer, RoomConsumer} from '../context'
import Loading from './Loading'


export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
            value =>{
                const {loading, sortedRooms, rooms } = value;
                if(loading){
                    return <Loading/>;
                }
                return (<>
                <RoomFilter rooms={rooms}>

                </RoomFilter>
                <RoomList rooms={sortedRooms}>

                </RoomList>
            </>
            );
            }
        }
        </RoomConsumer>
    
    );
}
