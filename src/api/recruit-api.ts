import Card from '../domain/Card';
import axios from 'axios';
import { apiBaseUrl } from '../envvars';

export const registerCard = (card: Card) => axios.post(`${apiBaseUrl}cards`, card);