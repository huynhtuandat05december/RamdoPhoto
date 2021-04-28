import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from './component/NotFound/index'
import './App.css'
import Header from './component/Header/index'
import productApi from 'api/productApi';
import axios from 'axios';
import SignIn from 'features/Auth/page/Signin';
import firebase from 'firebase';
const Photo = React.lazy(() => import('./features/Photo/index'))
// Configure Firebase.
const config = {
    apiKey: 'AIzaSyBWY6rYQC4NjLS5uHewQfZXKWgt20bKO_k',
    authDomain: 'photo-app-7691f.firebaseapp.com',
    // ...
};
firebase.initializeApp(config);
function App() {
    // useEffect(() => {
    //     const fetchProductList = async () => {
    //         try {
    //             const response = await productApi.getAll();
    //             console.log(response);
    //         } catch (error) {
    //             console.log('Failed to fetch product list: ', error);
    //         }
    //     }
    //     fetchProductList();
    // }, []);
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                // logout
                return;
            }
            const token = await user.getIdToken();
            console.log('token: ', token);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return (
        <div className="photo-app">
            <Suspense fallback={<div>Loading....</div>}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Redirect exact from="/" to="/photo"></Redirect>
                        <Route path='/photo' component={Photo}></Route>
                        <Route path='/signin' component={SignIn}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div >

    );
}

export default App;
