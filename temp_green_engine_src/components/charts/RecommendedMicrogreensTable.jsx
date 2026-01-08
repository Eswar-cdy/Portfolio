import React from 'react';
import { Table } from 'react-bootstrap';
import '../../assets/styles/components/RecommendedMicrogreensTable.css';

const RecommendedMicrogreensTable = ({ recommendations }) => {
  return (
    <div className="recommended-microgreens-table">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Microgreen</th>
            <th>Daily Amount</th>
            <th>Key Nutrients</th>
            <th>Benefits</th>
            <th>How to Use</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((microgreen, index) => (
            <tr key={index}>
              <td>
                <div className="microgreen-name">
                  <span className="variety-name">{microgreen.name}</span>
                  <span className="scientific-name">{microgreen.scientificName}</span>
                </div>
              </td>
              <td>
                <div className="recommended-amount">
                  <span className="amount">{microgreen.recommendedGrams}g</span>
                  <span className="frequency">daily</span>
                </div>
              </td>
              <td>
                <ul className="nutrients-list">
                  {microgreen.keyNutrients.map((nutrient, idx) => (
                    <li key={idx}>{nutrient}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul className="benefits-list">
                  {microgreen.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </td>
              <td>
                <div className="usage-tips">
                  {microgreen.usageTips}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RecommendedMicrogreensTable;
