// JavaScript Document

// No es realmente un inicio de sesión que almacene los datos en una base de datos y después compruebe si funcionan o no, sino más bien una simulación.

const username = document.getElementById('username')
const password = document.getElementById('password')
const submit = document.getElementById('submit')



submit.addEventListener('click', (e)=>{
	e.preventDefault()
	const data = {
		username: username.value,
		password: password.value,
	}
	
	console.log(data)
	
	if(username.value=="hugo" && password.value=="1234"){
		location.href = '../areaprivada/areaprivada.html';
	}
	else{
		location.reload;
		alert("Has introducido un nombre y contraseña que no se encuentran en nuestra base de datos. Si quiere registrarse, hable con el administrador del sitio.");
		username.target.reset();
		password.target.reset();
	}
}
					   )

						
						
						
						