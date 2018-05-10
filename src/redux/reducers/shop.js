import {INCREMENT, DECREMENT, RESET} from 'actions/shop';

/*
* 初始化state
 */
const productList ={
    '1001':{
        id:1001,
        name:'芒果西米露',
        price:10,
        num:0
    },
    '1002':{
        id:1002,
        name:'杨枝甘露',
        price:15,
        num:0
    },
    'total':{
        totalmoney:0,
        totalnum:0
    }
}

const moneyCount = (plist)=>{
    let plist_keys = Object.keys(plist);
    let totalNumNew = 0;
    let totalMoneyNew = 0;
    plist_keys.map((val)=>{
        if(val != 'total'){
            totalNumNew = totalNumNew +plist[val].num;
            totalMoneyNew = totalMoneyNew +plist[val].num * plist[val].price;
        }
    });
    plist.total.totalnum = totalNumNew;
    plist.total.totalmoney = totalMoneyNew;
    return plist;
}

export default function reducer(state = productList, action) {
    switch (action.type) {
        case INCREMENT:
            state[action.Id].num = state[action.Id].num +1;
            state = moneyCount(state);
            return {
                ...state
            };
        case DECREMENT:
            state[action.Id].num = ((state[action.Id].num -1)>=0) ? (state[action.Id].num -1) : 0;
            state = moneyCount(state);
            return {
                ...state
            };
        case RESET:
            state[action.Id].num = 0;
            state = moneyCount(state);
            return {
                ...state
            };
        default:
            state = moneyCount(state);
            return {
                ...state
            };
    }
}