import React, {Component} from 'react';

import Layout from 'components/Layout/Layout';
import getRouter from 'router/router';

export default class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    {getRouter()}
                </Layout>
            </div>
        )
    }
}