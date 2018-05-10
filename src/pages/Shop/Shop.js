import React, {Component} from 'react';
import {shop_increment, shop_decrement, shop_reset} from 'actions/shop';
import Product from 'components/Product/Product.jsx';

import {connect} from 'react-redux';
const productList =[
    {
        id:1,
        name:'芒果西米露',
        price:10,
        num:0
    },
    {
        id:2,
        name:'杨枝甘露',
        price:15,
        num:0
    }
]
class ProductList extends Component {
    render() {
        let Pinfo_Obj = this.props.plist;
        let Pinfo_keys = Object.keys(Pinfo_Obj);
        const plist = Pinfo_keys.map((val,index)=>{
            if(val === 'total'){
                return '';
            }else{
                return (
                    <Product 
                        info={Pinfo_Obj[val]}
                        increment={() => this.props.increment(Pinfo_Obj[val].id)}
                        decrement={() => this.props.decrement(Pinfo_Obj[val].id)}
                        reset={() => this.props.reset(Pinfo_Obj[val].id)}
                    />
                )
            }
        });
        return (
            <div>
                {plist}
                <div>
                    <p>您已选择 <span>{Pinfo_Obj.total.totalnum}</span> 杯</p>
                    <p>总金额 <span>{Pinfo_Obj.total.totalmoney}</span> 元</p>
                </div>
            </div>
        )
    }
}
// export default ProductList;

const mapStateToProps = (state) => {
    return {
        plist: state.shop
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (Id) => {
            dispatch(shop_increment(Id))
        },
        decrement: (Id) => {
            dispatch(shop_decrement(Id))
        },
        reset: (Id) => {
            dispatch(shop_reset(Id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);