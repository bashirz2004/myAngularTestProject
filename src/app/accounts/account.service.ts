import {IAccount} from './account';
import {oldlace} from 'color-name';

export class AccountService {
  entityList: IAccount[] = [];

  save(entity: IAccount) {
    this.entityList.push(entity);
  }

  delete(entity: IAccount) {
    this.entityList.splice(this.entityList.indexOf(entity), 1);
  }

  getAll() {
    return this.entityList;
  }
}
