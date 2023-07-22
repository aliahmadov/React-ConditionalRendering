import React, { Component } from "react";
import "../Product/Product.css";
import $ from "jquery";

function handleClick() {
  // Code to be executed when the element is clicked
  // $(".product-colors span").removeClass("active");
  // $(this).addClass("active");
  // $(".active").css("border-color", $(this).attr("data-color-sec"));
  // $("body").css("background", $(this).attr("data-color-primary"));
  // $(".content h2").css("color", $(this).attr("data-color-sec"));
  // $(".content h3").css("color", $(this).attr("data-color-sec"));
  // $(".container .imgBx").css("background", $(this).attr("data-color-sec"));
  // $(".container .details button").css(
  //   "background",
  //   $(this).attr("data-color-sec")
  // );
  //$(".imgBx img").attr("src", $(this).attr("data-pic"));
}
export default class Product extends Component {
  render() {
    return (
      <div className="container">
         <div className="expired">

         {this.props.prod.expired && <img style={{width:570,height:400}} src="https://www.psdstamps.com/wp-content/uploads/2019/11/round-expired-stamp-png.png" alt="expired"></img>}
        </div>
        <div className="imgBx">
          <img
            src={this.props.prod.imageUrl}
            alt="Nike Jordan Proto-Lyte"
          ></img>
        </div>
        <div className="details">
          <div className="content">
            <h2>
              {this.props.prod.name}
              <br></br>
              <span>{this.props.prod.collection}</span>
            </h2>
            <p>{this.props.prod.description}</p>
            {/* <p className="product-colors">
              Available Colors:
              <span onClick={handleClick}
                className="black active"
                data-color-primary="#000"
                data-color-sec="#212121"
                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
              ></span>
              <span
                className="red"
                data-color-primary="#7E021C"
                data-color-sec="#bd072d"
                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"
              ></span>
              <span
                className="orange"
                data-color-primary="#CE5B39"
                data-color-sec="#F18557"
                data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"
              ></span>
            </p> */}
            <h3>$ {this.props.prod.price}</h3>
            <button className="btnBuy">Buy Now</button>
          </div>
        </div>
       
      </div>
    );
  }
}

$(".product-colors span").click(function () {});
