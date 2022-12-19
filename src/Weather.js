import React, { Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Weather(props) {
  const {
    city,
    country,
    temp,
    max_temp,
    min_temp,
    icon,
    description,
    feels_like,
    humidity,
    wind,
    pressure,
  } = props.data;

  return (
    <section>
      <Container>
        <Row className="d-flex justify-content-center text-center">
          <Col md={{ span: 5 }}>
            <h2 className="text-capitalize display-2 fw-bold">
              {country}, {city}
            </h2>
            <p className="mb-0 text-capitalize fs-2 fw-bold"> {description} </p>
            <img
              src={
                !icon ? " " : `http://openweathermap.org/img/wn/${icon}@2x.png`
              }
              className="img-fluid mx-auto"
            />
            <p className="mb-0 fw-bold fs-1">{temp}°</p>
            <p className="mb-0 fs-4 fw-bold">
              {min_temp}° _ {max_temp}°
            </p>
          </Col>
        </Row>

        <Row className="state-row d-flex justify-content-center text-center">
          <Col md={{ span: 2 }} xs={{ span: 6 }}>
            <Card className="card p-2 shadow">
              <h4 className="text-danger mb-0 pb-2">Feels Like</h4>
              <span className="we-data mb-0 py-2">
                {!feels_like ? " " : `${feels_like}°`}{" "}
              </span>
            </Card>
          </Col>
          <Col md={{ span: 2 }} xs={{ span: 6 }}>
            <Card className="card p-2 shadow">
              <h4 className="text-danger mb-0 pb-2">Humidity</h4>
              <span className="we-data mb-0 py-2">
                {!humidity ? "" : `${humidity} %`}
              </span>
            </Card>
          </Col>
          <Col md={{ span: 2 }} xs={{ span: 6 }}>
            <Card className="card p-2 shadow">
              <h4 className="text-danger mb-0 pb-2">Wind Speed</h4>
              <span className="we-data mb-0 py-2">
                {!wind ? "" : `${wind} km/hr`}
              </span>
            </Card>
          </Col>
          <Col md={{ span: 2 }} xs={{ span: 6 }}>
            <Card className="card p-2 shadow">
              <h4 className="text-danger mb-0 pb-2">Pressure</h4>
              <span className="we-data mb-0 py-2">
                {!pressure ? "" : `${pressure} in`}
              </span>
            </Card>
          </Col>
        </Row>
        <p className="text-center footer">@openweather</p>
      </Container>
    </section>
  );
}

export default Weather;
