const contentful = require('contentful')

/*const Client = contentful.createClient({
	space: process.env.REACT_APP_API_SPACE,
	accessToken: process.env.REACT_APP_ACCESS_TOKEN	
});*/

const Client = contentful.createClient({
	space: 'dujihsrsbx1h',
	accessToken: 'moJsI-e1V8jJ0BDPDthgzZhm0rVSxH5iwD1d2_ZDtZM'	
});



export default Client;