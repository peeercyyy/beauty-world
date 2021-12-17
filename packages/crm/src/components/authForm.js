import { useInput } from '../hooks/useInput';
import { Button, TextInput } from 'grommet';


export default function AuthForm({ onLogin }) {
  const loginInput = useInput();
  const passwordInput = useInput();

  function reset() {
    loginInput.setValue('');
    passwordInput.setValue('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      userName: loginInput.value,
      password: passwordInput.value
    };

    onLogin(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit}>
    <label>
        <span>Логин</span>
        <TextInput margin-bottom='10px' className='textInput' {...loginInput} placeholder="Введите логин" />
    </label>
    <label>
        <span>Пароль</span>
        <TextInput margin-bottom='10px' className='textInput' {...passwordInput} type="password" placeholder="Введите пароль" />
    </label>
    <br />
    <Button label='Submit'/>
    </form>
  );
}