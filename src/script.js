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



//Variáveis que determinam se é a vez do player 1 ou do player 2
let canPlayP1 = true;
let canPlayP2 = true;


//Esta variável determina se o hud do player deve ser atualizado ou não
let canUpdateHud = false;


//Variáveis cujo objetivo é verificar qual classe de personagem foi escolhido pelo jogador 1
let choseGuerreiro = false;
let chooseMago = false;
let chooseMonge = false;
let chooseNinja = false;
let chooseArqueiro = false;
let chooseOrc = false;


//Variáveis cujo objetivo é verificar qual classe de personagem foi escolhido pelo jogador 2
let choseGuerreiroB = false;
let chooseMagoB = false;
let chooseMongeB = false;
let chooseNinjaB = false;
let chooseArqueiroB = false;
let chooseOrcB = false;




//Atualizando a HUD do player 1 quando ele recebe dano.
function updatingHudP1(){
    canUpdateHud = true;
    //Atualizando a hud
    switch (true) {
        case choseGuerreiro === true:
            hudGuerreiro();
            break;

        case chooseMago === true:
            hudMago();
            break;

        case chooseMonge === true:
            hudMonge();
            break;

        case chooseNinja === true:
            hudNinja();
            break;

        case chooseArqueiro === true:
            hudArqueiro();
            break;

        case chooseOrc === true:
            hudOrc();
            break;
    
        default:
            break;
    }
}




//Atualizando a HUD do player 2 quando ele recebe dano.
function updatingHudP2(){
    canUpdateHud = true;
    //Atualizando a hud
    switch (true) {
        case choseGuerreiroB === true:
            hudGuerreiroB();
            break;

        case chooseMagoB === true:
            hudMagoB();
            break;

        case chooseMongeB === true:
            hudMongeB();
            break;

        case chooseNinjaB === true:
            hudNinjaB();
            break;

        case chooseArqueiroB === true:
            hudArqueiroB();
            break;

        case chooseOrcB === true:
            hudOrcB();
            break;
    
        default:
            break;
    }
}



/*
--------------------------------------------------------------------------------------------------------
PLAYER 1
--------------------------------------------------------------------------------------------------------
*/

let canEraseLog = true;
let messageLogP1;

let logP1Ref = document.getElementById("logP1");

function updateLogP1(){

    if(!canEraseLog){
        logP1Ref.innerHTML = messageLogP1;
    } else if(canEraseLog){
        logP1Ref.innerHTML = "";
    }
    
}




//Funções de atualização da HUD do player 1
function hudGuerreiro(){
    //Pegando o id do parágrafo
    let player1Hud = document.getElementById("hudP1");
    //Definindo o texto que será exibido
    let texto = document.createTextNode("HP: " + warrior.hp + " Stamina: " + warrior.stamina + " Itens: " + warrior.item);
    player1Hud.appendChild(texto);

    //Se o hud puder ser atualizado, ele irá substituir o hud antigo pelo novo (que por acaso é o mesmo hud, porém irá mostrar os valores atualizados)
    if(canUpdateHud){
        player1Hud.innerHTML = ("HP: " + warrior.hp + " Stamina: " + warrior.stamina + " Itens: " + warrior.item);
    }
}

function hudMago(){
    let player1Hud = document.getElementById("hudP1");
    let texto = document.createTextNode("HP: " + mago.hp + " Stamina: " + mago.stamina + " Itens: " + mago.item);
    player1Hud.appendChild(texto);

    if(canUpdateHud){
        player1Hud.innerHTML = ("HP: " + mago.hp + " Stamina: " + mago.stamina + " Itens: " + mago.item);
    }
}

function hudMonge(){
    let player1Hud = document.getElementById("hudP1");
    let texto = document.createTextNode("HP: " + monge.hp + " Stamina: " + monge.stamina + " Itens: " + monge.item);
    player1Hud.appendChild(texto);

    if(canUpdateHud){
        player1Hud.innerHTML = ("HP: " + monge.hp + " Stamina: " + monge.stamina + " Itens: " + monge.item);
    }
}

