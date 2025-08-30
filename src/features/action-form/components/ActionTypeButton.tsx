'use client';

import { ActionType } from '../types';

type Props = {
  type: ActionType;
  label: string;
  description: string;
  selected: boolean;
  onSelect: (type: ActionType) => void;
};

export function ActionTypeButton({ type, label, description, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(type)}
      className={`rounded-md border p-4 text-left transition-colors focus:outline-none ${
        selected
          ? 'border-blue-500 bg-gray-100'
          : 'border-gray-300 hover:border-gray-400'
      }`}
    >
      <div className="font-medium">{label}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </button>
  );
}
