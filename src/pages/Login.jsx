import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import "primereact/resources/themes/soho-light/theme.css"
import { useState } from 'react';

const Login = () => {

  const [mostrarSenha, setMostrarSenha] = useState(true)

  return ( 
    <>
      <div className='bg-primary-800 h-screen flex align-items-center justify-content-center px-3'>
          <form className='col-12 md:col-3 surface-0 p-3 border-round-md '>
            <h3 className='text-center text-4xl'>Seja Bem-vindo</h3>
            <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
            <InputText 
              id='email'
              type='email'
              placeholder='email@email.com'
              className='mb-3 w-full'
            />
            <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>
            
            <div className='mb-3'>
              <IconField>
                <InputIcon className="pi pi-eye" />
                <InputText
                  id='senha'
                  type={ mostrarSenha ? 'text' : 'password'}
                  placeholder='********'
                  className='w-full'
                />
              </IconField>
            </div>
            
            <Button
            label="Entrar"
            type='submit'
            className='w-full'
            />
          </form>
      </div>
    </>
   );
}
 
export default Login;
