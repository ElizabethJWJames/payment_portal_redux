// /store/main/logout.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';


export default function (item){
  return app(item, {type: 'LOGOUT'});
}
