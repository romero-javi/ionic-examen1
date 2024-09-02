<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-grid>
                    <ion-row class="flex-center">
                        <ion-col size="6" class="text-center title-column">
                            <ion-title>App | Juegos</ion-title>
                        </ion-col>
                        <ion-col size="6" class="text-center itca_logo">
                            <img src="/logo-new.png" alt="Logo ITCA">
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-grid>
                <ion-row>
                    <div class="games_img"></div>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <h2 class="text-center title">Mario Bros</h2>
                        <p class="text-justify">La película de Super Mario Bros. es una bola de fuego de fantasía animada. La aventura de Mario,
                        Luigi y Peach deleita con su energía contagiosa y sus inteligentes implementaciones de devoluciones de
                        llamada de videojuegos, y la animación de primera categoría representa el Reino Champiñón como un país de las
                        maravillas similar a Oz que pide ser explorado en las inevitables secuelas que seguirán. El elenco de voces reunido
                        le da un giro único a cada uno de sus personajes, pero los arcos emocionales poco cocinados no reciben la misma atención
                        que la estética, algo a lo que no ayuda una trama de pintura por números que desconcertantemente mantiene a Mario y Luigi
                        alejados el uno del otro durante la mitad de la película.</p>
                        <img src="/mario-bros.jpg" class="img" alt="Mario Bros Image">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <h2 class="text-center title">Final Fantasy XVI</h2>
                        <p class="text-jusify">Durante siglos, la gente ha acudido en masa a sus cristales madre para participar de su bendición: el abundante éter que
                        alimenta la magia de la que dependen en su vida cotidiana. A medida que el éter comienza a desvanecerse y las tierras muertas
                        sin vida se extienden cada vez más, también la lucha por la posesión de los últimos destellos de la luz de las Madres se vuelve
                        cada vez más feroz. Sin embargo, en medio de la tormenta que se avecina, hay quienes creen que el legado de los cristales ha
                        moldeado el destino de la humanidad durante mucho tiempo.</p>
                        <img src="/final-fantasy-xvi.jpg" class="img" alt="Final Fantasy XVI Image">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <h2 class="text-center title">The Legend of Zelda</h2>
                        <p class="text-justify">Esta nueva aventura pretende llevarnos a las profundidades de un templo subterraneo, en donde un cadaver
                            momificado de alguna forma toma vida, levantando asi el castillo de Hyrule por los cielos.</p>
                        <img src="/zelda.jpg" class="img" alt="The Legend of Zelda Image">
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <h2 class="text-center title">God of War</h2>
                        <p class="text-justify">God of War Ragnarök es un juego de acción y aventura en el que los jugadores asumen el papel de Kratos y su hijo mientras
                        se embarcan en una búsqueda para evitar la llegada de Ragnarök. Los jugadores exploran los Nueve Reinos, luchando contra enemigos
                        en combates cuerpo a cuerpo cuerpo contra asaltantes de aspecto humano y criaturas fantásticas. Los jugadores usan el Hacha Leviatán
                        y las Espadas del Caos encadenadas para luchar contra los enemigos, con ataques que resultan en grandes chorros de sangre roja,
                        decapitación y desmembramiento. Después de debilitar a un enemigo, los jugadores pueden realizar movimientos finales que representan
                        empalamiento, desmembramiento y decapitación en primer plano</p>
                        <img src="/god-of-war.jpeg" alt="God of War Image">
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>

        <ion-footer>
            <div class="buttons_container">
                <ion-button router-link="/menu" fill="solid" color="danger">Inicio</ion-button>
                <ion-button router-link="/games" fill="solid" color="danger">Juegos</ion-button>
                <ion-button router-link="/gallery" fill="solid" color="danger">Galeria</ion-button>
                <ion-button router-link="/exercise1" fill="solid" color="danger">EJercicio1</ion-button>
                <ion-button router-link="/exercise2" fill="solid" color="danger">EJercicio2</ion-button>
            </div>
        </ion-footer>
    </ion-page>
</template>

<script scoped>
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';
export default {
    name: 'GamesPage',
    components: {
        IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid, IonButton, IonFooter
    }
}
</script>

<style scoped>
.flex-center {
    justify-content: center;
    align-content: center;
}

.title-column {
    display: flex;
    align-items: center;
}

.text-center {
    text-align: center;
}

.text-justify {
    text-align: justify;
}

.itca_logo {
    max-width: 70%;
    height: auto;
}

.games_img {
    width: 100%;
    height: 150px;
    background-image: url("/games.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: -30px;
}

.title {
    font-weight: bold;
}

ion-button {
    flex-grow: 1;
}

.buttons_container{
    display: flex;
}

.img-center {
    margin: 0 auto;
}

.img {
    width: 100%;
    height: auto;
}
</style>
  