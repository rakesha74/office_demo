
const fastify = require('fastify')();

fastify.register(require('fastify-cookie'));

fastify.get('/mock', (request, reply) => {
// Set the cookie
reply.setCookie('cookieName', '');

// Send the mock response
reply.send({ message: 'Mock response' });
});

fastify.get('/cookie', (request, reply) => {
  
  const cookie = request.headers.cookie;
  console.log(cookie);
  let result='';
  //const cookieString = '';

// Process the cookie (e.g., print its value)
if (cookie) {
  const cookieArray = cookie.split(';');
  cookieArray.forEach((cookie)=>{
      const cookieSplit = cookie.split('=');
      const[cookieName, cookieValue] = cookieSplit;
      result = result + cookieName + "=" + cookieValue + ";"
  })
  console.log(result);
} else {
  console.log('No cookie found');
}
reply.send(result);
});

fastify.listen(3000, (err, address) => {
if (err) {
  console.error(err);
  process.exit(1);
}
console.log(`Server listening on ${address}`);
});