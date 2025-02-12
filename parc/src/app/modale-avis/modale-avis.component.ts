import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { AvisService } from '../Service/avis.service';

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
    @Inject(MAT_DIALOG_DATA) public data: { attractionNom: string, attractionId: number },
    private avisService: AvisService
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
    const avis = {
      attraction_id: this.data.attractionId,
      ...this.avisForm.value
    };

    this.avisService.ajouterAvis(avis).subscribe(response => {
      console.log('Avis ajouté:', response);
      this.dialogRef.close(avis);
    });
  }
}
