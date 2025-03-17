import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolioResponse = await axios.get('/portfolio', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setPortfolio(portfolioResponse.data);

        const pricesResponse = await axios.get('/crypto/prices');
        setPrices(pricesResponse.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading your portfolio...</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Canary Wealth Fund</h1>
        <h2>Investor Dashboard</h2>
      </header>
      
      <div className="dashboard-content">
        <div className="portfolio-summary">
          <h3>Portfolio Summary</h3>
          {portfolio ? (
            <div>
              <p className="total-value">Total Value: ${portfolio.totalValue.toLocaleString()}</p>
              <div className="assets-list">
                {portfolio.assets.map((asset) => (
                  <div key={asset.symbol} className="asset-item">
                    <h4>{asset.symbol}</h4>
                    <p>Amount: {asset.amount}</p>
                    <p>Value: ${asset.value.toLocaleString()}</p>
                    {prices && prices[asset.symbol.toLowerCase()] && (
                      <p>Current Price: ${prices[asset.symbol.toLowerCase()].usd}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No portfolio data available</p>
          )}
        </div>
        
        <div className="market-data">
          <h3>Market Data</h3>
          {prices ? (
            <div className="crypto-prices">
              {Object.entries(prices).map(([crypto, data]) => (
                <div key={crypto} className="crypto-price-item">
                  <h4>{crypto.charAt(0).toUpperCase() + crypto.slice(1)}</h4>
                  <p>${data.usd}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No market data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;