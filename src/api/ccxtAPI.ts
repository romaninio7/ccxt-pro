import ccxt from "ccxt";

export default () => {
  const exchange = new ccxt.coinbasepro({
    enableRateLimit: true,
  });

  return exchange.fetchOrderBook("BTC/USD");
};
