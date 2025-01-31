import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modale-avis',
  standalone: true,
  templateUrl: './modale-avis.component.html',
  styleUrls: ['./modale-avis.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class ModaleAvisComponent {
  avisForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModaleAvisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { attractionNom: string }
  ) {
    this.avisForm = this.fb.group({
      texte: ['', [Validators.required, Validators.minLength(10)]],
      note: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      anonyme: [false],
      nom: [''],
      prenom: ['']
    });
  }

  soumettreAvis() {
    const avis = this.avisForm.value;
    this.dialogRef.close(avis); // Retourne les données à l'appelant
  }
}
