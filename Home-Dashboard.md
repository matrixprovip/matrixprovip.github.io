<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=1">

    <script>
        var account = localStorage.getItem("address");

        if (account == null) {
            alert("You are not Logged In. Please Login first..!!");
           location.href = "https://matrixpro.vip/signin";
        }
    </script> 

    <link rel="shortcut icon" type="image/x-icon" href="/matrixlogo.png">

    <!-- Title -->
    <title>MATRIX PRO BSC</title>

    <!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,700" rel="stylesheet">
    <!--Font icons-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- BEGIN VENDOR CSS-->

    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- Bootstrap css -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/bootstrap-4.1.3/css/bootstrap.min.css" rel="stylesheet" />
              
  <!-- Style css -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/css/style.css" rel="stylesheet" />

  <!-- Default css -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/css/default.css" rel="stylesheet">

  <!-- Sidemenu css-->
  <link rel="stylesheet" href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/sidemenu/sidemenu.css">

  <!-- Bootstrap-daterangepicker css -->
  <link rel="stylesheet" href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/bootstrap-daterangepicker/daterangepicker.css">

  <!-- Bootstrap-datepicker css -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker3.min.css">

  <!-- Custom scroll bar css -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/scroll-bar/jquery.mCustomScrollbar.css" rel="stylesheet" />

  <!-- Sidemenu-repsonsive-tabs  css -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/sidemenu-responsive-tabs/css/sidemenu-responsive-tabs.css" rel="stylesheet">

  <!-- P-scroll css -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/p-scroll/p-scroll.css" rel="stylesheet" type="text/css">

  <!-- Nice-select css  -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/jquery-nice-select/css/nice-select.css" rel="stylesheet" />
               
  <!-- Select2 Plugin -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/select2/select2.min.css" rel="stylesheet" />

  <!-- News-Ticker css-->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/newsticker/jquery.jConveyorTicker.css" rel="stylesheet" />

  <!-- Font icons css-->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/css/icons.css" rel="stylesheet">

  

  <!-- Rightsidebar css -->
  <link href="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/sidebar/sidebar.css" rel="stylesheet">

  <!-- Color-palette css-->
  <link rel="stylesheet" href="https://matrixpro.vip/Home-Dashboard/Content/assets/css/skins.css" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
  <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
  <script src="https://cdn.lr-in-prod.com/LogRocket.min.js" crossorigin="anonymous"></script>
  <script>window.LogRocket && window.LogRocket.init('uliosg/matrixpro');</script>




    
    <style>
        .app-content {
            margin-top: 100px;
        }
    </style>

