// components/Dashboard.js
import React from 'react';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';
import Budget from './Budget';
import Savings from './Savings';
import Investment from './Investment';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <IncomeForm />
      <ExpenseForm />
      <Budget />
      <Savings />
      <Investment />
    </div>
  );
};

export default Dashboard;
