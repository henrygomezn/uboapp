import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './secure/secure.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth.guard';
import { ResultadosComponent } from './resultados/resultados.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'secure',canActivate: [ AuthGuard ], component: SecureComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test', canActivate: [ AuthGuard ], component: TestComponent },
  { path: 'resultados' , canActivate: [ AuthGuard ], component: ResultadosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
