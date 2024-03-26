import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private doc_id: number
  
  constructor(doc_id: number, name: string, accountNumber: number, iniciaoBalance: number, inicioStatus: boolean){
    super(name, accountNumber, iniciaoBalance, inicioStatus);
    this.doc_id = doc_id;
    
  }
}