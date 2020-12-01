let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    //switch sets up different scinero based on seletion
    resetPlayer: function(classType) {
        switch (classType) {
            case "Charmander":
                player = new player(classType, 150, 15);
                break;
        
            case "Squirtle":
                player = new player(classType, 180, 12);
                break;

            case "Bulbasaur":
                 player = new player(classType, 120, 18);
                break;
        }
        // UPDATE PICTURE FOLDER
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="images/' +
        classType.toLowerCase() + '.png" class="images-avatar"><div><h3>'
         + classType + '</h3><p>Health: ' + player.health +'</p><p>Attack: ' 
         + player.attack + '</p></div>';
    },
//CHECK IF ARENA HAS BEEN SET UP in html
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".action");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight"></a>'
        onclick="GameManager.setFight()">Searh for enemy!</a>';
        //showcase arena (make visible)
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".action");
        let getEnemy = document.querySelector(".arena");
        //create enemy
        let enemy00 = new Enemy("Pokemon", 160, 20);
        let enemy01 = new Enemy("Pecatchu", 180, 15);
        //Random emeny selctor (usinging a method to chhose random number between 0 and1)
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy =01;
                break;
            }
            getHeader.innerHTML = '<p>Task: choose your move</p>'
            getActions.innerHTML = '<a href="#" class="btn-prefight"></a>'
            onclick="PlayerMoves.calcAttack()">Attack!</a>';
            ///MAKE ENEMY IMAGE FOLDER
            getEnemy.innerHTML = '<img src ="image/avater-eniemies/; + '"
            class="images-avatar"><div><h3>' + enemy.enemyType + '</h3><p 
            class="health-enemy">Health: ' + enemy.health + '</p><p>Stregnth: ' +
            enemy.stregnth + </p></div>
        }
    }
}