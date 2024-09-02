<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-grid>
                    <ion-row class="flex-center">
                        <ion-col size="6" class="text-center title-column">
                            <ion-title>App | Ejercicio 2 | Parte 1</ion-title>
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
                        <h2 class="title">Cacular Nota</h2>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-input v-model="nombre" type="text" :clear-input="true" color="tertiary" fill="outline" placeholder="Fernando Javier Romero Turcios" label="Nombre" :counter="true"></ion-input>
                        <ion-input v-model="carnet" type="text" :clear-input="true" color="tertiary" fill="outline" placeholder="174722" label="Carnet" :counter="true"></ion-input>
                        <ion-input v-model="grupo" type="text" :clear-input="true" color="tertiary" fill="outline" placeholder="TDSV222A" label="Grupo" :counter="true"></ion-input>      
                        <h2 class="title2">Notas Practicas</h2>
                        <ion-input v-model="p_grade1" type="number" min="0" step="1" :clear-input="true" color="tertiary" fill="outline" label="Examen 1" :counter="true"></ion-input>
                        <ion-input v-model="p_grade2" type="number" min="0" step="1" :clear-input="true" color="tertiary" fill="outline" label="Examen 2" :counter="true"></ion-input>
                        <ion-input v-model="p_grade3" type="number" min="0" step="1" :clear-input="true" color="tertiary" fill="outline" label="Examen 3" :counter="true"></ion-input>
                        <ion-input v-model="p_grade4" type="number" min="0" step="1" :clear-input="true" color="tertiary" fill="outline" label="Proyecto" :counter="true"></ion-input>
                        <ion-button @click="printData" color="dark" expand="block" shape="round">Calcular</ion-button>
                    </ion-col>
                </ion-row>

                <ion-row v-show="data">
                    <div v-html="data" style="width: 100%"></div>
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
import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';
export default {
    name: 'Exercise1Page',
    components: {
        IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid, IonButton, IonFooter, IonInput
    },
    data() {
        return {
            nombre: '',
            carnet: '',
            grupo: '',
            p_grade1: undefined,
            p_grade2: undefined,
            p_grade3: undefined,
            p_grade4: undefined,
            data: ''
        }
    },
    methods: {
        printData() {
            const finalGrade = this.calculateFinalGrade();
            this.data = `
            <div style="text-align: center; width: 100%; font-weight: bold; margin-top: 15px">Datos</div>
            <div>
                <span style="font-size: 16px; font-weight: bold;">Nombre: </span>
                <span style="font-size: 16px;">${this.nombre}</span>
            </div>
            <div>
                <span style="font-size: 16px; font-weight: bold;">Carnet: </span>
                <span style="font-size: 16px;">${this.carnet}</span>
            </div>
            <div>
                <span style="font-size: 16px; font-weight: bold;">Grupo: </span>
                <span style="font-size: 16px;">${this.grupo}</span>
            </div>
            <div><span style="font-size: 16px; font-weight: bold;">Nota Final: </span>
                <span style="font-size: 16px;">${finalGrade}</span>
            </div>
            `
        },
        calculateFinalGrade() {
            const practicaTest1Weight = 0.20;
            const practicaTest2Weight = 0.25;
            const practicaTest3Weight = 0.25;
            const practicaTest4Weight = 0.30;

            const finalGrade = (
                (parseFloat(this.p_grade1) * practicaTest1Weight) +
                (parseFloat(this.p_grade2 * practicaTest2Weight) +
                (parseFloat(this.p_grade3) * practicaTest3Weight) +
                (parseFloat(this.p_grade4) * practicaTest4Weight))
            );

            return finalGrade.toFixed(2);
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

.text-justify {
    text-align: justify;
}

.itca_logo {
    max-width: 70%;
    height: auto;
}

.title {
    text-align: center;
    width: 100%;
    font-weight: bold;
}

.title2 {
    width: 100%;
    font-size: 16px;
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

ion-input:not(:last-child) {
    margin-bottom: 10px;
}
</style>
  