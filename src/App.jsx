import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Registration from './pages/registration';
import Login from './pages/login';

function BasicExample() {
  return (
    <div style={{ marginLeft: '180px' }}>
      <h3>REGISTRATION</h3>
      <Registration/>
      <h3>LOGIN</h3>
      <Login />
    </div>
  );
}

export default BasicExample;