import { StackNavigator } from 'react-navigation';
import { Account } from './Account.js';
import { Loading } from './Loading.js';
import { SignIn } from './SignIn';

export const Main = StackNavigator({
    Loading: { screen: Loading },
    Account: { screen: Account },
    SignIn: { screen: SignIn },
}, { headerMode: 'none' });
