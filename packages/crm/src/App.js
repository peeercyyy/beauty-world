import { Grommet } from 'grommet';
import { Card, CardHeader, CardBody } from 'grommet';
import AuthForm from './components/authForm';
import './App.css';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};



function App() {
  return (
    <Grommet theme={theme}>
      <Card className='card' height="medium" width="medium" background="light-1">
        <CardHeader pad="medium" className='header'>Welcome to BeautyWorld CRM</CardHeader>
        <CardBody pad="medium" background="light-2">
          <AuthForm />
        </CardBody>
      </Card>
    </Grommet>
  );
}

export default App;
