import { BigintIsh, Price, Token, CurrencyAmount } from '@pulsex/sdk-core';
import JSBI from 'jsbi';
export declare const computePairAddress: ({ factoryAddress, tokenA, tokenB }: {
    factoryAddress: string;
    tokenA: Token;
    tokenB: Token;
}) => string;
export declare class Pair {
    readonly liquidityToken: Token;
    private readonly tokenAmounts;
    private readonly swapFee;
    private readonly _swapFractionAfterFee;
    private readonly _protocolFeeShare;
    static getAddress(tokenA: Token, tokenB: Token): string;
    constructor(currencyAmountA: CurrencyAmount<Token>, tokenAmountB: CurrencyAmount<Token>, swapFee: JSBI, protocolFeeShare: JSBI);
    /**
     * Returns true if the token is either token0 or token1
     * @param token to check
     */
    involvesToken(token: Token): boolean;
    /**
     * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
     */
    get token0Price(): Price<Token, Token>;
    /**
     * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
     */
    get token1Price(): Price<Token, Token>;
    /**
     * Return the price of the given token in terms of the other token in the pair.
     * @param token token to return price of
     */
    priceOf(token: Token): Price<Token, Token>;
    /**
     * Returns the chain ID of the tokens in the pair.
     */
    get chainId(): number;
    get token0(): Token;
    get token1(): Token;
    get reserve0(): CurrencyAmount<Token>;
    get reserve1(): CurrencyAmount<Token>;
    get swapFractionAfterFee(): JSBI;
    get protocolFeeShare(): JSBI;
    reserveOf(token: Token): CurrencyAmount<Token>;
    getOutputAmount(inputAmount: CurrencyAmount<Token>): [CurrencyAmount<Token>, Pair];
    getInputAmount(outputAmount: CurrencyAmount<Token>): [CurrencyAmount<Token>, Pair];
    getLiquidityMinted(totalSupply: CurrencyAmount<Token>, tokenAmountA: CurrencyAmount<Token>, tokenAmountB: CurrencyAmount<Token>): CurrencyAmount<Token>;
    getLiquidityValue(token: Token, totalSupply: CurrencyAmount<Token>, liquidity: CurrencyAmount<Token>, feeOn?: boolean, kLast?: BigintIsh): CurrencyAmount<Token>;
}
