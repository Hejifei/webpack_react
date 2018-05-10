export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";
// import axios from 'axios';
function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}
export function getUserInfo() {
    
    // return {
    //     types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
    //     promise: client => client.post(`https://api.litongjinfu.com/api/session/create`,{
    //         client:'webpc',
    //         from:'400',
    //         version:20180402,
    //         appType:'1',
    //         uuid:'3189378658-122321169'
    //     })
    // }
    return function (dispatch) {
        dispatch(getUserInfoRequest());

        return fetch(process.env.APIURL+'/api/user.json')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch(getUserInfoSuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getUserInfoFail());
                }
            )
    }
}