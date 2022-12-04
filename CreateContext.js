import { useReducer, createContext } from "react";
import moneyCalculation from "../util/moneyCalculation";

export const OrderContext = createContext({
  order: {},

  // function: (Your data structure) => {}
  addOrder: ([tableNo, [type, id, options, number, bungkus]]) => {},
  deleteOrder: (tableNo, id) => {},
  addQuantity: (tableNo, id, amount) => {},
  minusQuantity: (tableNo, id, amount) => {},
});

function orderReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const tableNoPrevState = state[`table_${action.payload[0]}`].orders;
      const prevAmount = state[`table_${action.payload[0]}`].total;
      const numberOfItem = state[`table_${action.payload[0]}`].numberOfItem;
      const value = action.payload[1];
      // DATA structure: [type, itemId, arrayOfOptions, numberOfItem, bungkus]
      const amount = moneyCalculation(value[1], value[3], value[2], value[4]);

      return {
        ...state,
        [`table_${action.payload[0]}`]: {
          orders: [...value, ...tableNoPrevState],
          total: prevAmount + amount,
          numberOfItem: numberOfItem + parseInt(value[3]),
        },
      };

    default:
      return state;
  }
}

export function OrderProvider({ children }) {
  const [order, dispatch] = useReducer(orderReducer, {
    table_1: { orders: [], total: 0, numberOfItem: 0 },
    table_2: { orders: [], total: 0, numberOfItem: 0 },
  });

  function addOrder(order) {
    dispatch({ type: "ADD", payload: order });
  }

  function deleteOrder(tableNo, id) {
    dispatch({ type: "DELETE", payload: { tableNo: tableNo, id: id } });
  }


  const value = {
    table_1: order.table_1,
    table_2: order.table_2,
    addOrder: addOrder,
    deleteOrder: deleteOrder,
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
