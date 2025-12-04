'use client'

export default function Downloads() {
  const pdfFiles = [
    {
      id: 1,
      title: 'Resume - Vidur Nair',
      description: 'Complete professional resume with experience, education, and skills',
      filename: 'Vidur_Nair_Resume.pdf',
      category: 'Professional Documents'
    },
    {
      id: 2,
      title: 'Portfolio Summary',
      description: 'Summary of trading performance and portfolio management achievements',
      filename: 'Portfolio_Summary.pdf',
      category: 'Professional Documents'
    },
    {
      id: 3,
      title: 'Project Documentation - Stock Return Prediction',
      description: 'Detailed documentation for the Stock Return Prediction project',
      filename: 'Stock_Return_Prediction_Documentation.pdf',
      category: 'Project Documentation'
    },
    {
      id: 4,
      title: 'Project Documentation - Options Pricing ML',
      description: 'Complete documentation for the NVDA Options Pricing using Machine Learning project',
      filename: 'Options_Pricing_ML_Documentation.pdf',
      category: 'Project Documentation'
    },
    {
      id: 5,
      title: 'Project Documentation - Black-Litterman Portfolio',
      description: 'Documentation for the Black-Litterman Asset Allocation project',
      filename: 'Black_Litterman_Portfolio_Documentation.pdf',
      category: 'Project Documentation'
    },
    {
      id: 6,
      title: 'Certificates',
      description: 'Collection of professional certificates and licenses',
      filename: 'Certificates.pdf',
      category: 'Certificates'
    }
  ]

  const handleDownload = (filename: string) => {
    // Direct link to file in public folder (works with static export)
    window.open(`/downloads/${filename}`, '_blank')
  }

  const categories = Array.from(new Set(pdfFiles.map(file => file.category)))

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Downloads</h1>
          <p className="text-xl text-gray-600">
            Access and download professional documents, project documentation, and certificates
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-300 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pdfFiles
                .filter((file) => file.category === category)
                .map((file) => (
                  <div
                    key={file.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {file.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">{file.description}</p>
                        <p className="text-xs text-gray-500 font-mono">{file.filename}</p>
                      </div>
                      <div className="ml-4">
                        <svg
                          className="w-8 h-8 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(file.filename)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Note</h3>
          <p className="text-gray-700">
            To enable actual PDF downloads, place your PDF files in the <code className="bg-gray-200 px-1 rounded">public/downloads/</code> directory with the exact filenames listed above.
          </p>
        </div>

        <div className="mt-8 text-center">
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