function hudNinja(){
    let player1Hud = document.getElementById("hudP1");
    let texto = document.createTextNode("HP: " + ninja.hp + " Stamina: " + ninja.stamina + " Itens: " + ninja.item);
    player1Hud.appendChild(texto);

    if(canUpdateHud){
        player1Hud.innerHTML = ("HP: " + ninja.hp + " Stamina: " + ninja.stamina + " Itens: " + ninja.item);
    }
}

function hudArqueiro(){
    let player1Hud = document.getElementById("hudP1");
    let texto = document.createTextNode("HP: " + arqueiro.hp + " Stamina: " + arqueiro.stamina + " Itens: " + arqueiro.item);
    player1Hud.appendChild(texto);

    if(canUpdateHud){
        player1Hud.innerHTML = ("HP: " + arqueiro.hp + " Stamina: " + arqueiro.stamina + " Itens: " + arqueiro.item);
    }
}

function hudOrc(){
    let player1Hud = document.getElementById("hudP1");
    let texto = document.createTextNode("HP: " + orc.hp + " Stamina: " + orc.stamina + " Itens: " + orc.item);
    player1Hud.appendChild(texto);

    if(canUpdateHud){
        player1Hud.innerHTML = ("HP: " + orc.hp + " Stamina: " + orc.stamina + " Itens: " + orc.item);
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

    //Chamando a função do hud para que ela possa ser exibida assim que o jogador escolher o seu personagem
    hudGuerreiro();
    //Dizendo para o código qual personagem foi escolhido
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

    hudMonge();
    chooseMonge = true;
}

function p1chooseNinja(){
    let ninjaRef = document.getElementById("p1Ninja");
    ninjaRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p1chooseClass");
    let childRef = document.getElementById("childElementp1");
    chooseClassRef.removeChild(childRef);

    hudNinja();
    chooseNinja = true;
}

function p1chooseArqueiro(){
    let arqueiroRef = document.getElementById("p1Arqueiro");
    arqueiroRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p1chooseClass");
    let childRef = document.getElementById("childElementp1");
    chooseClassRef.removeChild(childRef);

    hudArqueiro();
    chooseArqueiro = true
}

function p1chooseOrc(){
    let orcRef = document.getElementById("p1Orc");
    orcRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p1chooseClass");
    let childRef = document.getElementById("childElementp1");
    chooseClassRef.removeChild(childRef);

    hudOrc();
    chooseOrc = true;
}





//Funções main de execução de mecânicas do Guerreiro
function mainGuerreiroHeavyAttack(){
    //Se este personagem tiver stamina e for sua vez de jogar, poderá executar a ação de ataque
    if (warrior.stamina > 0 && canPlayP1) {
        heavyAttackGuerreiro();
        //Depois que o player fizer sua jogada, ele não poderá jogar outra vez em sequência
        canPlayP1 = false;
        //Agora o outro player poderá jogar
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    //Dizendo para o código que a hud pode ser atualizada
    canUpdateHud = true;
    //Atualizando a hud do personagem correspondente
    hudGuerreiro();
    //Atualizando a hud do player 2, pois ele recebeu dano por parte do player 1
    updatingHudP2();
}
function mainGuerreiroLightAttack(){
    if(warrior.stamina > 0 && canPlayP1){
        lightAttackGuerreiro();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudGuerreiro();
    updatingHudP2();
}
function mainGuerreiroRecoverHP(){
    //Se o hp deste personagem for menor do que a quantidade estipulada e tiver pelo menos 1 item de cura, poderá executar a ação de recuperar hp
    if (warrior.hp < 100 && warrior.item > 0 && canPlayP1) {
        recoverHPGuerreiro();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    }
    if(warrior.hp >= 100){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(warrior.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudGuerreiro();
}
function mainGuerreiroRecoverStamina(){
    if (warrior.stamina < 72 && canPlayP1) {
        recoverStaminaGuerreiro();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudGuerreiro();
}






//Funções main de execução de mecânicas do Mago
function mainMagoHeavyAttack(){
    if (mago.stamina > 0 && canPlayP1) {
        heavyAttackMago();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudMago();
    updatingHudP2();
}
function mainMagoLightAttack(){
    if(mago.stamina > 0 && canPlayP1){
        lightAttackMago();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudMago();
    updatingHudP2();
}
function mainMagoRecoverHP(){
    if (mago.hp < 70 && mago.item > 0 && canPlayP1) {
        recoverHPMago();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    }
    if(mago.hp >= 70){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(mago.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudMago();
}
function mainMagoRecoverStamina(){
    if (mago.stamina < 40 && canPlayP1) {
        recoverStaminaMago();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudMago();
}


//Funções main de execução de mecânicas do Monge
function mainMongeHeavyAttack(){
    if (monge.stamina > 0 && canPlayP1) {
        heavyAttackMonge();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudMonge();
    updatingHudP2();
}
function mainMongeLightAttack(){
    if(monge.stamina > 0 && canPlayP1){
        lightAttackMonge();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudMonge();
    updatingHudP2();
}
function mainMongeRecoverHP(){
    if (monge.hp < 110 && monge.item > 0 && canPlayP1) {
        recoverHPMonge();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    }
    if(monge.hp >= 110){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(monge.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudMonge();
}
function mainMongeRecoverStamina(){
    if (monge.stamina < 100 && canPlayP1) {
        recoverStaminaMonge();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudMonge();
}


//Funções main de execução de mecânicas do Ninja
function mainNinjaHeavyAttack(){
    if (ninja.stamina > 0 && canPlayP1) {
        heavyAttackNinja();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudNinja();
    updatingHudP2();
}
function mainNinjaLightAttack(){
    if(ninja.stamina > 0 && canPlayP1){
        lightAttackNinja();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudNinja();
    updatingHudP2();
}
function mainNinjaRecoverHP(){
    if (ninja.hp < 90 && ninja.item > 0 && canPlayP1) {
        recoverHPNinja();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    }
    if(ninja.hp >= 90){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(ninja.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudNinja();
}
function mainNinjaRecoverStamina(){
    if (ninja.stamina < 100 && canPlayP1) {
        recoverStaminaNinja();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudNinja();
}


//Funções main de execução de mecânicas do Arqueiro
function mainArqueiroHeavyAttack(){
    if (arqueiro.stamina > 0 && canPlayP1) {
        heavyAttackArqueiro();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudArqueiro();
    updatingHudP2();
}
function mainArqueiroLightAttack(){
    if(arqueiro.stamina > 0 && canPlayP1){
        lightAttackArqueiro();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudArqueiro();
    updatingHudP2();
}
function mainArqueiroRecoverHP(){
    if (arqueiro.hp < 80 && arqueiro.item > 0 && canPlayP1) {
        recoverHPArqueiro();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    }
    if(arqueiro.hp >= 80){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(arqueiro.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudArqueiro();
}
function mainArqueiroRecoverStamina(){
    if (arqueiro.stamina < 120 && canPlayP1) {
        recoverStaminaArqueiro();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudArqueiro();
}


//Funções main de execução de mecânicas do Orc
function mainOrcHeavyAttack(){
    if (orc.stamina > 0 && canPlayP1) {
        heavyAttackOrc();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudOrc();
    updatingHudP2();
}
function mainOrcLightAttack(){
    if(orc.stamina > 0 && canPlayP1){
        lightAttackOrc();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudOrc();
    updatingHudP2();
}
function mainOrcRecoverHP(){
    if (orc.hp < 130 && orc.item > 0 && canPlayP1) {
        recoverHPOrc();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    }
    if(orc.hp >= 130){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(orc.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudOrc();
}
function mainOrcRecoverStamina(){
    if (orc.stamina < 60 && canPlayP1) {
        recoverStaminaOrc();
        canPlayP1 = false;
        canPlayP2 = true;
    } else if(!canPlayP1){
        alert("É a vez do Player 2");
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudOrc();
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
}
function recoverHPGuerreiro(){
  warrior.item -= 1;
  warrior.hp += 30;
  alert(warrior.type + " usou: Frasco de Estus e recuperou HP");
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
}
function recoverHPMago(){
    mago.item -= 1;
    mago.hp += 38;
    alert(mago.type + " usou: Frasco de Estus e recuperou HP");
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
}
function recoverHPMonge(){
    monge.item -= 1;
    monge.hp += 35;
    alert(monge.type + " usou: Frasco de Estus e recuperou HP");
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
}
function recoverHPNinja(){
    ninja.item -= 1;
    ninja.hp += 30;
    alert(ninja.type + " usou: Frasco de Estus e recuperou HP");
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
}
function recoverHPArqueiro(){
    arqueiro.item -= 1;
    arqueiro.hp += 27;
    alert(arqueiro.type + " usou: Frasco de Estus e recuperou HP");
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
}
function recoverHPOrc(){
    orc.item -= 1;
    orc.hp += 30;
    alert(orc.type + " usou: Frasco de Estus recuperou HP");
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






//Funções de atualização da HUD do player 2
function hudGuerreiroB(){
    let player2Hud = document.getElementById("hudP2");
    let texto = document.createTextNode("HP: " + warriorB.hp + " Stamina: " + warriorB.stamina + " Itens: " + warriorB.item);
    player2Hud.appendChild(texto);

    if(canUpdateHud){
        player2Hud.innerHTML = ("HP: " + warriorB.hp + " Stamina: " + warriorB.stamina + " Itens: " + warriorB.item);
    }
}

function hudMagoB(){
    let player2Hud = document.getElementById("hudP2");
    let texto = document.createTextNode("HP: " + magoB.hp + " Stamina: " + magoB.stamina + " Itens: " + magoB.item);
    player2Hud.appendChild(texto);

    if(canUpdateHud){
        player2Hud.innerHTML = ("HP: " + magoB.hp + " Stamina: " + magoB.stamina + " Itens: " + magoB.item);
    }
}

function hudMongeB(){
    let player2Hud = document.getElementById("hudP2");
    let texto = document.createTextNode("HP: " + mongeB.hp + " Stamina: " + mongeB.stamina + " Itens: " + mongeB.item);
    player2Hud.appendChild(texto);

    if(canUpdateHud){
        player2Hud.innerHTML = ("HP: " + mongeB.hp + " Stamina: " + mongeB.stamina + " Itens: " + mongeB.item);
    }
}

function hudNinjaB(){
    let player2Hud = document.getElementById("hudP2");
    let texto = document.createTextNode("HP: " + ninjaB.hp + " Stamina: " + ninjaB.stamina + " Itens: " + ninjaB.item);
    player2Hud.appendChild(texto);

    if(canUpdateHud){
        player2Hud.innerHTML = ("HP: " + ninjaB.hp + " Stamina: " + ninjaB.stamina + " Itens: " + ninjaB.item);
    }
}

function hudArqueiroB(){
    let player2Hud = document.getElementById("hudP2");
    let texto = document.createTextNode("HP: " + arqueiroB.hp + " Stamina: " + arqueiroB.stamina + " Itens: " + arqueiroB.item);
    player2Hud.appendChild(texto);

    if(canUpdateHud){
        player2Hud.innerHTML = ("HP: " + arqueiroB.hp + " Stamina: " + arqueiroB.stamina + " Itens: " + arqueiroB.item);
    }
}

function hudOrcB(){
    let player2Hud = document.getElementById("hudP2");
    let texto = document.createTextNode("HP: " + orcB.hp + " Stamina: " + orcB.stamina + " Itens: " + orcB.item);
    player2Hud.appendChild(texto);

    if(canUpdateHud){
        player2Hud.innerHTML = ("HP: " + orcB.hp + " Stamina: " + orcB.stamina + " Itens: " + orcB.item);
    }
}




//Funções de escolha da classe do personagem
function p2chooseGuerreiro(){
    let guerreiroRef = document.getElementById("p2Guerreiro");
    guerreiroRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);

    choseGuerreiroB = true;
    hudGuerreiroB();
}

function p2chooseMago(){
    let magoRef = document.getElementById("p2Mago");
    magoRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);

    chooseMagoB = true;
    hudMagoB();
}

function p2chooseMonge(){
    let mongeRef = document.getElementById("p2Monge");
    mongeRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);

    chooseMongeB = true;
    hudMongeB();
}

function p2chooseNinja(){
    let ninjaRef = document.getElementById("p2Ninja");
    ninjaRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);

    chooseNinjaB = true;
    hudNinjaB();
}

function p2chooseArqueiro(){
    let arqueiroRef = document.getElementById("p2Arqueiro");
    arqueiroRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);

    chooseArqueiroB = true;
    hudArqueiroB();
}

function p2chooseOrc(){
    let orcRef = document.getElementById("p2Orc");
    orcRef.style.position = "absolute";

    let chooseClassRef = document.getElementById("p2chooseClass");
    let childRef = document.getElementById("childElementp2");
    chooseClassRef.removeChild(childRef);

    chooseOrcB = true;
    hudOrcB();
}





//Funções main de execução de mecânicas do Guerreiro
function mainGuerreiroBHeavyAttack(){
    if (warriorB.stamina > 0 && canPlayP2) {
        heavyAttackGuerreiroB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1");
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    updatingHudP1();
    hudGuerreiroB();
}
function mainGuerreiroBLightAttack(){
    if(warriorB.stamina > 0 && canPlayP2){
        lightAttackGuerreiroB();
        canPlayP2 = false;
        canPlayP1 = true;
    } 
    else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    updatingHudP1();
    hudGuerreiroB();
}
function mainGuerreiroBRecoverHP(){
    if (warriorB.hp < 100 && warriorB.item > 0 && canPlayP2) {
        recoverHPGuerreiroB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    }
    if(warriorB.hp >= 100){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(warriorB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudGuerreiroB();
}
function mainGuerreiroBRecoverStamina(){
    if (warriorB.stamina < 72 && canPlayP2) {
        recoverStaminaGuerreiroB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudGuerreiroB();
}


//Funções main de execução de mecânicas do Mago
function mainMagoBHeavyAttack(){
    if (magoB.stamina > 0 && canPlayP2) {
        heavyAttackMagoB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudMagoB();
    updatingHudP1();
}
function mainMagoBLightAttack(){
    if(magoB.stamina > 0 && canPlayP2){
        lightAttackMagoB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudMagoB();
    updatingHudP1();
}
function mainMagoBRecoverHP(){
    if (magoB.hp < 70 && magoB.item > 0 && canPlayP2) {
        recoverHPMagoB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    }
    if(magoB.hp >= 70){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(magoB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudMagoB();
}
function mainMagoBRecoverStamina(){
    if (magoB.stamina < 40 && canPlayP2) {
        recoverStaminaMagoB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudMagoB();
}


//Funções main de execução de mecânicas do Monge
function mainMongeBHeavyAttack(){
    if (mongeB.stamina > 0 && canPlayP2) {
        heavyAttackMongeB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudMongeB();
    updatingHudP1();
}
function mainMongeBLightAttack(){
    if(mongeB.stamina > 0 && canPlayP2){
        lightAttackMongeB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudMongeB();
    updatingHudP1();
}
function mainMongeBRecoverHP(){
    if (mongeB.hp < 110 && mongeB.item > 0 && canPlayP2) {
        recoverHPMongeB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    }
    if(mongeB.hp >= 110){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(mongeB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudMongeB();
}
function mainMongeBRecoverStamina(){
    if (mongeB.stamina < 100 && canPlayP2) {
        recoverStaminaMongeB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudMongeB();
}


//Funções main de execução de mecânicas do Ninja
function mainNinjaBHeavyAttack(){
    if (ninjaB.stamina > 0 && canPlayP2) {
        heavyAttackNinjaB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudNinjaB();
    updatingHudP1();
}
function mainNinjaBLightAttack(){
    if(ninjaB.stamina > 0 && canPlayP2){
        lightAttackNinjaB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudNinjaB();
    updatingHudP1();
}
function mainNinjaBRecoverHP(){
    if (ninjaB.hp < 90 && ninjaB.item > 0 && canPlayP2) {
        recoverHPNinjaB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    }
    if(ninjaB.hp >= 90){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(ninjaB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudNinjaB();
}
function mainNinjaBRecoverStamina(){
    if (ninjaB.stamina < 100 && canPlayP2) {
        recoverStaminaNinjaB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudNinjaB();
}


//Funções main de execução de mecânicas do Arqueiro
function mainArqueiroBHeavyAttack(){
    if (arqueiroB.stamina > 0 && canPlayP2) {
        heavyAttackArqueiroB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudArqueiroB();
    updatingHudP1();
}
function mainArqueiroBLightAttack(){
    if(arqueiroB.stamina > 0 && canPlayP2){
        lightAttackArqueiroB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudArqueiroB();
    updatingHudP1();
}
function mainArqueiroBRecoverHP(){
    if (arqueiroB.hp < 80 && arqueiroB.item > 0 && canPlayP2) {
        recoverHPArqueiroB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    }
    if(arqueiroB.hp >= 80){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(arqueiroB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudArqueiroB();
}
function mainArqueiroBRecoverStamina(){
    if (arqueiroB.stamina < 120 && canPlayP2) {
        recoverStaminaArqueiroB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudArqueiroB();
}


//Funções main de execução de mecânicas do Orc
function mainOrcBHeavyAttack(){
    if (orcB.stamina > 0 && canPlayP2) {
        heavyAttackOrcB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudOrcB();
    updatingHudP1();
}
function mainOrcBLightAttack(){
    if(orcB.stamina > 0 && canPlayP2){
        lightAttackOrcB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sem Stamina");
    }
    canUpdateHud = true;
    hudOrcB();
    updatingHudP1();
}
function mainOrcBRecoverHP(){
    if (orcB.hp < 130 && orcB.item > 0 && canPlayP2) {
        recoverHPOrcB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    }
    if(orcB.hp >= 130){
        alert("Você tomou frasco de Estus o suficiente. Seu corpo não aguentará se tomar além do que sua vitalidade permite.");
    }
    if(orcB.item <= 0){
        alert("Você não tem frascos de Estus!");
    }
    canUpdateHud = true;
    hudOrcB();
}
function mainOrcBRecoverStamina(){
    if (orcB.stamina < 60 && canPlayP2) {
        recoverStaminaOrcB();
        canPlayP2 = false;
        canPlayP1 = true;
    } else if(!canPlayP2){
        alert("É a vez do Player 1")
    } else{
        alert("Sua Stamina está totalmente recuperada!");
    }
    canUpdateHud = true;
    hudOrcB();
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
}
function recoverHPGuerreiroB(){
  warriorB.item -= 1;
  warriorB.hp += 30;
  alert(warriorB.type + " usou: Frasco de Estus e recuperou HP");
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
    let resultStamina = magoB.stamina -= 20;


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
}
function recoverHPMagoB(){
    magoB.item -= 1;
    magoB.hp += 30;
    alert(magoB.type + " usou: Frasco de Estus e recuperou HP");
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
    let resultStamina = mongeB.stamina -= 20;


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
    let resultStamina = mongeB.stamina -= 30;


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
}
function recoverHPMongeB(){
    mongeB.item -= 1;
    mongeB.hp += 30;
    alert(mongeB.type + " usou: Frasco de Estus e recuperou HP");
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
    let resultStamina = ninjaB.stamina -= 30;


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
}
function recoverHPNinjaB(){
    ninjaB.item -= 1;
    ninjaB.hp += 30;
    alert(ninjaB.type + " usou: Frasco de Estus e recuperou HP");
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
    let resultStamina = arqueiroB.stamina -= 15;


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
    let resultStamina = arqueiroB.stamina -= 25;


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
}
function recoverHPArqueiroB(){
    arqueiroB.item -= 1;
    arqueiroB.hp += 30;
    alert(arqueiroB.type + " usou: Frasco de Estus e recuperou HP");
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
    let resultStamina = orcB.stamina -= 25;


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
    let resultStamina = orcB.stamina -= 30;


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
}
function recoverHPOrcB(){
    orcB.item -= 1;
    orcB.hp += 30;
    alert(orcB.type + " usou: Frasco de Estus e recuperou HP");
}