// 定義
const memoLists = ['nice', 'nice2'];

// 初期表示
document.addEventListener('DOMContentLoaded', () => {
  renderMemoList();
});

// メモ一覧表示
const renderMemoList = () => {
  // memoListsの内容を取得
  const memoList = document.getElementById('memoList');

  // 表示内容を初期化
  memoList.innerHTML = '';

  memoLists.forEach((memo) => {
    // 初期表示用のメモ分のli要素を作成し、買い物メモ表示用のul要素に追加
    const listItem = document.createElement('li');
    listItem.textContent = memo;
    memoList.appendChild(listItem);
  });
};

//ボタン押下時、ランダムな文字列を生成し、買い物メモ一覧の配列の最後尾に追加
const addMemo = () => {
  // ランダムな数字を作成
  const randomMemo = Math.floor(Math.random() * 100);

  // 現在の買い物メモ一覧の最後尾に追加
  memoLists.push(randomMemo);

  // 買い物メモを一覧表示
  renderMemoList();
};

/**
 * Memo削除用関数
 * ボタン押下時、買い物メモ一覧の配列の最後尾から要素を1つ削除する
 */
const removeMemo = () => {
  // 買い物メモ一覧の配列の最後尾の要素を削除
  memoLists.pop();

  // 買い物メモを一覧表示
  renderMemoList();
};

/**
 * Memoコピー用関数
 * ボタン押下時、買い物メモ一覧の配列の最後尾の要素をクリップボードにコピーする
 */
const copyMemo = () => {
  // 買い物メモ一覧が空の場合は終了
  if (memoLists.length === 0) {
    return alert('買い物メモ一覧が空です。\nコピーは行いません。');
  }

  // 買い物メモ一覧の配列の最後尾の要素を取得
  const lastMemo = memoLists[memoLists.length - 1];
  console.log(lastMemo);

  // 要素をクリップボードにコピー
  navigator.clipboard.writeText(lastMemo);

  alert('コピー完了!');
};
