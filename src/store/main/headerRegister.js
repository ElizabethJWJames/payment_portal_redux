// /store/main/updateModalContent.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';


export default function (store, item){
  return app(store, {type:"MODALREGISTERUPDATE", payload:{modalContent: 'NewAccountForm'}});
}
