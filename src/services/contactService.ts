import { ContactFormData } from '../types/contact';

/**
 * Service d'envoi de formulaire de contact.
 * Actuellement simulé avec promesse asynchrone réaliste.
 * Facilement remplaçable par un appel fetch vers /api/contact, Resend, Supabase ou EmailJS.
 */
export async function sendContactMessage(payload: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Simule une latence réseau
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Validation basique côté service
  if (!payload.fullName || !payload.email || !payload.message) {
    throw new Error('Veuillez remplir tous les champs obligatoires.');
  }

  // Enregistrement de log (ou envoi backend futur)
  console.info('[Nexora237 Contact Service] Message reçu :', payload);

  return {
    success: true,
    message: 'Votre message a bien été transmis au comité de coordination de Nexora237. Nous vous répondrons sous 48h.',
  };
}
