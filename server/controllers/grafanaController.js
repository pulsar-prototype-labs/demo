// const grafanaController = {};

// grafanaController.getKey = async(req, res, next) => {
//     try {
//         const response = await fetch(
//           'http://host.docker.internal:3000/api/auth/keys',
//           {
//             method: 'POST',
//             // mode: 'no-cors',
//             headers: {
//               Authorization:
//                 'Basic ' + Buffer.from('admin:prom-operator').toString('base64'),
//               Accept: '*/*',
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               name: Math.random().toString(36).substring(7),
//               role: 'Admin',
//               secondsToLive: 86400,
//             }),
//           }
//         );
//         const data = (await response.json())
//         res.locals.key = data.key;
//         return next();
//       } catch (error) {
//         console.log('Error:', error);
//         return next({
//           log: 'failed',
//           status: 500,
//           message: {
//             err: '',
//           },
//         });
//       }
// }

// module.exports = grafanaController