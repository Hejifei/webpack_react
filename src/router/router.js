import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import LazyLoad from 'components/Loading/Loading'

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import Shop from 'bundle-loader?lazy&name=userInfo!pages/Shop/Shop';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';



const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
            <Switch>
                <Route path="/" exact component={LazyLoad(Home)} />
                <Route path="/page1" component={LazyLoad(Page1)} />
                <Route path="/counter" component={LazyLoad(Counter)} />
                <Route path="/userinfo" component={LazyLoad(UserInfo)} />
                <Route path="/shop" component={LazyLoad(Shop)} />
                <Route component={LazyLoad(NotFound)}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;