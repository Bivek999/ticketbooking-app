import React, { useEffect, useState } from "react";
import Seat from "./Seat";

const Seats = () => {
  const initialSeatLayout = [
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  ];

  const [seatLayout, setSeatLayout] = useState(() => {
    const saveddata = JSON.parse(localStorage.getItem("seatLayout"));
    return saveddata || initialSeatLayout;
  });
  useEffect(() => {
    localStorage.setItem("seatLayout", JSON.stringify(seatLayout));
  }, [seatLayout]);

  const handleSeatClick = (row, column) => {
    const newSeatLayout = [...seatLayout];
    newSeatLayout[row][column] = newSeatLayout[row][column] === 0 ? 1 : 1;
    setSeatLayout(newSeatLayout);
  };

  const seatRows = (seatLayout
    ? seatLayout
    : initialSeatLayout).map((row, rowIndex) => (
        <div className="row-seat" key={rowIndex}>
          {row.map((data, columnIndex) => (
            <div
              key={columnIndex}
              className={
                data === 0 ? "booked column-seat" : "available column-seat"
              }
              onClick={() => handleSeatClick(rowIndex, columnIndex)}
            >
              <span>
                {rowIndex}
                {columnIndex}
                <Seat />
              </span>
            </div>
          ))}
        </div>
      ));
  return <div className="pre">{seatRows}</div>;
};

export default Seats;
