import React, {useState, useEffect} from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import useHttp from '../../hooks/useHttp';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import { getDocs } from 'firebase/firestore';
import { Audio, BallTriangle } from "react-loader-spinner";



const AvailableMeals = () => {
  
    const [dummyMeals, setDummyMeals] = useState([]);
    const [loading, setLoading] = useState(false);

      useEffect(() => {
              const postsCollectionRef = collection(db, "Meals");
              const getMeals = async () => {
                setLoading(true);
                try {
                  const response = await getDocs(postsCollectionRef);
                  const data = response.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                  }));
                  setDummyMeals(data);
                } catch (error) {
                  console.log(error.message);
                }
                setLoading(false);
              };
              getMeals();

      }, []);

          if (loading) {
            return (
              <div
                style={{
                  width: "100%",
                  height: "100",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "90px",
                }}
              >
                <BallTriangle color="#ffffff" />
              </div>
            );
          }


    if (dummyMeals.length === 0) {
      return <Card>Unable to fetch meals</Card>;
    } 


  return (
    <section className={classes["meals"]}>
      <Card>
        <ul>
          {dummyMeals.map((meal) => (
              <MealItem key={meal.id} meal={meal}/>
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals