import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Увійти в профіль</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Увійти в профіль</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Адреса доставки</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Адреса доставки</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Оплата</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Оплата</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Зробити замовлення</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Зробити замовлення</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
