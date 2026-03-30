
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');
    const questionListArea = document.getElementById('question-list-area');

    if (copyButton && questionListArea) {
        copyButton.addEventListener('click', () => {
            // テキストエリアのテキストをクリップボードにコピー
            navigator.clipboard.writeText(questionListArea.innerText)
                .then(() => {
                    // コピー成功時のフィードバック
                    copyButton.textContent = 'コピーしました！';
                    // ボタンのスタイルはCSSで管理するため、ここでは変更しない
                    setTimeout(() => {
                        copyButton.textContent = '質問リストをコピー';
                    }, 2000); // 2秒後に元に戻る
                })
                .catch(err => {
                    console.error('コピーに失敗しました', err);
                    copyButton.textContent = 'コピー失敗';
                    copyButton.style.backgroundColor = '#d32f2f'; // 赤色に変更
                });
        });
    }
});
