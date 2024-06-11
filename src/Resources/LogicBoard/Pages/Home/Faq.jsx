import React, { useState, useEffect } from "react";

import "./../../../Style/Pages/Home/Home.css";

import Container from "react-bootstrap/esm/Container";

function Faq() {
  const questions = [
    {
      id: 1,
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button on the top right corner of the page. Fill in your details and click 'Register' to create your account.",
    },
    {
      id: 2,
      question: "What payment methods are accepted?",
      answer: "We accept payments through Visa, MasterCard, PayPal, and American Express. You can choose your preferred payment method during checkout.",
    },
    {
      id: 3,
      question: "How can I return a product?",
      answer: "To return a product, go to your account, select 'Order History,' and click on 'Return Items.' Follow the instructions to initiate the return process.",
    },
    {
      id: 4,
      question: "Is there a warranty on your products?",
      answer: "Yes, we offer a one-year warranty on all our products. Please check the warranty terms and conditions for more details.",
    },
    {
      id: 5,
      question: "Do you offer international shipping?",
      answer: "Yes, we provide international shipping to most countries. Shipping costs and delivery times may vary depending on your location.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = questions.filter((item) => item.question.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  });

  return (
    <Container fluid>
      <section className="faq">
        {searchResults.map((item) => (
          <Question key={item.id} question={item.question} answer={item.answer} />
        ))}
      </section>
    </Container>
  );
}

function Question(props) {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="CardFaqContainer">
      <div className={`CardFaqContent ${isActive ? "open" : ""}`} onClick={handleClick}>
        <div className="CardFaqLeft">
          <h5>{props.question}</h5>
        </div>
        <div className="CardFaqRight">
          <h5>{isActive ? "-" : "+"}</h5>
        </div>
      </div>
      {isActive && (
        <div className={`CardFaqAnswer ${isActive ? "open" : ""}`}>
          <h5>{props.answer}</h5>
        </div>
      )}
    </div>
  );
}

export default Faq;
