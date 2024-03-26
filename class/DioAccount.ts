export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance!: number;
  private status!: boolean;

  constructor(name: string, accountNumber: number, inicioBalance: number, inicioStatus: boolean){
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = inicioBalance;
    this.status = inicioStatus;
    
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance;
  }

  getStatus = (): boolean =>{
    return this.status;
  }
//nas aulas estava com arrow function, mas tive que mudar pois estava dando erro
//quando chamava o metodo "deposit" na class NovaDioAcount
  deposit (valor: number): void{
    this.validateStatus();
    this.balance += valor;
    console.log('Deposito de '+valor+' realizado com sucesso. Novo saldo: '+this.balance);
  }

  withdraw = (valor: number): void => {
    this.validateStatus();
    if(this.balance < valor){
      console.log('Saldo Insuficiente');

    }else{
      this.balance -= valor;
      console.log('Saque de '+valor+' realizado com sucesso. Novo saldo: '+this.balance);
    }
    
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
