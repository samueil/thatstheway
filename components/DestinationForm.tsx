import React, { Component } from "react";
import { connect } from "react-redux";

function submit({startLocation, endLocation}) {
  console.log("startLocation: "+ startLocation + "\nendLocation: " + endLocation )
}

function DestinationForm({ startLocation = "", endLocation = "", onSubmit = submit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const { startLocation, endLocation } = e.target.elements;
    onSubmit({
      startLocation: startLocation.value,
      endLocation: endLocation.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="floatcontainer">
          <label className="label" htmlFor="startLocation">
            Start:
          </label>
          <input
            type="startLocation"
            name="startLocation"
            id="startLocation"
            title="startLocation"
            required
          />
        </div>
        <div className="floatcontainer">
          <label className="label" htmlFor="endLocation">
            Destination:
          </label>
          <input
            type="endLocation"
            name="endLocation"
            id="endLocation"
            title="endLocation"
            required
          />
        </div>
        <button type="submit">Show Route</button>
      </form>
    </div>
  );
}

export default DestinationForm;
