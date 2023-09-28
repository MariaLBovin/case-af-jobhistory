import { IGetJobAds } from '@/models/IGetJobAds';
import { createContext } from 'react';

export const SearchBodyContext = createContext<IGetJobAds>({ employer: '' });
