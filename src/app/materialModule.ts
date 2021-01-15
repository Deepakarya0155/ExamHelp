import {NgModule} from '@angular/core'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';


const mtarray=[MatButtonModule,MatToolbarModule,MatTableModule,MatFormFieldModule,MatInputModule,
    MatBadgeModule,MatGridListModule,MatDialogModule]

@NgModule({
    imports:[mtarray],
    exports:[mtarray]
})
export class MaterialModule{}