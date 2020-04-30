import React from "react";
import Table from "./Table";

const styles = {
  cardStyles: {
    marginTop: "10%",
    overflow: "scroll",
    background: "#4586f5",
    border: "solid #14171c 5px",
    borderRadius: "10px",
    boxShadow: "0 0 0 5px hsl(0, 0%, 50%), 0 0 0 5px hsl(0, 0%, 60%), 0 0 0 10px hsl(0, 0%, 70%), 0 0 0 15px hsl(0, 0%, 80%), 0 0 0 20px hsl(0, 0%, 90%)",
    filter: "drop-shadow(0 0 30px black)",
    display: "table",
    textAlign: "center"
  }
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Card() {
  return (
    <div className = "container-fluid">
        <div className = "row text-center">
            <div className = "col-md-6 offset-md-3">
                <div style={styles.cardStyles} className="card">
                    <div className = "card-body">
                    <Table />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
