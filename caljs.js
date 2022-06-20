const actions = document.querySelector('.actions');
	const ans = document.querySelector('.ans');
	console.log(actions);
	console.log(ans);
	let equation = '';
	let a=0;
	actions.addEventListener('click', (e) => {
		console.log(e.target);
		const value = e.target.dataset['value'];

		if(value !== undefined) {
		
			if(value == 'ce') {
				equation = '';
				ans.value = 0;
				return true;
			}

			//function for square root
			else if(value == 'radic'){
				equation = Math.sqrt(equation);
			}
			//this calculates the sin function
			else if(value == 'sin'){
				equation = Math.sin(equation);
			}

      //this calculates the cos function
			else if(value == 'cos'){
				equation = Math.cos(equation);
			}

      //this calculates the tan function
			else if(value == 'tan'){
				equation = Math.tan(equation);
			}

			else if(value == '=') {
				const answer = eval(equation);
				equation = answer;
				
			} else {
				equation += value;
			}

			if(equation == undefined) {
				equation = '';
				ans.value = 0;
			} else {
				ans.value = equation;
			}
			

		}

	});
	const square =()=> {

    //eval is in built function
			return eval(equation*equation);
	}