import { AssetsModule } from './assets-module';
import { BanksModule } from './banks-module';

export class ScalexTransactionsSdk {
	public readonly assets: AssetsModule;
	public readonly banks: BanksModule;

	constructor( protected apiUrl: string ) {
		this.assets = new AssetsModule( apiUrl );
		this.banks = new BanksModule( apiUrl );
	}
}