import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private apiUrl = 'http://localhost:5000/avis'; // URL de l'API pour les avis

  constructor(private http: HttpClient) {}

  /**
   * Ajouter un avis pour une attraction
   * @param avis - Données de l'avis (texte, note, attraction_id, etc.)
   * @returns Observable contenant la réponse du serveur
   */
  ajouterAvis(avis: {
    attraction_id: number;
    texte: string;
    note: number;
    nom?: string;
    prenom?: string;
    anonyme: boolean;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrl, avis);
  }

  /**
   * Récupérer les avis pour une attraction donnée
   * @param attractionId - ID de l'attraction
   * @returns Observable contenant un tableau d'avis
   */
  getAvis(attractionId: number): Observable<any[]> {
    if (isNaN(attractionId) || attractionId <= 0) {
      throw new Error('Invalid attraction ID'); // Vérification de l'ID
    }

    return this.http.get<any[]>(`http://localhost:5000/avis/${attractionId}`);  }
}
