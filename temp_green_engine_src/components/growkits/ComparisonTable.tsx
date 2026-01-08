import React from 'react';

interface SystemComparison {
  feature: string;
  sprout: string;
  garden: string;
  pro: string;
  commercial: string;
}

const comparisonData: SystemComparison[] = [
  {
    feature: 'Size (W × D × H)',
    sprout: '12" × 8" × 10"',
    garden: '24" × 16" × 18"',
    pro: '36" × 24" × 30"',
    commercial: '48" × 36" × 48"'
  },
  {
    feature: 'Growing Capacity',
    sprout: '1-2 trays',
    garden: '3-4 trays',
    pro: '6-8 trays',
    commercial: '12-16 trays'
  },
  {
    feature: 'Automation Level',
    sprout: 'Basic',
    garden: 'Smart',
    pro: 'Advanced',
    commercial: 'Full AI'
  },
  {
    feature: 'Maintenance',
    sprout: 'Weekly',
    garden: 'Bi-weekly',
    pro: 'Monthly',
    commercial: 'Quarterly'
  },
  {
    feature: 'Power Consumption',
    sprout: '15W',
    garden: '45W',
    pro: '90W',
    commercial: '180W'
  },
  {
    feature: 'Price',
    sprout: '$129',
    garden: '$349',
    pro: '$799',
    commercial: 'Custom Quote'
  }
];

const ComparisonTable: React.FC = () => {
  return (
    <div className="comparison-table-container">
      <h2 className="comparison-heading">Compare All Systems</h2>
      
      {/* Desktop Table */}
      <div className="comparison-table-desktop">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Sprout Kit</th>
              <th className="popular-column">Garden System</th>
              <th>Pro System</th>
              <th>Commercial Pro</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index}>
                <td className="feature-name">{row.feature}</td>
                <td>{row.sprout}</td>
                <td className="popular-column">{row.garden}</td>
                <td>{row.pro}</td>
                <td>{row.commercial}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Accordion */}
      <div className="comparison-table-mobile">
        {comparisonData.map((row, index) => (
          <div key={index} className="comparison-row-mobile">
            <div className="feature-name-mobile">{row.feature}</div>
            <div className="feature-values-mobile">
              <div className="value-item">
                <span className="system-label">Sprout:</span>
                <span>{row.sprout}</span>
              </div>
              <div className="value-item popular">
                <span className="system-label">Garden:</span>
                <span>{row.garden}</span>
              </div>
              <div className="value-item">
                <span className="system-label">Pro:</span>
                <span>{row.pro}</span>
              </div>
              <div className="value-item">
                <span className="system-label">Commercial:</span>
                <span>{row.commercial}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;

