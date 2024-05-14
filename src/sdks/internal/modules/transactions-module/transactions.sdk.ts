import { AssetsModule } from './assets-module';
import { BanksModule } from './banks-module';
import { TransactionsModule } from './transactions-module';
import { UtilsModule } from './utils-module';
import { WalletsModule } from './wallets-module';

export class ScalexTransactionsSdk {
	public readonly assets: AssetsModule;
	public readonly banks: BanksModule;
	public readonly utils: UtilsModule;
	public readonly wallets: WalletsModule;
	public readonly transactions: TransactionsModule;

	constructor( protected apiUrl: string ) {
		this.assets = new AssetsModule( apiUrl );
		this.banks = new BanksModule( apiUrl );
		this.utils = new UtilsModule( apiUrl );
		this.wallets = new WalletsModule( apiUrl );
		this.transactions = new TransactionsModule( apiUrl );
	}
}