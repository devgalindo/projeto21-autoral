import api from './api'

export default async function verifyHealth() {
    const response = await api.get('/health');
    
      return response.data;
}