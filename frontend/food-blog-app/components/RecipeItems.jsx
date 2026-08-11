import React from 'react';
import foodImg from '../src/assets/foodRecipe.png';
import { useLoaderData } from 'react-router-dom';
import { IoTime } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';

export default function RecipeItems() {
  const allRecipes = useLoaderData();
  console.log(allRecipes);
  return (
    <>
      <div className="card-container">
        {allRecipes?.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={foodImg} width="120px" height="100px"></img>
              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="timer">
                    <IoTime /> 30min
                  </div>
                  <CiHeart />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
