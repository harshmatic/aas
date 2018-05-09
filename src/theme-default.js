import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: 'white'
  },
  drawer: {
    width: 230,
    color: blue600
  },
  raisedButton: {
    primaryColor: blue600,
  }
});


export default themeDefault;