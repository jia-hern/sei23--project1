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
	document.querySelector('#current-0').textContent = 0;
	document.querySelector('#current-1').textContent = 0;
	document.querySelector('#score-0').textContent = 0;
	document.querySelector('#score-1').textContent = 0;
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
			Swal.fire(`Player ${winningPlayer + 1} won!`, 'success');
		} else if (document.querySelector('#teddy-hp-1').textContent <= 0) {
			gamePlay = false;
			let winningPlayer = 0;
			document.querySelector('#teddy-hp-1').textContent = 0;
			Swal.fire(`Player ${winningPlayer + 1} won!`, 'success');
		}
		changePlayer();
		document.querySelector('#current-' + currentPlayer).textContent = currentScore;
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
