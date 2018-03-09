// /store/main/updateModalContent.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';


export default function (store, item){
  console.log('modalupdate ', item)
  return app(store, {type:"MODALUPDATE", payload:{modalContent: item.displayComponent}});
}
