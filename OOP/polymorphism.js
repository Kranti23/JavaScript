class Bank {
    constructor(accHld, accNo, bal) {
        this.accountHolder = accHld;
        this.accountNo = accNo;
        this.balance = bal;
        this.transaction = [];
    }

    depositMoney(amount) {
        this.balance = this.balance + amount;
        this.transaction.push(amount);
        console.log("\nDisplay balance after depositing ", this.balance)
    }
    withdrawlMoney(amount) {
        if (this.balance > amount) {
            this.balance = this.balance - amount;
            this.transaction.push(-amount);
            console.log("Display balance after withdrawing", this.balance)
        }
        else {
            console.log('Insufficient Balance')
        }
    }

    lastFiveTransaction() {
        if (this.transaction.length < 5) {
            this.transaction.slice(0).reverse()
        }
        console.log(this.transaction.slice(-5))
    }

}

let sbi = new Bank("Chavan Kranti", 238990146, 50000)
console.log(sbi)

sbi.depositMoney(1000)
sbi.withdrawlMoney(5000)
sbi.depositMoney(2000)
sbi.depositMoney(6000)
sbi.withdrawlMoney(500)
sbi.depositMoney(100)

// sbi.lastFiveTransaction()
console.log("\ntransacted money: ", sbi.transaction)

let totalTransaction = sbi.transaction.reduce(function (acc, el) {
    return Math.abs(el) + acc;
}, 0)
console.log(totalTransaction)


//console.log(Math.abs(-19))

//______________________________________________________________
class Ovl {
        addition(x,y){
            console.log(x+y)
        }
        addition(x,y,z){
            console.log(x+y+z)            //overloading
        }
    
    }
    let a = new Ovl()
    a.addition(12,13)              //not a number
    a.addition(23,60,20)           //103
    
    // class Ovl {
    //   addition(x,y,z){
    
    //         if(x != undefined && y != undefined && z != undefined){
    //              console.log(x+y+z)
    //         }
    //         else if(x != undefined && y != undefined){
    //             console.log(x+y)
    //         }
    //         else {
    //             console.log('please give proper input')
    //         }
    //   }
    
    // }
    // let a = new Ovl()
    // a.addition(12,13,12)
    // a.addition(12,13)
    // a.addition(23)
    












