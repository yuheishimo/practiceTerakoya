import { useState } from 'react';
import './App.css';

// コンポーネント
function App() {
  //定義
  const [count, setCount] = useState(0);
  // 奇数・偶数判定
  const isEven = count % 2 === 0;

  return (
    <div className="container">
      <div className="counter-box">
        <h1>カウンター</h1>
        <p>現在のカウント：{count}</p>
        {/* isEvenがtrueだと偶数 */}
        <p>
          これは <strong>{isEven ? '偶数' : '奇数'}</strong> です
        </p>
        <div className="button-group">
          {/* カウントを1減らす */}
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* カウントを1増やす */}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}
// 他のファイルで使用する処理
export default App;
