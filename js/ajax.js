let modBlock = document.querySelector('.mod-block');

function func(validForm) {
	let butt = document.querySelector('button');
	
	validForm.onsubmit = function(e) {
		e.preventDefault();
		
		let oldForm = document.forms.validForm;
		let xhttp = new XMLHttpRequest();
		let FD = new FormData(oldForm);

		xhttp.open('POST', 'form.php');
		xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		xhttp.onreadystatechange = function () {
				if((xhttp.status >= 200 && xhttp.status < 400 )) {
					xhttp.responseText;
					console.log(xhttp.responseText);
					modBlock.style.display = 'block';
			    } else {
			        console.log('Error Code: ' +  xhttp.status);
      				console.log('Error Message: ' + xhttp.statusText);
			    }
		}	
		
		xhttp.send('user=' + FD);
	}

}

func(document.forms.validForm1);
func(document.forms.validForm2);
func(document.forms.validForm3);
func(document.forms.validForm4);

function buttClose () {
	let modalClose = document.querySelector('.modal-close');
	modalClose.addEventListener('click', function(e) {
		e.preventDefault();
		modBlock.style.display = 'none';
	});
}

buttClose ();


