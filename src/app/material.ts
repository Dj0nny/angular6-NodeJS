import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';




import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule, MatCardModule, MatButtonModule],
    exports: [MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule, MatCardModule, MatButtonModule],
})

export class MaterialModule { }