import objectMerge from 'object-merge';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

const nav = [
    {
      pageName: 'Home',
      pageLink: '/home'
    },
    {
      pageName: 'Contact Us',
      pageLink: '/contact'
    },
    {
      pageName: 'FAQs',
      pageLink: '/faqs'
    }
];

const authNav = [
   {
     pageName: 'My Account',
     pageLink: '/myAccount'
   },
   {
     pageName: 'Make A Payment',
     pageLink: '/makeAPayment'
   },
   {
     pageName: 'Payment History',
     pageLink: '/paymentHistory'
   },
   {
     pageName: 'Contact Us',
     pageLink: '/contact'
   },
   {
     pageName: 'FAQs',
     pageLink: '/faqs'
   }
];

export default function app(app={} , action) {
  //console.log('&&&&&&&&& ', history )
  //console.log("app / index >> default function for app | TYPE = ",action.type)
  //let myReturn = app;
    switch (action.type) {
      case '@@redux/INIT':
      {
        const localapp = JSON.parse(localStorage.getItem('store'));
        let newStore;
        if(localapp !== null){
          newStore = localapp;
        } else {
          newStore = {
            navigation: nav,
            history: history,
            modalContent: 'div',
            alerts: [
              {
                alertText: 'This is a warning',
                alertType: 'warning'
              },{
                alertText: 'This is an alert',
                alertType: 'alert'
              },{
                alertText: 'This is Info',
                alertType: 'info'
              }
            ]
          };
        }
        return newStore;
      }
      case 'AUTH':
      {
        const newStore = objectMerge({...app, ...action.payload})
        //console.log(newStore);
        return newStore;
      }
      case 'GETACCOUNTS':
      {
        const newStore = objectMerge({...app, ...{accountInformation: action.payload.accountInformation}})
        //console.log('newstore', newStore)
        return newStore;
      }
      case 'UPDATEACCOUNTS':
      {
        const combinedAccountInfo = objectMerge({...action.payload.accountInformation, ...action.payload.accountDetails})
        const accountRecID = combinedAccountInfo.RecID;
        const filteredArray = app.accountInformation.filter((account, index)=>{
          return account.RecID === accountRecID;
        })
        let newAccountArray = app.accountInformation;
        if (filteredArray.length >= 1){
          newAccountArray = newAccountArray.map((accountObject)=>{
            let newAccountObject = accountObject;
            console.log(accountRecID === accountObject.RecID, combinedAccountInfo)
            if(accountRecID === accountObject.RecID){
              newAccountObject = combinedAccountInfo;
            }
            return newAccountObject;
          })
        } else {
          newAccountArray = newAccountArray.concat([combinedAccountInfo]);
        }
        setTimeout(history.push('/myAccount'), 3000);
        const newStore = objectMerge({...app, ...{accountInformation: newAccountArray}, ...{navigation: authNav}})
        return newStore;
      }
      case 'PAGEPUSH':
      {
        localStorage.setItem('store', JSON.stringify(app));
        history.push(action.payload.pageToPush);
        return app;
      }
      case 'LOGOUT':
      {
        history.push('/home');
        localStorage.removeItem('store')
        const newStore = {
          navigation: nav,
          history: history,
          modalContent: 'div',
          alerts: [
            {
              alertText: 'This is a warning',
              alertType: 'warning'
            },{
              alertText: 'This is an alert',
              alertType: 'alert'
            },{
              alertText: 'This is Info',
              alertType: 'info'
            }
          ]
        };
        return newStore;
      }
      case 'MODALUPDATE':
      {
        console.log(action)
        const newStore = objectMerge({...app, ...{modalContent: action.payload.modalContent}})
        return newStore;
      }
      case 'MODALREGISTERUPDATE':
      {
        history.push('/home');
        const newStore = objectMerge({...app, ...{modalContent: action.payload.modalContent}})
        return newStore;
      }
      default:
      {
        return {
          navigation: nav
        };
      }
    } // end switch
    //return myReturn
}

export function before (appsState, action){
  //console.log("app / index / before >> every action on behalf of app | TYPE = ",action.type)
  return action.payload;
}

export function after (newAppsState, action, oldAppsState){
  //console.log("action",action)
  //console.log("app / index / after >> TYPE = ",action.type)
  return newAppsState;
}
