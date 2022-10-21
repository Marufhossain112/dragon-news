import React from "react";
import { ListGroup } from "react-bootstrap";
import {
  FaDiscord,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <ListGroup>
      <ListGroup.Item className="mb-2">
        <FaFacebook /> Facebook
      </ListGroup.Item>
      <ListGroup.Item className="mb-2">
        <FaTwitter></FaTwitter> Twitter
      </ListGroup.Item>
      <ListGroup.Item className="mb-2">
        <FaWhatsapp></FaWhatsapp> Whatsapp
      </ListGroup.Item>
      <ListGroup.Item className="mb-2">
        <FaYoutube></FaYoutube> Youtube
      </ListGroup.Item>
      <ListGroup.Item className="mb-2">
        <FaDiscord></FaDiscord> Discord
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SocialLinks;
