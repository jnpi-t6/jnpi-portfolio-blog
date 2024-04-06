## jnpi-Portfolio-Blog

Jamstackの構成でブログを作成しました。

日時にとらわれない雑記を投稿します。

## URL

- URL: https://jnpi-portfolio-blog.netlify.app/
- StoryBook: https://jnpi-t6.github.io/jnpi-portfolio-blog/

## 使用技術

フレームワーク

- Next.js 14.1.4

使用言語

- React 18.2.0

UIテスト

- StoryBook 8.1.0-alpha.5

CDN

- Netlify

CMS

- microCMS

## 制作中の着想

- Pancake Swapの昔のUIデザイン（特にメニュー部分）が好きで、その真似をして自力で自作ブログに実装しました。大いに車輪の再発明ですが、車輪の作り方を学べました。(もちろんMUIなどを使ったほうが早いですが・・・)

- ブログポストのサムネイルは、[Zenn](https://zenn.dev/)に憧れて、絵文字アイコン風にしました。
  ただ、絵文字ピッカーを実装したわけではなく、[Emoji Kitchen](https://emojikitchen.dev/)の画像です。絵文字を組み合わせた絵文字なので、絵文字単品よりもゴージャスです。

- SNSやブログ投稿サービスでは必須の「投稿日時」を取っ払いました。もちろんCMSのAPIを叩いてコンテンツ情報を取得しているので「日時」も一緒に表示できますが、投稿内容と時間を関連付けたくなかったのでUIから取り外してみました。自作ブログならではの自由度です。

## 現在の課題

- テストコードに関しては、Jestなど「見たことはある」程度なので、実施する。
  StoryBookを導入しているので、そのままChromaticによるUIテストを実施する。

- よりUIテストをしやすいように（Container/Presentational）でコンポーネントを設計する。

- Github ActionsでStorybookをサーバーコンポーネントもビルドできるようにする。
