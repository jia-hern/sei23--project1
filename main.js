let repository = [
	{
		id     : 0,
		name   : 'Teddy',
		type   : 'normal', //for battle triangle in future
		images : 'teddy-brown.jpg'
	},
	{
		id     : 1,
		name   : 'Teddy',
		type   : 'normal', //for battle triangle in future
		images : 'teddy-brown.jpg'
	},
	{
		id     : 2,
		name   : 'Teddy',
		type   : 'normal', //for battle triangle in future
		images : 'teddy-brown.jpg'
	}
];

let gridSelectorLeft = document.querySelector('.teddy_left_grid'); //although its in other classes, no need to go in them first

for (let index = 0; index < 3; index++) {
	//3 as its a 3v3 teddies game
	const element = repository[index];

	// create div for each unit of teddy
	let teddy = document.createElement('div');
	// in each teddy class, have pic, name, atk, atk stats and hp, hp stats
	let statsHolder = document.createElement('div');
	let teddyImage = document.createElement('img');
	let h3 = document.createElement('h3');
	let atk = document.createElement('p');
	let atkValue = document.createElement('span');
	let hp = document.createElement('p');
	let hpValue = document.createElement('span');

	//Putting content into each tag
	teddyImage.setAttribute('src', element.images);
	h3.textContent = element.name;
	atk.innerHTML = 'ATK&nbsp;';
	atkValue.textContent = '-';
	hp.innerHTML = '&nbsp HP&nbsp;';
	hpValue.textContent = '-';
	teddy.setAttribute('class', element.type);

	//class adding part
	teddy.classList.add('teddy');
	statsHolder.classList.add('statsHolder');
	teddyImage.classList.add('img-responsive');
	atk.classList.add('atk');
	hp.classList.add('hp');
	atkValue.classList.add('atkValue');
	hpValue.classList.add('hpValue');

	//append list
	statsHolder.appendChild(atk);
	statsHolder.appendChild(atkValue);
	statsHolder.appendChild(hp);
	statsHolder.appendChild(hpValue);

	teddy.appendChild(teddyImage);
	teddy.appendChild(h3);
	teddy.appendChild(statsHolder);
	// console.log(teddy);
	gridSelectorLeft.appendChild(teddy);

	//find in the repository array the element which matches the ID
	// let item = repository.find((element) => element.id == currentId);
	//so roll 0,1,2 and use that id to select the type
}
/* 
    ROLL DICE 
        Math.floor Math.random between 1 - 6
    Store and sum dice number to temp score  with previous temp 
    HOLD
        update final score of player
        switch player
    REPEAT
*/
let currentPlayer = 0; // can only be 0 or 1
let currentScore;
let endGameScore;
let finalScores;
let gamePlay = false;
// document.querySelector(".btn-new").addEventListener("click", function () {
//   gamePlay = true;
// });
$('.btn-new').click(function() {
	//reset atk and hp on both sides from previous game
	document.querySelector('#atk-0').innerHTML = '-';
	document.querySelector('#atk-1').innerHTML = '-';
	document.querySelector('#teddy-hp-0').innerHTML = '-';
	document.querySelector('#teddy-hp-1').innerHTML = '-';

	gamePlay = true;
	atk = 0;
	hp = 0;
	endGameScore = 20;
	finalScores = [ 0, 0 ];
});
document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlay) {
		let diceNumberTop = Math.floor(Math.random() * 6) + 1;
		atk = diceNumberTop;
		document.querySelector('#atk-' + currentPlayer).textContent = atk;
		document.querySelector('.dice-top').setAttribute('src', 'dice-' + diceNumberTop + '.png');
		let diceNumberBottom = Math.floor(Math.random() * 6) + 1;
		hp = diceNumberBottom;
		document.querySelector('#teddy-hp-' + currentPlayer).textContent = hp;
		document.querySelector('.dice-bottom').setAttribute('src', 'dice-' + diceNumberBottom + '.png');
		changePlayer();
	}
});
document.querySelector('.btn-pk').addEventListener('click', function() {
	if (gamePlay) {
		let hp0 = parseInt(document.querySelector('#teddy-hp-0').textContent);
		let hp1 = parseInt(document.querySelector('#teddy-hp-1').textContent);
		let atk0 = parseInt(document.querySelector('#atk-0').textContent);
		let atk1 = parseInt(document.querySelector('#atk-1').textContent);
		document.querySelector('#teddy-hp-1').textContent = hp1 - atk0;
		document.querySelector('#teddy-hp-0').textContent = hp0 - atk1;

		if (document.querySelector('#teddy-hp-0').textContent <= 0) {
			gamePlay = false;
			let winningPlayer = 1;
			document.querySelector('#teddy-hp-0').textContent = 0;
			document.querySelector('#total-alive-0').textContent = 0;
			Swal.fire(`Player ${winningPlayer + 1} won!`, 'success');
		} else if (document.querySelector('#teddy-hp-1').textContent <= 0) {
			gamePlay = false;
			let winningPlayer = 0;
			document.querySelector('#teddy-hp-1').textContent = 0;
			document.querySelector('#total-alive-1').textContent = 0;
			Swal.fire(`Player ${winningPlayer + 1} won!`, 'success');
		}
		changePlayer();
		console.log('current Player is ', currentPlayer);
	}
});
function changePlayer() {
	if (currentPlayer == 1) {
		currentPlayer = 0;
	} else {
		currentPlayer = 1;
	}
}

//stuff on jquery
$('.listItems li').click(function() {
	$(this).fadeOut();
});
$('#add').click(function(e) {
	e.preventDefault(); // js code
	let name = '<li>' + $('#numbers').val() + '</li>';
	$('.listItems').append(name);
	$('.listItems').html(name);
	$('.listItems').text(name);
	$('.listItems').fadeIn(name);
	$('.listItems').fadeOut(name);
});
