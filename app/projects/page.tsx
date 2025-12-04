export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Stock Return Prediction Using Statistical Learning Models',
      description: 'A comprehensive machine learning project focused on predicting stock returns using various statistical learning techniques.',
      details: [
        'Implemented Linear Regression, Random Forests, and Neural Networks to predict stock returns',
        'Tuned models using Recursive Feature Elimination (RFE), grid search, random search, and cross-validation',
        'Trained on 4M+ records across 30,000 stocks for robust model performance',
        'Achieved best predictive accuracy with Linear Regression (RMSE 0.2186)',
        'Neural Networks delivered best portfolio performance with Sharpe Ratio 0.18 and Average Return 3.95% in simulated trading strategies',
        'Conducted extensive feature engineering and data preprocessing to handle large-scale financial datasets'
      ],
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Machine Learning', 'Cross-Validation'],
      results: 'Best model achieved RMSE of 0.2186 with Linear Regression, while Neural Networks provided optimal portfolio performance with Sharpe Ratio 0.18'
    },
    {
      id: 2,
      title: 'Options Pricing Using Machine Learning (NVDA)',
      description: 'Advanced options pricing model comparing traditional quantitative finance methods with modern machine learning approaches for NVDA call options.',
      details: [
        'Built and compared multiple pricing models: Black-Scholes-Merton, Binomial Trees, and ML models (XGBoost, TensorFlow Neural Networks)',
        'Collected and processed real-time market data for NVDA options',
        'ML models achieved superior accuracy: XGBoost MAE 0.0278; TensorFlow NN MSE 0.0015',
        'ML models demonstrated faster runtimes compared to traditional methods',
        'Better captured volatility patterns and market dynamics through machine learning',
        'Implemented Greeks calculation (Delta, Gamma, Theta, Vega) for risk management',
        'Validated models against market prices and conducted backtesting'
      ],
      technologies: ['Python', 'XGBoost', 'TensorFlow', 'Black-Scholes', 'QuantLib', 'Options Pricing', 'Machine Learning'],
      results: 'XGBoost achieved MAE of 0.0278 and TensorFlow Neural Network achieved MSE of 0.0015, outperforming traditional Black-Scholes and Binomial Tree models'
    },
    {
      id: 3,
      title: 'Black-Litterman Asset Allocation for DJIA Portfolio',
      description: 'Portfolio optimization project implementing the Black-Litterman model for a 30-stock Dow Jones Industrial Average (DJIA) portfolio.',
      details: [
        'Implemented the Black-Litterman portfolio optimization model in Python',
        'Constructed portfolio using all 30 stocks in the DJIA index',
        'Integrated market equilibrium returns with 3 analyst views for enhanced return estimation',
        'Calculated posterior returns that closely matched published benchmarks',
        'Achieved less than 0.05% deviation from published benchmark posterior returns',
        'Optimized portfolio weights for risk-adjusted returns',
        'Conducted sensitivity analysis on view confidence levels',
        'Compared results with traditional Markowitz mean-variance optimization'
      ],
      technologies: ['Python', 'Black-Litterman Model', 'Portfolio Optimization', 'NumPy', 'SciPy', 'Pandas', 'Quantitative Finance'],
      results: 'Achieved less than 0.05% deviation from published benchmark posterior returns, demonstrating high accuracy in model implementation'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">
            Quantitative finance and machine learning projects showcasing advanced modeling and analysis
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-blue-600">0{index + 1}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg mb-4">{project.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Details</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Results</h3>
                <p className="text-gray-700">{project.results}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}

