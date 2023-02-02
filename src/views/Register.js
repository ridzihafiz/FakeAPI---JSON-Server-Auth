import axios from 'axios';

export default function Register() {
  // function untuk store data ke backend
  window.handleRegister = function (event) {
    // stop tag html form dari reload
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    // console.log({email,password});

    axios
      .post('https://vitejs-vite-ztuguj--3000.local.webcontainer.io/register', {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        alert('Registrasi berhasil');
        window.location.href = '/login';
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });

    // reset
    event.target.email.value = '';
    event.target.password.value = '';
    event.target.password2.value = '';
  };

  return `
    <div class="container auth_page">
      <h1>Register<h1>
      <form id="register_form" class="auth_form" autocomplete="off" onsubmit="handleRegister(event)">
        <div class="form_group">
          <label for="email">Email</label>
          <input id="email" type="email" />
        </div>

        <div class="form_group">
          <label for="password">Password</label>
          <input id="password" type="password" />
        </div>
        
        <div class="form_group">
          <label for="password2">Repeat Password</label>
          <input id="password2" type="password" />
        </div>

        <button type="submit">Register</button>

        <small>
          Sudah punya akun ? <a href="/login">Login disini</a>
        </small>
      </form>
    </div>
  `;
}
