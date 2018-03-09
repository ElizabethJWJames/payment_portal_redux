// /store/main/sendEmail.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';

auto.settings({smartActions:true})

export function pending (store, emailObject){
  console.log('pending sendEmail', store, emailObject)
  return store
}

export function fulfilled (store, emailObject, serverPosts){
  console.log('fulfilled sendEmail', store, emailObject, serverPosts)
  /*
    compare the record,
    update the record if it exists,
    add the record if it does not exist
  */
    //const accessToken = serverPosts.access_token;
    //app(store, {type: 'AUTH', payload: {authtoken: accessToken}})
    return store
  //return app(store, {type: 'sendEmail', payload: {accountInformation: accountObj, accountDetails: serverPosts}})
}

// fulfilled.chain = (store, serverPosts) => {
//   return app(store, {type: 'PAGEPUSH', payload: {pageToPush: '/myAccount'}})
// }

export function rejected (store, emailObject, error){
  console.log('rejected sendEmail', store, emailObject, error)
  return store;
}

export function action (emailObject, store){
  console.log('action sendEmail', emailObject, store)
  /*
  call the record
  */
  const EmailObjToStr = `from_name=${emailObject.name}&from_email=${emailObject.email}&phone=${emailObject.phone}&subject=${emailObject.account}&message_html=${' Message: ' + emailObject.msg}&send_to=ali@reainc.net`

  return fetch('/api/v1/email/dbsend', {
      //node package qs look up
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: EmailObjToStr
      })
}
