import {Toolbar} from "../components/toolbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/crypto.module.css";
export default function crypto({filteredData}) {
  console.log(filteredData);

  const formatPercent = (number) => `${new Number(number).toFixed(3)}%`;
  return (
    <div className={styles.container}>
      <Toolbar />
      <br />
      <h1 style={{textAlign: "center"}}>Coin Market Cap</h1>

      <table className="table">
        <thead>
          <tr className={styles.headers}>
            <th>Symbol</th>
            <th>24H Change</th>
            <th>Price</th>
            <th>Market Cap Rank</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((coin) => (
            <tr key={coin.id}>
              <td className={styles.headers}>
                <img
                  src={coin.image}
                  style={{width: 25, height: 25, marginRight: 10}}
                />
                {coin.symbol.toUpperCase()}
              </td>
              <td>
                <span
                  className={
                    coin.price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {formatPercent(coin.price_change_percentage_24h)}
                </span>
              </td>
              <td className={styles.headers}>${coin.current_price}</td>
              <td className={styles.headers}>{coin.market_cap_rank}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
      <br />
      <h3 style={{textAlign: "center"}}>Source: CoinGecko </h3>
    </div>
  );
}

export async function getServerSideProps() {
  var data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per+page=10&page=1&sparkline=false`
  );
  const filteredData = await data.json();

  return {props: {filteredData}};
}
