import { Injectable } from '@angular/core';
import { AdminConfirmDialogComponent } from './admin-confirm-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AdminConfirmDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(message: string): MatDialogRef<AdminConfirmDialogComponent, Boolean>{
    return this.dialog.open(AdminConfirmDialogComponent, {
      width: '400px',
      data: {
        message: message
      }
    });
  }
}
