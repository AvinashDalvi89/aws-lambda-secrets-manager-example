const SecretsManager = require('./SecretsManager.js');

exports.handler = async (event) => {
    // TODO implement
    var secretName = '<SecreteName>';
    var region = '<Region>';
    var apiValue = await SecretsManager.getSecret(secretName, region);
    console.log(apiValue); 
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
