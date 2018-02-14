import objectMerge from 'object-merge';

export default function app(app={} , action) {
  console.log('&&&&&&&&& ', action.type )
  //   //console.log("app / index >> default function for app | TYPE = ",action.type)
  let myReturn = app;
    switch (action.type) {
      case '@@redux/INIT':
      {
        myReturn = {
          // main: {},
          accountInformation: [
            {
              accountNumber: '#4356A',
              carYear: '2000',
              carMake: 'Mercury',
              carModel: 'Grand Marquis LS',
              carStock: '4356A',
              carVin: '2MEFM75W9YX659114',
              carTrim: 'Grand',
              carType: '4dr',
              carColor: 'Gold',
              carMiles: '101478',
              dealershipName: 'Training Solutions CAC/EFI',
              dealershipStreet: '123 Main Street',
              dealershipCityStateZip: 'Bradenton, FL 34205',
              dealershipPhone: '(941) 219-4344',
              dealershipFax: '(941) 219-4344',
              insuranceCompany: 'Farmers',
              insuranceStreet: '541 Central Ave Suite B',
              insuranceCity: 'Kansas City',
              insuranceState: 'KS',
              insuranceZip: '66101',
              insurancePhone: '',
              insuranceFax: '',
              insuranceContact: '',
              insuranceContactPhone: '(913) 371-4702',
              insuranceContactFax: '',
              insuranceEmail: '',
              insuranceRequired: 'No',
              insurancePolicyNo: '196717454',
              insuranceExpirationDate: '09/01/2013',
              insuranceCanceled: 'No',
              insuranceCancellationDate: '',
              insuranceCoverage: '',
              insuranceCompDeduction: '500.00',
              insuranceFireTheft: '0.00',
              insuranceCPIOption: 'No',
              insuranceCPIStatus: 'Not Enrolled For CPI',
              lossPayeeName: 'Training Solutions CAC/EFI',
              lossPayeeStreet: '123 Main Street',
              lossPayeeCity: 'Bradenton',
              lossPayState: 'FL',
              lossPayeeZip: '00000',
              lossPayeePhone: '(941)219-4344',
              lossPayeeFax: '(941)219-4344',
              lossPayeeEmail: 'Virginia@mycarafc.com',
              customerName: 'Janain Kennedy',
              customerHomePhone: '(816) 308-2106',
              customerCellPhone: '(913) 387-4751',
              customerStreet: '6363 Orville',
              customerCity: 'Kansas City',
              customerState: 'KS',
              customerZip: '66102',
              loanSold: '1/13/2014',
              loanAmount: '0.00',
              loanInterest: '0.000',
              loanRepaymentSchedule: '32 Semi-Monthly Payments of 150.00 Beg 09/08/2014 Final Payment of $44.10 Due 01/08/2016 ',
              loanSidenoteBal: '0.00',
              loanPrincipleBal: '648.95',
              loanAccruedInterest: '51.20',
              loanLastPayment: '47.00 on 08/16/2017',
              loanPaymentAmtDue: '700.15',
              loanCPAmtDue: '0.00',
              loanSidenoteAmtDue: '0.00',
              loanNSFFeeAmtDue: '0.00',
              loanLateFeeAmtDue: '0.00',
              loanTotalAmountDue: '700.15'
            }, {
              accountNumber: '#43765',
              carYear: '2000',
              carMake: 'Ford',
              carModel: 'Mustang',
              carStock: '4356A',
              carVin: '2MEFM75W9YX659114',
              carTrim: 'Grand',
              carType: '4dr',
              carColor: 'Gold',
              carMiles: '101478',
              dealershipName: 'Training Solutions CAC/EFI',
              dealershipStreet: '123 Main Street',
              dealershipCityStateZip: 'Bradenton, FL 34205',
              dealershipPhone: '(941) 219-4344',
              dealershipFax: '(941) 219-4344',
              insuranceCompany: 'Farmers',
              insuranceStreet: '541 Central Ave Suite B',
              insuranceCity: 'Kansas City',
              insuranceState: 'KS',
              insuranceZip: '66101',
              insurancePhone: '',
              insuranceFax: '',
              insuranceContact: '',
              insuranceContactPhone: '(913) 371-4702',
              insuranceContactFax: '',
              insuranceEmail: '',
              insuranceRequired: 'No',
              insurancePolicyNo: '196717454',
              insuranceExpirationDate: '09/01/2013',
              insuranceCanceled: 'No',
              insuranceCancellationDate: '',
              insuranceCoverage: '',
              insuranceCompDeduction: '500.00',
              insuranceFireTheft: '0.00',
              insuranceCPIOption: 'No',
              insuranceCPIStatus: 'Not Enrolled For CPI',
              lossPayeeName: 'Training Solutions CAC/EFI',
              lossPayeeStreet: '123 Main Street',
              lossPayeeCity: 'Bradenton',
              lossPayState: 'FL',
              lossPayeeZip: '00000',
              lossPayeePhone: '(941)219-4344',
              lossPayeeFax: '(941)219-4344',
              lossPayeeEmail: 'Virginia@mycarafc.com',
              customerName: 'Janain Kennedy',
              customerHomePhone: '(816) 308-2106',
              customerCellPhone: '(913) 387-4751',
              customerStreet: '6363 Orville',
              customerCity: 'Kansas City',
              customerState: 'KS',
              customerZip: '66102',
              loanSold: '1/13/2014',
              loanAmount: '0.00',
              loanInterest: '0.000',
              loanRepaymentSchedule: '32 Semi-Monthly Payments of 150.00 Beg 09/08/2014 Final Payment of $44.10 Due 01/08/2016 ',
              loanSidenoteBal: '0.00',
              loanPrincipleBal: '648.95',
              loanAccruedInterest: '51.20',
              loanLastPayment: '47.00 on 08/16/2017',
              loanPaymentAmtDue: '700.15',
              loanCPAmtDue: '0.00',
              loanSidenoteAmtDue: '0.00',
              loanNSFFeeAmtDue: '0.00',
              loanLateFeeAmtDue: '0.00',
              loanTotalAmountDue: '700.15'
            }
          ],
          cardsOnFile: [{
              name: 'Reeves',
              last4: '9424'
            },{
              name: 'Joe Clark',
              last4: '4111'
          }],
          paymentHistory: [{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
          }],
          alerts: [],
          auth: {},
          navigation: [
              {
                pageName: 'Home',
                pageLink: '/home'
              },
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
            ]
        };
      }
      // case '@@redux/AUTH':
      // {
      //   myReturn = app;
      // }
      default:
      {  myReturn = {
          // main: {},
          accountInformation: [
            {
              accountNumber: '#4356A',
              carYear: '2000',
              carMake: 'Mercury',
              carModel: 'Grand Marquis LS',
              carStock: '4356A',
              carVin: '2MEFM75W9YX659114',
              carTrim: 'Grand',
              carType: '4dr',
              carColor: 'Gold',
              carMiles: '101478',
              dealershipName: 'Training Solutions CAC/EFI',
              dealershipStreet: '123 Main Street',
              dealershipCityStateZip: 'Bradenton, FL 34205',
              dealershipPhone: '(941) 219-4344',
              dealershipFax: '(941) 219-4344',
              insuranceCompany: 'Farmers',
              insuranceStreet: '541 Central Ave Suite B',
              insuranceCity: 'Kansas City',
              insuranceState: 'KS',
              insuranceZip: '66101',
              insurancePhone: '',
              insuranceFax: '',
              insuranceContact: '',
              insuranceContactPhone: '(913) 371-4702',
              insuranceContactFax: '',
              insuranceEmail: '',
              insuranceRequired: 'No',
              insurancePolicyNo: '196717454',
              insuranceExpirationDate: '09/01/2013',
              insuranceCanceled: 'No',
              insuranceCancellationDate: '',
              insuranceCoverage: '',
              insuranceCompDeduction: '500.00',
              insuranceFireTheft: '0.00',
              insuranceCPIOption: 'No',
              insuranceCPIStatus: 'Not Enrolled For CPI',
              lossPayeeName: 'Training Solutions CAC/EFI',
              lossPayeeStreet: '123 Main Street',
              lossPayeeCity: 'Bradenton',
              lossPayState: 'FL',
              lossPayeeZip: '00000',
              lossPayeePhone: '(941)219-4344',
              lossPayeeFax: '(941)219-4344',
              lossPayeeEmail: 'Virginia@mycarafc.com',
              customerName: 'Janain Kennedy',
              customerHomePhone: '(816) 308-2106',
              customerCellPhone: '(913) 387-4751',
              customerStreet: '6363 Orville',
              customerCity: 'Kansas City',
              customerState: 'KS',
              customerZip: '66102',
              loanSold: '1/13/2014',
              loanAmount: '0.00',
              loanInterest: '0.000',
              loanRepaymentSchedule: '32 Semi-Monthly Payments of 150.00 Beg 09/08/2014 Final Payment of $44.10 Due 01/08/2016 ',
              loanSidenoteBal: '0.00',
              loanPrincipleBal: '648.95',
              loanAccruedInterest: '51.20',
              loanLastPayment: '47.00 on 08/16/2017',
              loanPaymentAmtDue: '700.15',
              loanCPAmtDue: '0.00',
              loanSidenoteAmtDue: '0.00',
              loanNSFFeeAmtDue: '0.00',
              loanLateFeeAmtDue: '0.00',
              loanTotalAmountDue: '700.15'
            }, {
              accountNumber: '#43765',
              carYear: '2000',
              carMake: 'Ford',
              carModel: 'Mustang',
              carStock: '4356A',
              carVin: '2MEFM75W9YX659114',
              carTrim: 'Grand',
              carType: '4dr',
              carColor: 'Gold',
              carMiles: '101478',
              dealershipName: 'Training Solutions CAC/EFI',
              dealershipStreet: '123 Main Street',
              dealershipCityStateZip: 'Bradenton, FL 34205',
              dealershipPhone: '(941) 219-4344',
              dealershipFax: '(941) 219-4344',
              insuranceCompany: 'Farmers',
              insuranceStreet: '541 Central Ave Suite B',
              insuranceCity: 'Kansas City',
              insuranceState: 'KS',
              insuranceZip: '66101',
              insurancePhone: '',
              insuranceFax: '',
              insuranceContact: '',
              insuranceContactPhone: '(913) 371-4702',
              insuranceContactFax: '',
              insuranceEmail: '',
              insuranceRequired: 'No',
              insurancePolicyNo: '196717454',
              insuranceExpirationDate: '09/01/2013',
              insuranceCanceled: 'No',
              insuranceCancellationDate: '',
              insuranceCoverage: '',
              insuranceCompDeduction: '500.00',
              insuranceFireTheft: '0.00',
              insuranceCPIOption: 'No',
              insuranceCPIStatus: 'Not Enrolled For CPI',
              lossPayeeName: 'Training Solutions CAC/EFI',
              lossPayeeStreet: '123 Main Street',
              lossPayeeCity: 'Bradenton',
              lossPayState: 'FL',
              lossPayeeZip: '00000',
              lossPayeePhone: '(941)219-4344',
              lossPayeeFax: '(941)219-4344',
              lossPayeeEmail: 'Virginia@mycarafc.com',
              customerName: 'Janain Kennedy',
              customerHomePhone: '(816) 308-2106',
              customerCellPhone: '(913) 387-4751',
              customerStreet: '6363 Orville',
              customerCity: 'Kansas City',
              customerState: 'KS',
              customerZip: '66102',
              loanSold: '1/13/2014',
              loanAmount: '0.00',
              loanInterest: '0.000',
              loanRepaymentSchedule: '32 Semi-Monthly Payments of 150.00 Beg 09/08/2014 Final Payment of $44.10 Due 01/08/2016 ',
              loanSidenoteBal: '0.00',
              loanPrincipleBal: '648.95',
              loanAccruedInterest: '51.20',
              loanLastPayment: '47.00 on 08/16/2017',
              loanPaymentAmtDue: '700.15',
              loanCPAmtDue: '0.00',
              loanSidenoteAmtDue: '0.00',
              loanNSFFeeAmtDue: '0.00',
              loanLateFeeAmtDue: '0.00',
              loanTotalAmountDue: '700.15'
            }
          ],
          cardsOnFile: [{
              name: 'Reeves',
              last4: '9424'
            },{
              name: 'Joe Clark',
              last4: '4111'
          }],
          paymentHistory: [{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
            },{
              date: '08/16/17',
              amount: '$450.00',
              type: 'Credit Card',
              location: 'online'
          }],
          alerts: [],
          auth: {},
          navigation: [
              {
                pageName: 'Home',
                pageLink: '/home'
              },
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
            ]
        };}
    } // end switch
    return myReturn
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



// const appReducer = (state, action)=>{
//   if (typeof state === 'undefined') {
//
//     return {
//       main: {},
//       account: {},
//       alerts: [],
//       auth: {},
//       navigation: [
//           {
//             pageName: 'Home',
//             pageLink: '/home'
//           },
//           {
//             pageName: 'Contact Us',
//             pageLink: '/contact'
//           },
//           {
//             pageName: 'FAQs',
//             pageLink: '/faqs'
//           },
//           {
//             pageName: 'My Account',
//             pageLink: '/myAccount'
//           },
//           {
//             pageName: 'Make A Payment',
//             pageLink: '/makeAPayment'
//           },
//           {
//             pageName: 'Payment History',
//             pageLink: '/paymentHistory'
//           }
//         ]
//     };
//   }
//
// };
//
// const rootReducer = (state, action) => {
//   // This causes store to be wiped when user logs out
//   if (action && action.type === 'USER_LOGOUT') {
//     state = undefined;
//     // clear out the local storage too
//     localStorage.clear();
//   }
//   if (action && action.type === 'USER_LOGIN') {
//     state = { navigationList: [
//       {
//         pageName: 'My Account',
//         pageLink: '/myAccount'
//       },
//       {
//         pageName: 'Make A Payment',
//         pageLink: '/makeAPayment'
//       },
//       {
//         pageName: 'Payment History',
//         pageLink: '/paymentHistory'
//       },
//       {
//         pageName: 'Contact Us',
//         pageLink: '/contact'
//       },
//       {
//         pageName: 'FAQs',
//         pageLink: '/faqs'
//       }
//     ]};
//   }
//
//   return appReducer(state, action);
// };
//
// export default rootReducer;
