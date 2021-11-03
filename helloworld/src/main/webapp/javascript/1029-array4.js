const data = [
    {
        "id": 1,
        "first_name": "Adrian",
        "last_name": "Burhouse",
        "email": "aburhouse0@cargocollective.com",
        "gender": "Male",
        "ip_address": "10.144.80.120"
    },
    {
        "id": 2,
        "first_name": "Archambault",
        "last_name": "Lightwood",
        "email": "alightwood1@ezinearticles.com",
        "gender": "Polygender",
        "ip_address": "128.93.170.75"
    },
    {
        "id": 3,
        "first_name": "Sada",
        "last_name": "Sleightholm",
        "email": "ssleightholm2@wordpress.org",
        "gender": "Agender",
        "ip_address": "250.120.252.247"
    },
    {
        "id": 4,
        "first_name": "Allx",
        "last_name": "Mill",
        "email": "amill3@i2i.jp",
        "gender": "Non-binary",
        "ip_address": "18.108.97.169"
    },
    {
        "id": 5,
        "first_name": "Joline",
        "last_name": "Maysor",
        "email": "jmaysor4@xrea.com",
        "gender": "Bigender",
        "ip_address": "213.69.250.251"
    },
    {
        "id": 6,
        "first_name": "Adelle",
        "last_name": "Dotson",
        "email": "adotson5@bing.com",
        "gender": "Genderqueer",
        "ip_address": "197.50.101.29"
    },
    {
        "id": 7,
        "first_name": "Keen",
        "last_name": "Ackroyd",
        "email": "kackroyd6@businesswire.com",
        "gender": "Bigender",
        "ip_address": "246.93.240.248"
    },
    {
        "id": 8,
        "first_name": "Milena",
        "last_name": "Gregorace",
        "email": "mgregorace7@vinaora.com",
        "gender": "Bigender",
        "ip_address": "243.169.189.228"
    },
    {
        "id": 9,
        "first_name": "Tommie",
        "last_name": "Mounce",
        "email": "tmounce8@last.fm",
        "gender": "Non-binary",
        "ip_address": "3.232.126.183"
    },
    {
        "id": 10,
        "first_name": "Dennie",
        "last_name": "Readitt",
        "email": "dreaditt9@examiner.com",
        "gender": "Genderqueer",
        "ip_address": "78.215.206.87"
    },
    {
        "id": 11,
        "first_name": "Buckie",
        "last_name": "Leas",
        "email": "bleasa@diigo.com",
        "gender": "Female",
        "ip_address": "118.122.175.112"
    },
    {
        "id": 12,
        "first_name": "Allyson",
        "last_name": "Landes",
        "email": "alandesb@toplist.cz",
        "gender": "Bigender",
        "ip_address": "158.94.171.175"
    },
    {
        "id": 13,
        "first_name": "Sigrid",
        "last_name": "Bacchus",
        "email": "sbacchusc@dyndns.org",
        "gender": "Non-binary",
        "ip_address": "68.112.180.196"
    },
    {
        "id": 14,
        "first_name": "Fernande",
        "last_name": "Gritskov",
        "email": "fgritskovd@instagram.com",
        "gender": "Female",
        "ip_address": "12.173.166.123"
    },
    {
        "id": 15,
        "first_name": "Con",
        "last_name": "Hutchison",
        "email": "chutchisone@blogger.com",
        "gender": "Genderfluid",
        "ip_address": "252.13.134.39"
    }
]
// console.log(data);

// filtering -> mapping 
// id, fname, lname, email
const filterData = data.filter(function (val) {
    return val.gender == 'Female';
});
// console.log(filterData);
const myData = filterData.map(function (val) {
    let newObj = {}
    newObj.nid = val.id;
    newObj.nfname = val.first_name;
    newObj.nlname = val.last_name;
    newObj.nemail = val.email;
    return newObj;
});
console.log(myData);
let str = '<h1> 여성회원목록 </h1>';
str += '<h2><ul>';
myData.forEach(callBackFnc);
str += '</ul></h2>';
function callBackFnc(val) {
    str += '<li> ID : ' + val.nid + '</li>';
    str += '<li> FirstName : ' + val.nfname + '</li>';
    str += '<li> LastName : ' + val.nlname + '</li>';
    str += '<li> Email : ' + val.nemail + '</li>';
    str += '<br>';
}
document.write(str);

let str2 = '<table border="1"><tr><thead><th> ID</th>';
str2 += '<th>FirstName</th>';
str2 += '<th>LastName</th>';
str2 += '<th>email</th>';
str2 += '</thead></tr>';
myData.forEach(callBackFncTable);
function callBackFncTable(val) {
    str2 += '<tr>';
    str2 += '<td>' + val.nid + '</td>';
    str2 += '<td>' + val.nfname + '</td>';
    str2 += '<td>' + val.nlname + '</td>';
    str2 += '<td>' + val.nemail + '</td>';
    str2 += '</tr>';
}
str2 += '</table>';
document.write(str2);