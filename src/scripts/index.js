// import './libs/idb.min.js';
// import './libs/iti.min.js';
// import './libs/mask.min.js';
// import './libs/virtual-select.min.js';
// //! End import Libs;

import '../styles/index.scss';

import { IndexedDbService } from './services/IndexedDbService'

const idb = new IndexedDbService('userInfo', 1, {
   upgrade(db) {
   db.createObjectStore('userInfo');
   },
});

console.log('idb', idb)