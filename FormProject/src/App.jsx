import { useState } from 'react';
import './App.css';

// コンポーネント
function App() {
  // フォームの管理（各項目の初期値は空）
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    other: '',
  });
  // 送信された情報を画面に表示（初期値はnull）
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // 送信処理
  const handleSubmit = (e) => {
    e.preventDefault();

    // 必須チェック
    if (!formData.name || !formData.age || !formData.email) {
      alert('名前・年齢・メールアドレスは必須です。');
      return;
    }

    console.log('送信内容:', formData);
    setSubmittedData(formData);
  };

  return (
    <div className="form-container">
      <h1>問い合わせフォーム</h1>
      <form onSubmit={handleSubmit}>
        <label>
          名前：
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          年齢：
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          メールアドレス：
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          その他：
          <textarea
            name="other"
            value={formData.other}
            onChange={handleChange}
            rows="4"
          />
        </label>

        <button type="submit">送信</button>
      </form>

      {submittedData && (
        <div className="submitted">
          <h2>送信された内容：</h2>
          <p>名前: {submittedData.name}</p>
          <p>年齢: {submittedData.age}</p>
          <p>メールアドレス: {submittedData.email}</p>
          <p>その他: {submittedData.other}</p>
        </div>
      )}
    </div>
  );
}

export default App;
