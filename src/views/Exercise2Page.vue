<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-grid>
                    <ion-row class="flex-center">
                        <ion-col size="6" class="text-center title-column">
                            <ion-title>App | Ejercicio 2 | Parte 2</ion-title>
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
                    <ion-col>
                        <h2 class="title">Albumes de Musica</h2>
                    </ion-col>
                </ion-row>
                <div v-html="data"></div>
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
    name: 'Exercise2Page',
    components: {
        IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid, IonButton, IonFooter
    },
    data() {
        return {
            songs: [],
            data: this.printCards()
        }
    },
    methods: {
        printCards() {
            this.songs = [
                {
                    song: "Photograph",
                    artist: "Ed Sheeran",
                    genre: "Folk-pop",
                    duration: "4:18",
                    album: "x(Deluxe Edition)",
                    photo: "/x(deluxe).jpeg"
                },
                {
                    song: "Rockabye (feat. Sean Paul & Anne-Marie)",
                    artist: "Clean Bandit",
                    genre: "Dance music",
                    duration: "4:11",
                    album: "What Is Love? (Deluxe Edition)",
                    photo: "/cleanbandit.jpeg"
                },
                {
                    song: "Thinking out Loud",
                    artist: "Ed Sheeran",
                    genre: "Blue-eyed soul",
                    duration: "4:41",
                    album: "x(Deluxe Edition)",
                    photo: "/x(deluxe).jpeg"
                },
                {
                    song: "Symphony (feat. Zara Larsson)",
                    artist: "Clean Bandit",
                    genre: "Pop, Country",
                    duration: "3:32",
                    album: "What Is Love? (Deluxe Edition)",
                    photo: "/cleanbandit.jpeg"
                },
                {
                    song: "Don't",
                    artist: "Ed Sheeran",
                    genre: "Contemporary R&B",
                    duration: "3:39",
                    album: "x(Deluxe Edition)",
                    photo: "/x(deluxe).jpeg"
                },
                {
                    song: "Solo (feat. Demi Lovato)",
                    artist: "Clean Bandit",
                    genre: "Electronic dance music",
                    duration: "3:42",
                    album: "What Is Love? (Deluxe Edition)",
                    photo: "/cleanbandit.jpeg"
                },
            ];

            let cards = '';

            for (let i = 0; i < this.songs.length; i++) {
                if (i % 2 == 0) {
                    cards += '<ion-row>' +
                                '<ion-col size="6">' +
                                    '<ion-card style="height: 100%; background-color: rgb(24, 200, 80);">' +
                                        '<ion-card-header style="min-height: 100%; background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5))),url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")">' +
                                            '<div style="padding: 10px">' +
                                                '<div style="width: 232px; height: 232px; border-radius: 4px; margin-bottom: 10px; box-shadow: 0 4px 60px rgba(0,0,0,.5);">' +
                                                    `<img src="${this.songs[i].photo}" alt="Song Image" style="object-fit: cover;"/>` +
                                                '</div>' +
                                                `<ion-card-title style="margin-bottom: 10px; font-size: 40px; font-weight: bold; color: #fff;">${this.songs[i].song}</ion-card-title>` +
                                                `<ion-card-subtitle style="font-size: 14px; font-weight: bold; color: #fff;">Artista: ${this.songs[i].artist}</ion-card-subtitle>` +
                                                `<div style="font-size: 14px; font-weight: bold; color: #fff;">Genero: ${this.songs[i].genre}</div>` +
                                                `<div style="font-size: 14px; font-weight: bold; color: #fff;">Duracion: ${this.songs[i].duration}</div>` +
                                                `<div style="font-size: 14px; font-weight: bold; color: #fff;">Album: ${this.songs[i].album}</div>` +
                                            '</div>' +
                                        '</ion-card-header>' +
                                    '</ion-card>' +
                                '</ion-col>';
                } else {
                    cards += '<ion-col size="6">' +
                                    '<ion-card style="height: 100%; background-color: rgb(88, 152, 176);">' +
                                        '<ion-card-header style="height: 100%; background: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5))),url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")">' +
                                            '<div style="padding: 10px">' +
                                                '<div style="width: 232px; height: 232px; border-radius: 4px; margin-bottom: 10px; box-shadow: 0 4px 60px rgba(0,0,0,.5);">' +
                                                    `<img src="${this.songs[i].photo}" alt="Song Image" style="object-fit: cover;"/>` +
                                                '</div>' +
                                                `<ion-card-title style="margin-bottom: 10px; font-size: 40px; font-weight: bold; color: #fff;">${this.songs[i].song}</ion-card-title>` +
                                                `<ion-card-subtitle style="font-size: 14px; font-weight: bold; color: #fff;">Artista: ${this.songs[i].artist}</ion-card-subtitle>` +
                                                `<div style="font-size: 14px; font-weight: bold; color: #fff;">Genero: ${this.songs[i].genre}</div>` +
                                                `<div style="font-size: 14px; font-weight: bold; color: #fff;">Duracion: ${this.songs[i].duration}</div>` +
                                                `<div style="font-size: 14px; font-weight: bold; color: #fff;">Album: ${this.songs[i].album}</div>` +
                                            '</div>' +
                                        '</ion-card-header>' + 
                                    '</ion-card>' +
                            '</ion-col>' +
                        '</ion-row>';
                }
            }

            return cards;
        }
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

.title {
    font-size: 30px;
    text-align: center;
    width: 100%;
    font-weight: bold;
}

.subtitle {
    text-align: center;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
}

.text-left {
    text-align: left
}
</style>
  