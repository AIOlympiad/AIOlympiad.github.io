import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Images
import Logo from "../images/YSC_Logo.png";
// Components
import { useErrorBoundary } from "react-error-boundary";
import { Col, Container, Row } from "react-bootstrap";

// #region styled-components
const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  /* ✅ No background */
  &::before,
  &::after {
    display: none;
  }

  .down-container {
    height: 10rem;
  }
`;
// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
};

const Hero = ({ name }) => {
  const { showBoundary } = useErrorBoundary();

  return (
    <StyledHero>
      <Container>
        {/* <Row className="align-items-center text-center">
          <Col className="d-none d-md-block">
            <img
              src={Logo}
              alt="React Logo"
              className="w-75 mx-auto hero-img"
            />
          </Col>
        </Row> */}
      </Container>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
