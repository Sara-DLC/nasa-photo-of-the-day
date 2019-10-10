import React from "react";
import { Card, CardText, CardBody,
  CardTitle} from 'reactstrap';
const BottomCard = ({explanation, title}) => {
    return (
      <Card >
    
      <CardBody >
        <CardTitle className="text-title">{title}</CardTitle>
        <CardText>{explanation}</CardText>

      </CardBody>
    </Card>
    
    );
  };


export default BottomCard;

