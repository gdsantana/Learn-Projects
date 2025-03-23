import './styles.css';
export default function LoginModal() {


  return (
    <div className='login-modal'>
      <h1 className='title'>Login</h1>
      <input className='input' type='text' placeholder='Username' />
      <input className='input' type='password' placeholder='Password' />
      <button className='btn-primary'>Login</button>
    </div>
  )
}
