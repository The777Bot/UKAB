import { jsPDF } from 'jspdf'

function ResultsDisplay({ result }) {
    if (!result) return null

    // Handle error / not found
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

    // Format dates from DD/MM/YYYY or ISO
    const formatDate = (dateString) => {
        if (!dateString) return '—'
        const dmyMatch = dateString.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
        if (dmyMatch) {
            const [, d, m, y] = dmyMatch
            return new Date(`${y}-${m}-${d}`).toLocaleDateString('en-GB', {
                day: '2-digit', month: 'long', year: 'numeric'
            })
        }
        const parsed = new Date(dateString)
        return isNaN(parsed) ? dateString : parsed.toLocaleDateString('en-GB', {
            day: '2-digit', month: 'long', year: 'numeric'
        })
    }

    const statusUpper = (data.status || '').toUpperCase()
    const isActive = statusUpper === 'ACTIVE'
    const isExpired = statusUpper === 'EXPIRED'

    const rows = [
        { label: 'Company Name',   value: data.companyName  || '—' },
        { label: 'Standard',       value: data.standard     || '—' },
        { label: 'Status',         value: statusUpper       || '—', isStatus: true },
        { label: 'Certification No', value: data.certNumber || '—' },
        { label: 'Award Date',     value: formatDate(data.awardDate) },
        { label: 'Expiry Date',    value: formatDate(data.expiryDate) },
    ]

    // ---------- PDF Download ----------
    const handleDownload = () => {
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
        const pageW = pdf.internal.pageSize.getWidth()

        // Header bar
        pdf.setFillColor(22, 101, 52)   // dark green
        pdf.rect(0, 0, pageW, 30, 'F')

        pdf.setTextColor(255, 255, 255)
        pdf.setFontSize(18)
        pdf.setFont('helvetica', 'bold')
        pdf.text('UKAB', 15, 12)

        pdf.setFontSize(9)
        pdf.setFont('helvetica', 'normal')
        pdf.text('United Kingdom Accreditation Body', 15, 19)
        pdf.text(`Generated: ${new Date().toLocaleDateString('en-GB')}`, pageW - 15, 19, { align: 'right' })

        // Title
        pdf.setTextColor(30, 41, 59)
        pdf.setFontSize(16)
        pdf.setFont('helvetica', 'bold')
        pdf.text('Certificate Verification', pageW / 2, 45, { align: 'center' })

        // Divider
        pdf.setDrawColor(200, 200, 200)
        pdf.line(15, 50, pageW - 15, 50)

        // Rows
        const startY = 60
        const rowH = 14
        const col1 = 20
        const col2 = 90

        rows.forEach((row, i) => {
            const y = startY + i * rowH

            // Alternating background
            if (i % 2 === 0) {
                pdf.setFillColor(248, 250, 252)
                pdf.rect(15, y - 6, pageW - 30, rowH, 'F')
            }

            // Label
            pdf.setTextColor(100, 116, 139)
            pdf.setFontSize(9)
            pdf.setFont('helvetica', 'bold')
            pdf.text(row.label.toUpperCase(), col1, y)

            // Value
            if (row.isStatus) {
                const color = isActive ? [22, 163, 74] : isExpired ? [217, 119, 6] : [220, 38, 38]
                pdf.setTextColor(...color)
            } else {
                pdf.setTextColor(30, 41, 59)
            }
            pdf.setFontSize(10)
            pdf.setFont('helvetica', 'normal')
            pdf.text(String(row.value), col2, y)
        })

        // Verified badge
        const badgeY = startY + rows.length * rowH + 14
        pdf.setFillColor(220, 252, 231)
        pdf.roundedRect(15, badgeY, pageW - 30, 14, 3, 3, 'F')
        pdf.setTextColor(22, 101, 52)
        pdf.setFontSize(10)
        pdf.setFont('helvetica', 'bold')
        pdf.text('✓  This certificate has been verified by UKAB', pageW / 2, badgeY + 9, { align: 'center' })

        // Footer
        const footY = pdf.internal.pageSize.getHeight() - 15
        pdf.setDrawColor(200, 200, 200)
        pdf.line(15, footY - 5, pageW - 15, footY - 5)
        pdf.setTextColor(148, 163, 184)
        pdf.setFontSize(8)
        pdf.setFont('helvetica', 'normal')
        pdf.text('UKAB — United Kingdom Accreditation Body  |  icb-uk.biz', pageW / 2, footY, { align: 'center' })

        pdf.save(`UKAB_Certificate_${data.certNumber || 'verification'}.pdf`)
    }

    return (
        <div className="mt-8 animate-[fadeInUp_0.4s_ease-out_forwards]">
            {/* Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">

                {/* Card Title */}
                <div className="flex items-center justify-center py-4 border-b border-gray-200">
                    <div className="border-2 border-gray-800 rounded-lg px-6 py-2">
                        <h2 className="text-lg font-bold text-gray-900 tracking-wide">Certificate Verification</h2>
                    </div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-gray-100">
                    {rows.map((row, i) => (
                        <div key={i} className={`flex items-start px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <span className="w-40 flex-shrink-0 text-sm font-semibold text-gray-500 uppercase tracking-wide pt-0.5">
                                {row.label}
                            </span>
                            {row.isStatus ? (
                                <span className={`text-sm font-bold ${
                                    isActive  ? 'text-success-700' :
                                    isExpired ? 'text-warning-600' :
                                    'text-danger-600'
                                }`}>
                                    {statusUpper}
                                </span>
                            ) : (
                                <span className="text-sm font-medium text-gray-800">{row.value}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Download Button */}
                <div className="px-6 pt-5 pb-2">
                    <button
                        onClick={handleDownload}
                        className="w-full flex items-center justify-center gap-2 bg-success-600 hover:bg-success-700 active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-success-500/30"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Certificate
                    </button>
                </div>

                {/* Verified Notice */}
                <div className="px-6 pb-5 pt-2 text-center">
                    <p className="text-sm text-success-600 font-medium">
                        ✓ This certificate has been verified by UKAB
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResultsDisplay
