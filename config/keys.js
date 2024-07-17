const username = 'nour';
const password = 'nour123';
const clusterName = 'cluster1';
const dbName = 'test'; // You can specify the default database here if needed

const dbPassword = `mongodb+srv://${username}:${encodeURIComponent(password)}@${clusterName}.brm1hki.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = {
    mongoURI: dbPassword
};
