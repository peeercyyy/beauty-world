import { Grommet } from 'grommet';
import { Card, CardHeader, CardBody } from 'grommet';
import AuthForm from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";


const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

export function LoginPage() {
    const { login } = useAuth();

    return (
        <Grommet theme={theme}>
            <Card className='card' height="medium" width="medium" background="light-1">
            <CardHeader pad="medium" className='header'>Welcome to BeautyWorld CRM</CardHeader>
            <CardBody pad="medium" background="light-2">
            <AuthForm onLogin={login}  />
            </CardBody>
            </Card>
        </Grommet>

    )
}