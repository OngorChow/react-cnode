/**
 * Created by ronchow on 2017/2/25.
 */

import { connect } from 'react-redux';
import {goToSignin} from '../action/signin.jsx';
import Signin from '../component/Signin.jsx'; //登录页面

function mapStateToProps(state){
  return {
    status: state.signin.status,
  }
}
function mapDispatchToProps(dispatch){
  return {
    goToSignin: () => dispatch(goToSignin),
  }
}

const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(Signin);

export default SigninContainer;