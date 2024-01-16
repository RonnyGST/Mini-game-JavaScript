//Bem vindo ao jogo!

//Criando a classe player
class player{
    constructor(name, type, hp, stamina, item){
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.stamina = stamina;
        this.item  = item;
    }
}


//Criando os personagens do Player 1
let warrior = new player("Player 1", "Guerreiro", 100, 72, 7);
let mago = new player("Player 1", "Mago", 70, 40, 5);
let monge = new player("Player 1", "Monge", 110, 100, 9);
let ninja = new player("Player 1", "Ninja", 90, 100, 8);
let arqueiro = new player("Player 1", "Arqueiro", 80, 120, 7);
let orc = new player("player 1", "Orc", 130, 60, 4);



//Criando os personagens do Player 2 
let warriorB = new player("Player 2", "Guerreiro", 100, 72, 7);
let magoB = new player("Player 2", "Mago", 70, 40, 5);
let mongeB = new player("Player 2", "Monge", 110, 100, 9);
let ninjaB = new player("Player 2", "Ninja", 90, 100, 8);
let arqueiroB = new player("Player 2", "Arqueiro", 80, 120, 7);
let orcB = new player("player 2", "Orc", 130, 60, 5);



/*
--------------------------------------------------------------------------------------------------------
PLAYER 1
--------------------------------------------------------------------------------------------------------
*/

//Esta variável determina se o hud deve ser atualizado ou não
let pressedP1 = false;

//Variáveis cujo objetivo é verificar qual classe de personagem foi escolhido pelo jogador 1
let choseGuerreiro = false;
let chooseMago = false;
let chooseMonge = false;
let chooseNinja = false;
let chooseArqueiro = false;
let chooseOrc = false;





//Funções de atualização da HUD
function hudGuerreiro(){
    let player1Hud = document.getElementById("hudP1");
    let texto = document.createTextNode("HP: " + warrior.hp + " Stamina: " + warrior.stamina + " Itens: " + warrior.item);
    player1Hud.appendChild(texto);

    if(pressedP1){
        player1Hud.innerHTML = ("HP: " + warrior.hp + " Stamina: " + warrior.stamina + " Itens: " + warrior.item);
    }
}

function hudMago(){
    let player1Hud = document.getElementById("hudP1");
    let texto = document.createTextNode("HP: " + mago.hp + " Stamina: " + mago.stamina + " Itens: " + mago.item);
    player1Hud.appendChild(texto);

    if(pressedP1){
        player1Hud.innerHTML = ("HP: " + mago.hp + " Stamina: " + mago.stamina + " Itens: " + mago.item);
    }
}




//Funções de escolha da classe do personagem
function p1chooseGuerreiro(){
    //Pegando a referência do elemento com o id "p1Guerreiro"
    let guerreiroRef = document.getElementById("p1Guerreiro");
    //Sobrepondo o elemento por cima da "p1HideBox"
    guerreiroRef.style.position = "absolute";

    //Pegando a referência do elemento com o id "p1chooseClass"
    let chooseClassRef = document.getElementById("p1chooseClass");
    //Pegando a referência do elemento com o id "childElementp1"
    let childRef = document.getElementById("childElementp1");
    //Removendo o filho "childRef" do pai "chooseClassRef"
    chooseClassRef.removeChild(childRef);

    hudGuerreiro();
    choseGuerreiro = true;
}

function p1chooseMago(){
    let magoRef = document.getElementById("p1Mago");
    magoRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p1chooseClass");
    let childRef = document.getElementById("childElementp1");
    chooseClassRef.removeChild(childRef);

    hudMago();
    chooseMago = true;
}

function p1chooseMonge(){
    let mongeRef = document.getElementById("p1Monge");
    mongeRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p1chooseClass");
    let childRef = document.getElementById("childElementp1");
    chooseClassRef.removeChild(childRef);
}

function p1chooseNinja(){
    let ninjaRef = document.getElementById("p1Ninja");
    ninjaRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p1chooseClass");
    let childRef = document.getElementById("childElementp1");
    chooseClassRef.removeChild(childRef);
}

function p1chooseArqueiro(){
    let arqueiroRef = document.getElementById("p1Arqueiro");
    arqueiroRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p1chooseClass");
    let childRef = document.getElementById("childElementp1");
    chooseClassRef.removeChild(childRef);
}

function p1chooseOrc(){
    let orcRef = document.getElementById("p1Orc");
    orcRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p1chooseClass");
    let childRef = document.getElementById("childElementp1");
    chooseClassRef.removeChild(childRef);
}







//Funções de status do Player 1
function showStatusGuerreiro(){
    alert(`${warrior.type}. HP: ${warrior.hp}, Stamina: ${warrior.stamina}, Itens: ${warrior.item}`);
}
function showStatusMago(){
    alert(`${mago.type}. HP: ${mago.hp}, Stamina: ${mago.stamina}, Itens: ${mago.item}`);
}
function showStatusMonge(){
    alert(`${monge.type}. HP: ${monge.hp}, Stamina: ${monge.stamina}, Itens: ${monge.item}`);
}
function showStatusNinja(){
    alert(`${ninja.type}. HP: ${ninja.hp}, Stamina: ${ninja.stamina}, Itens: ${ninja.item}`);
}
function showStatusArqueiro(){
    alert(`${arqueiro.type}. HP: ${arqueiro.hp}, Stamina: ${arqueiro.stamina}, Itens: ${arqueiro.item}`);
}
function showStatusOrc(){
    alert(`${orc.type}. HP: ${orc.hp}, Stamina: ${orc.stamina}, Itens: ${orc.item}`);
}






