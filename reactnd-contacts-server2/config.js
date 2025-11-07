exports.port = process.env.REACT_APP_CONTACTS_API_URL || 5001
exports.origin = process.env.ORIGIN || `http://localhost:${exports.port}`