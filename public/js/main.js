window.onload = function () {

  async function sendRequest(params = {}) {
    const query = Object.keys(params)
      .map(key => `${key}=${params[key]}`).join("&");
    const responce = await fetch(`api/?${query}`);
    return await responce.text();
  }

  async function send() {
    const number = document.getElementById("number").value;
    const pow = document.getElementById("pow").value;
    const answer = await sendRequest({ number, pow })

    console.log(answer);
  }

  document.getElementById("send").addEventListener("click", send);
};
