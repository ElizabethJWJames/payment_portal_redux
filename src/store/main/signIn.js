// /store/main/signIn.js
import app from './index.js';
import objectMerge from 'object-merge';

export function pending (store, creds){
  console.log('pending', store, creds)
  return store
}

export function fulfilled (store, creds, serverPosts){
  console.log('fulfilled', store, creds, serverPosts)
  return serverPosts
}

export function rejected (store, creds, error){
  console.log('rejected', store, creds, error)
  return store;
}

export function action (creds, store){
  console.log('action', store, creds)
    fetch('/api/v1/user', {
        method: "POST",
        body: {username: creds.submittedValues.email, password: creds.submittedValues.password}
      })
      .then((response) => { return response.json()})
      .then(json => {
        console.log('parsed json', json) // access json.body here

      })
    // const newNav = {
    //   navigation: [
    //     {
    //       pageName: 'My Account',
    //       pageLink: '/myAccount'
    //     },
    //     {
    //       pageName: 'Make A Payment',
    //       pageLink: '/makeAPayment'
    //     },
    //     {
    //       pageName: 'Payment History',
    //       pageLink: '/paymentHistory'
    //     },
    //     {
    //       pageName: 'Contact Us',
    //       pageLink: '/contact'
    //     },
    //     {
    //       pageName: 'FAQs',
    //       pageLink: '/faqs'
    //     }
    //   ]
    // }
    // const value = {
    //   email: creds.submittedValues ? creds.submittedValues.email : creds.x.values.email,
    //   password: creds.submittedValues ? creds.submittedValues.password : creds.x.values.password
    // }
    //
    // if(value.email === 'rickreeves7@gmail.com'){
    //   return app({...store, ...newNav}, {type:"@@redux/AUTH"})
    // }
}
