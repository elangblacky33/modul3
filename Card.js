// Card.js
import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        <div className="col-5">
                            <img src={this.props.cover} className="img" height="200" alt="Book Cover" />
                        </div>
                        <div className="col-7">
                            <h5 className="text-info">{this.props.judul}</h5>
                            <h6 className="text-dark">Penulis: {this.props.penulis}</h6>
                            <h6 className="text-dark">Penerbit: {this.props.penerbit}</h6>
                            <h6 className="text-danger">Harga: Rp {this.props.harga}</h6>
                            <button className="btn btn-sm btn-primary m-1" onClick={this.props.onEdit}>
                                Edit
                            </button>
                            <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;