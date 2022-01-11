const health={
	player_1_score: 100,
	player_2_score: 100
}
const final_scores={
	attempt: 0,
	player1: 0,
	player2: 0
}
var dashboard=document.querySelector('.dashboard');
var player__1=document.querySelector('.player--1');
var player__2=document.querySelector('.player--2');
var attempts=document.querySelector('.attempts');

var x=0;
var y=0;

var h3_player_1=document.createElement('h3');
var player_1_health=document.createElement('h2');

var h3_player_2=document.createElement('h3');
var player_2_health=document.createElement('h2');

var score=document.querySelector('.score');
var player1_score=document.querySelector('.player1_score');
var player2_score=document.querySelector('.player2_score');

var app=document.querySelector('.app');
var player_1=document.querySelector('.player-1');
var player_2=document.querySelector('.player-2');
var start=document.querySelector('.start');
player_1.style.display='none';
player_2.style.display='none';

h3_player_1.style.color='red';
h3_player_2.style.color='red';


start.addEventListener('click',(e)=>{
	player_1.style.display='block';
	player_2.style.display='block';
	dash();
	player_1_health.innerHTML="Player - 1 >> health: "+`${health.player_1_score}`;
	player1_score.append(player_1_health);
	player_2_health.innerHTML="Player - 2 >> health: "+`${health.player_2_score}`;
	player2_score.append(player_2_health);
})
player_1.addEventListener('click',(e)=>{
	x=Math.floor((Math.random() * 5) + 1);
	game_player_2(x);
})
player_2.addEventListener('click',(e)=>{
	y=Math.floor((Math.random() * 5) + 1);
	game_player_1(y)
})
function evaluation_1() {
	// body...
	alert('Player - 2 won')
	final_scores.attempt+=1;
	final_scores.player2+=1;
	if(final_scores.attempt===3)
	{
		// window.alert('Playe -2 had WON the game');
		swal("Good job!", "Playe -2 had WON the game", "success");
	}
	dash();
}
function evaluation_2() {
	// body...
	alert('Player - 1 won the game')
	final_scores.attempt+=1;
	final_scores.player1+=1;
	if(final_scores.attempt===3)
	{
		// window.alert('Playe -1 had WON the game');		
		swal("Good job!", "Playe -1 had WON the game", "success");
	}
	dash();
}
function evaluation() {
	// body...
	health.player_1_score=100;
	health.player_2_score=100;
	h3_player_2.innerHTML="Player - 2 >> Hits: "+0;
	player2_score.append(h3_player_2);
	h3_player_1.innerHTML="Player - 1 >> Hits: "+0;
	player1_score.append(h3_player_1);
	player_1_health.innerHTML="Player - 1 >> health: "+`${health.player_1_score}`;
	player1_score.append(player_1_health);
	player_2_health.innerHTML="Player - 2 >> health: "+`${health.player_2_score}`;
	player2_score.append(player_2_health);
}

function dash() {
	// body...
	attempts.innerHTML="Total no.of attempts :" + final_scores.attempt;
	player__1.innerHTML="Player - 1 Wins: "+ final_scores.player1;
	player__2.innerHTML="Player - 2 Wins: "+ final_scores.player2;

	dashboard.append(attempts);
	dashboard.append(player__1);
	dashboard.append(player__2);
}

function game_player_1(y) {
	// body...
	h3_player_2.innerHTML=y+" << Player - 2 Hits ";
	player2_score.append(h3_player_2);
	health.player_1_score=health.player_1_score-x;
	player_1_health.innerHTML="Player - 1 >> health: "+`${health.player_1_score}`;
	player1_score.append(player_1_health);
	if(health.player_1_score<=0 || health.player_2_score<=0)
	{
		evaluation();
		evaluation_1();
	}
}
function game_player_2(x) {
	// body...	
	h3_player_1.innerHTML="Player - 1 >> Hits: "+x;
	player1_score.append(h3_player_1);
	health.player_2_score=health.player_2_score-x;
	player_2_health.innerHTML=`${health.player_2_score}`+"<<  Player - 2 health";
	player2_score.append(player_2_health);
	if(health.player_1_score<=0 || health.player_2_score<=0)
	{
		evaluation();
		evaluation_2();
	}
}