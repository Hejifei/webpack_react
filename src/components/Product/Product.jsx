import React, {Component} from 'react';

import './Product.less';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div class='productC'>
                <img />
                <div class='PInfoC'>
                    <h3>{this.props.info.name}</h3>
                    <i>￥{this.props.info.price}</i>
                    <p>
                        <button onClick={this.props.increment}>+</button>
                        <span>{this.props.info.num}</span>
                        <button onClick={this.props.decrement}>-</button>
                    </p>
                </div>
            </div>
        )
    }
}