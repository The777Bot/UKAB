function ResultsDisplay({ result }) {
    if (!result) return null

    // Handle not found case
    if (!result.success) {
        return (
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">No Certificate Found</h3>
                        <p className="mt-1 text-gray-600">{result.message}</p>
                        <p className="mt-3 text-sm text-gray-500">
                            Please check the certificate number and try again. If you believe this is an error,
                            please contact our support team.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const { data } = result

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB')
    }

    return (
        <div className="mt-8 overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
                <div className="border border-success-200 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-success-200">
                        <thead className="bg-success-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-success-800 uppercase tracking-wider border-r border-success-200 last:border-r-0">
                                    Company Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-success-800 uppercase tracking-wider border-r border-success-200 last:border-r-0">
                                    Standard
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-success-800 uppercase tracking-wider border-r border-success-200 last:border-r-0">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-success-800 uppercase tracking-wider border-r border-success-200 last:border-r-0">
                                    Certification No
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-success-800 uppercase tracking-wider border-r border-success-200 last:border-r-0">
                                    Award Date
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-success-800 uppercase tracking-wider border-r border-success-200 last:border-r-0">
                                    Expiry Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-success-50 divide-y divide-success-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-success-200 last:border-r-0">
                                    {data.organizationName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-success-200 last:border-r-0">
                                    {data.certificationStandard}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm border-r border-success-200 last:border-r-0">
                                    <span className={`font-semibold ${data.status === 'Valid' ? 'text-success-700' :
                                            data.status === 'Expired' ? 'text-warning-600' :
                                                'text-danger-600'
                                        }`}>
                                        {data.status === 'Valid' ? 'ACTIVE' : data.status.toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-success-200 last:border-r-0">
                                    {data.certificateNumber}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-success-200 last:border-r-0">
                                    {formatDate(data.issueDate)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-success-200 last:border-r-0">
                                    {formatDate(data.expiryDate)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Additional Scope Info (Optional, keeping it subtle if needed, or removing if strictly following image only. 
                    The image is just one row, but scope is important. I'll add it below as a clean detail) */}
                <div className="mt-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Scope of Certification</h4>
                    <p className="text-sm text-gray-700">{data.scope}</p>
                </div>
            </div>
        </div>
    )
}

export default ResultsDisplay
