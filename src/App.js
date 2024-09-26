
import Expenses from "./components/Expenses";
function App() {
  let expenses = [
    { id: '1', date: new Date(2023, 11, 5), title: 'insurance', amount: '500', location: 'Delhi' },
    { id: '2', date: new Date(2023, 8, 29), title: 'laptop', amount: '400', location: 'indore' },
    { id: '3', date: new Date(2023, 7, 7), title: 'pen', amount: '50', location: 'dewas' },
    { id: '4', date: new Date(2023, 3, 14), title: 'mobile', amount: '740', location: 'ujjain' },
    { id: '5', date: new Date(2023, 5, 23), title: 'car', amount: '750', location: 'mumbai' },
  ]
  return (
    <div>
      <h1>Let's get started</h1>
      <Expenses expenses ={expenses}/>
    </div>
  );
}
export default App;
