function getUserInterface(
    email,
    email_repeat,
    psw,
    zip
  ) 
  {
    return `
          <div class="information"><p>Email: ${email}</p></div>
          <div class="information"><p>Password ${psw}</p></div>
          <div class="information"><p>Zipcode: ${zip}</p></div>
          <button>Delete</button>
          `;
  }
  