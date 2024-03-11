export * from './flow-ux.js';

import {SedraWalletDesktop} from './sedra-wallet-desktop.js';
import {SedraWalletMobile, isMobile, dontInitiatedComponent} from './sedra-wallet-mobile.js';

if(isMobile)
	document.body.classList.add('is-mobile');
export {isMobile}

export const SedraWallet = isMobile ? SedraWalletMobile : SedraWalletDesktop;

if(!dontInitiatedComponent)
	SedraWallet.define("sedra-wallet");
