import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { NovaDioAcount } from './class/NovaDioAcount'
import { PeopleAccount } from './class/PeopleAccount'

//questão 1 do desafio
// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Miller', 10, 1000, true);
// console.log(peopleAccount);

// peopleAccount.deposit(500);
// peopleAccount.withdraw(1500);
// peopleAccount.withdraw(50);

//questao 2 do desafio
// const companyAccount: CompanyAccount = new CompanyAccount('AM2 Camaroes', 20, 100, true);
// console.log(companyAccount);

// companyAccount.getLoan(500);
// companyAccount.getLoan(0);

//questao 3 do desafio
const novaConta: NovaDioAcount = new NovaDioAcount('Wheygry',15,100, true);
novaConta.deposit(100);
