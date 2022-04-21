const team = {
    _players : [
      {firstName : 'Amine',
    lastName : 'bako',
    age :26},
       {firstName : 'hassan',
    lastName : 'dado',
    age :32},
       {firstName : 'khalid',
    lastName : 'dollar',
    age :18} 
    
    ] ,
    _games : [
      {
        opponent : "hassan",
        teamPoints : 25,
        opponenetPoints : 20
  
      },
         {
        opponent : "Amine",
        teamPoints : 40,
        opponenetPoints : 20
  
      },
         {
        opponent : "khalid",
        teamPoints : 10,
        opponenetPoints : 30
  
      }
    ],
      get players(){
      return this._players
  },
      get games(){
      return this._games
  },
  
  addPlayer(newFirstName,newLastName,newAge){
    let player = {
      firstName : newFirstName,
      lastName : newLastName , 
      age : newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent,newTeamPoints,newOpponentPoints){
    let game = {
      opponent : newOpponent,
      teamPoints : newTeamPoints,
      opponentPoints : newOpponentPoints
    };
    this.games.push(game);
  },
  }
  
  team.addGame('Titans',100,98)
  console.log(team.games);
  