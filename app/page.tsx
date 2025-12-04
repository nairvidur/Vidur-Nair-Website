export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Vidur Nair</h1>
          <div className="text-lg text-gray-600 space-y-1">
            <p>Jersey City, NJ, USA</p>
            <p>
              <a href="mailto:work.nairvidur@gmail.com" className="text-blue-600 hover:underline">
                work.nairvidur@gmail.com
              </a>
              {' | '}
              <a href="tel:+18608340478" className="text-blue-600 hover:underline">
                +1 (860)-834-0478
              </a>
              {' | '}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Derivatives trader and financial engineer with a track record of delivering double-digit portfolio returns 
            and building high performance trading models. Skilled in derivative pricing, trade analytics, and strategy 
            research, with hands-on experience managing $1.25M AUM and optimizing strategies for risk-adjusted alpha.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          
          <div className="border-l-4 border-blue-600 pl-6 mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Options Trader</h3>
                <p className="text-lg text-gray-700 font-medium">Junomoneta Finsol Pvt Ltd</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">GIFT City, India</p>
                <p className="text-gray-500 text-sm">Dec 2022 – Apr 2024</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Traded and managed a $1.25M portfolio, achieving an 11.5% annual return and 2.88 Sharpe ratio primarily through intraday equity options trading</li>
              <li>Conducted extensive backtesting and quantitative analysis using Python to evaluate strategy performance across market conditions using softwares like Stockmock, Algotest</li>
              <li>Worked along with RMS and trade team to reduce risk exposure and conducting Value at Risk (VaR) stress testing, simulating different market conditions and contributed to maintaining overnight risk exposure to 20%</li>
              <li>Optimized volatility arbitrage and intraday options strategies to reduce P&L volatility during high VIX</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Master of Science in Financial Engineering</h3>
                  <p className="text-lg text-gray-700 font-medium">Stevens Institute of Technology</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Hoboken, NJ</p>
                  <p className="text-gray-500 text-sm">Sep 2024 – Dec 2025</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Coursework: Stochastic Calculus, Pricing and Hedging, Advanced Derivatives, Portfolio Theory and Application, 
                Statistical Machine Learning, Computational methods in Finance, Quantitative hedge fund strategies
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Post Graduate Diploma in Financial Management</h3>
                  <p className="text-lg text-gray-700 font-medium">B.K. School of Professional and Management Studies</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Guj, India</p>
                  <p className="text-gray-500 text-sm">Jun 2023 – Jun 2024</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Coursework: Financial Statement Analysis, Financial Accounting, Corporate Finance, International Finance, 
                Working Capital Management, Capital Budgeting, Valuation of Bonds and Stocks
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Bachelors of Arts in Economics</h3>
                  <p className="text-lg text-gray-700 font-medium">St. Xavier's College</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Guj, India</p>
                  <p className="text-gray-500 text-sm">Jun 2019 – Jun 2022</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Coursework: Microeconomics, Mathematical Methods for Statistics, Macroeconomic analysis, Applied Statistics, 
                International economics, Managerial Economics, Environmental Economics, Public Economics
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Programming Languages</h3>
              <p className="text-gray-700">C++, Python, C, R, SQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Trading Strategies</h3>
              <p className="text-gray-700">Volatility Arbitrage, Short-Gamma, Buy-gamma, Future Long-Short, Synthetic Spreads, Strangles, Straddles, Iron condor, Calendar spreads, Reverse Calendar spread, Butterfly, conversion-reversion</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Mathematics</h3>
              <p className="text-gray-700">Probability theory, Stochastic Calculus, Linear Algebra, Optimization, Partial Differential Equations</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Quantitative Finance</h3>
              <p className="text-gray-700">Statistical Modeling, Derivative Pricing, Time Series Analysis, Factor & Predictive Modelling</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-700">Linear & Logistic Regression, Lasso & Ridge Regression, Random Forest, Neural Network</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tools & Libraries</h3>
              <p className="text-gray-700">NumPy, Pandas, Matplotlib, Seaborn, SciPy, QuantLib, Statsmodels, Scikit-learn</p>
            </div>
          </div>
        </section>

        {/* Licenses & Certificates Section */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Licenses & Certificates</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-900 font-medium">Bloomberg Market Concept</span>
              <span className="text-gray-600 text-sm">Dec 2024</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-900 font-medium">FINRA - Securities Industry Essentials</span>
              <span className="text-gray-600 text-sm">Nov 2025</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-900 font-medium">Akuna Capital 201 Options Trading Course</span>
              <span className="text-gray-600 text-sm">Nov 2025</span>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="text-center">
          <div className="inline-flex space-x-4">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              View My Projects
            </a>
            <a
              href="/downloads"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition shadow-md"
            >
              Download PDFs
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

