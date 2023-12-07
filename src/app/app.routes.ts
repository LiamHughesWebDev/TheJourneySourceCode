import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

export const routes: Routes = [
    {path: '', component : HomeComponent},
    {path: 'post/:id', component: PostComponent}
];
