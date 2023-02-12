import CircleLoader from "react-spinners/CircleLoader";
import React from "react";

export default class Spinner extends React.Component {
    render() {
        return (
            <div className="text-center ms-5 ps-5">
                <div className="text-center">
                    <CircleLoader
                        color="#d63636"
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>
        )
    }
}
