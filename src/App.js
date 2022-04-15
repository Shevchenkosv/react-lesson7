
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getCount } from './redux/reducers/action';
import { countSelector } from './redux/reducers/countSelector/selector';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(countSelector);

  //const increase = () => {
  // return { type: 'plus' }
  //}
  //const decrease = () => {
  //  return { type: 'minus' }
  //}

  useEffect(() => {
    dispatch(getCount())
  }, [])
  return (
    <div className="App">
      {count}
      <button > Увеличить </button>
      <button > Уменьшить </button>
    </div>
  );
}

export default App;
