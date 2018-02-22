// /store/main/auth.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';

auto.settings({smartActions:true})

export function pending (store, creds){
  //console.log('pending', store, creds)
  return store
}

export function fulfilled (store, creds, serverPosts){
  //console.log('fulfilled', store, creds, serverPosts)
    const accessToken = serverPosts.access_token;
    //app(store, {type: 'AUTH', payload: {authtoken: accessToken}})
  return app(store, {type: 'AUTH', payload: {authtoken: accessToken}})
}

fulfilled.chain = (store, creds, serverPosts) => {
  //console.log('ccccchain', auth, payload, authData);
  actions.main.getAccounts({authtoken: serverPosts.access_token});
}

export function rejected (store, creds, error){
  console.log('rejected', store, creds, error)
  return store;
}

export function action (creds, store){
  //console.log('action auth', store, creds)
  return fetch('/api/v1/user/authenticate', {
    //node package qs look up
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "username="+creds.submittedValues.email+"&password="+creds.submittedValues.password
      //method: "GET"
    })
 //return store
}
