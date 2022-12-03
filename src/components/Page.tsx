import { getResultDayOne } from "problems/day_1/getResult";
import { useState } from "react";
import "components/Page.scss";
import { getResultDayTwo } from "problems/day_2/getResult";
import { getResultDayThree } from "problems/day_3/getResult";
// import "./Page.scss";

export const Page = () => {
  const [result, setResult] = useState(<></>);

  return (
    <div className="page">
      <div className="result-window">{result}</div>
      <div className="calculate-button-list">
        <div className="calculate-button enabled" onClick={() => calcDayOneResult(setResult)}>
          Dag 1
        </div>
        <div className="calculate-button enabled" onClick={() => calcDayTwoResult(setResult)}>
          Dag 2
        </div>
        <div className="calculate-button enabled" onClick={() => calcDayThreeResult(setResult)}>
          Dag 3
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

const calcDayTwoResult = async (onFinish: (arg: JSX.Element) => void) => {
  const result = await getResultDayTwo();
  onFinish(
    <>
      <h1>Del 1: {result[0]}</h1>
      <h1>Del 2: {result[1]}</h1>
    </>
  );
};
const calcDayThreeResult = async (onFinish: (arg: JSX.Element) => void) => {
  const result = await getResultDayThree();
  onFinish(
    <>
      <h1>Del 1: {result[0]}</h1>
      <h1>Del 2: {result[1]}</h1>
    </>
  );
};
