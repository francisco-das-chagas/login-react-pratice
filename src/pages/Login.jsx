import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';        

const Login = () => {
  return ( 
    <>
      <div  className='h-screen flex align-items-center justify-content-center'>
          <form className='surface-0'>
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
