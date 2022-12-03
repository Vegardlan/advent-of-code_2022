import { getResultDayOne } from "problems/day_1/getResult";
import { useState } from "react";
import "components/Page.scss";
// import "./Page.scss";

export const Page = () => {
  const [resultContent, setResultContent] = useState();
  const [result, setResult] = useState(<></>);

  return (
    <div className="page">
      <div className="result-window">{result}</div>
      <div className="calculate-button-list">
        <div className="calculate-button enabled" onClick={() => calcDayOneResult(setResult)}>
          Dag 1
        </div>
        <div className="calculate-button"></div>
        <div className="calculate-button"></div>
        <div className="calculate-button"></div>
        <div className="calculate-button"></div>
        <div className="calculate-button"></div>
        <div className="calculate-button"></div>
        <div className="calculate-button"></div>
      </div>
    </div>
  );
};

const calcDayOneResult = async (onFinish: (arg: JSX.Element) => void) => {
  const result = await getResultDayOne();
  onFinish(
    <>
      <h1>Del 1: {result[0]}</h1>
      <h1>Del 2: {result[1]}</h1>
    </>
  );
};
  onFinish(<h1>{result}</h1>);
};
