var myContractInstance;
var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"getMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"regLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyPool1","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool10","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool2","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool3","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool4","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool5","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool6","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool7","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool8","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool10activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool10currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool10userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool10users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool2userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool2users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool3activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool3currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool3userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool3users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool4activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool4currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool4userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool4users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool5activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool5currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool5userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool5users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool6activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool6currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool6userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool6users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool7activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool7currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool7userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool7users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool8activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool8currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool8userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool8users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool9activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool9currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool9userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool9users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"}],"name":"regUser","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlimited_level_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"}],"stateMutability":"view","type":"function"}];
var address = "0xac2faCfD2C3f8B70b67Ca8Bb9b12F7BC7aBA65F7";

$(document).ready(function () {
    if (typeof web3 !== 'undefined') {

        web3 = new Web3(web3.currentProvider);
        MyContract = new web3.eth.Contract(abi, address);
        myContractInstance = MyContract;

        if (web3.currentProvider.isTrust) {

            const infura = '';
            const web3 = new Web3(new Web3.providers.HttpProvider(infura));
            MyContract = new web3.eth.Contract(abi, address);
            myContractInstance = MyContract;

        }

    } else {

        const infura = '';
        const web3 = new Web3(new Web3.providers.HttpProvider(infura));
        MyContract = new web3.eth.Contract(abi, address);
        myContractInstance = MyContract;

    }



    // get variable values
    myContractInstance.methods.pool1currUserID().call().then(function (result) {
        $('.Pool1count').html(result);
        $('.pool1_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool2currUserID().call().then(function (result) {
        $('.Pool2count').html(result);
        $('.pool2_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool3currUserID().call().then(function (result) {
        $('.Pool3count').html(result);
        $('.pool3_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool4currUserID().call().then(function (result) {
        $('.Pool4count').html(result);
        $('.pool4_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });



    myContractInstance.methods.pool5currUserID().call().then(function (result) {
        $('.Pool5count').html(result);
        $('.pool5_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool6currUserID().call().then(function (result) {

        $('.Pool6count').html(result);
        $('.pool6_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool7currUserID().call().then(function (result) {

        $('.Pool7count').html(result);
        $('.pool7_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool8currUserID().call().then(function (result) {

        $('.Pool8count').html(result);
        $('.pool8_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool9currUserID().call().then(function (result) {

        $('.Pool9count').html(result);
        $('.pool9_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool10currUserID().call().then(function (result) {

        $('.Pool10count').html(result);
        $('.pool10_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result + "</a>");
    });









    myContractInstance.methods.pool1activeUserID().call().then(function (result) {
        myContractInstance.methods.pool1userList(result).call().then(function (result1) {
            $('.pool1_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });

    myContractInstance.methods.pool2activeUserID().call().then(function (result) {
        myContractInstance.methods.pool2userList(result).call().then(function (result1) {
            $('.pool2_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });

    myContractInstance.methods.pool3activeUserID().call().then(function (result) {
        myContractInstance.methods.pool3userList(result).call().then(function (result1) {
            $('.pool3_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });

    myContractInstance.methods.pool4activeUserID().call().then(function (result) {
        myContractInstance.methods.pool4userList(result).call().then(function (result1) {
            $('.pool4_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });



    myContractInstance.methods.pool5activeUserID().call().then(function (result) {
        myContractInstance.methods.pool5userList(result).call().then(function (result1) {
            $('.pool5_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });

    myContractInstance.methods.pool6activeUserID().call().then(function (result) {
        myContractInstance.methods.pool6userList(result).call().then(function (result1) {
            $('.pool6_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });

    myContractInstance.methods.pool7activeUserID().call().then(function (result) {
        myContractInstance.methods.pool7userList(result).call().then(function (result1) {
            $('.pool7_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });

    myContractInstance.methods.pool8activeUserID().call().then(function (result) {
        myContractInstance.methods.pool8userList(result).call().then(function (result1) {
            $('.pool8_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });

    myContractInstance.methods.pool9activeUserID().call().then(function (result) {
        myContractInstance.methods.pool9userList(result).call().then(function (result1) {
            $('.pool9_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });

    myContractInstance.methods.pool10activeUserID().call().then(function (result) {
        myContractInstance.methods.pool10userList(result).call().then(function (result1) {
            $('.pool10_current_address').html("<a href=https://bscscan.com/address/" + result1 + " target=_blank>" + result1 + "</a>");
        });
    });
    
  

});

