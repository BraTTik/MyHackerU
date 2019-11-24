import React, { useState, useEffect } from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProductAccordion = props => {
  const bodyStub = `Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at
    ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a
    dignissim mauris placerat`;

  const goodId = useSelector(store => store.app.productPageId);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      await fetch("http://test-api.ipromote.ru/api/review/find")
        .then(response => response.json())
        .then(json => {
          const filtered = json.data.filter(
            item => String(item.cid) === String(goodId)
          );
          setReviews(filtered);
        });
    }
    fetchReviews();
  }, [goodId]);

  const card = () => {
    let key = 0;
    return function(title, body) {
      key += 1;
      let cardNumber = key;
      return (
        <div style = {{
                 borderTop: '1px solid #ccc',
                 borderBottom: '1px solid #ccc',
                 padding: '0.5rem'
                 }}>
            <CustomToggle as={Card.Header} eventKey={cardNumber} >
                { title }
            </CustomToggle>
          <Accordion.Collapse eventKey={cardNumber}>
            <Card.Body>{body}</Card.Body>
          </Accordion.Collapse>
        </div>
      );
    };
  };
  const renderCard = card();

  const renderReviews = () => {
    let cardReviews = reviews.map((item, index) => {
      return (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{item.user}</Card.Title>
            <Card.Text>{item.title}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
    return renderCard(`Reviews(${reviews.length})`, cardReviews);
  };

  return (
    <Accordion>
      {renderCard("Description", bodyStub)}
      {renderCard("Additional information", bodyStub)}
      {renderReviews()}
    </Accordion>
  );
};

function CustomToggle({children, eventKey}){
    const [isOpen, setIsOpen] = useState(false);
    const toggleOnClick = useAccordionToggle(eventKey, ()=>{
        setIsOpen(!isOpen);
    })
    return (
        <h5 className="js-toggle-dropdown-content px-1 py-2 flex-sb-m cs-pointer m-text19 color0-hov trans-0-4"
            onClick = { toggleOnClick }
            >
            { children }
            <i
            className={`down-mark fs-12 color1 fa fa-minus ${isOpen ? '' : 'dis-none'}`}
            aria-hidden="true"
            ></i>
            <i
            className={`up-mark fs-12 color1 fa fa-plus ${isOpen ? 'dis-none' : ''}`}
            aria-hidden="true"
            ></i>
        </h5>
    );
}

export default ProductAccordion;
