import styles from "./IntroCard.module.css";
import Link from "next/link";

export default function IntroCard() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          ＜このポートフォリオは
          <span className={styles.highlight}>PancakeSwap</span>
          のメニューコンポーネントを参考にしました＞
        </h2>
        <div className={styles.url}>
          <h3>Pancake UIkit</h3>
          <Link href="https://github.com/pancakeswap/pancake-uikit/tree/master">
            https://github.com/pancakeswap/pancake-uikit/tree/master
          </Link>
          <h3>StoryBook</h3>
          <Link href="https://pancakeswap.github.io/pancake-uikit/?path=/story/widgets-menu--connected">
            https://pancakeswap.github.io/pancake-uikit/?path=/story/widgets-menu--connected
          </Link>
        </div>
        <div className={styles.text}>
          <p>
            自分はブロックチェーンのDappsを通じて、webの面白さを目の当たりにして、フロントエンド開発に興味を持ちました。
          </p>
          <p>
            しかし個人的に最初のポートフォリオは理解の確認も兼ねて「Javascriptで書きたい」という思いがあったため、
          </p>
          <p>
            元々TypeSctiptで書かれているPancake
            UIkitのコードを参照しながら「型を抜く」という作業をしました。おかげで、TypeScriptの書き方や「データ型」の理解も深まりました。
          </p>
          <p>
            現在、きちんと理解しているか確認するため、通称「ブルーベリー本」で具体的に勉強中です。
          </p>
          <p>
            CSSもこのリポジトリを参考にしたおかげで、Styled-Componentsで書けるようになりましたが、Next.jsが非推奨にしているという理由から、CSSモジュールで書き直してみました。
          </p>
        </div>
      </div>
    </>
  );
}
