import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ZoomPanDragCanvasComponent } from './zoom-pan-drag-canvas/zoom-pan-drag-canvas.component';


const routes: Routes = [
  { path: '', redirectTo: '/zoompandragon', pathMatch: 'full' },
  { path: 'zoompandrag', component: ZoomPanDragCanvasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
