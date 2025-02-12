import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AvisService } from '../Service/avis.service';

@Component({
  selector: 'app-voir-avis',
  standalone: true,
  templateUrl: './voir-avis.component.html',
  styleUrls: ['./voir-avis.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ]
})
export class VoirAvisComponent implements OnInit {
  avis: any[] = []; // Tableau pour stocker les avis
  attractionId: number = 0; // Stocker l'ID de l'attraction récupéré depuis l'URL

  constructor(
    private route: ActivatedRoute,
    private avisService: AvisService
  ) {}

  ngOnInit(): void {
    this.attractionId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Attraction ID récupéré :', this.attractionId);
  
    if (isNaN(this.attractionId)) {
      console.error('ID invalide');
      return;
    }
  
    this.avisService.getAvis(this.attractionId).subscribe(
      (data) => {
        console.log('Réponse de l\'API :', data); // Ajout du log
        this.avis = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des avis :', error);
      }
    );
  }  
}
