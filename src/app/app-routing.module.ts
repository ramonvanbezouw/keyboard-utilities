import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyboardTestComponent } from './routes/keyboard-test/keyboard-test.component';


const routes: Routes =  [
  { path: '**', component: KeyboardTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
