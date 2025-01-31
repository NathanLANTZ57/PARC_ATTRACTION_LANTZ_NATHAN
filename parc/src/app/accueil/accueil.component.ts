import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service'; // Service pour les attractions
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface'; // Interface pour typer les attractions
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Ajout pour les dialogues
import { ModaleAvisComponent } from '../modale-avis/modale-avis.component'; // Composant de la modale

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatDialogModule], // Ajout des imports
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'], // Correction : renommé en style**s**Url
})
export class AccueilComponent {
  public attractions: Observable<AttractionInterface[]>; // Observable pour récupérer les attractions

  constructor(
    public attractionService: AttractionService, // Service pour gérer les attractions
    private router: Router, // Router pour la navigation
    private dialog: MatDialog // Service pour ouvrir les modales
  ) {
    // Initialisation des attractions
    this.attractions = this.attractionService.getAllAttraction();
  }

  /**
   * Ouvrir une modale pour ajouter un avis
   * @param attractionNom - Nom de l'attraction pour laquelle ajouter un avis
   */
  ajouterAvis(attractionNom: string) {
    const dialogRef = this.dialog.open(ModaleAvisComponent, {
      width: '500px', // Largeur de la modale
      data: { attractionNom }, // Données envoyées à la modale
    });

    // Après la fermeture de la modale
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Avis soumis :', result);
        // Tu peux ajouter ici la logique pour envoyer l'avis au backend
      }
    });
  }

  /**
   * Naviguer vers la page des avis pour une attraction
   * @param attractionNom - Nom de l'attraction
   */
  voirAvis(attractionNom: string) {
    this.router.navigate(['/voir-avis', attractionNom]); // Redirige vers la page des avis
  }
}
