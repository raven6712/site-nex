export interface DomainItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
  color: string;
  accent: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  description: string;
  format: string;
  targetAudience: string;
  cadence: string;
  iconName: string;
}
