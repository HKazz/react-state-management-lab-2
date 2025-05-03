import React from "react";
import {useState} from 'react'

// src/App.jsx

const App = () => {

  function handleAddFighter(fighter) {
    try {
      if (money >= fighter.price) {
      setTeam([...team, fighter]); // Add the fighter to the team
      setMoney(money - fighter.price); // Subtract the fighter's price from money
      setZombie(zombie.filter((z) => z.id !== fighter.id)); // Remove the fighter from the zombie list
      } else {
      console.log("Not enough money to add this fighter!"); // Log a message if not enough money
      }
    } catch (error) {
      console.error("An error occurred while adding the fighter:", error);
    }
  }

  function handleRemoveFighter(fighter) {
    try {
      setTeam(team.filter((member) => member.id !== fighter.id));
      setMoney(money + fighter.price);
      setZombie([...zombie, fighter])

    } catch (error) {
      console.error("An error occurred while removing the fighter:", error);
    }
  }

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)

  const [zombie, setZombie] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])

  const totalStrength = team.reduce((sum, member) => sum + member.strength, 0);
  const totalAgility = team.reduce((sum, member) => sum + member.agility, 0)

  return (
    <div>
      <h1>Total Team Strength: {totalStrength}</h1>
      <h1>Total Team Agility: {totalAgility}</h1>
      {money <= 11 ? (
        <h2>Insufficient Funds</h2>
      ) : (
        <h2>${money}</h2>
      )}
      {team.length === 0 ? (
        <h2>Pick some team members!</h2>
      ) : (
        <>
          <h2>Team Members:</h2>
          
          <ul>
            {team.map((member) => (
              <li key={member.id}>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p>Strength: {member.strength}</p>
                <p>Agility: {member.agility}</p>
                <button onClick={() => handleRemoveFighter(member)}>Remove</button>
              </li>
            ))}
          </ul>
          <hr />
        </>
      )}
    

      <ul>
        {zombie.map((fighter) => (
        <li key={fighter.id}>
          <img src={fighter.img} alt={fighter.name} />
          <h3>{fighter.name}</h3>
          <p>Price: ${fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          {money >= fighter.price ? (
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          ) : (
            <button disabled>Add</button>
          )}
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App
