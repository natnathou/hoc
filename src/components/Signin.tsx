import React from 'react';
import { logAction } from '../state/actions';
import { useDispatch, useGlobalContext } from '../state/StateContext';

const Signin = () => {
  const dispatch = useDispatch();
  const { isLogin } = useGlobalContext();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(logAction(!isLogin));
  };

  const login = () => {
    return (
      <form className='ui form'>
        <div className='ui  segment'>
          <div className='field'>
            <div className='ui left icon input'>
              <i className='user icon'></i>
              <input type='text' name='email' placeholder='E-mail address' />
            </div>
          </div>
          <div className='field'>
            <div className='ui left icon input'>
              <i className='lock icon'></i>
              <input type='password' name='password' placeholder='Password' />
            </div>
          </div>
          <div
            className='ui fluid large teal submit button'
            onClick={handleClick}
          >
            Login
          </div>
        </div>
      </form>
    );
  };

  const logout = () => {
    return (
      <form className='ui large form'>
        <div className='ui  segment'>
          <div
            className='ui fluid large red submit button'
            onClick={handleClick}
          >
            Logout
          </div>
        </div>
      </form>
    );
  };

  return <div>{isLogin ? logout() : login()}</div>;
};

export default Signin;
