import React from "react";
import { connect } from "react-redux";
import { getStockData } from "actions";
import useInterval from "components/hooks/useInterval";
import { IState } from "interfaces";

interface IExchangeTable extends IState {
  getStockData: Function;
}

const ExchangeTable: React.FunctionComponent<IExchangeTable> = ({
  getStockData,
  bids,
  asks,
  loading,
  error,
}): JSX.Element => {
  useInterval(getStockData, 1000);

  const displayTable = (inputArray: [string, string][]) => {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Price (USD)</th>
            <th>Market Size</th>
          </tr>
        </thead>
        <tbody>
          {inputArray.map((item, index) => (
            <tr key={index}>
              <td data-label="Price (USD)">{item[0]}</td>
              <td data-label="Market Size">{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className="ui two column doubling stackable grid container segment">
        <div className="column">
          <h3>Bids</h3>

          {displayTable(bids)}
        </div>
        <div className="column">
          <h3>Asks</h3>
          {displayTable(asks)}
        </div>
      </div>
      <div style={{ minHeight: 50 }}>
        {loading && <div className="ui active centered inline loader"></div>}
      </div>
      {error && <div>{error}</div>}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    bids: state.ccxtReducer.bids,
    asks: state.ccxtReducer.asks,
    error: state.ccxtReducer.error,
    loading: state.ccxtReducer.loading,
  };
};

export default connect(mapStateToProps, { getStockData })(ExchangeTable);
