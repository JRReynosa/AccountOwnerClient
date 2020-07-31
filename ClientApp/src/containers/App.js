import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
import CreateOwner from './Owner/CreateOwner/CreateOwner';

import InternalServer from '../components/ErrorPages/InternalServer/InternalServer';

import asyncComponent from '../hoc/AsyncComponent/AsyncComponent';
import OwnerDetails from './Owner/OwnerDetails/OwnerDetails'

import UpdateOwner from './Owner/UpdateOwner/UpdateOwner';
const AsyncOwnerList = asyncComponent(() => {
    return import('./Owner/OwnerList/OwnerList');
});

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/owner-list" component={AsyncOwnerList} />
                        <Route path="/ownerDetails/:id" component={OwnerDetails} />
                        <Route path="/createOwner" component={CreateOwner} />
                        <Route path="/updateOwner/:id" component={UpdateOwner} />
                        <Route path="/500" component={InternalServer} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;