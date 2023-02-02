export default function Login() {
  return `
  <div class="container auth_page">
      <h1>Login<h1>
      <form id="login_form" class="auth_form" autocomplete="off">
        <div class="form_group">
          <label for="email">Email</label>
          <input id="email" type="email" />
        </div>

        <div class="form_group">
          <label for="password">Password</label>
          <input id="password" type="password" />
        </div>

        <button type="submit">Register</button>

        <small>
          Belum punya akun ? <a href="/">Register disini</a>
        </small>
      </form>
    </div>
  `;
}
