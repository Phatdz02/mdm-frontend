import React, { useState } from 'react';
import axios from 'axios'; 
import './Tickethistory.css';

function TicketHistoryForm() {
  const [ticketCode, setTicketCode] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null); 
  
  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/search', {
        params: {
          ticketCode,
        },
      });
      setResults(response.data);
      setError(null);
    } catch (error) {
      console.error('Error searching:', error);
      setError(error.response ? error.response.data.error : 'An error occurred');
    }
  };

  const handleShowAll = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/show');
      setResults(response.data);
      setError(null);
    } catch (error) {
      console.error('Error showing all:', error);
      setError(error.response ? error.response.data.error : 'An error occurred');
    }
  };

  
  return (
    <div className="ticket-history-form">
      <h2>Tra cứu lịch sử mua vé</h2>
      <div className="form-group">
        <label htmlFor="ticketCode">Mã vé:</label>
        <input
          type="text"
          id="ticketCode"
          value={ticketCode}
          onChange={(e) => setTicketCode(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Tìm</button>
      <button onClick={handleShowAll}>Xem tất cả vé</button>

    
      <div className="results">
        <h3>Kết quả trả về:</h3>
        <table>
          <thead>
            <tr>
              <th>Mã vé</th>
              <th>Thời gian</th>
              <th>Tuyến đường</th>
              <th>Ghế</th>
            </tr>
          </thead>
          <tbody>
          {results.map((result, index) => (
              <tr key={index}>
                <td>{result.ticketCode}</td>
                <td>{result.time}</td>
                <td>{result.route}</td>
                <td>{result.seat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TicketHistoryForm;
