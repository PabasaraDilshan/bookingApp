import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./hotelList.css";
const HotelsList: React.FC<{}> = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dateRange, setDateRange] = useState(location.state.dateRange);
  const [openDate, setopenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelsListContainer">
        <div className="hotelsListWrapper">
          <div className="hotelsListSearch">
            <h1 className="hotelsListTitle">Search</h1>
            <div className="hotelsListItm">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="hotelsListItm">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setopenDate(!openDate)}>{`${format(
                dateRange[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dateRange[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDateRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="hotelsListItm">
              <label htmlFor="">Options</label>
              <div className="hotelsOptions">
                <div className="hotelsOptionItm">
                  <span className="hotelsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="hotelsOptionInput" />
                </div>
                <div className="hotelsOptionItm">
                  <span className="hotelsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="hotelsOptionInput" />
                </div>
                <div className="hotelsOptionItm">
                  <span className="hotelsOptionText">Adult</span>
                  <input
                    min={1}
                    placeholder={options.adults}
                    type="number"
                    className="hotelsOptionInput"
                  />
                </div>
                <div className="hotelsOptionItm">
                  <span className="hotelsOptionText">Children</span>
                  <input
                    min={0}
                    placeholder={options.children}
                    type="number"
                    className="hotelsOptionInput"
                  />
                </div>
                <div className="hotelsOptionItm">
                  <span className="hotelsOptionText">Room</span>
                  <input
                    min={1}
                    placeholder={options.rooms}
                    type="number"
                    className="hotelsOptionInput"
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="hotelsListResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsList;
