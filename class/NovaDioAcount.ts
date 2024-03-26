import { DioAccount } from "./DioAccount";

export class NovaDioAcount extends DioAccount{

    constructor(name: string, accountNumber: number, inicioBalance: number, inicioStatus: boolean){
    super(name, accountNumber, inicioBalance, inicioStatus);
    }
    deposit(valor: number): void {
        const valorAprimorado = valor + 10; 
        super.deposit(valorAprimorado);
        console.log('Deposito de '+valor+' realizado com sucesso. Novo saldo: '+this.getBalance());
    }
    
}
