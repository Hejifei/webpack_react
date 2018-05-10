import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";
import axios from 'axios';

class UserInfo extends Component {

    createsid(){
        axios.post('/pcapi/api/session/create',{
            client:'webpc',
                from:'400',
                version:20180402,
                appType:'1',
                uuid:'3189378658-122321169'
        })
        .then(function(res){
            console.log(res);
            return res;
        })
        .catch(function(error){
            console.log(error);
            return error;
        });
    }

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => this.createsid()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);
