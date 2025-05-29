import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import "primereact/resources/themes/soho-light/theme.css"
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const {register, handleSubmit} = useForm();

  function logar(dados) {
    console.log(dados);
  }

  return ( 
    <>
      <div className='bg-primary-800 h-screen flex align-items-center justify-content-center px-3'>
          <form onSubmit={handleSubmit(logar)} className='col-12 md:col-3 surface-0 p-3 border-round-md '>
            <h3 className='text-center text-4xl'>Seja Bem-vindo</h3>
            <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
            <InputText 
              id='email'
              type='email'
              placeholder='email@email.com'
              className='mb-3 w-full'
              {...register('email', {required: true})}
            />
            <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1'>Senha</label>
            
            <div className='mb-3'>
              <IconField>
                <InputIcon
                  className={`pi ${mostrarSenha ? `pi-eye` : `pi-eye-slash`}  cursor-pointer`}
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                />
                <InputText
                  id='senha'
                  type={ mostrarSenha ? 'text' : 'password'}
                  placeholder='********'
                  className='w-full'
                  {...register('senha', {required: true})}
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
