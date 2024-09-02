<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-grid>
                    <ion-row class="flex-center">
                        <ion-col size="6" class="text-center title-column">
                            <ion-title>App | Parcial</ion-title>
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
                    <img src="/heroes.png" alt="Heroes Logo" class="img-center heroes_logo">
                </ion-row>
                <ion-row>
                    <ion-col size="4">
                        <div class="buttons_container">
                            <ion-button router-link="/menu" fill="solid" color="danger">Inicio</ion-button>
                            <ion-button router-link="/games" fill="solid" color="danger">Juegos</ion-button>
                            <ion-button router-link="/gallery" fill="solid" color="danger">Galeria</ion-button>
                            <ion-button router-link="/exercise1" fill="solid" color="danger">EJercicio1</ion-button>
                            <ion-button router-link="/exercise2" fill="solid" color="danger">EJercicio2</ion-button>
                        </div>
                    </ion-col>
                    <ion-col size="8">
                        <div class="mario">
                            <img src="/mario.png" alt="Mario Bros Movie Image" class="mario_img"/>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        
        </ion-content>
        <ion-footer class="text-center">&copy; TCA-FEPADE</ion-footer>
    </ion-page>
</template>

<script scoped>
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';
export default {
    name: 'MenuPage',
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

.itca_logo {
    max-width: 70%;
    height: auto;
}

.heroes_logo {
    width: 70%;
}

.buttons_container{
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
}

.img-center {
    margin: 0 auto;
}

.mario_img {
    display: block; 
    width: 90%; 
    height: auto;
    margin: 0 auto;
}
</style>
  