</head>
<body class="app">

    <!-- Loader -->
    <div id="loading">
        <img src="/loader.svg" class="loader-img" alt="Loader">
    </div>

    <!-- PAGE -->
    <div class="page">
        <div class="page-main">

            <!-- Top-header opened -->
            <div class="header-main header sticky">
                <div class="app-header header top-header navbar-collapse ">
                    <div class="container-fluid">
                        <div class="d-flex">
                            <a class="header-brand" href="https://matrixpro.vip/Home-Dashboard">
                                <h3 style="margin-top: 16px;color: #141670;">MATRIX PRO BSC</h3>
                                
                               
                            </a>
                            <a href="#" data-toggle="sidebar" class="nav-link icon toggle"><i class="fa fa-align-justify fs-20"></i></a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
            <!-- Top-header closed -->
            <!-- Sidebar menu-->
            <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
            <aside class="app-sidebar">
                <div class="side-tab-body p-0 border-0" id="sidemenu-Tab">
                    <div class="first-sidemenu">
                        <div class="line-animations">
                            <ul class="resp-tabs-list hor_1">
                                
                                <li class="resp-tab-active active"><a href="https://matrixpro.vip/Home-Dashboard"><span class="side-menu__icon"></span><img src="/homepage.png" class="side_menu_img svg-1" alt="image" data-toggle="tooltip"  data-original-title="Home"></a></li>
                                <li class="autopool"><a href="https://matrixpro.vip/Autopool"><span class="side-menu__icon"></span><img src="/m2.png" class="side_menu_img svg-1" alt="image" data-toggle="tooltip"  data-original-title="Autopool"></a></li>
                                <li class="trans"><a href="https://matrixpro.vip/Transaction"><span class="side-menu__icon"></span><img src="/m3.png" class="side_menu_img svg-1" alt="image" data-toggle="tooltip"  data-original-title="Transations"></a></li>
                                <li class="team2"><a href="https://matrixpro.vip/Team"><span class="side-menu__icon"></span><img src="/m4.png" class="side_menu_img svg-1" alt="image" data-toggle="tooltip"  data-original-title="Team"></a></li>
                                <li class="media2"><a href="https://matrixpro.vip/Media"><span class="side-menu__icon"></span><img src="/m5.png" class="side_menu_img svg-1" alt="image" data-toggle="tooltip"  data-original-title="Media"></a></li>
                             
                                <li class="logoutuser"><span class="side-menu__icon"></span><img src="/m6.png" class="side_menu_img svg-1" alt="image" data-toggle="tooltip"  data-original-title="Log out"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- Sidemenu closed -->
            <!-- App-content opened -->
            <!-- App-content closed -->
        </div>
        
        <script> 
            var totalearned = 0;
            function getVariableData() {
                // get variable values
                myContractInstance.methods.pool1currUserID().call().then(function (result) {
                    console.log('pool1users',result)
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
                    $('.pool4_current_address').html("<a href=https://bscscan.com/address/" + result + " target=_blank>" + result+ "</a>");
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
            
            
            
                myContractInstance.methods.currUserID().call().then(function (result) {
                
                   
                        $('.TotalUsers').html(result);
            
                });
                myContractInstance.methods.users(account).call().then(function (result1) {
                    
                    $('.currentuseridlink').html("https://matrixpro.vip/signup?referralid=" + result1.id);
        
                    $('.currentuseridlinknew').html("https://link.trustwallet.com/open_url?coin_id=60&url=https://matrixpro.vip/signup?referralid=" + result1.id);
                    
                                
        
        
                    $('.currentuseridlink').val("https://matrixpro.vip/signup?referralid=" + result1.id);
        
                    $('.currentuseridlinknew').val("https://link.trustwallet.com/open_url?coin_id=60&url=https://matrixpro.vip/signup?referralid=" + result1.id);
        
        
                    $('.currentuseridlink').attr('data-url', "https://matrixpro.vip/signup?referralid=" + result1.id);
                    $('.currentuseridlinknew').attr('data-url', "https://link.trustwallet.com/open_url?coin_id=60&url=https://matrixpro.vip/signup?referralid=" + result1.id);
                    $('.sharebutton').attr('data-url', "https://link.trustwallet.com/open_url?coin_id=60&url=https://matrixpro.vip/signup?referralid=" + result1.id);
                    $('.currentuserid').html(result1.id);
                    $('.currentaddress').html(account);
                    $('.ethaddress').attr('href', 'https://bscscan.com/address/' + account);
                    
                
            });
            if (account !== 'undefined') {
                    getReferralCommission();
                    getPoolPaymentReceived();
            
               
                }
                
            
            
                
            
                
                
                DirectreferralCount();
            }
            
            
            
            
            function getReferralCommission() {
                
            
                var level1 = parseFloat(0.02); var level2 = parseFloat(0.01); var level3 = parseFloat(0.005); var level4 = parseFloat(0.0005);
            
                var referraltotal = parseFloat(0);
            
                var events = myContractInstance.getPastEvents('getMoneyForLevelEvent', { filter: { _user: account }, 'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
                    
                    if (!error) {
                        $.each(log, function (key, value) {
                            var level = value.returnValues.level;
            
                            if (level == 1) {
                                referraltotal = parseFloat(referraltotal) + parseFloat("0.02");
            
                            }
                            else if (level == 2) {
            
                                referraltotal = parseFloat(referraltotal) + parseFloat("0.01");
                            }
                            else if (level == 3) {
                                referraltotal = parseFloat(referraltotal) + parseFloat("0.005");
            
                            }
                            else {
            
                                referraltotal = parseFloat(referraltotal) + parseFloat("0.0005");
            
                            }
            
                            $('.totalreferral').html(Math.round(1000000 * (referraltotal)) / 1000000);
                        });
                       
                    }
                });
            
            }
            
            
            function getPoolPaymentReceived() {
                var pool1_price = 0.2;
                var pool2_price = 0.4;
                var pool3_price = 1;
                var pool4_price = 2;
                var pool5_price = 4;
                var pool6_price = 10;
                var pool7_price = 20;
                var pool8_price = 40;
                var pool9_price = 100;
                var pool10_price = 200;
            
                var referraltotal = parseFloat(0);
            
                var events = myContractInstance.getPastEvents('getPoolPayment', {filter : { _receiver: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
            
                    if (!error) {
                        $.each(log, function (key, value) {
                            var level = value.returnValues.level;
            
                            if (level == 1) {
                                referraltotal = parseFloat(referraltotal) + pool1_price;
                            }
                            else if (level == 2) {
                                referraltotal = parseFloat(referraltotal) + pool2_price;
                            }
                            else if (level == 3) {
                                referraltotal = parseFloat(referraltotal) + pool3_price;
                            }
                            else if (level == 4) {
                                referraltotal = parseFloat(referraltotal) + pool4_price;
                            }
                            else if (level == 5) {
                                referraltotal = parseFloat(referraltotal) + pool5_price;
                            }
                            else if (level == 6) {
                                referraltotal = parseFloat(referraltotal) + pool6_price;
                            }
                            else if (level == 7) {
                                referraltotal = parseFloat(referraltotal) + pool7_price;
                            }
                            else if (level == 8) {
                                referraltotal = parseFloat(referraltotal) + pool8_price;
                            }
                            else if (level == 9) {
                                referraltotal = parseFloat(referraltotal) + pool9_price;
                            }
                            else if (level == 10) {
                                referraltotal = parseFloat(referraltotal) + pool10_price;
                            }
            
            
                            $('.totalpoolpayment').html(Math.round(1000000 * (referraltotal)) / 1000000);
                        });
                    }
                });
                
            
                
            }
            
            var templevel = 1, t = 1;
            var employees = {
                accounting: []
            };
            var str = "";
            //'0xac2faCfD2C3f8B70b67Ca8Bb9b12F7BC7aBA65F7'
            function Directreferral() {
                
                var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: account }, 'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
            
                    if (!error) {
            
                        $.each(log, function (key, value) {
                            if (t == 1) {
                                t = 2;
                                $('#accordion11').html("");
                                $('#accordion11').append('<div class="panel-heading1 bg-primary ">' +
                                    '<h4 class= "panel-title1">' +
                                    '<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapseFour11" aria-expanded="false"><i class="fe fe-arrow-right mr-2"></i>Level 1</a>' +
                                    '</h4 >' +
                                    '</div >' +
                                    '<div id="collapseFour11" class="panel-collapse collapse" role="tabpanel" aria-expanded="false">' +
                                    '<div class= "panel-body border" ></div></div></div>')
                                    ;
            
                            }
                            $('#collapseFour11 .panel-body').append('<p style=color:green>' + value.returnValues._user + '</p>');
            
                            employees.accounting.push({
            
                                'address': value.returnValues._user,
                                "level": 1
            
                            });
            
                            InDirectreferral(value.returnValues._user, 2)
                        });
                    }
                    else {
            
                        $('#accordion11').append('No data');
                            ;
                    }
                });
            }
            
            
            function InDirectreferral(address, level) {
                var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: address },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
            
                    if (!error) {
                        $.each(log, function (key, value) {
                            if (templevel != level) {
                                str += '';
                            }
                            if (templevel != level) {
                                templevel = level;
                                $('#accordion11').append('<div class="panel-heading1 bg-primary ">' +
                                    '<h4 class= "panel-title1">' +
                                    '<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1' + level + '" href="#collapseFour1' + level + '" aria-expanded="false"><i class="fe fe-arrow-right mr-2"></i>Level ' + level + '</a>' +
                                    '</h4 >' +
                                    '</div >' +
                                    '<div id="collapseFour1' + level + '" class="panel-collapse collapse" role="tabpanel" aria-expanded="false">' +
                                    '<div class= "panel-body border" ></div></div></div>')
                                    ;
                            }
                            $('#collapseFour1' + level + ' .panel-body').append('<p style=color:green>' + value.returnValues._user + '</p>');
            
                            employees.accounting.push({
            
                                'address': value.returnValues._user,
                                "level": level
            
                            });
                            InDirectreferral(value.returnValues._user, level + 1);
                        });
                    }
                });
            }
            
            function DirectreferralCount() {
                
                var i = 1;
                $('.referralcount').html(0);
                $('.indirect_referralcount').html(0);
                var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
                   
                    if (!error) {
                        $.each(log, function (key, value) {
                            $('.referralcount').html(i++);
            
                            InDirectreferralCount(value.returnValues._user, 1)
                        });
                    }
                    else {
                        $('.referralcount').html(0);
                        $('.indirect_referralcount').html(0);
                    }
                });
                 
            }
            var count = 1;
            
            function InDirectreferralCount(address, level) {
                
                var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: address },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
                  
                    if (!error) {
                        $.each(log, function (key, value) {
                            $('.indirect_referralcount').html(count++);
                            InDirectreferralCount(value.returnValues._user, level + 1);
                        });
                    }
                    else {
                        $('.indirect_referralcount').html(0);
                    }
                });
            
            }
            
            
            function Transaction_Register() {
                
                var events = myContractInstance.getPastEvents('getMoneyForLevelEvent', {filter:{ _user: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
                    var level1 = parseFloat(0.02); var level2 = parseFloat(0.01); var level3 = parseFloat(0.005); var level4 = parseFloat(0.0005);
            
                    if (!error) {
                        $.each(log, function (key, value) {
                            
                            $('.autopool_table').append('<tr><td><a href="https://bscscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._referral + '</td><td>' + value.returnValues._level + '</td><td>' + (value.returnValues._level == 1 ? level1 : value.returnValues._level == 2 ? level2 : value.returnValues._level == 3 ? level3 : level4) + ' BNB</td></tr>');
                        });
                    }
                });
            }
            
            
            function Transaction_Pool() {
                var events = myContractInstance.getPastEvents('getPoolPayment', {filter:{ _receiver: account },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
                    var pool1_price = 0.2;
                    var pool2_price = 0.4;
                    var pool3_price = 1;
                    var pool4_price = 2;
                    var pool5_price = 4;
                    var pool6_price = 10;
                    var pool7_price = 20;
                    var pool8_price = 40;
                    var pool9_price = 100;
                    var pool10_price = 200;
            
                    if (!error) {
                        $.each(log, function (key, value) {
                            $('.transaction_autopool').append('<tr><td><a href="https://bscscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._user + '</td><td>' + value.returnValues._level + '</td><td>' + (value.returnValues._level == 1 ? pool1_price : value.returnValues._level == 2 ? pool2_price : value.returnValues._level == 3 ? pool3_price : value.returnValues._level == 4 ? pool4_price : value.returnValues._level == 5 ? pool5_price : value.returnValues._level == 6 ? pool6_price : value.returnValues._level == 7 ? pool7_price : value.returnValues._level == 8 ? pool8_price : value.returnValues._level == 9 ? pool9_price : pool10_price) + ' BNB</td></tr>');
                        });
                    }
                });
            }
            </script>

<script>

    var myContractInstance, myContractInstance1;
    var account = localStorage.getItem("address");
    
    var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"getMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"getPoolPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"regLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"regPoolEntry","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyPool1","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool10","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool2","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool3","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool4","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool5","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool6","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool7","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool8","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyPool9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool10activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool10currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool10userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool10users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool1currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool1userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool1users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool2currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool2userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool2users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool3activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool3currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool3userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool3users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool4activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool4currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool4userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool4users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool5activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool5currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool5userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool5users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool6activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool6currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool6userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool6users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool7activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool7currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool7userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool7users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool8activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool8currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool8userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool8users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool9activeUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pool9currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pool9userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pool9users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"payment_received","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"}],"name":"regUser","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"requests","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlimited_level_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"}],"stateMutability":"view","type":"function"}];
    var address = "0xac2faCfD2C3f8B70b67Ca8Bb9b12F7BC7aBA65F7";
var MyContract;
window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {

       
        web3 = new Web3(web3.currentProvider);

        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;
        myContractInstance1 = MyContract;
        //web3.eth.getAccounts().then(function (result) {
        //    account = result[0];
           
        //});
        
        if (web3.currentProvider.isTrust) {

            const infura = 'https://nd-947-879-726.p2pify.com/749501f701a1a19be29013e2671cd349';
            const web3 = new Web3(new Web3.providers.HttpProvider(infura));
            MyContract = new web3.eth.Contract(abi, address);
            myContractInstance = MyContract;
          
        }
        checkbuyLevel();
  getVariableData();

           

    } else {
        //  const Web3 = require('web3');

        const infura = '';
        const web3 = new Web3(new Web3.providers.HttpProvider(infura));
        MyContract = new web3.eth.Contract(abi, address);
        myContractInstance = MyContract;

           getVariableData();

            checkbuyLevel();
        // document.getElementById('output').innerHtml = 'Please download and install Metamask: <a href="https://metamask.io/">https://metamask.io/</a>'
    }


})
function checkbuyLevel() {

myContractInstance.methods.users(account).call().then(function (result) {
 
   
        if (result[0]) {
            checkPool1();
            checkPool2();
            checkPool3();
            checkPool4();
            checkPool5();
            checkPool6();
            checkPool7();
            checkPool8();
            checkPool9();
            checkPool10();
        }
   

});

}

