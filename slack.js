// const request = require('request');
import request from 'request';
export let Message = {
    postMessage: async (token, channel, text) => {
        const options = {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            form: {
                channel: channel,
                text: text,
                as_user: true

            },
            json: true
        };
        console.log(options);

        return new Promise((resolve, reject) => {
            request.post('https://slack.com/api/chat.postMessage', options, (error, res, body) => {
                if (error) {
                    reject(error);
                }

                resolve({
                    response: res, 
                    body: body
                });
            });
        });
    }
};

// 元のプログラム
// const request = require('request');

// module.exports = {
//     postMessage: async (token, channel, text) => {
//         const options = {
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             },
//             form: {
//                 channel: channel,
//                 text: text,
//                 as_user: true
//             },
//             json: true
//         };
//         console.log(options);

//         return new Promise((resolve, reject) => {
//             request.post('https://slack.com/api/chat.postMessage', options, (error, res, body) => {
//                 if (error) {
//                     reject(error);
//                 }

//                 resolve({
//                     response: res, 
//                     body: body
//                 });
//             });
//         });
//     }
// };