/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import appConfig from './src/app.json';

const appName = appConfig.name;

AppRegistry.registerComponent(appName, () => App);

if(Platform.OS === 'web'){
    AppRegistry.runApplication(appName, {
        initialProps: {},
        rootTag: document.getElementById('root'),
    });
}
