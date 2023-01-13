import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
const Header: React.FC<{ type?: string }> = ({ type }) => {
  const [dateRange, setDateRange] = React.useState<Range | any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = React.useState(false);
  const [openOptions, setOpenOptions] = React.useState(false);
  const [options, setOptions] = React.useState<any>({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const handleOption = (option: string, t: string) => {
    setOptions((prev: any) => {
      return {
        ...prev,
        [option]:
          t === "+"
            ? prev[option] + 1
            : prev[option] > 0
            ? prev[option] - 1
            : 0,
      };
    });
  };

  //   const handleOption = (option: string, t: string) => {
  //     switch (option) {
  //       case "adults":
  //         if (t === "+") {
  //           setOptions((op) => {
  //             return { ...op, adults:  op.adults + 1 };
  //           });
  //         } else {
  //           setOptions((op) => {
  //             return { ...op, adults: op.adults > 0 ? op.adults - 1 : 0 };
  //           });
  //         }
  //         break;
  //       case "children":
  //         if (t === "+") {
  //           setOptions((op) => {
  //             return { ...op, children:  op.children + 1 };
  //           });
  //         } else {
  //           setOptions((op) => {
  //             return { ...op, children: op.children > 0 ? op.children - 1 : 0 };
  //           });
  //         }
  //         break;
  //       case "rooms":
  //         if (t === "+") {
  //           setOptions((op) => {
  //             return { ...op, rooms: op.rooms + 1  };
  //           });
  //         } else {
  //             setOptions((op) => {
  //                 return { ...op, rooms: op.rooms > 0 ? op.rooms - 1 : 0 };
  //               });
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxies</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              blah blah with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                  className="headerSearchText"
                >{`${format(dateRange[0].startDate, "MM/dd/yyyy")} to ${format(
                  dateRange[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDateRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    className="dateRange"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {options.adults} adult - {options.children} children -
                  {options.rooms} room
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adults <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adults", "-")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adults}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adults", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "-")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.rooms <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("rooms", "-")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.rooms}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("rooms", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
