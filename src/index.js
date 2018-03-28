import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

import Invoice from './models/Invoice';

const invoice = Invoice.create({ currency: 'USA'});

// gets called when there is a change in data to our model
onPatch(invoice, patch => {
  console.log(patch);
});
makeInspectable(invoice);

ReactDOM.render(<App invoice={invoice} />, document.getElementById('root'));
registerServiceWorker();
