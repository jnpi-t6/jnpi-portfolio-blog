import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// ブログ全一覧を取得
export const getBlogList = async ({ queries }) => {
  const listData = await client.getList({
    endpoint: "blogs",
    queries: queries,
  });

  return listData;
};

// カテゴリーを取得
export async function getCategories() {
  const categories = await client.get({
    endpoint: "category",
  });

  return categories;
}

// 動的なルーティングに合わせてカテゴリー（各カテゴリー名が欲しい）を取得する
export async function getCategoryId(id) {
  const categories = await client.get({
    endpoint: "category",
    queries: { filters: `id[equals]${id}` },
  });

  return categories;
}

// カテゴリーごとに作品一覧を取得
export const getCategoryPosts = async (id) => {
  const postsData = await client.getList({
    endpoint: "blogs",
    queries: {
      filters: `category[equals]${id}`,
    },
  });

  return postsData;
};

// 作品の本文を取得
export const getPosts = async (contentId, queries) => {
  const postsData = await client.getListDetail({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return postsData;
};
