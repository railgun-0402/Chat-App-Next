'use client';

import { useState, useMemo } from 'react';
import { ActionType } from '../types';
import { getPlaceholder } from '@/utils/getPlaceholder';

{/* Step1 ActionForm Hooks */}
export function useActionForm() {
  /// action type
  const [type, setType] = useState<ActionType | null>(null);
  /// Input Form Values
  const [description, setDescription] = useState('');
  /// Step1〜3
  const [step, setStep] = useState<1 | 2>(1);

  const placeholder = useMemo(() => getPlaceholder(type), [type]);
  /// Button Able or Disable
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