function checkPool1() {



myContractInstance.methods.pool1users(account).call().then(function (result) {
    if(result[1] > 0){
    $('#pool1sequencue').text(result[1])
    $('#pool1sequencue').show();
    $('.pool1sequencue').show();}
   
        if (!result[0]) {
            $('.pool1pay').show();
            $('.pool1transaction').hide();
        }
        else if (result[2] == 2) {
            $('.pool1status').show();
            $('.pool1status .card-status').addClass('bg-success');
            $('.pool1status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool1transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2]< 2) {
            $('.pool1status').show();
            $('.pool1status .card-status').addClass('bg-warning');
            $('.pool1status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool1transaction').html('Received No. of Payments ' + result[2]);
            $('.currentautopoolno').html(1);
        }


   

});

}

function checkPool2() {

myContractInstance.methods.pool2users(account).call().then(function (result) {

    if(result[1] > 0){
        $('#pool2sequencue').text(result[1])
        $('#pool2sequencue').show();
        $('.pool2sequencue').show();
    }
   
        if (!result[0]) {
            $('.pool2pay').show();
            $('.pool2transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool2status').show();
            $('.pool2status .card-status').addClass('bg-success');
            $('.pool2status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool2transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2] < 3) {
            $('.pool2status').show();
            $('.pool2status .card-status').addClass('bg-warning');
            $('.pool2status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool2transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(2);
            console.log("ok")
            $('#numbersec').show()
            
        }



 
});

}

function checkPool3() {


myContractInstance.methods.pool3users(account).call().then(function (result) {
    console.log("pool3users",result)
    if(result[1] > 0){
    $('#pool3sequencue').text(result[1])
    $('#pool3sequencue').show();
    $('.pool3sequencue').show();}
        if (!result[0]) {
            $('.pool3pay').show();
            $('.pool3transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool3status').show();
            $('.pool3status .card-status').addClass('bg-success');
            $('.pool3status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool3transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2] < 3) {
            $('.pool3status').show();
            $('.pool3status .card-status').addClass('bg-warning');
            $('.pool3status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool3transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(3);
        }



    
});

}


function checkPool4() {
myContractInstance.methods.pool4users(account).call().then(function (result) {
    if(result[1] > 0){
    $('#pool4sequencue').text(result[1])
    $('#pool4sequencue').show();
    $('.pool4sequencue').show();}
   
        if (!result[0]) {
            $('.pool4pay').show();
            $('.pool4transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool4status').show();
            $('.pool4status .card-status').addClass('bg-success');
            $('.pool4status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool4transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2] < 3) {
            $('.pool4status').show();
            $('.pool4status .card-status').addClass('bg-warning');
            $('.pool4status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool4transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(4);
        }

   

});

}

function checkPool5() {
myContractInstance.methods.pool5users(account).call().then(function (result) {
    if(result[1] > 0){
    $('#pool5sequencue').text(result[1])
    $('#pool5sequencue').show();
    $('.pool5sequencue').show();}
   
        if (!result[0]) {
            $('.pool5pay').show();
            $('.pool5transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool5status').show();
            $('.pool5status .card-status').addClass('bg-success');
            $('.pool5status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool5transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2] < 3) {
            $('.pool5status').show();
            $('.pool5status .card-status').addClass('bg-warning');
            $('.pool5status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool5transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(5);
        }


   

});

}

function checkPool6() {
myContractInstance.methods.pool6users(account).call().then(function (result) {
    if(result[1] > 0){
    $('#pool6sequencue').text(result[1])
    $('#pool6sequencue').show();
    $('.pool6sequencue').show();}
    
        if (!result[0]) {
            $('.pool6pay').show();
            $('.pool6transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool6status').show();
            $('.pool6status .card-status').addClass('bg-success');
            $('.pool6status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool6transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2] < 3) {
            $('.pool6status').show();
            $('.pool6status .card-status').addClass('bg-warning');
            $('.pool6status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool6transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(6);
        }

   
});

}

function checkPool7() {
myContractInstance.methods.pool7users(account).call().then(function ( result) {
    if(result[1] > 0){
    $('#pool7sequencue').text(result[1])
    $('#pool7sequencue').show();
    $('.pool7sequencue').show();}
    
        if (!result[0]) {
            $('.pool7pay').show();
            $('.pool7transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool7status').show();
            $('.pool7status .card-status').addClass('bg-success');
            $('.pool7status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool7transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2] < 3) {
            $('.pool7status').show();
            $('.pool7status .card-status').addClass('bg-warning');
            $('.pool7status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool7transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(7);
        }



    

});

}

function checkPool8() {
myContractInstance.methods.pool8users(account).call().then(function ( result) {
    if(result[1] > 0){
    $('#pool8sequencue').text(result[1])
    $('#pool8sequencue').show();
    $('.pool8sequencue').show();}
   
        if (!result[0]) {
            $('.pool8pay').show();
            $('.pool8transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool8status').show();
            $('.pool8status .card-status').addClass('bg-success');
            $('.pool8status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool8transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2] < 3) {
            $('.pool8status').show();
            $('.pool8status .card-status').addClass('bg-warning');
            $('.pool8status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool8transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(8);
        }


   

});

}

function checkPool9() {
myContractInstance.methods.pool9users(account).call().then(function ( result) {
    if(result[1] > 0){
    $('#pool9sequencue').text(result[1])
    $('#pool9sequencue').show();
    $('.pool9sequencue').show();}
   
        if (!result[0]) {
            $('.pool9pay').show();
            $('.pool9transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool9status').show();
            $('.pool9status .card-status').addClass('bg-success');
            $('.pool9status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool9transaction').html('Received No. of Payments ' + result[2]);


        }
        else if (result[2] < 3) {
            $('.pool9status').show();
            $('.pool9status .card-status').addClass('bg-warning');
            $('.pool9status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool9transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(9);
        }


    

});

}

function checkPool10() {
myContractInstance.methods.pool10users(account).call().then(function (result) {
    if(result[1] > 0){
    $('#pool10sequencue').text(result[1])
    $('#pool10sequencue').show();
    $('.pool10sequencue').show();}
   
        if (!result[0]) {
            $('.pool10pay').show();
            $('.pool10transaction').hide();
        }
        else if (result[2] == 3) {
            $('.pool10status').show();
            $('.pool10status .card-status').addClass('bg-success');
            $('.pool10status .ribbon').addClass('text-success').html('<span class="bg-success">Completed</span>');
            $('.pool10transaction').html('Received No. of Payments ' + result[2]);
            $('.currentautopoolno').html(10);
        }
        else if (result[2] < 3) {
            $('.pool10status').show();
            $('.pool10status .card-status').addClass('bg-warning');
            $('.pool10status .ribbon').addClass('text-warning').html('<span class="bg-warning">Active</span>');
            $('.pool10transaction').html('Received No. of Payments ' + result[2]); $('.currentautopoolno').html(10);
        }


   

});
}
$(document).ready(function () {
    $('.pool1pay').click(function (demo) {
       
        try {

            ethereum.enable();
            myContractInstance1.methods.buyPool1().send({ from: account, value: 200000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {
                    console.log('------->',hash)
                    $('.pool1pay').hide();
                    $('.pool1transaction').show();
                    $('.pool1transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');
              
            });
        }
        catch (err) {
            console.log(err)
        }
    });


    $('.pool2pay').click(function () {
        try {
            ethereum.enable();
          

            myContractInstance1.methods.buyPool2().send({ from: account, value: 400000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool2pay').hide();
                    $('.pool2transaction').show();
                    $('.pool2transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            console.log(err)
        }
    });

    $('.pool3pay').click(function () {
        try {
            ethereum.enable();

            myContractInstance1.methods.buyPool3().send({ from: account, value: 1000000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool3pay').hide();
                    $('.pool3transaction').show();
                    $('.pool3transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });

    $('.pool4pay').click(function () {
        try {
            ethereum.enable();
            
            myContractInstance1.methods.buyPool4().send({ from: account, value: 2000000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool4pay').hide();
                    $('.pool4transaction').show();
                    $('.pool4transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });

    $('.pool5pay').click(function () {
        try {
            ethereum.enable();           

            myContractInstance1.methods.buyPool5().send({ from: account, value: 4000000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool5pay').hide();
                    $('.pool5transaction').show();
                    $('.pool5transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool6pay').click(function () {
        try {
            ethereum.enable();

            myContractInstance1.methods.buyPool6().send({ from: account, value: 10000000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool6pay').hide();
                    $('.pool6transaction').show();
                    $('.pool6transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool7pay').click(function () {
        try {
            ethereum.enable();

            myContractInstance1.methods.buyPool7().send({ from: account, value: 20000000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool7pay').hide();
                    $('.pool7transaction').show();
                    $('.pool7transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });


        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool8pay').click(function () {
        try {
            ethereum.enable();

            myContractInstance1.methods.buyPool8().send({ from: account, value: 40000000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool8pay').hide();
                    $('.pool8transaction').show();
                    $('.pool8transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });

        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool9pay').click(function () {
        try {
            ethereum.enable();
            
            myContractInstance1.methods.buyPool9().send({ from: account, value: 100000000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool9pay').hide();
                    $('.pool9transaction').show();
                    $('.pool9transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


    $('.pool10pay').click(function () {
        try {
            ethereum.enable();
           
            myContractInstance1.methods.buyPool10().send({ from: account, value: 200000000000000000000, gasprice: 5 })
                .on('transactionHash', function (hash) {

                    $('.pool10pay').hide();
                    $('.pool10transaction').show();
                    $('.pool10transaction').html('<a href="https://bscscan.com/tx/' + hash + '">Track</a>');

                });
        }
        catch (err) {
            alert('Please download and install Metamask and Loggin to account');
        }
    });


});
</script>


<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>
        
        
  <script src="https://matrixpro.vip/socialjs.js"></script>
       
        
        
  <script>
    document.addEventListener("DOMContentLoaded", function (event) {
        socialjs.init({
            container: '.socialjs',
            https: true
        });
    });
</script>

<script>
    function myFunction() {
      /* Get the text field */
      var copyText = document.getElementById("myInput");
    
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      
      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    }
    </script>

<script>
    function myFunction1() {
      /* Get the text field */
      var copyText = document.getElementById("myInput1");
    
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      
      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    }
    </script>


<div class="app-content">
    <div class="section">

        <!-- Banner opened -->
        <div class="row"></div>
            <div class="col-xl-12">
                <div class="banner banner-color mt-0">
                    <div class="col-xl-2 col-lg-3 col-md-12">
                        <img src="/new_message.svg" alt="image" class="image">
                    </div>


                    <div class="page-content col-xl-7 col-lg-6 col-md-12">
                        <h3 class="mb-1">User ID : <span class="currentuserid"></span></h3>

                        
                        <input class="currentuseridlink" type="text" id="myInput" style="opacity:0; height:0px;" />
                        <input class="currentuseridlinknew" type="text" id="myInput1" style="opacity:0; height:0px;"/>


                        <p class="mb-0 fs-16">Referral link: <span class="currentuseridlink"></span> &emsp; <span class="btn btn-warning" onclick="myFunction()"> <i class="fa fa-copy"></i></span></p>

                        <p class="mb-0 fs-16">Trust Wallet Referral link: <span class="currentuseridlinknew"></span> &emsp; <span class="btn btn-warning" onclick="myFunction1()"> <i class="fa fa-copy"></i></span></p>


                        <p class="mb-0 fs-16"><a class="ethaddress" href=" " target="_blank">Your BNB address: <span class="currentaddress"></span> <i class="fa fa-external-link"></i></a></p> 
                    </div>        

                    <div class="col-xl-3 col-lg-3 col-md-3 text-right d-flex d-block">
                        <div class="socialjs">

                    <a class="sharebutton facebook btn " target="_blank" style="background-color:#0851ee;color:white" data-basecount="" data-sharetype="facebook" data-text="Earn $1M from $1,000 simple, safe, decentralized. To join and earn more than 600 BNB from 3 BNB, you can follow 6 steps. 👇👇👇👇 #earnings " title="Share this on Facebook" data-related=" " href="https://matrixpro.vip/signup?referralid="><i class=" fa fa-facebook"></i></a>

                    <a class="sharebutton twitter btn" target="_blank" style="background-color:#00ee77;color:white" data-basecount="" data-sharetype="twitter" data-text="Earn $1M from $1,000 simple, safe, decentralized. To join and earn more than 600 BNB from 3 BNB, you can follow 6 steps. Open in Trust wallet 👇👇👇👇 #earnings" data-via="INHERIT38092481" title="Share this on X(Twitter)" href="https://link.trustwallet.com/open_url?coin_id=60&url=https://matrixpro.vip/signup?referralid="><i class=" fa fa-twitter"></i> </a>
                     
                    
                </div>
            </div>
        </div>
        <!-- Banner opened -->
        <!-- Banner opened -->
        <!-- row opened -->
        <div class="row">
            <div class="col-xl-12 col-md-12 col-lg-12">
                <div class="card bg-dark1">
                    <div class="js-conveyor-example">
                        <ul class="news-crypto">
                            <li>
                                <div>
                                    <div class="row">
                                        <div class="d-flex">
                                            <div class="">
                                                <img src="/user.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Total Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="TotalUsers"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class="d-flex">
                                            <div class="">
                                                <img src="/1.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 1 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool1count"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class="d-flex">
                                            <div class="">
                                                <img src="/2.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 2 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool2count"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class="d-flex">
                                            <div class="">
                                                <img src="/3.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 3 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool3count"></span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class=" d-flex">
                                            <div class="">
                                                <img src="/4.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 4 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool4count"></span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class=" d-flex">
                                            <div class="">
                                                <img src="/5.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 5 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool5count"></span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class=" d-flex">
                                            <div class="">
                                                <img src="/6.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 6 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool6count"></span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class=" d-flex">
                                            <div class="">
                                                <img src="/7.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 7 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool7count"></span></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class=" d-flex">
                                            <div class="">
                                                <img src="/8.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 8 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool8count"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class=" d-flex">
                                            <div class="">
                                                <img src="/9.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 9 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool9count"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div class="row">
                                        <div class=" d-flex">
                                            <div class="">
                                                <img src="/10.png" class="w-7 h-7" alt="">
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-white mb-1 fs-12">Pool 10 Users</p>
                                                <div class="h5 m-0 fs-14 text-warning"><span class="Pool10count"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- row closed -->
        <!-- row opened -->
        <div class="row">
            <div class="col-md-12 col-lg-6 col-xl-3">
                <div class="card overflow-hidden bg-primary">
                    <div class="card-body bg-gradient-success">
                        <div class="d-flex">
                            <div class="">
                                <p class="mb-2 h6">Referral Earning </p>
                                <h2 class="mb-1 "><span class="totalreferral">0</span></h2>
                            </div>
                            <div class=" my-auto ml-auto">
                                <div class="chart-wrapper text-center">
                                    <img src="/m3.png" class="h-7" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="col-md-12 col-lg-6 col-xl-3">
                <div class="card overflow-hidden bg-gradient-secondary">
                    <div class="card-body text-white">

                        <div class="d-flex">
                            <div class="">
                                <p class="mb-2 h6">AutoPool Earning BNB</p>
                                <h2 class="mb-1 "><span class="totalpoolpayment">0</span></h2>
                            </div>
                            <div class=" my-auto ml-auto">
                                <div class="chart-wrapper text-center">
                                    <img src="/d2.png" class="h-7" alt="">
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>




            <div class="col-md-12 col-lg-6 col-xl-3">
                <div class="card overflow-hidden bg-teal">
                    <div class="card-body text-white">
                        <div class="d-flex">
                            <div class="">
                                <p class="mb-2 h6">Direct Team</p>
                                <h2 class="mb-1 "><span class="referralcount">0</span></h2>
                            </div>
                            <div class=" my-auto ml-auto">
                                <div class="chart-wrapper text-center">
                                    <img src="/d4.png" class="h-7" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-12 col-lg-6 col-xl-3">
                <div class="card overflow-hidden" style="background-color:#004172;color:#fff;">

                    <div class="card-body text-white">
                        <div class="d-flex">
                            <div class="">
                                <p class="mb-2 h6">Indirect Team</p>
                                <h2 class="mb-1 "><span class="indirect_referralcount">0</span></h2>
                            </div>

                            <div class=" my-auto ml-auto">
                                <div class="chart-wrapper text-center">
                                    <img src="/d5.png" class="h-7" alt="">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        <!-- row closed -->
        <!-- row opened -->
        <div class="row hidden-xs">
            <div class="col-md-12 col-lg-12 col-xl-8">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">Bitcoin / USD Rate</div>
                        <div class="card-options">
                            <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
                            <a href="#" class="card-options-fullscreen" data-toggle="card-fullscreen"><i class="fe fe-maximize"></i></a>
                            <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
                        </div>
                    </div>

                    <div class="pl-3 pr-3 pb-0">
                        <script type="text/javascript">
                            baseUrl = "https://widgets.cryptocompare.com/";
                            var scripts = document.getElementsByTagName("script");
                            var embedder = scripts[scripts.length - 1];
                            var cccTheme = { "Tabs": { "activeBorderColor": "#6c63e8" } };
                            (function () {
                                var appName = encodeURIComponent(window.location.hostname);
                                if (appName == "") { appName = "local"; }
                                var s = document.createElement("script");
                                s.type = "text/javascript";
                                s.async = true;
                                var theUrl = baseUrl + 'serve/v3/coin/chart?fsym=BNB&tsyms=USD';
                                s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
                                embedder.parentNode.appendChild(s);
                            })();
                        </script>

                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-sm-12 col-xl-4 col-md-12 ">
                <div class="card">
                    <div class="card-body p-0" style="height:700px;overflow:auto">
                        <a class="twitter-timeline" href="https://twitter.com/INHERIT38092481?ref_src=twsrc%5Etfw">Tweets by Twitter</a>
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                </div>
            </div>
        </div>
        <!-- row closed -->
        <!-- row opened -->
        <div class="row ">
            <div class="col-md-3 col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool1status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left"></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h2 class="card-title font-weight-bold">AutoPool 1</h2>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">0.2 BNB</h1>
                        <p class="mb-5">Globally <strong>2</strong> people pays <br /> <strong>0.2</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool1sequencue" style="display: none;">Your position number : <strong id="pool1sequencue"></strong> </p>
                        <p class="mb-5 pool1paying" style="display: none;">Current Paying Sequence number: <strong id="pool1paying"></strong></p>
                        <button type="button" class="btn btn-primary pool1pay">Enter</button>
                        <p class="pool1transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool2status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left"><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 2</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">0.4 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>0.4</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool2sequencue" style="display: none;">Your position number : <strong id="pool2sequencue"></strong> </p>
                        <p class="mb-5 pool2paying" style="display: none;">Current Paying Sequence number: <strong id="pool2paying"></strong></p>
                        <button type="button" class="btn btn-danger pool2pay">Enter</button>
                        <p class="pool2transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool3status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left"><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 3</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">1 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>1</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool3sequencue" style="display: none;">Your position number : <strong id="pool3sequencue"></strong> </p>
                        <p class="mb-5 pool3paying" style="display: none;">Current Paying Sequence number: <strong id="pool3paying"></strong></p>
                        <button type="button" class="btn btn-success pool3pay">Enter</button>
                        <p class="pool3transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool4status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left "><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 4</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">2 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>2</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool4sequencue" style="display: none;">Your position number : <strong id="pool4sequencue"></strong> </p>
                        <p class="mb-5 pool4paying" style="display: none;">Current Paying Sequence number: <strong id="pool4paying"></strong></p>
                        <button type="button" class="btn btn-success pool4pay">Enter</button>
                        <p class="pool4transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool5status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left "><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 5</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">4 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>4</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool5sequencue" style="display: none;">Your position number : <strong id="pool5sequencue"></strong> </p>
                        <p class="mb-5 pool5paying" style="display: none;">Current Paying Sequence number: <strong id="pool5paying"></strong></p>
              
                        <button type="button" class="btn btn-success pool5pay">Enter</button>
                        <p class="pool5transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool6status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left"><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 6</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">10 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>10</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool6sequencue" style="display: none;">Your position number : <strong id="pool6sequencue"></strong> </p>
                        <p class="mb-5 pool6paying" style="display: none;">Current Paying Sequence number: <strong id="pool6paying"></strong></p>
                        <button type="button" class="btn btn-success pool6pay">Enter</button>
                        <p class="pool6transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool7status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left"><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 7</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">20 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>20</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool7sequencue" style="display: none;">Your position number : <strong id="pool7sequencue"></strong> </p>
                        <p class="mb-5 pool7paying" style="display: none;">Current Paying Sequence number: <strong id="pool7paying"></strong></p>
                        <button type="button" class="btn btn-success pool7pay">Enter</button>
                        <p class="pool7transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool8status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left"><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 8</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">40 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>40</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool8sequencue" style="display: none;">Your position number : <strong id="pool8sequencue"></strong> </p>
                        <p class="mb-5 pool8paying" style="display: none;">Current Paying Sequence number: <strong id="pool8paying"></strong></p>
                        <button type="button" class="btn btn-success pool8pay">Enter</button>
                        <p class="pool8transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>

            <div class="offset-lg-3 col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool9status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left"><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 9</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">100 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>100</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool9sequencue" style="display: none;">Your position number : <strong id="pool9sequencue"></strong> </p>
                        <p class="mb-5 pool9paying" style="display: none;">Current Paying Sequence number: <strong id="pool9paying"></strong></p>
                        <button type="button" class="btn btn-success pool9pay">Enter</button>
                        <p class="pool9transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-lg-3  col-xs-6">
                <div class="card text-center overflow-hidden">
                    <div class="pool10status">
                        <div class="card-status"></div>
                        <div class="ribbon ribbon-top-left"><span class="bg-danger">New</span></div>
                    </div>
                    <div class="card-header text-center mx-auto">
                        <h3 class="card-title font-weight-bold">AutoPool 10</h3>
                    </div>
                    <div class="card-body">
                        <h1 class="pricing-card-title mb-5">200 BNB</h1>
                        <p class="mb-5">Globally <strong>3</strong> people pays  <br /><strong>200</strong> BNB each</p>
                        <p class="mb-5">No Referral necessary</p>
                        <p class="mb-5 pool10sequencue" style="display: none;">Your position number : <strong id="pool10sequencue"></strong> </p>
                        <p class="mb-5 pool10paying" style="display: none;">Current Paying Sequence number: <strong id="pool10paying"></strong></p>
                        <button type="button" class="btn btn-success pool10pay">Enter</button>
                        <p class="pool10transaction btn btn-primary disabled">Not Eligible</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- row closed -->
    </div>
</div>
    


<style>
    .pool1pay, .pool2pay, .pool3pay, .pool4pay, .pool5pay, .pool6pay, .pool7pay, .pool8pay, .pool9pay, .pool10pay {
        display: none
    }

    .pool1status, .pool2status, .pool3status, .pool4status, .pool5status, .pool6status, .pool7status, .pool8status, .pool9status, .pool10status {
        display: none
    }
</style>




<!-- Footer opened -->
<footer class="footer-main leftmenu-footer">
    <div class="container">
        <div class="row">
            <div class="col-md-6  mt-2 mb-2 p-l-10">
                <span class="p-r-10">Contract address</span>
                <a href="https://bscscan.com/address/0xac2faCfD2C3f8B70b67Ca8Bb9b12F7BC7aBA65F7" class="text-success" target="_blank">
                    0xac2faCfD2C3f8B70b67Ca8Bb9b12F7BC7aBA65F7 <i class="fa fa-external-link"></i>
                </a>
            </div>
            <div class="col-md-6  mt-2 mb-2 text-center">
                Copyright © 2022 Professional Matrix <a href="#" class="fs-14 text-primary"></a>
            </div>
        </div>
    </div>
</footer>
<!-- Footer closed -->
</div>

<!-- Back-to-top -->
<a href="#top" id="back-to-top"><i class="fa fa-angle-double-up"></i></a>

<!-- Jquery-scripts -->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/js/vendors/jquery-3.2.1.min.js"></script>

<!-- Moment js-->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/moment/moment.min.js"></script>

<!-- Bootstrap-scripts js -->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/js/vendors/bootstrap.bundle.min.js"></script>

<!-- Sparkline JS-->
<script src="https://matrixpro.vip/signup/jquery.sparkline.min.js"></script>

<!-- Bootstrap-daterangepicker js -->
<script src="https://matrixpro.vip/signup/daterangepicker.js"></script>

<!-- Bootstrap-datepicker js -->
<script src="https://matrixpro.vip/signup/bootstrap-datepicker.js"></script>

<!-- Chart-circle js -->
<script src="https://matrixpro.vip/signup/circle-progress.min.js"></script>

<!-- Rating-star js -->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/rating/jquery.rating-stars.js"></script>

<!-- Custom scroll bar js-->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/scroll-bar/jquery.mCustomScrollbar.concat.min.js"></script>

<!-- P-scroll js -->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/p-scroll/p-scroll.js"></script>

<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/p-scroll/p-scroll-leftmenu.js"></script>

<!-- Sidemenu js-->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/sidemenu/sidemenu.js"></script>

<!-- Sidemenu-respoansive-tabs js -->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/plugins/sidemenu-responsive-tabs/js/sidemenu-responsive-tabs.js"></script>

<!-- Leftmenu js -->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/js/left-menu.js"></script>

<!--Newsticker js-->
<script src="https://matrixpro.vip/signup/jquery.jConveyorTicker.js"></script>
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/js/newsticker.js"></script>

<!-- Chart js-->
<script src="https://matrixpro.vip/Home-Dashboard/assets/plugins/chart/chart.min.js"></script>
        
<!-- Nice-select js-->
<script src="https://matrixpro.vip/signup/jquery.nice-select.js"></script>
<script src="https://matrixpro.vip/signup/nice-select.js"></script>

<!-- Apexchart js-->
<script src="https://matrixpro.vip/Home-Dashboard/Content/assets/js/apexcharts.js"></script>

<!-- Rightsidebar js -->
<script src="https://matrixpro.vip/signup/sidebar.js"></script>

<!-- Custom js-->
<script src="https://matrixpro.vip/signup/custom.js"></script>
<!--LOgout Js-->

<script src="https://matrixpro.vip/jquery.waypoints.min.js"></script>

<script src="https://matrixpro.vip/theme.js"></script>

<script src="https://matrixpro.vip/flipclock.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/3.0.3/main/clipboard-polyfill.js"> </script>


<script> 
$(document).ready(function() {
$('.logoutuser').click(function () {

    var account = localStorage.removeItem("address", null);
    location.href = "https://matrixpro.vip/signin";
});
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function (event) {
    socialjs.init({
        container: '.socialjs',
        https: true
    });
});

</script>


</body>
</html>
