import Page from  './pageModel';
import { ClientFunction } from 'testcafe'; // 現在のページのURLを確認

const page = new Page();
const getWindowLocation = ClientFunction(() => window.location);

fixture('お問い合わせフォーム')
  .page('http://127.0.0.1:8080/demo/contact.html'); // 実行するページ

test('必須項目を入力して確認後、thanksページに遷移', async t => {
  await t
    // テスト実行速度 1が最高速 0.01が最低速
    .setTestSpeed(page.setTestSpeed)
     //　ダイアログの操作
    .setNativeDialogHandler(() => true)
    // アクション
    .typeText(page.nameSelector, '佐藤一郎')
    .click(page.submitSelector);
  // アサーション(求める結果)
  await t.expect(page.thanksMessage.innerText).eql('佐藤一郎様、お問い合わせありがとうございます。');
});

test('必須項目に入力されていないとき、errorMessageを表示', async t => {
  await t
    .setTestSpeed(page.setTestSpeed)
    .click(page.submitSelector);
  await t.expect(page.errorMessage.innerText).eql('必須項目にご記入ください');
});

test('戻るを押下したときにtopページに戻る', async t => {
  await t
    .setTestSpeed(page.setTestSpeed)
    .click(page.backSelector);
    const location = await getWindowLocation(); // ページ遷移してから現在のURLを取得
  await t.expect(location.pathname).eql('/demo/');
});
