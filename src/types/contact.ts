export type ContactSubject = 
  | 'Partenariat & Sponsoring'
  | 'Rejoindre la communauté'
  | 'Proposer un projet'
  | 'Demande d\'intervention / Formation'
  | 'Question générale';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  subject: ContactSubject;
  message: string;
}

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';
