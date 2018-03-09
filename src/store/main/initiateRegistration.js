// /store/main/initReg.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';

auto.settings({smartActions:true})

export function pending (store, emailObject){
//  console.log('pending initReg', store, emailObject)
  return store
}

export function fulfilled (store, emailObject, serverPosts){
//  console.log('fulfilled initReg', store, emailObject, serverPosts)
  /*
    compare the record,
    update the record if it exists,
    add the record if it does not exist
  */
    const NewUser = objectMerge({...emailObject, ...serverPosts})
    //actions.main.sendRegistrationEmail(NewUser)
    //const accessToken = serverPosts.access_token;
    //app(store, {type: 'AUTH', payload: {authtoken: accessToken}})
    return store;
  //return app(store, {type: 'initReg', payload: {accountInformation: accountObj, accountDetails: serverPosts}})
}

fulfilled.chain = (store, NewUser) => {
  return actions.main.sendRegistrationEmail(NewUser);
}

export function rejected (store, emailObject, error){
//  console.log('rejected initReg', store, emailObject, error)
  return store;
}

export function action (emailObject, store){
//  console.log('action initReg', emailObject, store)

  const registrationObject = {
    full_name: emailObject.name,
    SSN: emailObject.SSN,
    DOB: emailObject.DOB,
    email: emailObject.email,
    password: emailObject.password,
    confirm_password: emailObject.confirmPassword
  }

  const registrationString = `
    full_name=${registrationObject.full_name}&
    SSN=${registrationObject.SSN}&
    DOB=${registrationObject.DOB}&
    email=${registrationObject.email}&
    password=${registrationObject.password}&
    confirm_password=${registrationObject.confirm_password}
  `

  return fetch('/api/v1/registration/register', {
      //node package qs look up
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: registrationString
      })
}
