// /store/main/getAccounts.js
import app from './index.js';
import objectMerge from 'object-merge';
import actions, { auto } from '../../redux-auto/index.js';

auto.settings({smartActions:true})

export function pending (store, creds){
}

export function fulfilled (store, auth, serverPosts){
}

export function rejected (store, auth, error){
}

export function action (item){
  return app({}, {type: 'LOGOUT'})
}
