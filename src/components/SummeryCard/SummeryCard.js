import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SummeryCard = ({ news }) => {
  console.log(news);
  const { _id, total_view, title, number, rating, details, author, image_url } =
    news;
  return (
    <Card className="text-center">
      <Card.Header></Card.Header>
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
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default SummeryCard;
