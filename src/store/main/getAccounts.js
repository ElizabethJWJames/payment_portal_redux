// /store/main/getAccounts.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';

auto.settings({smartActions:true})

export function pending (store, creds){
  //console.log('pending', store, creds)
  return store
}

export function fulfilled (store, auth, serverPosts){
  //console.log('fulfilled', store, auth, serverPosts)
    //const accessToken = serverPosts.access_token;
    //app(store, {type: 'AUTH', payload: {authtoken: accessToken}})
  return app(store, {type: 'GETACCOUNTS', payload: {accountInformation: serverPosts, authtoken: auth.authtoken}})
}

fulfilled.chain = (store, auth, serverPosts) => {
  console.log('ccccchain', store, auth, serverPosts);
  return serverPosts.map((accountObj, index)=>{
    //console.log('serverPosts map', accountObj, index)
    actions.main.updateAccounts(accountObj, store);
  })

}

export function rejected (store, auth, error){
  console.log('rejected', store, auth, error)
  return store;
}

export function action (auth){
  //console.log('action getAccounts', auth)
  return fetch('/api/v1/my-account/accounts', {
    //node package qs look up
      method: "GET",
      headers: {
        'Authorization': 'Bearer '+ auth.authtoken,
        'Accept': 'application/json',
      }
    })
 //return store
}
