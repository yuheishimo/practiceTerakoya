//定義
const bookList = [{ title: '教本', author: 'A', date: '2025/8/6 10:00:00' }];

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
  renderBookList();
});

//書籍一覧表示
const renderBookList = () => {
  // 書籍一覧を取得
  const tableBody = document.querySelector('#bookList tbody');

  // 表示内容を初期化
  tableBody.innerHTML = '';

  bookList.forEach((book) => {
    const row = document.createElement('tr');
    ['title', 'author', 'date'].forEach((key) => {
      const cell = document.createElement('td');
      cell.textContent = book[key];
      row.appendChild(cell);
    });
    //行追加
    tableBody.appendChild(row);
  });
};

//ボタン押下時、ランダムな文字列を生成し、書籍一覧の配列の最後尾に追加
const addBook = () => {
  const newBook = {
    title: `Title-${Math.floor(Math.random() * 100)}`,
    author: `Author-${Math.floor(Math.random() * 100)}`,
    date: new Date().toLocaleString(),
  };

  // 現在の書籍一覧の最後尾に追加
  bookList.push(newBook);

  // 表示内容を更新
  renderBookList();
};

//ボタン押下時、書籍一覧の配列の最後尾から要素を1つ削除
const removeBook = () => {
  // 書籍一覧の配列の最後尾の要素を削除
  bookList.pop();

  // 表示内容を更新
  renderBookList();
};
