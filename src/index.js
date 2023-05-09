
import ReactDOM from 'react-dom';

import App from './App';
import Routes from './components/Routes'
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}> <Routes/></ConnectedRouter> 
    </Provider>
,document.getElementById("root"))

