import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  H3,
  Form,
  FormGroup,
  Input,
  Button,
} from "@bootstrap-styled/v4";

function App() {
  const [borderRadius, setBorderRadius] = useState(0);

  const [borderRadiusTopLeft, setBorderRadiusTopLeft] = useState(0);
  const [borderRadiusTopRight, setBorderRadiusTopRight] = useState(0);
  const [borderRadiusBottomLeft, setBorderRadiusBottomLeft] = useState(0);
  const [borderRadiusBottomRight, setBorderRadiusBottomRight] = useState(0);

  const _handleBorderRadiusChange = (e, t) => {
    switch (t) {
      case "borderRadiusTopLeft":
        setBorderRadiusTopLeft(e.target.value);
        break;
      case "borderRadiusTopRight":
        setBorderRadiusTopRight(e.target.value);
        break;
      case "borderRadiusBottomLeft":
        setBorderRadiusBottomLeft(e.target.value);
        break;
      case "borderRadiusBottomRight":
        setBorderRadiusBottomRight(e.target.value);
        break;
      default:
        return;
    }

    setBorderRadius(
      `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomLeft}px ${borderRadiusBottomRight}px`
    );
  };

  const _borderForm = (border) => {
    return (
      <FormGroup>
        <label htmlFor={border}>{_humanize(border)}</label>
        <Row>
          <Col lg="9">
            <Input
              type="range"
              id={border}
              value={_stateValue(border)}
              onChange={(e) => _stateSet(e, border)}
            />
          </Col>
          <Col>
            <Input
              type="number"
              id={border}
              value={_stateValue(border)}
              onChange={(e) => _stateSet(e, border)}
            />
          </Col>
        </Row>
      </FormGroup>
    );
  };

  const _humanize = (str) => {
    return str
      .replace(/_/g, " ")
      .trim()
      .replace(/\b[A-Z][a-z]+\b/g, function (word) {
        return word.toLowerCase();
      })
      .replace(/^[a-z]/g, function (first) {
        return first.toUpperCase();
      });
  };

  const _stateValue = (side) => {
    switch (side) {
      case "topLeft":
        return borderRadiusTopLeft;

      case "topRight":
        return borderRadiusTopRight;

      case "bottomLeft":
        return borderRadiusBottomLeft;

      case "bottomRight":
        return borderRadiusBottomRight;

      default:
        return;
    }
  };

  const _stateSet = (e, side) => {
    switch (side) {
      case "topLeft":
        _handleBorderRadiusChange(e, "borderRadiusTopLeft");
        break;

      case "topRight":
        _handleBorderRadiusChange(e, "borderRadiusTopRight");
        break;

      case "bottomLeft":
        _handleBorderRadiusChange(e, "borderRadiusBottomLeft");
        break;

      case "bottomRight":
        _handleBorderRadiusChange(e, "borderRadiusBottomRight");
        break;

      default:
        return;
    }
  };

  return (
    <div className="App">
      <Container className="d-flex flex-column">
        <Row className="d-flex justify-content-center">
          <H3>Border Radius</H3>
        </Row>

        <Row>
          <Col>
            <Form>
              {_borderForm("topLeft")}
              {_borderForm("topRight")}
              {_borderForm("bottomLeft")}
              {_borderForm("bottomRight")}
            </Form>
          </Col>

          <Col className="d-flex justify-content-center flex-column">
            <div
              style={{
                borderRadius: borderRadius,
                width: "350px",
                height: "350px",
                backgroundColor: "red",
              }}
            ></div>

            <Form className="flex-column" style={{ marginTop: "10px" }}>
              <FormGroup>
                <Input
                  type="text"
                  disabled
                  value={`border-radius: ${borderRadius}`}
                />
              </FormGroup>
              <Button
                onClick={() =>
                  navigator.clipboard.writeText(
                    `border-radius: ${borderRadius}`
                  )
                }
              >
                Copy
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
