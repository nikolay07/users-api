// import { fetchUserList } from "./users.gateway.js";

// export const USER_DATA_RECIEVED = "USER_DATA_RECIEVED";

// export const userDataRecieved = (userData) => {
//     return {
//         type: USER_DATA_RECIEVED,
//         payload: {
//             userData,
//         },
//     };
// };

// export const fetchUserData = (userName) => {
//     return function(dispatch) {
//         fetchUserList(userName).then((userData) =>
//             dispatch(userDataRecieved(userData))
//         );
//     };
// };