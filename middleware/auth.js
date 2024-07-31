// middleware/auth.js

export default function ({ store, redirect }) {
  // Vérifie si l'utilisateur est authentifié
  const isAuthenticated = store.getters['auth/isAuthenticated'];

  // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) {
    return redirect('/connexion');
    
  }
}