//Funções main de execução de mecânicas do Guerreiro
function mainGuerreiroHeavyAttack(){
    if (warrior.stamina > 0) {
        heavyAttackGuerreiro();
    } else{
        alert("Sem Stamina");
    }
    pressedP1 = true;
    hudGuerreiro()
}
function mainGuerreiroLightAttack(){
    if(warrior.stamina > 0){
        lightAttackGuerreiro();
    }else{
        alert("Sem Stamina");
    }
    pressedP1 = true;
    hudGuerreiro()

}
function mainGuerreiroRecoverHP(){
    if (warrior.hp < 100 && warrior.item > 0) {
        recoverHPGuerreiro();
    }
    if(warrior.hp >= 100){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP" + warrior.hp);
    }
    if(warrior.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    pressedP1 = true;
    hudGuerreiro()

}
function mainGuerreiroRecoverStamina(){
    if (warrior.stamina < 72) {
        recoverStaminaGuerreiro();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    pressedP1 = true;
    hudGuerreiro()
}






//Funções main de execução de mecânicas do Mago
function mainMagoHeavyAttack(){
    if (mago.stamina > 0) {
        heavyAttackMago();
    } else{
        alert("Sem Stamina");
    }
    pressedP1 = true;
    hudMago();
}
function mainMagoLightAttack(){
    if(mago.stamina > 0){
        lightAttackMago();
    }else{
        alert("Sem Stamina");
    }
    pressedP1 = true;
    hudMago();
}
function mainMagoRecoverHP(){
    if (mago.hp < 70 && mago.item > 0) {
        recoverHPMago();
    }
    if(mago.hp >= 70){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP" + mago.hp);
    }
    if(mago.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    pressedP1 = true;
    hudMago();
}
function mainMagoRecoverStamina(){
    if (mago.stamina < 40) {
        recoverStaminaMago();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    pressedP1 = true;
    hudMago();
}


//Funções main de execução de mecânicas do Monge
function mainMongeHeavyAttack(){
    if (monge.stamina > 0) {
        heavyAttackMonge();
    } else{
        alert("Sem Stamina");
    }
}
function mainMongeLightAttack(){
    if(monge.stamina > 0){
        lightAttackMonge();
    }else{
        alert("Sem Stamina");
    }

}
function mainMongeRecoverHP(){
    if (monge.hp < 110 && monge.item > 0) {
        recoverHPMonge();
    }
    if(monge.hp >= 110){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP" + monge.hp);
    }
    if(monge.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainMongeRecoverStamina(){
    if (monge.stamina < 100) {
        recoverStaminaMonge();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}


//Funções main de execução de mecânicas do Ninja
function mainNinjaHeavyAttack(){
    if (ninja.stamina > 0) {
        heavyAttackNinja();
    } else{
        alert("Sem Stamina");
    }
}
function mainNinjaLightAttack(){
    if(ninja.stamina > 0){
        lightAttackNinja();
    }else{
        alert("Sem Stamina");
    }

}
function mainNinjaRecoverHP(){
    if (ninja.hp < 90 && ninja.item > 0) {
        recoverHPNinja();
    }
    if(ninja.hp >= 90){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP" + ninja.hp);
    }
    if(ninja.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainNinjaRecoverStamina(){
    if (ninja.stamina < 100) {
        recoverStaminaNinja();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}


//Funções main de execução de mecânicas do Arqueiro
function mainArqueiroHeavyAttack(){
    if (arqueiro.stamina > 0) {
        heavyAttackArqueiro();
    } else{
        alert("Sem Stamina");
    }
}
function mainArqueiroLightAttack(){
    if(arqueiro.stamina > 0){
        lightAttackArqueiro();
    }else{
        alert("Sem Stamina");
    }

}
function mainArqueiroRecoverHP(){
    if (arqueiro.hp < 80 && arqueiro.item > 0) {
        recoverHPArqueiro();
    }
    if(arqueiro.hp >= 80){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP" + arqueiro.hp);
    }
    if(arqueiro.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainArqueiroRecoverStamina(){
    if (arqueiro.stamina < 120) {
        recoverStaminaArqueiro();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}


//Funções main de execução de mecânicas do Orc
function mainOrcHeavyAttack(){
    if (orc.stamina > 0) {
        heavyAttackOrc();
    } else{
        alert("Sem Stamina");
    }
}
function mainOrcLightAttack(){
    if(orc.stamina > 0){
        lightAttackOrc();
    }else{
        alert("Sem Stamina");
    }

}
function mainOrcRecoverHP(){
    if (orc.hp < 130 && orc.item > 0) {
        recoverHPOrc();
    }
    if(orc.hp >= 130){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP" + orc.hp);
    }
    if(orc.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainOrcRecoverStamina(){
    if (orc.stamina < 60) {
        recoverStaminaOrc();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}








//Funções de mecânica base do Guerreiro
function lightAttackGuerreiro(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 4;
            message = "Soco cruzado";
            break;
        case randomHitLow ===2:
            lowDamage = 7;
            message = "Chute baixo";
            break;
        case randomHitLow === 3:
            lowDamage = 14;
            message = "Golpe de escudo";
            break;
        case randomHitLow === 4:
            lowDamage = 18;
            message = "Golpe horizontal de espada";
            break;
        }
        
        
    //Diminuido a Stamina do Guerreiro Player 1
    let resultStamina = warrior.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 2 
    let resultHpGuerreiroB = warriorB.hp -= lowDamage;
    let resultHpMagoB = magoB.hp -= lowDamage;
    let resultHpMongeB = mongeB.hp -= lowDamage;
    let resultHpNinjaB = ninjaB.hp -= lowDamage;
    let resultHpArqueiroB = arqueiroB.hp -= lowDamage;
    let resultHpOrcB = orcB.hp -= lowDamage;

        
        
    if(resultStamina > 0){
        alert(warrior.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(warrior.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackGuerreiro(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 22;
            message = "Golpe giratório de espada";
            break;
        case randomHitHigh ===2:
            highDamage = 27;
            message = "Golpe vertical de espada";
            break;
        case randomHitHigh === 3:
            highDamage = 34;
            message = "Estocada de espada";
            break;
        case randomHitHigh === 4:
            highDamage = 38;
            message = "Estocada de lança";
            break;
    }
    
    //Diminuido a Stamina do Guerreiro Player 1
    let resultStamina = warrior.stamina -= 18;
    
    
    //Diminuido o HP de todos os personagens do Player 2 
    let resultHpGuerreiroB = warriorB.hp -= highDamage;
    let resultHpMagoB = magoB.hp -= highDamage;
    let resultHpMongeB = mongeB.hp -= highDamage;
    let resultHpNinjaB = ninjaB.hp -= highDamage;
    let resultHpArqueiroB = arqueiroB.hp -= highDamage;
    let resultHpOrcB = orcB.hp -= highDamage;

   
    if(resultStamina > 0){
        alert(warrior.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(warrior.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaGuerreiro(){
  warrior.stamina += 12;
  alert(warrior.type + " recuperou Stamina");
  alert("Stamina: " + warrior.stamina);
}
function recoverHPGuerreiro(){
  warrior.item -= 1;
  warrior.hp += 30;
  alert(warrior.type + " usou: Frasco de Estus e recuperou HP");
  alert("HP: " + warrior.hp);
}



//Funções de mecânica base do Mago
function lightAttackMago(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 8;
            message = "Feitiço de levitação";
            break;
        case randomHitLow ===2:
            lowDamage = 14;
            message = "Feitiço de luz cegante";
            break;
        case randomHitLow === 3:
            lowDamage = 21;
            message = "Feitiço de disparo de água";
            break;
        case randomHitLow === 4:
            lowDamage = 24;
            message = "Ivocação de serpentes venenosas";
            break;
        }
        
    //Diminuido a Stamina do Mago Player 1
    let resultStamina = mago.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= lowDamage;
    let resultHpMagoB = magoB.hp -= lowDamage;
    let resultHpMongeB = mongeB.hp -= lowDamage;
    let resultHpNinjaB = ninjaB.hp -= lowDamage;
    let resultHpArqueiroB = arqueiroB.hp -= lowDamage;
    let resultHpOrcB = orcB.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(mago.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(mago.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackMago(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 28;
            message = "Feitiço de fogo";
            break;
        case randomHitHigh ===2:
            highDamage = 32;
            message = "Feitiço de tortura";
            break;
        case randomHitHigh === 3:
            highDamage = 38;
            message = "Maldição";
            break;
        case randomHitHigh === 4:
            highDamage = 42;
            message = "Magia proibida de redução da vitalidade";
            break;
        }
        
    //Diminuido a Stamina do Mago Player 1
    let resultStamina = mago.stamina -= 20;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= highDamage;
    let resultHpMagoB = magoB.hp -= highDamage;
    let resultHpMongeB = mongeB.hp -= highDamage;
    let resultHpNinjaB = ninjaB.hp -= highDamage;
    let resultHpArqueiroB = arqueiroB.hp -= highDamage;
    let resultHpOrcB = orcB.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(mago.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(mago.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaMago(){
    mago.stamina += 15;
    alert(mago.type + " recuperou Stamina");
    alert("Stamina: " + mago.stamina);
}
function recoverHPMago(){
    mago.item -= 1;
    mago.hp += 38;
    alert(mago.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + mago.hp);
}


//Funções de mecânica base do Monge
function lightAttackMonge(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 8;
            message = "Soco de Jade";
            break;
        case randomHitLow ===2:
            lowDamage = 12;
            message = "Chute voador do sábio";
            break;
        case randomHitLow === 3:
            lowDamage = 16;
            message = "Chute giratório";
            break;
        case randomHitLow === 4:
            lowDamage = 20;
            message = "Socos sequenciais";
            break;
        }
        
    //Diminuido a Stamina do Monge Player 1
    let resultStamina = monge.stamina -= 20;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= lowDamage;
    let resultHpMagoB = magoB.hp -= lowDamage;
    let resultHpMongeB = mongeB.hp -= lowDamage;
    let resultHpNinjaB = ninjaB.hp -= lowDamage;
    let resultHpArqueiroB = arqueiroB.hp -= lowDamage;
    let resultHpOrcB = orcB.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(monge.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(monge.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackMonge(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 22;
            message = "Chutes sequenciais";
            break;
        case randomHitHigh ===2:
            highDamage = 24;
            message = "Golpes sequenciais do Palácio Shaolin";
            break;
        case randomHitHigh === 3:
            highDamage = 28;
            message = "Golpe carregado de Chi";
            break;
        case randomHitHigh === 4:
            highDamage = 32;
            message = "Técnica oculta dos monges";
            break;
        }
        
    //Diminuido a Stamina do Monge Player 1
    let resultStamina = monge.stamina -= 30;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= highDamage;
    let resultHpMagoB = magoB.hp -= highDamage;
    let resultHpMongeB = mongeB.hp -= highDamage;
    let resultHpNinjaB = ninjaB.hp -= highDamage;
    let resultHpArqueiroB = arqueiroB.hp -= highDamage;
    let resultHpOrcB = orcB.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(monge.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(monge.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaMonge(){
    monge.stamina += 20;
    alert(monge.type + " recuperou Stamina");
    alert("Stamina: " + monge.stamina);
}
function recoverHPMonge(){
    monge.item -= 1;
    monge.hp += 35;
    alert(monge.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + monge.hp);
}


//Funções de mecânica base do Ninja
function lightAttackNinja(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 4;
            message = "Arremesso de Shuriken";
            break;
        case randomHitLow ===2:
            lowDamage = 8;
            message = "Arremesso de Kunai";
            break;
        case randomHitLow === 3:
            lowDamage = 15;
            message = "Técnica de assassinato ninja";
            break;
        case randomHitLow === 4:
            lowDamage = 18;
            message = "Golpe perfurante de Tantô";
            break;
        }
        
    //Diminuido a Stamina do Ninja Player 1
    let resultStamina = ninja.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= lowDamage;
    let resultHpMagoB = magoB.hp -= lowDamage;
    let resultHpMongeB = mongeB.hp -= lowDamage;
    let resultHpNinjaB = ninjaB.hp -= lowDamage;
    let resultHpArqueiroB = arqueiroB.hp -= lowDamage;
    let resultHpOrcB = orcB.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(ninja.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(ninja.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackNinja(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 20;
            message = "Bomba incendiária";
            break;
        case randomHitHigh ===2:
            highDamage = 22;
            message = "Katon Goukakyuu no Jutsu";
            break;
        case randomHitHigh === 3:
            highDamage = 28;
            message = "Chidori";
            break;
        case randomHitHigh === 4:
            highDamage = 34;
            message = "Kotoamatsukami";
            break;
        }
        
    //Diminuido a Stamina do Ninja Player 1
    let resultStamina = ninja.stamina -= 30;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= highDamage;
    let resultHpMagoB = magoB.hp -= highDamage;
    let resultHpMongeB = mongeB.hp -= highDamage;
    let resultHpNinjaB = ninjaB.hp -= highDamage;
    let resultHpArqueiroB = arqueiroB.hp -= highDamage;
    let resultHpOrcB = orcB.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(ninja.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(ninja.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaNinja(){
    ninja.stamina += 20;
    alert(ninja.type + " recuperou Stamina");
    alert("Stamina: " + ninja.stamina);
}
function recoverHPNinja(){
    ninja.item -= 1;
    ninja.hp += 30;
    alert(ninja.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + ninja.hp);
}


//Funções de mecânica base do Arqueiro
function lightAttackArqueiro(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 6;
            message = "Disparo de flecha comum";
            break;
        case randomHitLow ===2:
            lowDamage = 10;
            message = "Disparo duplo de flecha comum";
            break;
        case randomHitLow === 3:
            lowDamage = 13;
            message = "Disparo triplo de flecha comum";
            break;
        case randomHitLow === 4:
            lowDamage = 16;
            message = "Alvejamento de flecha comum";
            break;
        }
        
    //Diminuido a Stamina do Arqueiro Player 1
    let resultStamina = arqueiro.stamina -= 15;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= lowDamage;
    let resultHpMagoB = magoB.hp -= lowDamage;
    let resultHpMongeB = mongeB.hp -= lowDamage;
    let resultHpNinjaB = ninjaB.hp -= lowDamage;
    let resultHpArqueiroB = arqueiroB.hp -= lowDamage;
    let resultHpOrcB = orcB.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(arqueiro.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(arqueiro.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackArqueiro(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 18;
            message = "Disparo de flecha de fogo";
            break;
        case randomHitHigh ===2:
            highDamage = 22;
            message = "Disparo de flecha eletrificada";
            break;
        case randomHitHigh === 3:
            highDamage = 25;
            message = "Disparo de flecha explosiva";
            break;
        case randomHitHigh === 4:
            highDamage = 28;
            message = "Alvejamento triplo de flechas de fogo, eletrificada e explosiva";
            break;
        }
        
    //Diminuido a Stamina do Arqueiro Player 1
    let resultStamina = arqueiro.stamina -= 25;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= highDamage;
    let resultHpMagoB = magoB.hp -= highDamage;
    let resultHpMongeB = mongeB.hp -= highDamage;
    let resultHpNinjaB = ninjaB.hp -= highDamage;
    let resultHpArqueiroB = arqueiroB.hp -= highDamage;
    let resultHpOrcB = orcB.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(arqueiro.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(arqueiro.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaArqueiro(){
    arqueiro.stamina += 20;
    alert(arqueiro.type + " recuperou Stamina");
    alert("Stamina: " + arqueiro.stamina);
}
function recoverHPArqueiro(){
    arqueiro.item -= 1;
    arqueiro.hp += 27;
    alert(arqueiro.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + arqueiro.hp);
}


//Funções de mecânica base do Orc
function lightAttackOrc(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 7;
            message = "Rugido ensurdecedor";
            break;
        case randomHitLow ===2:
            lowDamage = 12;
            message = "Soco esmagador";
            break;
        case randomHitLow === 3:
            lowDamage = 18;
            message = "Golpe-terremoto";
            break;
        case randomHitLow === 4:
            lowDamage = 24;
            message = "Soco giratório em área";
            break;
        }
        
    //Diminuido a Stamina do Orc Player 1
    let resultStamina = orc.stamina -= 25;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= lowDamage;
    let resultHpMagoB = magoB.hp -= lowDamage;
    let resultHpMongeB = mongeB.hp -= lowDamage;
    let resultHpNinjaB = ninjaB.hp -= lowDamage;
    let resultHpArqueiroB = arqueiroB.hp -= lowDamage;
    let resultHpOrcB = orcB.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(orc.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(orc.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackOrc(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 28;
            message = "Golpe de clava";
            break;
        case randomHitHigh ===2:
            highDamage = 32;
            message = "Arremesso de grande rocha";
            break;
        case randomHitHigh === 3:
            highDamage = 36;
            message = "Golpe giratório de tronco de árvore";
            break;
        case randomHitHigh === 4:
            highDamage = 44;
            message = "Modo Berserk";
            break;
        }
        
    //Diminuido a Stamina do Orc Player 1
    let resultStamina = orc.stamina -= 30;


    //Diminuido o HP de todos os personagens do Player 2
    let resultHpGuerreiroB = warriorB.hp -= highDamage;
    let resultHpMagoB = magoB.hp -= highDamage;
    let resultHpMongeB = mongeB.hp -= highDamage;
    let resultHpNinjaB = ninjaB.hp -= highDamage;
    let resultHpArqueiroB = arqueiroB.hp -= highDamage;
    let resultHpOrcB = orcB.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(orc.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(orc.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaOrc(){
    orc.stamina += 20;
    alert(orc.type + " recuperou Stamina");
    alert("Stamina: " + orc.stamina);
}
function recoverHPOrc(){
    orc.item -= 1;
    orc.hp += 30;
    alert(orc.type + " usou: Frasco de Estus recuperou HP");
    alert("HP: " + orc.hp);
}




/*
--------------------------------------------------------------------------------------------------------

Divisão entre Player 1 e Player 2

--------------------------------------------------------------------------------------------------------
*/ 




/*
--------------------------------------------------------------------------------------------------------
PLAYER 2
--------------------------------------------------------------------------------------------------------
*/




//Funções de escolha da classe do personagem
function p2chooseGuerreiro(){
    let guerreiroRef = document.getElementById("p2Guerreiro");
    guerreiroRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);
}

function p2chooseMago(){
    let magoRef = document.getElementById("p2Mago");
    magoRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);
}

function p2chooseMonge(){
    let mongeRef = document.getElementById("p2Monge");
    mongeRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);
}

function p2chooseNinja(){
    let ninjaRef = document.getElementById("p2Ninja");
    ninjaRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);
}

function p2chooseArqueiro(){
    let arqueiroRef = document.getElementById("p2Arqueiro");
    arqueiroRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);
}

function p2chooseOrc(){
    let orcRef = document.getElementById("p2Orc");
    orcRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);
}




//Funções de status do Player 2
function showStatusGuerreiroB(){
    alert(`${warriorB.type}. HP: ${warriorB.hp}, Stamina: ${warriorB.stamina}, Itens: ${warriorB.item}`);
}
function showStatusMagoB(){
    alert(`${magoB.type}. HP: ${magoB.hp}, Stamina: ${magoB.stamina}, Itens: ${magoB.item}`);
}
function showStatusMongeB(){
    alert(`${mongeB.type}. HP: ${mongeB.hp}, Stamina: ${mongeB.stamina}, Itens: ${mongeB.item}`);
}
function showStatusNinjaB(){
    alert(`${ninjaB.type}. HP: ${ninjaB.hp}, Stamina: ${ninjaB.stamina}, Itens: ${ninjaB.item}`);
}
function showStatusArqueiroB(){
    alert(`${arqueiroB.type}. HP: ${arqueiroB.hp}, Stamina: ${arqueiroB.stamina}, Itens: ${arqueiroB.item}`);
}
function showStatusOrcB(){
    alert(`${orcB.type}. HP: ${orcB.hp}, Stamina: ${orcB.stamina}, Itens: ${orcB.item}`);
}



//Funções main de execução de mecânicas do Guerreiro
function mainGuerreiroBHeavyAttack(){
    if (warriorB.stamina > 0) {
        heavyAttackGuerreiroB();
    } else{
        alert("Sem Stamina");
    }
    pressedP1 = true;
    //Atualizando a hud
    switch (true) {
        case choseGuerreiro === true:
            hudGuerreiro();
            break;

        case chooseMago === true:
            hudMago();
    
        default:
            break;
    }
    
}
function mainGuerreiroBLightAttack(){
    if(warriorB.stamina > 0){
        lightAttackGuerreiro();
    }else{
        alert("Sem Stamina");
    }

}
function mainGuerreiroBRecoverHP(){
    if (warriorB.hp < 100 && warriorB.item > 0) {
        recoverHPGuerreiroB();
    }
    if(warriorB.hp >= 100){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP: " + warriorB.hp);
    }
    if(warriorB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainGuerreiroBRecoverStamina(){
    if (warriorB.stamina < 72) {
        recoverStaminaGuerreiroB();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}


//Funções main de execução de mecânicas do Mago
function mainMagoBHeavyAttack(){
    if (magoB.stamina > 0) {
        heavyAttackMagoB();
    } else{
        alert("Sem Stamina");
    }
}
function mainMagoBLightAttack(){
    if(magoB.stamina > 0){
        lightAttackMagoB();
    }else{
        alert("Sem Stamina");
    }

}
function mainMagoBRecoverHP(){
    if (magoB.hp < 70 && magoB.item > 0) {
        recoverHPMagoB();
    }
    if(magoB.hp >= 70){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP: " + magoB.hp);
    }
    if(magoB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainMagoBRecoverStamina(){
    if (magoB.stamina < 40) {
        recoverStaminaMagoB();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}


//Funções main de execução de mecânicas do Monge
function mainMongeBHeavyAttack(){
    if (mongeB.stamina > 0) {
        heavyAttackMongeB();
    } else{
        alert("Sem Stamina");
    }
}
function mainMongeBLightAttack(){
    if(mongeB.stamina > 0){
        lightAttackMongeB();
    }else{
        alert("Sem Stamina");
    }

}
function mainMongeBRecoverHP(){
    if (mongeB.hp < 110 && mongeB.item > 0) {
        recoverHPMongeB();
    }
    if(mongeB.hp >= 110){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP: " + mongeB.hp);
    }
    if(mongeB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainMongeBRecoverStamina(){
    if (mongeB.stamina < 100) {
        recoverStaminaMongeB();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}


//Funções main de execução de mecânicas do Ninja
function mainNinjaBHeavyAttack(){
    if (ninjaB.stamina > 0) {
        heavyAttackNinjaB();
    } else{
        alert("Sem Stamina");
    }
}
function mainNinjaBLightAttack(){
    if(ninjaB.stamina > 0){
        lightAttackNinjaB();
    }else{
        alert("Sem Stamina");
    }

}
function mainNinjaBRecoverHP(){
    if (ninjaB.hp < 90 && ninjaB.item > 0) {
        recoverHPNinjaB();
    }
    if(ninjaB.hp >= 90){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP: " + ninjaB.hp);
    }
    if(ninjaB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainNinjaBRecoverStamina(){
    if (ninjaB.stamina < 100) {
        recoverStaminaNinjaB();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}


//Funções main de execução de mecânicas do Arqueiro
function mainArqueiroBHeavyAttack(){
    if (arqueiroB.stamina > 0) {
        heavyAttackArqueiroB();
    } else{
        alert("Sem Stamina");
    }
}
function mainArqueiroBLightAttack(){
    if(arqueiroB.stamina > 0){
        lightAttackArqueiroB();
    }else{
        alert("Sem Stamina");
    }

}
function mainArqueiroBRecoverHP(){
    if (arqueiroB.hp < 80 && arqueiroB.item > 0) {
        recoverHPArqueiroB();
    }
    if(arqueiroB.hp >= 80){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP: " + arqueiroB.hp);
    }
    if(arqueiroB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainArqueiroBRecoverStamina(){
    if (arqueiroB.stamina < 120) {
        recoverStaminaArqueiroB();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}


//Funções main de execução de mecânicas do Orc
function mainOrcBHeavyAttack(){
    if (orcB.stamina > 0) {
        heavyAttackOrcB();
    } else{
        alert("Sem Stamina");
    }
}
function mainOrcBLightAttack(){
    if(orcB.stamina > 0){
        lightAttackOrcB();
    }else{
        alert("Sem Stamina");
    }

}
function mainOrcBRecoverHP(){
    if (orcB.hp < 130 && orcB.item > 0) {
        recoverHPOrcB();
    }
    if(orcB.hp >= 130){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
        alert("Seu HP: " + orcB.hp);
    }
    if(orcB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }

}
function mainOrcBRecoverStamina(){
    if (orcB.stamina < 60) {
        recoverStaminaOrcB();
    }else{
        alert("Sua Stamina está totalmente recuperada!");
    }
}








//Funções de mecânica base do Guerreiro
function lightAttackGuerreiroB(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 4;
            message = "Soco cruzado";
            break;
        case randomHitLow ===2:
            lowDamage = 7;
            message = "Chute baixo";
            break;
        case randomHitLow === 3:
            lowDamage = 14;
            message = "Golpe de escudo";
            break;
        case randomHitLow === 4:
            lowDamage = 18;
            message = "Golpe horizontal de espada";
            break;
        }
        
        
    //Diminuido a Stamina do Guerreiro Player 2
    let resultStamina = warriorB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1 
    let resultHpGuerreiro = warrior.hp -= lowDamage;
    let resultHpMago = mago.hp -= lowDamage;
    let resultHpMonge = monge.hp -= lowDamage;
    let resultHpNinja = ninja.hp -= lowDamage;
    let resultHpArqueiro = arqueiro.hp -= lowDamage;
    let resultHpOrc = orc.hp -= lowDamage;

        
        
    if(resultStamina > 0){
        alert(warriorB.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(warriorB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackGuerreiroB(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 22;
            message = "Golpe giratório de espada";
            break;
        case randomHitHigh ===2:
            highDamage = 27;
            message = "Golpe vertical de espada";
            break;
        case randomHitHigh === 3:
            highDamage = 34;
            message = "Estocada de espada";
            break;
        case randomHitHigh === 4:
            highDamage = 38;
            message = "Estocada de lança";
            break;
    }
    
    //Diminuido a Stamina do Guerreiro Player 2
    let resultStamina = warriorB.stamina -= 18;
    
    
    //Diminuido o HP de todos os personagens do Player 1 
    let resultHpGuerreiro = warrior.hp -= highDamage;
    let resultHpMago = mago.hp -= highDamage;
    let resultHpMonge = monge.hp -= highDamage;
    let resultHpNinja = ninja.hp -= highDamage;
    let resultHpArqueiro = arqueiro.hp -= highDamage;
    let resultHpOrc = orc.hp -= highDamage;

   
    if(resultStamina > 0){
        alert(warriorB.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(warriorB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaGuerreiroB(){
  warriorB.stamina += 12;
  alert(warriorB.type + " recuperou Stamina");
  alert("Stamina: " + warriorB.stamina);
}
function recoverHPGuerreiroB(){
  warriorB.item -= 1;
  warriorB.hp += 30;
  alert(warriorB.type + " usou: Frasco de Estus e recuperou HP");
  alert("HP: " + warriorB.hp);
}



//Funções de mecânica base do Mago
function lightAttackMagoB(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 8;
            message = "Feitiço de levitação";
            break;
        case randomHitLow ===2:
            lowDamage = 14;
            message = "Feitiço de luz cegante";
            break;
        case randomHitLow === 3:
            lowDamage = 21;
            message = "Feitiço de disparo de água";
            break;
        case randomHitLow === 4:
            lowDamage = 24;
            message = "Ivocação de serpentes venenosas";
            break;
        }
        
    //Diminuido a Stamina do Mago Player 2
    let resultStamina = magoB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= lowDamage;
    let resultHpMago = mago.hp -= lowDamage;
    let resultHpMonge = monge.hp -= lowDamage;
    let resultHpNinja = ninja.hp -= lowDamage;
    let resultHpArqueiro = arqueiro.hp -= lowDamage;
    let resultHpOrc = orc.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(magoB.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(magoB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackMagoB(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 28;
            message = "Feitiço de fogo";
            break;
        case randomHitHigh ===2:
            highDamage = 32;
            message = "Feitiço de tortura";
            break;
        case randomHitHigh === 3:
            highDamage = 38;
            message = "Maldição";
            break;
        case randomHitHigh === 4:
            highDamage = 42;
            message = "Magia proibida de redução da vitalidade";
            break;
        }
        
    //Diminuido a Stamina do Mago Player 2
    let resultStamina = magoB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= highDamage;
    let resultHpMago = mago.hp -= highDamage;
    let resultHpMonge = monge.hp -= highDamage;
    let resultHpNinja = ninja.hp -= highDamage;
    let resultHpArqueiro = arqueiro.hp -= highDamage;
    let resultHpOrc = orc.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(magoB.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(magoB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaMagoB(){
    magoB.stamina += 12;
    alert(magoB.type + " recuperou Stamina");
    alert("Stamina: " + magoB.stamina);
}
function recoverHPMagoB(){
    magoB.item -= 1;
    magoB.hp += 30;
    alert(magoB.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + magoB.hp);
}


//Funções de mecânica base do Monge
function lightAttackMongeB(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 8;
            message = "Soco de Jade";
            break;
        case randomHitLow ===2:
            lowDamage = 12;
            message = "Chute voador do sábio";
            break;
        case randomHitLow === 3:
            lowDamage = 16;
            message = "Chute giratório";
            break;
        case randomHitLow === 4:
            lowDamage = 20;
            message = "Socos sequenciais";
            break;
        }
        
    //Diminuido a Stamina do Monge Player 2
    let resultStamina = mongeB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= lowDamage;
    let resultHpMago = mago.hp -= lowDamage;
    let resultHpMonge = monge.hp -= lowDamage;
    let resultHpNinja = ninja.hp -= lowDamage;
    let resultHpArqueiro = arqueiro.hp -= lowDamage;
    let resultHpOrc = orc.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(mongeB.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(mongeB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackMongeB(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 22;
            message = "Chutes sequenciais";
            break;
        case randomHitHigh ===2:
            highDamage = 24;
            message = "Golpes sequenciais do Palácio Shaolin";
            break;
        case randomHitHigh === 3:
            highDamage = 28;
            message = "Golpe carregado de Chi";
            break;
        case randomHitHigh === 4:
            highDamage = 32;
            message = "Técnica oculta dos monges";
            break;
        }
        
    //Diminuido a Stamina do Monge Player 2
    let resultStamina = mongeB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= highDamage;
    let resultHpMago = mago.hp -= highDamage;
    let resultHpMonge = monge.hp -= highDamage;
    let resultHpNinja = ninja.hp -= highDamage;
    let resultHpArqueiro = arqueiro.hp -= highDamage;
    let resultHpOrc = orc.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(mongeB.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(mongeB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaMongeB(){
    mongeB.stamina += 12;
    alert(mongeB.type + " recuperou Stamina");
    alert("Stamina: " + mongeB.stamina);
}
function recoverHPMongeB(){
    mongeB.item -= 1;
    mongeB.hp += 30;
    alert(mongeB.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + mongeB.hp);
}


//Funções de mecânica base do Ninja
function lightAttackNinjaB(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 4;
            message = "Arremesso de Shuriken";
            break;
        case randomHitLow ===2:
            lowDamage = 8;
            message = "Arremesso de Kunai";
            break;
        case randomHitLow === 3:
            lowDamage = 15;
            message = "Técnica de assassinato ninja";
            break;
        case randomHitLow === 4:
            lowDamage = 18;
            message = "Golpe perfurante de Tantô";
            break;
        }
        
    //Diminuido a Stamina do Ninja Player 2
    let resultStamina = ninjaB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= lowDamage;
    let resultHpMago = mago.hp -= lowDamage;
    let resultHpMonge = monge.hp -= lowDamage;
    let resultHpNinja = ninja.hp -= lowDamage;
    let resultHpArqueiro = arqueiro.hp -= lowDamage;
    let resultHpOrc = orc.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(ninjaB.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(ninjaB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackNinjaB(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 20;
            message = "Bomba incendiária";
            break;
        case randomHitHigh ===2:
            highDamage = 22;
            message = "Katon Goukakyuu no Jutsu";
            break;
        case randomHitHigh === 3:
            highDamage = 28;
            message = "Chidori";
            break;
        case randomHitHigh === 4:
            highDamage = 34;
            message = "Kotoamatsukami";
            break;
        }
        
    //Diminuido a Stamina do Ninja Player 2
    let resultStamina = ninjaB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= highDamage;
    let resultHpMago = mago.hp -= highDamage;
    let resultHpMonge = monge.hp -= highDamage;
    let resultHpNinja = ninja.hp -= highDamage;
    let resultHpArqueiro = arqueiro.hp -= highDamage;
    let resultHpOrc = orc.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(ninjaB.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(ninjaB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaNinjaB(){
    ninjaB.stamina += 12;
    alert(ninjaB.type + " recuperou Stamina");
    alert("Stamina: " + ninjaB.stamina);
}
function recoverHPNinjaB(){
    ninjaB.item -= 1;
    ninjaB.hp += 30;
    alert(ninjaB.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + ninjaB.hp);
}


//Funções de mecânica base do Arqueiro
function lightAttackArqueiroB(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 6;
            message = "Disparo de flecha comum";
            break;
        case randomHitLow ===2:
            lowDamage = 10;
            message = "Disparo duplo de flecha comum";
            break;
        case randomHitLow === 3:
            lowDamage = 13;
            message = "Disparo triplo de flecha comum";
            break;
        case randomHitLow === 4:
            lowDamage = 16;
            message = "Alvejamento de flecha comum";
            break;
        }
        
    //Diminuido a Stamina do Arqueiro Player 2
    let resultStamina = arqueiroB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= lowDamage;
    let resultHpMago = mago.hp -= lowDamage;
    let resultHpMonge = monge.hp -= lowDamage;
    let resultHpNinja = ninja.hp -= lowDamage;
    let resultHpArqueiro = arqueiro.hp -= lowDamage;
    let resultHpOrc = orc.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(arqueiroB.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(arqueiroB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackArqueiroB(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 18;
            message = "Disparo de flecha de fogo";
            break;
        case randomHitHigh ===2:
            highDamage = 22;
            message = "Disparo de flecha eletrificada";
            break;
        case randomHitHigh === 3:
            highDamage = 25;
            message = "Disparo de flecha explosiva";
            break;
        case randomHitHigh === 4:
            highDamage = 28;
            message = "Alvejamento triplo de flechas de fogo, eletrificada e explosiva";
            break;
        }
        
    //Diminuido a Stamina do Arqueiro Player 2
    let resultStamina = arqueiroB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= highDamage;
    let resultHpMago = mago.hp -= highDamage;
    let resultHpMonge = monge.hp -= highDamage;
    let resultHpNinja = ninja.hp -= highDamage;
    let resultHpArqueiro = arqueiro.hp -= highDamage;
    let resultHpOrc = orc.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(arqueiroB.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(arqueiroB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaArqueiroB(){
    arqueiroB.stamina += 12;
    alert(arqueiroB.type + " recuperou Stamina");
    alert("Stamina: " + arqueiroB.stamina);
}
function recoverHPArqueiroB(){
    arqueiroB.item -= 1;
    arqueiroB.hp += 30;
    alert(arqueiroB.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + arqueiroB.hp);
}


//Funções de mecânica base do Orc
function lightAttackOrcB(){
    let randomHitLow = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitLow === 0:
            lowDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitLow === 1:
            lowDamage = 7;
            message = "Rugido ensurdecedor";
            break;
        case randomHitLow ===2:
            lowDamage = 12;
            message = "Soco esmagador";
            break;
        case randomHitLow === 3:
            lowDamage = 18;
            message = "Golpe-terremoto";
            break;
        case randomHitLow === 4:
            lowDamage = 24;
            message = "Soco giratório em área";
            break;
        }
        
    //Diminuido a Stamina do Orc Player 2
    let resultStamina = orcB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= lowDamage;
    let resultHpMago = mago.hp -= lowDamage;
    let resultHpMonge = monge.hp -= lowDamage;
    let resultHpNinja = ninja.hp -= lowDamage;
    let resultHpArqueiro = arqueiro.hp -= lowDamage;
    let resultHpOrc = orc.hp -= lowDamage;

    
    if(resultStamina > 0){
        alert(orcB.type + " atacou usando: " + message);
        alert("Dano causado: " + lowDamage);
    }
        
        
    if(resultStamina <= 0){
        lowDamage = 0;
        alert(orcB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function heavyAttackOrcB(){
    let randomHitHigh = Math.floor(Math.random() * 5);

    switch (true) {

        case randomHitHigh === 0:
            highDamage = 0;
            message = "Errou o ataque";
            break;
        case randomHitHigh === 1:
            highDamage = 28;
            message = "Golpe de clava";
            break;
        case randomHitHigh ===2:
            highDamage = 32;
            message = "Arremesso de grande rocha";
            break;
        case randomHitHigh === 3:
            highDamage = 36;
            message = "Golpe giratório de tronco de árvore";
            break;
        case randomHitHigh === 4:
            highDamage = 44;
            message = "Modo Berserk";
            break;
        }
        
    //Diminuido a Stamina do Orc Player 2
    let resultStamina = orcB.stamina -= 10;


    //Diminuido o HP de todos os personagens do Player 1
    let resultHpGuerreiro = warrior.hp -= highDamage;
    let resultHpMago = mago.hp -= highDamage;
    let resultHpMonge = monge.hp -= highDamage;
    let resultHpNinja = ninja.hp -= highDamage;
    let resultHpArqueiro = arqueiro.hp -= highDamage;
    let resultHpOrc = orc.hp -= highDamage;

    
    if(resultStamina > 0){
        alert(orcB.type + " atacou usando: " + message);
        alert("Dano causado: " + highDamage);
    }
        
        
    if(resultStamina <= 0){
        highDamage = 0;
        alert(orcB.type + " fez seu último ataque e ficou sem Stamina para atacar!");
    }
}
function recoverStaminaOrcB(){
    orcB.stamina += 12;
    alert(orcB.type + " recuperou Stamina");
    alert("Stamina: " + orcB.stamina);
}
function recoverHPOrcB(){
    orcB.item -= 1;
    orcB.hp += 30;
    alert(orcB.type + " usou: Frasco de Estus e recuperou HP");
    alert("HP: " + orcB.hp);
}