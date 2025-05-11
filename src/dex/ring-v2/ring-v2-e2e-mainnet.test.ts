import dotenv from 'dotenv';
dotenv.config();

import { newTestE2E, testE2E } from '../../../tests/utils-e2e';
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
    const dexKey = 'RingV2';
    console.log('RingV2 E2E Mainnet Tests');

    describe('UniswapV2 Simpleswap', () => {
      it('ETH -> DAI', async () => {
        await testE2E(
          tokens.WETH,
          tokens.DAI,
          holders.USDC,
          '1000000',
          SwapSide.SELL,
          dexKey,
          ContractMethod.simpleSwap,
          network,
          provider,
        );
      });
      // it('ETH -> USDC', async () => {
      //   await testE2E(
      //     tokens.ETH,
      //     tokens.USDC,
      //     holders.ETH,
      //     '7000000000000000000',
      //     SwapSide.SELL,
      //     dexKey,
      //     ContractMethod.simpleSwap,
      //     network,
      //     provider,
      //   );
      // });
      // it('USDC -> ETH', async () => {
      //   await testE2E(
      //     tokens.USDC,
      //     tokens.ETH,
      //     holders.USDC,
      //     '2000000000',
      //     SwapSide.SELL,
      //     dexKey,
      //     ContractMethod.simpleSwap,
      //     network,
      //     provider,
      //   );
      // });
      // it('WBTC -> USDT', async () => {
      //   await testE2E(
      //     tokens.WBTC,
      //     tokens.USDT,
      //     holders.WBTC,
      //     '20000000',
      //     SwapSide.SELL,
      //     dexKey,
      //     ContractMethod.simpleSwap,
      //     network,
      //     provider,
      //   );
      // });
    });


    /**
    describe('RingV2_V6', () => {
      it('WETH -> DAI', async () => {
        await testE2E(
          tokens.WETH,
          tokens.DAI,
          holders.WETH,
          '1000000',
          SwapSide.SELL,
          dexKey,
          ContractMethod.swapExactAmountIn,
          network,
          provider,
        );
      });
    });
     */
  });
});
