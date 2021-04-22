import React, { useEffect, Fragment } from "react";
import { trackExpense, loadExpenses } from "../actions/trackExpenseActions";
import { ExpenseTypes } from "../constants/expenses";
import { expenseSelector } from "../selectors/expenseSelector";
import { connect } from "react-redux";

import ExpenseTrackCard from "../components/cards/ExpenseTrackCard";
import IconCard from "../components/cards/IconCard";

import NotInterestedIcon from "@material-ui/icons/NotInterested";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "./App.scss";

export const App = ({ trackExpense, orderedExpenses, loadExpenses }) => {
  useEffect(() => {
    loadExpenses();
  }, [loadExpenses]);

  const onTrackExpense = ({ expenseID, expenseType }) => {
    trackExpense({ expenseID, expenseType });
  };

  const getIcon = (status) => {
    if (status === ExpenseTypes.PERSONAL.value) {
      return <NotInterestedIcon />;
    }
    if (status === ExpenseTypes.WORK.value) {
      return <CheckCircleIcon />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <span>
          <strong>Amount saved: </strong>
          <strong className="calculated-number">12.12</strong>
        </span>
      </header>
      <section className="app-content">
        {orderedExpenses.map((group) => {
          return (
            <Fragment key={group.date}>
              <p className="center-line-header">{group.date}</p>
              {group.expenses.map((expense) => {
                if (expense.status === ExpenseTypes.UNKNOWN.value) {
                  return (
                    <div className="card">
                      <ExpenseTrackCard
                        key={expense.id}
                        expense={expense}
                        onTrackExpense={onTrackExpense}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="card">
                      <IconCard
                        name={expense.name}
                        IconComponent={getIcon(expense.status)}
                      />
                    </div>
                  );
                }
              })}
            </Fragment>
          );
        })}
      </section>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  orderedExpenses: expenseSelector(state, props),
});

const mapDispatchToProps = {
  trackExpense,
  loadExpenses,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
