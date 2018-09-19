import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatInputModule, MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule, MatCardModule, MatButtonModule],
    exports: [MatInputModule, MatToolbarModule, MatIconModule, MatMenuModule, MatGridListModule, MatCardModule, MatButtonModule],
})

export class MaterialModule { }