window.onload = function () {

  const server = new Server();

  async function sendLoginHandler() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const data = await server.login({ method: 'login', login, password});
    

    console.log(data);
  }

  function sendConvertHandler() {
    Server.convert(1, 'a', 'b');
  }

  document.getElementById('sendLogin').addEventListener('click', sendLoginHandler);
  document.getElementById('sendConvert').addEventListener('click', sendConvertHandler);
};
