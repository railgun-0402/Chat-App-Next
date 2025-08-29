import { ActionType } from '@/features/action-form/types';

const placeholders: Record<ActionType, string> = {
  issue: 'Please describe the problems or challenges you are facing in detail.',
  tech: 'Please describe the technical question or support you need.',
  both: 'Please describe both the problems and technical questions.',
  none: 'Please provide your request.',
};

export function getPlaceholder(type?: ActionType | null): string {
  if (!type) return 'Detailed Description';
  return placeholders[type];
}
