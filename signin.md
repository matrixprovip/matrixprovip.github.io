
<!DOCTYPE html>
<html lang="en">
<head>
    <title>MATRIX PRO Login</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="/matrixlogo.png">

    <!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,700" rel="stylesheet">
    <!--Font icons-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- BEGIN VENDOR CSS-->
    <link rel="stylesheet" type="text/css" href="/signup/assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/signup/assets/css/style.min.css">
    <link rel="stylesheet" type="text/css" href="/animate.min.css">
    <link rel="stylesheet" type="text/css" href="/signup/assets/css/flipclock.css">
    <link rel="stylesheet" type="text/css" href="/signup/assets/css/swiper.min.css">
    <!-- END VENDOR CSS-->
    <!-- END CRYPTO CSS-->
    <!-- BEGIN Page Level CSS-->
    <link rel="stylesheet" type="text/css" href="/signup/assets/css/template-counter.css">
    <!-- END Page Level CSS-->
    <!-- BEGIN Custom CSS-->
    <link rel="stylesheet" type="text/css" href="/signup/assets/css/style.css">
    <!-- END Custom CSS-->


    <link rel="stylesheet" type="text/css" href="/signup/assets/css/font-awesome.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="/signup/assets/css/icon-font.min.css">

    <link rel="stylesheet" type="text/css" href="/signup/assets/css//util.css">
    <link rel="stylesheet" type="text/css" href="/signup/assets/css//main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    <!--===============================================================================================-->
    
    <style>
       .container-login100 {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background: -webkit-gradient(linear, left top, right top, from(#a34ffe), to(#5934FC));
    background: -webkit-linear-gradient(left, #A34FFE, #5934FC);
    background: -moz-linear-gradient(left, #A34FFE, #5934FC);
    background: -o-linear-gradient(left, #A34FFE, #5934FC);

    background: #f9b421 url(/m3.png);
    background-size: cover;
}
.login100-form {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding: 48px 65px 40px 65px;
    background-color: #0aa32d;
}
   </style>                                                                       
    
    <script> 
    var myContractInstance;
var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"getMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"regLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyPool1","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool10","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool2","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool3","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool4","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool5","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool6","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool7","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool8","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool10activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool10currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool10userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool10users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool2userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool2users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool3activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool3currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool3userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool3users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool4activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool4currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool4userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool4users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool5activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool5currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool5userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool5users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool6activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool6currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool6userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool6users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool7activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool7currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool7userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool7users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool8activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool8currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool8userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool8users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool9activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool9currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool9userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool9users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"}],"name":"regUser","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlimited_level_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"}],"stateMutability":"view","type":"function"}];
var address = "0xac2faCfD2C3f8B70b67Ca8Bb9b12F7BC7aBA65F7";
var account = "";

   


function SigninPage(){
  
    if (typeof web3 !== 'undefined') {
     
        $('#lgambtn').show();
       
        web3 = new Web3(web3.currentProvider);

        web3.eth.getAccounts().then(function (result) {
            account = result[0];
          
        });
        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;



    } else {
       
        const infura = 'https://bsc-dataseed1.binance.org';
          const web3 = new Web3(new Web3.providers.HttpProvider(infura));

        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;
    }

//var events = myContractInstance.allEvents({ fromBlock: "latest", toBlock: 'latest' });
    //// watch for changes
    //events.watch(function (error, event) {
    //    if (!error) {

    //        if (event.event == "getMoneyForLevelEvent") {
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '',
    //                    title: "User " + event.args._referral,
    //                    message: "Received " + event.args._level.c[1] == 1 ? level1 : event.args._level.c[1] == 2 ? level2 : event.args._level.c[1] == 3 ? level3 : level4 + " referral income from " + event.args._user
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }

    //        if (event.event == "regLevelEvent") {
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '',
    //                    title: "Congragulations! New User " + event.args._user + " Registered ",
    //                    message: "Welcome to Matrix Pro "
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }


    //        if (event.event == "getPoolPayment") {
    //            // Notification 1
    //            // Notification 1
    //            setTimeout(function () {
    //                var time = "2 minutes ago";
    //                $.notify({
    //                    icon: '',
    //                    title: "User " + event.args._receiver,
    //                    message: "Received " + event.args._level.c[1] == 1 ? pool1_price : event.args._level.c[1] == 2 ? pool2_price : event.args._level.c[1] == 3 ? pool3_price : event.args._level.c[1] == 4 ? pool4_price : event.args._level.c[1] == 5 ? pool5_price : event.args._level.c[1] == 6 ? pool6_price : event.args._level.c[1] == 7 ? pool7_price : event.args._level.c[1] == 8 ? pool8_price : event.args._level.c[1] == 9 ? pool9_price : pool10_price + " Pool income from " + event.args._user
    //                }, {
    //                        type: 'minimalist',
    //                        placement: {
    //                            from: "bottom",
    //                            align: "right"
    //                        },
    //                        animate: {
    //                            enter: 'animated fadeInLeftBig',
    //                            exit: 'animated fadeOutLeftBig'
    //                        },
    //                        icon_type: 'image',
    //                        template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                            '<div id="image">' +
    //                            '<img data-notify="icon" class="rounded-circle float-left">' +
    //                            '</div><div id="text">' +
    //                            '<span data-notify="title">{1}</span>' +
    //                            '<span data-notify="message">{2}</span>' +
    //                            '</div>' +
    //                            '</div>'
    //                    });
    //            }, 1000);
    //        }

    //    }
    //});

}
                
                
                
                
                
    

$(document).ready(function () { 

    $('#lgambtn').click(function () {
       

        try {
            myContractInstance.methods.users(account).call().then(function (result) {
                if (result[0]) {
                    localStorage.setItem("address", account);
                    location.href = "/Home-Dashboard";
                }
                else {
                    $('.error').html('You need to register first');
                    $('.error').show();
                }


            });
        }
        catch (e) {
            console.log(e)
        }
    })

    function trackTransaction(result) {

        console.log(result);
        web3.eth.getTransactionReceipt(result, function (error, result1) {
            if (result1 == null) {
                $('.error').html('Pending : Transaction waiting for comfirmation');
                $('.error').show();

                trackTransaction(result)
            }
            else {
                if (result1.status == "0x1") {
                    alert("success")
                    localStorage.setItem("address", account);
                    location.href = "/Home-Dashboard";
                }
                else {
                    $('.error').html('Transaction Failed');
                    $('.error').show();
                }
            }
        })
    }

    $('#lgmbtnsup').click(async () => {
      
        var add = $('[name="referral"]').val();
        if (add.length == 0) {
            $('.error').html('Enter referral code');
            $('.error').show();

            return false;
        }
      
        if (typeof web3 !== 'undefined') {
           
           
            await ethereum.enable();
            
            
            web3 = new Web3(web3.currentProvider);
  MyContract = new web3.eth.Contract(abi, address);
            // initiate contract for an address

            myContractInstance = MyContract;

        //   checkbuyLevel();
            web3.eth.getAccounts().then(function(result){
                account = result[0];
                SignUpPay(account);
            });
             
          

          

           

        }
        else {
            console.log("Metamask not found")
        }

    })


    function SignUpPay(account) {
        var add = $('[name="referral"]').val();
        myContractInstance.methods.regUser(add).send({ from: account, value: 100000000000000000, gasprice: 5 })
            .on('transactionHash', function (hash) {
                $('.error').html('Pending : Transaction waiting for comfirmation');
                $('.error').show();

              //  trackTransaction(result);
            })

            .on('receipt', function (receipt) {
                // receipt example
                console.log(receipt);
               
               
                    if (receipt.status) {
                        alert("success")
                        localStorage.setItem("address", account);
                        location.href = "/Home-Dashboard";
                    }
                    else {
                        $('.error').html('Transaction Failed');
                        $('.error').show();
                    }
                
            })
            .on('error', console.error);

    }



    $('#lgmbtn').click(function () {
        var add = $('[name="ethaddress"]').val();
        if (add.length > 0) {
            try {
                myContractInstance.methods.users(add).call().then(function (result) {
                    
                    if (result[0]) {

                       

                            localStorage.setItem("address", add);
                            location.href = "/Home-Dashboard";
                        }
                        else {
                            $('.error').html('You need to register first');
                            $('.error').show();
                        }
                    

                });

            }
            catch (err) {
                console.log(err);
            }

        }
        else {
            $('.error').html('Enter Valid BNB address');
            $('.error').show();
        }
    });



})
    </script>
    <script>
        $(document).ready(function () {
            SigninPage()
        })

    </script>
    <script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>
    <script src="/Home-Dashboard/assets/js/socialjs.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function (event) {
            socialjs.init({
                container: '.socialjs',
                https: true
            });
        });
    </script>
    
    
    
    
</head>
<body>

    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-form">
                    <form class="w-100 validate-form" onsubmit="return false" id="signinform">
                        <span class="login100-form-title p-b-10 text-white">
                            MATRIX PRO Login
                        </span>
                        <div class="w-100">
                            <img src="/wallet.png" class="w-100 p-b-34" />
                        </div>
                        <div class="wrap-input100 validate-input m-b-20" data-validate="Type user name">
                            <input id="first-name" class="input100" type="text" name="ethaddress" placeholder="Enter BNB address 0x...">
                            <span class="focus-input100"></span>
                        </div>

                        <p class="error m-b-10 alert alert-danger" style="display:none">

                        </p>
                        <p class="m-b-15 text-right text-white">Dont have account ? <a href="/signup" class="text-white"> Sign up</a></p>

                        <div class="container-login100-form-btn">
                            <button class="btn-success login100-form-btn" id="lgmbtn">

                                Sign in
                            </button>
                        </div>

                        <div class="container-login100-form-btn m-t-5">
                            <button class="btn btn-info w-100 lauto dis-none" id="lgambtn" style="display:none">
                                Sign In  Automatically
                            </button>
                        </div>


                        <div class="w-full text-center m-t-30">

                            <p class="text-white">Contract address</p>
                            <a href="https://bscscan.com/address/0xac2faCfD2C3f8B70b67Ca8Bb9b12F7BC7aBA65F7" class="txt3" target="_blank">
                                0xac2faCfD2C3f8B70b67Ca8Bb9b12F7BC7aBA65F7 <i class="fa fa-external-link"></i>
                            </a>
                        </div>
                        
                        
                
                <div class="purchase-token-btn text-center" style="margin-bottom:20px;margin-top:20px;">
                    <a href="/Referral.png" target="_blank" class="btn btn-lg btn-gradient-blue btn-round btn-glow"><i class="fa fa-file-pdf-o" ></i> &nbsp;  Referral</a>
                </div>
                
                <div class="purchase-token-btn text-center" style="margin-bottom:20px;margin-top:20px;">
                    <a href="/poolflow1.png" target="_blank" class="btn btn-lg btn-gradient-blue btn-round btn-glow"><i class="fa fa-file-pdf-o" ></i> &nbsp;  Poolflow1</a>
                </div>
                
                <div class="purchase-token-btn text-center" style="margin-bottom:20px;margin-top:20px;">
                    <a href="/Profit-table.png" target="_blank" class="btn btn-lg btn-gradient-blue btn-round btn-glow"><i class="fa fa-file-pdf-o" ></i> &nbsp;  Profit-table</a>
                </div>

                <div class="purchase-token-btn text-center" style="margin-bottom:20px;margin-top:20px;">
                    <a href="/AutoPool.png" target="_blank" class="btn btn-lg btn-gradient-blue btn-round btn-glow"><i class="fa fa-file-pdf-o" ></i> &nbsp;  AutoPool</a>
                </div>
                        
                    </form>

                

                    <div class="col-xl-12 col-lg-12 col-md-12 text-center d-flex d-block m-t-10">
                        <div class="row">
                            <p class="text-white col-lg-12">Social Links</p>
                            <div class="socialjs col-lg-12 m-t-10">

                                <a class="sharebutton facebook btn " target="_blank" style="background-color:#3b5998;color:white" href="https://www.facebook.com/ProfessionalMatrix"><i class=" fa fa-facebook"></i></a>

                                <a class="sharebutton twitter btn" target="_blank" style="background-color:#00acee;color:white" href="https://twitter.com/INHERIT38092481"><i class=" fa fa-twitter"></i> </a>
                                <a class="sharebutton linkedin btn" target="_blank" style="background-color:#0e76a8;color:white" href="https://www.linkedin.com/in/professionalmatrix2022"><i class=" fa fa-linkedin"></i> </a>

                                <a class="sharebutton telegram btn" target="_blank" style="background-color:#0088cc;color:white" href="https://t.me/matrixprovip"><i class="fa fa-telegram"></i> </a>
                                <a class="sharebutton telegram btn" target="_blank" style="background-color:#ff0000;color:white" href="https://www.youtube.com/"><i class="fa fa-youtube"></i> </a>
                                <a class="sharebutton telegram btn" target="_blank" style="background-color:#dd2a7b ;color:white" href="https://www.instagram.com/"><i class="fa fa-instagram"></i> </a>
                            </div>
                        </div>
                    </div>



                </div> 
                <div class="login100-more ">
                    <div class="col-lg-12 m-t-30">
                        <a href="/matrixlogo.png"> <img src="/matrixlogo.png" style="" class="w-100" /></a>
                    </div>
                    <div class="w-100 m-t-100 m-l-auto m-r-auto text-center download-buttons">
                        <a href="https://metamask.io/" target="_blank" class="m-b-5 btn btn-success" style="background-color:#062d54;border-color:#062d54">Download Metamask</a>
                        <a href="https://trustwallet.com/" target="_blank" class="m-b-5 btn btn-info">Download Trust Wallet</a>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div id="dropDownSelect1"></div>



</body>
</html>

