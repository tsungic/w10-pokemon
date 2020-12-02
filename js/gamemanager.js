let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    //sets player:switch sets up different scinero based on seletion
    resetPlayer: function(classType) {
        switch (classType) {
            case "Charmander":
                player = new player(classType, 150, 15, 18);
                break;
        
            case "Squirtle":
                player = new player(classType, 180, 12, 12);
                break;

            case "Bulbasaur":
                 player = new player(classType, 120, 18, 22);
                break;
        }
        // UPDATE PICTURE FOLDER
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="images/avatar-player/' +
        classType.toLowerCase() + '.png" class="images-avatar"><div><h3>'
         + classType + '</h3><p="health-player>Health: ' + player.health +'</p><p>Attack: ' 
         + player.attack + '</p><p>Speed: ' + player.speed +'</p></div>';
    },
    //overall look once player chosen
//CHECK IF ARENA HAS BEEN SET UP in html
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Select enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight"onclick="GameManager.setFight()">Searh for enemy!</a>';
        //showcase arena (make visible)
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".action");
        let getEnemy = document.querySelector(".arena");
        //create enemy
        let enemy00 = new Enemy("enemy1", 160, 20, 20);
        let enemy01 = new Enemy("enemy 2", 180, 15, 5);
        //usinging a method to chose random number between 0 and1 
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy =enemy01;
                break;
            }
            getHeader.innerHTML = '<p>Attack</p>';
            //create new object to handle attaks of player
            getActions.innerHTML = '<a href="#" class="btn-prefight"onclick="PlayerMoves.calcAttack()">Attack!</a>';
            
            
            getEnemy.innerHTML = '<img src="images/avatar-enemy/' +
            enemy.EnemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '"class="images-avatar"><div><h3>' + enemy.enemyType + 
            '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Attack: ' 
            + enemy.attack + '</p><p>Speed: ' + enemy.speed + '</p></div>';
        
    }
}