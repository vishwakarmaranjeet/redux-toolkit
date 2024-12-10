import React from "react";

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
    return (
        <form>
            <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}
                style={{ height: "35px", width: "300px", paddingLeft: "10px", paddingRight: "10px" }}
            />
            <br />
            <label style={{ fontSize: "12px" }}>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                Only show product in stock
            </label>
        </form>
    )
};

export default SearchBar;