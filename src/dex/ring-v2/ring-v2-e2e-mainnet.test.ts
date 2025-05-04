import dotenv from 'dotenv';
dotenv.config();

import { testE2E } from '../../../tests/utils-e2e';
import { Tokens, Holders } from '../../../tests/constants-e2e';
import { Network, ContractMethod, SwapSide } from '../../constants';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
import { generateConfig } from '../../config';
import { RingV2FunctionsV6 } from './types';

describe('RingV2 E2E Mainnet', () => {
  const network = Network.MAINNET;
  const tokens = Tokens[network];
  const holders = Holders[network];
  const provider = new StaticJsonRpcProvider(
    generateConfig(network).privateHttpProvider,
    network,
  );

  describe('RingV2', () => {
    const dexKey = 'UniswapV2';
    console.log('[!!!!]RingV2 E2E Mainnet Tests');
    describe('RingV2 Simpleswap', () => {
      it('WETH -> DAI', async () => {
        await testE2E(
          tokens.WETH,
          tokens.DAI,
          holders.WETH,
          '1000000',
          SwapSide.SELL,
          dexKey,
          ContractMethod.swapExactAmountInOnUniswapV2,
          network,
          provider,
        );
      });
    });
  });
});
