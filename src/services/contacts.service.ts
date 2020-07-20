import { Contact } from "../types/contacts.types"
import axios from 'axios';
export const searchContacts = async (query: string): Promise<Contact[]> => {
  const res = await axios.post<Contact[]>('http://localhost:5000/api/search', {query});
  return res.data
}