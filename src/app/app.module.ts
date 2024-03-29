import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompletedComponent } from './components/completed/completed.component';
import { HomebarComponent } from './components/homebar/homebar.component';
import { IncompletedComponent } from './components/incompleted/incompleted.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoTuttoComponent } from './components/todo-tutto/todo-tutto.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule qui

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'completed',
        component: CompletedComponent,
    },
    {
        path: 'incompleted',
        component: IncompletedComponent,
    },
    {
        path: 'utenti',
        component: UtentiComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CompletedComponent,
        IncompletedComponent,
        UtentiComponent,
        HomebarComponent,
        TodoTuttoComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ], // Aggiungi FormsModule qui
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
