// /store/main/sendEmail.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';
import logo from './../../images/AutoStart-logo2.png';

auto.settings({smartActions:true})

export function pending (store, emailObject){
//  console.log('pending sendEmail', store, emailObject)
  return store
}

export function fulfilled (store, emailObject, serverPosts){
//  console.log('fulfilled sendEmail', store, emailObject, serverPosts)
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

fulfilled.chain = (store, serverPosts) => {
  return  actions.main.updateModalContent({displayComponent: 'Success'});
}

export function rejected (store, emailObject, error){
//  console.log('rejected sendEmail', store, emailObject, error)
  return store;
}

export function action (emailObject, store){
//  console.log('action sendEmail', emailObject, store)
  /*
  call the record
  */
  const fromName = 'AutoStart'
  const from = 'Support@autoStart.com'
  const to = `${emailObject.email}`
  const subject = 'Registration'
  const message = `
  <img src=${logo} />
  <h1> Activate your Auto Finance Centers on-line account </h1>
  <p>
    We're ready to activate your account. All we need to do is verify
    that this is your email address. You must activate your account within
    24 hours or it will expire. If you did not sign up for this account,
     simply do nothing and the account will automatically expire.
  </p>
  <p>
    If you want to activate your account, please click below:
  </p>
    <a> LINK HERE </a>
  <p>
    Thank you for choosing Auto Finance Centers!
  </p>
  <p>
    The Auto Finance Centers Team
  </p>
  `



  const EmailObjToStr = `from_name=${fromName}&from_email=${from}&subject=${subject}&message_html=${message}&send_to=${to}`



  return fetch('/api/v1/email/send', {
      //node package qs look up
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: EmailObjToStr
      })
}
