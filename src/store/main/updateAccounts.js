// /store/main/getAccounts.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';

auto.settings({smartActions:true})

export function pending (store, creds){
  //console.log('pending updateAccounts', store, creds)
  return store
}

export function fulfilled (store, accountObj, serverPosts){
  //console.log('fulfilled updateAccounts', store, accountObj, serverPosts)
  /*
    compare the record,
    update the record if it exists,
    add the record if it does not exist
  */
    //const accessToken = serverPosts.access_token;
    //app(store, {type: 'AUTH', payload: {authtoken: accessToken}})
    //return store
  return app(store, {type: 'UPDATEACCOUNTS', payload: {accountInformation: accountObj, accountDetails: serverPosts}})
}

fulfilled.chain = (store, serverPosts) => {
  return app(store, {type: 'PAGEPUSH', payload: {pageToPush: '/myAccount'}})
}

export function rejected (store, auth, error){
  console.log('rejected', store, auth, error)
  return store;
}

export function action (accountObj, store){
  //console.log('action updateAccounts', accountObj, store)
  /*
  call the record
  */
  return fetch('/api/v1/my-account/store', {
      //node package qs look up
        method: "POST",
        headers: {
          'Authorization': 'Bearer '+ store.authtoken,
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "collection="+accountObj.RecID
      })
 //return store
}
