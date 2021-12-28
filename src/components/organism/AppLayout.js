import { useState, Fragment } from "react";
import Filter from "../atoms/Filter";
import Card from "../molecules/Card";
import Header from "../molecules/Header";
import "./organism.css";

const AppLayout = ({ data, setText }) => {
  return (
    <div className="app-layout">
      <Header />
      <div className="content-container">
        <Filter setText={setText} />
        <div className="cards-container">
          {data && data.length > 0
            ? data.map((el, idx) => (
                <Fragment key={idx}>
                  <Card data={el} />
                </Fragment>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
