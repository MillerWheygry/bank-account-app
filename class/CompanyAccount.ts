import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, iniciaoBalance: number, inicioStatus: boolean){
    super(name, accountNumber, iniciaoBalance, inicioStatus);
  }

  getLoan = (valorEmprestimo: number): void => {
    if(!this.getStatus()){
      console.log('Conta desativada. Não é possivel realizar emprestimo!');
      return;
    }
    if(valorEmprestimo <= 0){
      console.log('Valor emprestimo inválido. Informe o valor maior que zero');
      return;
    }
    this.deposit(valorEmprestimo);
    console.log('Emprestimo de '+valorEmprestimo+' realizado com sucesso. Novo saldo: '+this.getBalance());
    
  }
}
