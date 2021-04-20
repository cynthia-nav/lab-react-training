import React from 'react';
import './App.css';
import IdCard from './idcard';
import Greetings from './greetings';
import Random from './random';
import BoxColor from './boxcolor';
import CreditCard from './CreditCard';
import Rating from './Ratings';
import DriverCard from './DriverCard';

function App() {
  return (
    <div className="App">
  
      <div>
        <IdCard
          lastName = 'Doe'
          firstName = 'John'
          gender = 'male'
          height = {1.78}
          birth = {"1992-07-14"}
          picture = "https://randomuser.me/api/portraits/men/44.jpg"
          />
      </div>
      <div>
          <IdCard
          lastName = 'Delores'
          firstName = 'Obrien'
          gender = 'female'
          height = {1.72}
          birth = {"1988-05-11"}
          picture = "https://randomuser.me/api/portraits/women/44.jpg"
          />
      </div>
      <div>
        <Greetings
        lang = "de" children = "Ludwig"></Greetings>
        <Greetings
        lang= "fr" children= "Francois"></Greetings>
      </div>
      <div>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      </div>
      <div>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#ddbb55"
        color="white" />
      </div>
      <div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      </div>
      <div>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
      </div>

    </div>
  );
}

export default App;
