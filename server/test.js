//const req = require('express/lib/request');
const main = require('./main');
const axios = require('axios');
const qs = require('qs');

const access_token = 'wSsC-JoXlXB1pPPhhSblaFhQwueimgDYe3CD1wo9dGgAAAF-3k2rjg'

//main.show('users');
//main.signup('sd', '1234', 'asd', 'asd', 'sad', 0,0,0);
//main.kakaoLogin();
//  main.refreshToken('yytTHkERaLxMTI2kCIv1F2DPHinw30HrCnZq-QopyWAAAAF-2fVmSA');
// main.showInfo(access_token);
// main.checkToken(access_token);
// main.findfromproid(access_token);
// main.contractInfo(access_token);
// main.contractFinish(access_token);
// main.showReply(access_token);
// main.findfromusrid(access_token);
main.show(access_token);