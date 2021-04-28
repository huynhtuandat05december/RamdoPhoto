import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import NotFound from '../../component/NotFound/index'
import MainPage from './pages/Main/index'
import AddEditPage from './pages/AddEdit/index'
import NotFound from 'component/NotFound';
import { useSelector } from 'react-redux';


function Photo(props) {
    const match = useRouteMatch();
    console.log(match);
    const photos = useSelector(state => state.photos)
    const local = JSON.stringify(photos);
    localStorage.setItem('photos', local);
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage}></Route>
            <Route path={`${match.url}/add`} component={AddEditPage}></Route>
            <Route path={`${match.url}/:photoId`} component={AddEditPage}></Route>
            <Route component={NotFound}></Route>

        </Switch>

    );
}

export default Photo;