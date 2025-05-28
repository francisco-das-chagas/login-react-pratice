import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-dark-indigo/theme.css"

const Login = () => {
  return ( 
    <>
      <div  className='bg-primary-500 h-screen flex align-items-center justify-content-center'>
          <form className='surface-0 p-3'>
            <h3>Seja Bem-vindo</h3>
            <label htmlFor="email">Email</label>
            <InputText 
              id='email'
              type='email'
              placeholder='email@email.com'
            />
            <label htmlFor="senha">Senha</label>
            <IconField>
              <InputIcon className="pi pi-eye" />
              <InputText
                id='senha'
                placeholder='********'
              />
            </IconField>
            <Button
            label="Entrar"
            type='submit'
            />
          </form>
      </div>
    </>
   );
}
 
export default Login;
