import { useContext } from 'react';
import { CogumsContext } from './CogumsContext';

export const useCogums = () => useContext(CogumsContext);