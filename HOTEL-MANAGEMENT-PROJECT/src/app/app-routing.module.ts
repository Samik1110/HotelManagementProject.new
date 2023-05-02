import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OwnerComponent } from './owner/owner.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { BooknowComponent } from './booknow/booknow.component';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';

const routes: Routes = [
  { path : '' , component:HomeComponent},
  {path : 'home', component:HomeComponent},
  // { path: 'admin', component: AdminComponent},
  // { path : 'owner', component: OwnerComponent},
  // { path : 'user', component: UserComponent},
  { path : 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  { path : 'hotel-details', component: HotelDetailsComponent},
  {path : 'booknow', component: BooknowComponent},
{ path : 'custom-snackbar', component:CustomSnackbarComponent},

{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }, 
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
