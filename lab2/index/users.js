class User {
    constructor(
        email,
        email_repeat,
        psw,
        zip,
        callback,
        main
      
    ) {
      index++;
      this.email = email;
      this.email_repeat = email_repeat;
      this.psw = psw;
      this.zip = zip; 
      this.callback = callback;  
      this.interface = getUserInterface(
        this.email,
        this.email_repeat,
        this.psw,
        this.zip
      );
      this.render(main);
      this.button = document.getElementById(this.id).querySelector("button");
      this.button.addEventListener('click', this.delete.bind(this));
    
    }
  
  
    delete() {
      if (this.callback(this.id)) {
        container.removeChild(this.elem)
        alert('Delete')
      }
    }
  
    render(main) {
      this.elem = document.createElement("div");
      this.elem.id = this.id;
      this.elem.innerHTML = this.interface;
      container.appendChild(this.elem);
   }
  }
  
  let index = 0;
  