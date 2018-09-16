import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatIconModule, MatMenuModule],
    exports: [MatToolbarModule, MatIconModule, MatMenuModule],
})

export class MaterialModule { }