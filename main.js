var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}];
//var web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/b2c7aaa8e1b346288c6b4cce36e39f3d'));
var web3 = new Web3(new Web3.providers.HttpProvider('https://rpc.ankr.com/polygon_mumbai'));
var account;
 
class TransactionChecker {
  web3;
  account;

  constructor(account) {
      this.web3 = new Web3(new Web3.providers.HttpProvider('https://rpc.ankr.com/polygon_mumbai'));
      this.account = account.toLowerCase();
  }

  async checkBlock() {
      let block = await this.web3.eth.getBlock('latest');
      let number = block.number;
      console.log('Searching block ' + number);

      if (block != null && block.transactions != null) {
          for (let txHash of block.transactions) {
              let tx = await this.web3.eth.getTransaction(txHash);
              if (this.account == tx.to.toLowerCase()) {
                  console.log('Transaction found on block: ' + number);
                  console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});
              }
          }
      }
  }
}
createAccount();
let txChecker = new TransactionChecker(account.address);
setInterval(() => {
  txChecker.checkBlock();
},  1000);





function getContractInfo()
  {
    if(account!=null)
    {
    var contractAddress = $("#contractAddressTxt").val();
    const tokenContract = new web3.eth.Contract(abi, contractAddress);
    var res = getTokenInfo(tokenContract);
    console.log(res);
    addTokenToTable(res);
    }
    else
    {
      alert("please create account first!");
    }

  }
 async function getTokenInfo(tokenContract) {
    const [symbol, decimals, name , balance] = await Promise.all([
      tokenContract.methods.symbol().call(),
      tokenContract.methods.decimals().call(),
      tokenContract.methods.name().call(),
      tokenContract.methods.balanceOf(account.address).call()
    ]);
    return { decimals, name, symbol , balance };
  }
  function addTokenToTable(data)
  {
    data.then(value=>{
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        var inputGroup = document.createElement("div");
        var inputGroupSpan = document.createElement("span");
        var hr = document.createElement("hr");

        $(td1).text(value.name);
        $(td2).text(value.symbol);
        $(td3).text($("#contractAddressTxt").val());
        $(td4).text(value.decimals);
        $(td5).text(value.balance /(web3.utils.toBN(10).pow(web3.utils.toBN(value.decimals))));


        // add tools elements
        var sendBtn = document.createElement("button");
        var sendTxt = document.createElement("input");
        var refreshBalanceBtn = document.createElement("button");


        $(refreshBalanceBtn).addClass("btn btn-sm btn-info");
        $(refreshBalanceBtn).attr("style","margin-left:5px;margin-right:5px;");
        $(refreshBalanceBtn).text("Refresh");


        $(inputGroup).addClass("input-group");
        $(inputGroupSpan).addClass("input-group-btn");
        $(sendTxt).addClass("form-control input-sm");
        $(sendTxt).attr("placeholder","address to send tokn...");
        $(sendBtn).addClass("btn btn-sm btn-primary");
        $(sendBtn).text("Send");

        $(sendBtn).click(function(e){
          
          
          
          var dec =parseInt($(this).closest("tr").find("td")[3].innerHTML);
          var conAdd =$(this).closest("tr").find("td")[2].innerHTML;
          var count;
          var contract = new web3.eth.Contract(abi, conAdd, {from: account.address});
          web3.eth.getTransactionCount(account.address).then(function(v){console.log(v); count = v})  
          var amount =parseFloat($(sendTxt).val()) * (web3.utils.toBN(10).pow(web3.utils.toBN(dec)));// /(web3.utils.toBN(10).pow(web3.utils.toBN(2)));
          var rawTransaction = {"from":account.address, "gasPrice":Web3.utils.toHex(2 * 1e9),"gasLimit":Web3.utils.toHex(210000),"to":conAdd,"value":"0x0","data":contract.methods.transfer("0xdE53dD7CbAD7127Fe60E5fC4148824CD1163f3E9", amount).encodeABI(),"nonce":web3.utils.toHex(count)} 




          //var rawTransaction = {  "from": account.address ,  "to": "0xdE53dD7CbAD7127Fe60E5fC4148824CD1163f3E9",  "value": web3.utils.toHex(web3.utils.toWei("0.001", "ether")),  "gas": 200000,  "chainId": 80001};
 
 
 
          account.signTransaction(rawTransaction)  
          .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))  
          .then(receipt => console.log("Transaction receipt: ", receipt))  
          .catch(err => console.error(err));
      
      
      
        });

        $(inputGroupSpan).append(sendBtn);
        $(inputGroup).append(sendTxt);
        $(inputGroup).append(inputGroupSpan);


        $(td5).append(refreshBalanceBtn);
      //  $(td6).append(hr);
        $(td6).append(inputGroup);
        /////////////////////////

        $(tr).append(td1);
        $(tr).append(td2);
        $(tr).append(td3);
        $(tr).append(td4);
        $(tr).append(td5);
        $(tr).append(td6);

        $("#tokensList").first("tbody").append(tr);

});




  }
  function createAccount()
  {
    //0xc205105aaf0f5ebb0bbafb8cc21687133daa3266367e00c6144f7fe66104a38f
    //account = web3.eth.accounts.create();
    account = web3.eth.accounts.privateKeyToAccount('0xc205105aaf0f5ebb0bbafb8cc21687133daa3266367e00c6144f7fe66104a38f');
    console.log(account);
    var QR_CODE = new QRCode("qrcode", {
      width: 78,
      height: 78,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    QR_CODE.makeCode(account.address);
    $("#pkAddress").text(account.address);
    getBalanceEth();
  }
  function getBalanceEth()
  {
    web3.eth.getBalance(account.address).then(value=> {
      $("#pkBalance").text(web3.utils.fromWei(value));

    });
  }
  function getBalanceTokenContract(contract)
  {
    contract.methods.balanceOf(account.address).call().then(function(balance){return balance})
  }
  