//declare object globally so game manger can access
let player;

function Player(classType, health, attack, speed) {
    this.classType = classType;
    this.health = health;
    this.attack = attack;
    this.strength = speed;
}

let PlayerMoves = {
    calcAttack: function() {
        // Who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

         //get player/enemy health to change later
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    //initiate attacks based on whos faaster!
    if (getPlayerSpeed >= getEnemySpeed) {
        let playerAttackValues = playerAttack();
        //calculating total damage
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("Your hit " = playerAttackValues[0] + " damage " +
        playerAttackValues[1] + " times.");
        //finish game msg
        if (enemy.health <=0) {
            alert("Winner! Refresh browser to play again.");
            // health points cannot be negative
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            //enemy attacks
            let enemyAttackValues = enemyAttack();let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("Enemy hit " = enemyAttacksValues[0] + " damage " +
            enemyAttackValues[1] + " times.");
            //finish game msg
            if (player.health <=0) {
                alert("Lost! Refresh browser to play again.");
                // health points annot be negative
                getPlayerHealth.innerHTML = 'Health: 0';
                getEnemyHealth.innerHTML = 'Health: 0' + enemy.health;
            } else {
                getPlayerHealth.innerHTML = 'Health' + player.health;
            
            }
        }
    }
    else if (getEnemySpeed >= getPlayerSpeed) {
        let enemyAttackValues = enemyAttack();
        //calculating total damage
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Lost! " = enemyAttackValues[0] + " damage " +
        playerAttackValues[1] + " times.");
        //finish game msg
        if (enemy.health <=0) {
            alert("Winner! Refresh browser to play again.");
            
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getPlayeryHealth.innerHTML = 'Health: ' + player.health;
            //player attack
            let playerAttackValues = enemyAttack();let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            plaer.health = player.health - totalDamage;
            alert("Youre hit " = enemyAttacksValues[0] + " damage " +
            enemyAttackValues[1] + " times.");
            //finish game msg
            if (enemy.health <=0) {
                alert("You loose! Refresh browser to play again.");
                // health points annot be negative
                getEnemyHealth.innerHTML = 'Health: 0';
                getPlayerHealth.innerHTML = 'Health: 0' + player.health;
            } else {
                getenemyHealth.innerHTML = 'Health' + enemy.health;
            
            }
        }
    }
}
} 