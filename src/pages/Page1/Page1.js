import React, {Component} from 'react';
import './Page1.less';
import image from './img/node.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is page1~
                <img  src={image}/>
            </div>
        )
    }
}