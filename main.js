let repository = [
	{
		id     : 0,
		name   : 'Teddy',
		type   : 'fire', //for battle triangle in future
		images : 'teddy-brown.jpg'
	},
	{
		id     : 1,
		name   : 'Teddy',
		type   : 'wind', //for battle triangle in future
		images : 'teddy-brown.jpg'
	},
	{
		id     : 2,
		name   : 'Teddy',
		type   : 'water', //for battle triangle in future
		images : 'teddy-brown.jpg'
	}
];

let gridSelectorLeft = document.querySelector('.teddy_left_grid');
let gridSelectorRight = document.querySelector('.teddy_right_grid'); //although its in other classes, no need to go in them first

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
	teddy.setAttribute('id', index);
	//class adding part
	teddy.classList.add('teddy');
	statsHolder.classList.add('statsHolder');
	teddyImage.classList.add('img-responsive');
	teddyImage.setAttribute('id', 'img-blue-' + index);
	atk.classList.add('atk');
	hp.classList.add('hp');
	atkValue.classList.add('atkValue');
	atkValue.setAttribute('id', 'atk-blue-' + index);
	hpValue.classList.add('hpValue');
	hpValue.setAttribute('id', 'hp-blue-' + index);

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
let alive0Holder = document.createElement('span');
let alive0 = document.createElement('div');
let alive0Value = document.createElement('div');

alive0.setAttribute('id', 'alive-0');
alive0Value.setAttribute('id', 'total-alive-0');
alive0Holder.classList.add('statsHolder');

alive0.innerHTML = 'Total Alive&nbsp';
alive0Value.textContent = '3';

alive0Holder.appendChild(alive0);
alive0Holder.appendChild(alive0Value);
gridSelectorLeft.appendChild(alive0Holder);

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
	teddy.setAttribute('id', index);
	//class adding part
	teddy.classList.add('teddy');
	statsHolder.classList.add('statsHolder');
	teddyImage.classList.add('img-responsive');
	teddyImage.setAttribute('id', 'img-red-' + index);
	atk.classList.add('atk');
	hp.classList.add('hp');
	atkValue.classList.add('atkValue');
	atkValue.setAttribute('id', 'atk-red-' + index);
	hpValue.classList.add('hpValue');
	hpValue.setAttribute('id', 'hp-red-' + index);

	//append list
	statsHolder.appendChild(atk);
	statsHolder.appendChild(atkValue);
	statsHolder.appendChild(hp);
	statsHolder.appendChild(hpValue);

	teddy.appendChild(teddyImage);
	teddy.appendChild(h3);
	teddy.appendChild(statsHolder);
	// console.log(teddy);

	gridSelectorRight.appendChild(teddy);
}
let alive1Holder = document.createElement('span');
let alive1 = document.createElement('div');
let alive1Value = document.createElement('div');

alive1.setAttribute('id', 'alive-1');
alive1Value.setAttribute('id', 'total-alive-1');
alive1Holder.classList.add('statsHolder');

alive1.innerHTML = 'Total Alive&nbsp';
alive1Value.textContent = '3';

alive1Holder.appendChild(alive1);
alive1Holder.appendChild(alive1Value);
gridSelectorRight.appendChild(alive1Holder);

/* 
    ROLL DICE 
        Math.floor Math.random between 1 - 6
    Store and sum dice number to temp score  with previous temp 
    HOLD
        update final score of player
        switch player
    REPEAT
*/
let currentTurn = 0; // can only be 0 or 1
let currentColour = 'blue';
let blueAlive = 3;
let redAlive = 3;
let gamePlay = false;
// document.querySelector(".btn-new").addEventListener("click", function () {
//   gamePlay = true;
// });
$('.btn-new').click(function() {
	//reset atk and hp on both sides from previous game
	document.querySelectorAll('.atkValue').innerHTML = '-';
	document.querySelectorAll('.hpValue').innerHTML = '-';
	document.querySelectorAll('h3').innerHTML = 'Teddy';
	gamePlay = true;
	atk = 0;
	hp = 0;
	endGameScore = 20;
	finalScores = [ 0, 0 ];
	blueAlive = 3;
	RedAlive = 3;
	blueDead = 0;
	redDead = 0;
});
document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlay) {
		let diceNumberTop = Math.floor(Math.random() * 6) + 1;
		atk = diceNumberTop;
		document.querySelector('#atk-' + currentColour + '-' + currentTurn).textContent = atk;
		document.querySelector('.dice-top').setAttribute('src', 'dice-' + diceNumberTop + '.png');
		let diceNumberBottom = Math.floor(Math.random() * 6) + 1;
		hp = diceNumberBottom;
		document.querySelector('#hp-' + currentColour + '-' + currentTurn).textContent = hp;
		document.querySelector('.dice-bottom').setAttribute('src', 'dice-' + diceNumberBottom + '.png');
		changePlayer();
		console.log('current Player is ', currentColour, currentTurn);
	}
});
document.querySelector('.btn-pk').addEventListener('click', function() {
	if (gamePlay) {
		for (let index = 0; index < 3; index++) {
			if (
				document.querySelector('#hp-blue-' + index).textContent > 0 &&
				document.querySelector('#hp-red-' + index).textContent > 0
			) {
				// console.log('in right', document.getElementById('img-red-' + index).src);
				// console.log('in left', document.getElementById('img-blue-' + index).src);
				let hpBlue = parseInt(document.querySelector('#hp-blue-' + index).textContent);
				let hpRed = parseInt(document.querySelector('#hp-red-' + index).textContent);
				let atkBlue = parseInt(document.querySelector('#atk-blue-' + index).textContent);
				let atkRed = parseInt(document.querySelector('#atk-red-' + index).textContent);
				document.querySelector('#hp-red-' + index).textContent = hpRed - atkBlue;
				document.querySelector('#hp-blue-' + index).textContent = hpBlue - atkRed;
				if (document.querySelector('#hp-blue-' + index).textContent <= 0) {
					document.getElementById('img-blue-' + index).src = 'angel-teddy.jpg';
					document.querySelector('#hp-blue-' + index).textContent = 0;
					blueDead += 1;
					blueAlive -= blueDead;
				}
				if (document.querySelector('#hp-red-' + index).textContent <= 0) {
					document.getElementById('img-red-' + index).src = 'angel-teddy.jpg';
					document.querySelector('#hp-red-' + index).textContent = 0;
					redDead += 1;
					RedAlive -= redDead;
				}
			}
		}
	}

	document.querySelector('#total-alive-0').textContent = blueAlive;
	document.querySelector('#total-alive-1').textContent = RedAlive;
});
function changePlayer() {
	if (currentColour == 'blue') {
		currentColour = 'red';
		document.getElementById('name-1').style.fontWeight = '700';
		document.getElementById('name-0').style.fontWeight = '300';
	} else {
		currentColour = 'blue';
		currentTurn += 1;
		document.getElementById('name-1').style.fontWeight = '300';
		document.getElementById('name-0').style.fontWeight = '700';
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
