let GameManager = {
    setGameStart: function(classType) {
        //this has a methis called resetPlyer
        this.resetPlayer(classType);
        this.setPreFight();
    },
    //if text is not charmander then what
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
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/avatar-player/' +
        classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType
        + '</h3><p>Health: ' + player.health +
         '</p>';
    },

    setPreFight: function() {

    }
}