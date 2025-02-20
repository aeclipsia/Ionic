import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./grid/grid.module').then((m) => m.GridPageModule),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./input/input.module').then((m) => m.InputPageModule),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./loading/loading.module').then((m) => m.LoadingPageModule),
  },
  {
    path: 'menus',
    loadChildren: () =>
      import('./menus/menus.module').then((m) => m.MenusPageModule),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormsPageModule),
  },
  {
    path: 'detalle-usuario',
    loadChildren: () =>
      import('./detalle-usuario/detalle-usuario.module').then(
        (m) => m.DetalleUsuarioPageModule
      ),
  },  {
    path: 'ordenar',
    loadChildren: () => import('./ordenar/ordenar.module').then( m => m.OrdenarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
