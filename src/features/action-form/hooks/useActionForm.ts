'use client';

import { useState, useMemo } from 'react';
import { ActionType } from '../types';
import { getPlaceholder } from '@/utils/getPlaceholder';

export function useActionForm() {
  const [type, setType] = useState<ActionType | null>(null);
  const [description, setDescription] = useState('');
  const [step, setStep] = useState<1 | 2>(1);

  const placeholder = useMemo(() => getPlaceholder(type), [type]);
  const canProceed = !!type && description.trim().length > 0;

  const goToStep2 = () => {
    if (canProceed) {
      setStep(2);
    }
  };

  return {
    type,
    setType,
    description,
    setDescription,
    placeholder,
    canProceed,
    step,
    goToStep2,
  } as const;
}
