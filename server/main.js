const axios = require('axios');
//const res = require('express/lib/response');
// exports.show = (table) => {
//     axios.get(`http://localhost:3000/${table}`) // 전체 차 목록 출력할때 쓰셈
//     .then((res) => { //성공
//         console.log(res.data);
//     })
//     .catch((err) => { //실패
//         console.log(err.response.data);
//     })
//     .then(()=>{ //성공이던 실패던 항상 always
//         console.log('영웅소프트 화이팅!');
//     });
// }
// exports.create = (table, id, name) =>{
//     axios.post(`http://localhost:3000/${table}`, { //회원가입할때 쓰셈
//         id:id,
//         name:name
//     })
//     .then((res) => {
//         console.log('the user created succesfully!!!');
//     })
//     .catch((err) => { //실패
//         console.log(err.response.data);
//     })
//     .then(() => { //성공이던 실패던 항상 always
//         console.log('영웅소프트 화이팅!');
//     });
// }
// exports.find = (table, id) => {
//     axios.get(`http://localhost:3000/${table}/${id}`)
//     .then(function (res) {
//         console.log(res.data);
//     })
//     .catch(function (err) {
//         console.log(err.response.data);
//     })
//     .then(function () {
//         console.log('영웅소프트 화이팅!');
//     });
// }
// exports.signup = (id, password, nickname, email, phone, prv1, prv2, prv3) => {
//     axios.post(`http://34.64.207.117:3000/signup`, {
//         id:id,
//         password:password,
//         nickname:nickname,
//         email:email,
//         phone:phone,
//         prv1:prv1, //개인정보수집동의서 1, 2, 3
//         prv2:prv2,
//         prv3:prv3
//     })
//     .then(function (res) { //성공시
//         console.log(res.data);
//     })
//     .catch(function (err) { //실패시
//         console.log(err);
//     })
//     .then(function () { //항상
//         console.log('영웅소프트 화이팅!');
//     });
// }
exports.contractSend = (kind, brand, model, detail, price, mnpay, distance, option, protosay, procode, usrid) => {
    axios.post(`http://34.64.207.117:3000/contract/send`, {
        kind:kind, //1할부, 2렌트, 3리스, 4현금.
        brand:brand, //제조사
        model:model, //모델
        detail:detail, //세부모덷
        price:price, //가격
        mnpay:mnpay, //월납입금액
        distance:distance, //최대주행거리 희망
        option:option, //희망옵션 ex)선루프,,
        protosay:protosay, //딜러에게할말
        procode:procode, //추천인코드
        usrid:usrid //고객의 아이디 -> 추후에 로그인 개발하면 해당 사용자 id 추출 후 넣을 것
    })
    .then(function (res) { //성공
        console.log(res.data);
    })
    .catch(function (err) { //실패
        console.log(err.data);
    })
    .then(function () { //항상
        console.log('영웅소프트 견적서');
    });
}
exports.kakaoLogin = async() => { //카카오로그인
    try{
        await axios.get('http://34.64.207.117:3000/auth/kakao');
    }catch(err){
        console.log(err); //로그인에러났을때임 나중에 추가할것 TODO
    }
}
exports.refreshToken = async(data) => { // 토큰 갱신 함수
    try{
        tokenInfo = await axios({
            method: 'get',
            url: 'http://34.64.207.117:3000/refresh',
            headers:{
                refresh_token: data, // data에 refresh_token 값 스트링으로 넣어야함
                'Content-type':'application/x-www-form-urlencoded'
            }
        })
        console.log('here is new access token');
        console.log(tokenInfo.data);
    }catch(err){
        console.log(err);
        err.json(err);
    }
}
exports.showInfo = async(data) => { // 사용자 정보 불러오는 함수
    try{
        tokenInfo = await axios.get('http://34.64.207.117:3000/token', {
            headers:{
                Authorization: `${data}`, //accesstoken 값 헤더로 보내기
                'Content-type':'application/x-www-form-urlencoded;utf-8'
            }
        })
        return console.log(tokenInfo.data);
    }catch(err){
        return console.log(err.data);
    }
}
exports.contractFinish = async(data) => {
    try{
        getData = await axios({
            method: 'put',
            url: 'http://34.64.207.117:3000/contracts/finish/202202061',
            headers:{
                Authorization: `${data}`,
                'Content-type':'application/x-www-form-urlencoded;utf-8'
            }
        })
        console.log(getData.data);
    }catch(err){
        // return console.log(err);
    }
}
exports.show = async(data) => {
    try{
        getData = await axios({
            method: 'get',
            url: 'http://34.64.207.117:3000/contracts'
        })
        console.log(getData.data);
    }catch(err){
        // return console.log(err);
    }
}
exports.findfromusrid = async(data) => {
    try{
        getData = await axios({
            method: 'get',
            url: 'http://34.64.207.117:3000/contracts/woocheol'
        })
        console.log(getData.data);
    }catch(err){
        // return console.log(err);
    }
}
exports.showReply = async(data) => {
    try{
        getData = await axios({
            method: 'get',
            url: 'http://34.64.207.117:3000/reply/202202072'
        })
        console.log(getData.data);
    }catch(err){
        // return console.log(err);
    }
}
exports.contractInfo = async(data) => {
    try{
        getData = await axios({
            method: 'get',
            url: 'http://34.64.207.117:3000/contracts/info/202202072'
        })
        console.log(getData.data);
    }catch(err){
        // return console.log(err);
    }
}
exports.findfromproid = async(data) => {
    try{
        getData = await axios({
            method: 'get',
            url: 'http://34.64.207.117:3000/contracts/pro/1234',
            headers:{
                Authorization: `${data}`,
                'Content-type':'application/x-www-form-urlencoded;utf-8'
            }
        })
        console.log(getData.data);
    }catch(err){
        // return console.log(err);
    }
}
exports.checkToken = async(data) => {
    try{
        getStatus = await axios({
            method: 'post',
            url: 'http://34.64.207.117:3000/contract/send',
            headers:{
                Authorization: `${data}`,
                'Content-type':'application/x-www-form-urlencoded;utf-8'
            }
        })
    }catch(err){
        // return console.log(err);
    }
}