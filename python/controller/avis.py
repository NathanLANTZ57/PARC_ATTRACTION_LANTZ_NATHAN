from flask import jsonify, request
import request.request as req

def add_avis(json):
    cur, conn = req.get_db_connection()
    
    requete = """
    INSERT INTO avis (attraction_id, texte, note, nom, prenom, anonyme) 
    VALUES (%s, %s, %s, %s, %s, %s);
    """
    valeurs = (json['attraction_id'], json['texte'], json['note'], json['nom'], json['prenom'], json['anonyme'])

    cur.execute(requete, valeurs)
    conn.commit()
    conn.close()

    return {"message": "Avis ajouté avec succès."}, 200

def get_avis(attraction_id):
    cur, conn = req.get_db_connection()

    # Requête pour récupérer les avis liés à l'attraction_id
    requete = """
    SELECT texte, note, nom, prenom, anonyme 
    FROM avis 
    WHERE attraction_id = %s;
    """
    cur.execute(requete, (attraction_id,))
    avis = cur.fetchall()
    conn.close()

    # Vérifie si des avis ont été trouvés
    if not avis:
        return jsonify([]), 200  # Retourne une liste vide si aucun avis n'est trouvé

    # Formate les résultats en JSON lisible
    avis_list = []
    for row in avis:
        avis_list.append({
            "texte": row[0],
            "note": row[1],
            "nom": row[2] if row[2] else "Anonyme",
            "prenom": row[3] if row[3] else "",
            "anonyme": row[4]
        })

    return jsonify(avis_list), 200