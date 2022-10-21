import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SummeryCard = ({ news }) => {
  // console.log(news);
  const { _id, total_view, title, number, rating, details, author, image_url } =
    news;
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex ">
          <Image
            roundedCircle
            src={author?.img}
            style={{ width: "60px" }}
          ></Image>{" "}
          <div className="ms-4">
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>

        <div className="d-flex ">
          <p className="me-2">
            {" "}
            <FaRegBookmark></FaRegBookmark>{" "}
          </p>
          <p>
            <FaShareAlt></FaShareAlt>
          </p>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div>
          <Card.Img variant="top" src={image_url} />
        </div>

        <Card.Text style={{ textAlign: "left" }}>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>{" "}
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between ">
        <div className="align-items-center">
          <span className="text-warning">
            <FaStar></FaStar>
          </span>
          <span className="ms-1">{rating.number}</span>
        </div>
        <div>
          <span className="me-1">
            <FaEye></FaEye>
          </span>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SummeryCard;
