import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service'; // Service pour les attractions
import { CommonModule } from '@angular/common';
import { Observable, catchError, of } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface'; // Interface pour typer les attractions
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Ajout pour les dialogues
import { ModaleAvisComponent } from '../modale-avis/modale-avis.component'; // Composant de la modale
import { TranslateService, TranslateModule } from '@ngx-translate/core'; // Ajout du service de traduction

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    TranslateModule // Ajout du module de traduction
  ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent {
  public attractions: Observable<AttractionInterface[]> | null = null; // Ajout de null pour éviter l'erreur au démarrage

  constructor(
    public attractionService: AttractionService, // Service pour gérer les attractions
    private router: Router, // Router pour la navigation
    private dialog: MatDialog, // Service pour ouvrir les modales
    private translate: TranslateService // Service de traduction
  ) {
    // Initialisation des attractions avec gestion d'erreur
    this.attractions = this.attractionService.getAllAttraction().pipe(
      catchError(error => {
        console.error('Erreur lors du chargement des attractions:', error);
        return of([]); // Retourne un tableau vide en cas d'erreur
      })
    );

    // Définir la langue par défaut
    this.translate.setDefaultLang('fr');

    // Vérifier si une langue a été enregistrée dans le localStorage
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.translate.use(savedLang);
    }
  }

  /**
   * Changer la langue du site
   * @param lang - Code de la langue ('fr' ou 'en')
   */
  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // Sauvegarde de la langue sélectionnée
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
        // Ici, tu peux envoyer l'avis au backend
      }
    });
  }

  /**
   * Naviguer vers la page des avis pour une attraction
   * @param attractionId - ID de l'attraction
   */
  voirAvis(attractionId: number | null) {
    if (attractionId) {
      console.log('Redirection vers /voir-avis/' + attractionId);
      this.router.navigate(['/voir-avis', attractionId]); // Navigue vers voir-avis avec l'ID
    } else {
      console.warn("Impossible d'afficher les avis : ID d'attraction invalide");
    }
  }
}
