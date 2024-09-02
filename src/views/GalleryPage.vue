<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-grid>
                    <ion-row class="flex-center">
                        <ion-col size="6" class="text-center title-column">
                            <ion-title>App | Galeria</ion-title>
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
                    <div class="gallery_img"></div>
                </ion-row>
                <ion-row>
                    <ion-col size="6">
                        <div class="img">
                            <img id="spring" src="/spring.png" alt="Spring Logo">
                        </div>
                    </ion-col>
                    <ion-col size="6">
                        <div class="img">
                            <img id="react" src="/react.png" alt="React Logo">
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="6">
                        <div class="img">
                            <img id="sophos" src="/sophos.png" alt="Sophos Logo">
                        </div>
                    </ion-col>
                    <ion-col size="6">
                        <div class="img">
                            <img id="java" src="/java.png" alt="Java Logo">
                        </div>
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
    name: 'GalleryPage',
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

.gallery_img {
    width: 100%;
    height: 200px;
    background-image: url("/gallery.png");
    background-position: center;
    background-repeat: none;
    background-size:cover;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%x;
}

#spring {
    width: 50%;
}

#react {
    width: 60%;
}

#sophos {
    width: 80%;
}

#java {
    width: 100%;
}
</style>
  