/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    // 키리카에 리다이랙트
    return [
      {
        source: "/contact", // to
        destination: "http://www.naver.com", //be
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // 보기에만 바뀜 인젝션 무한리다이렉트 방지 보안
    return [
      {
        source: "/api/movies", // to
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`, //be
      },
      {
        source: "/api/movies/:id", // to
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}`, //be
      },
    ];
  },
};

module.exports = nextConfig;
