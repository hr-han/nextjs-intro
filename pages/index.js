import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({ results }) {
  const { push } = useRouter();
  const onClick = ({ id, title }) => {
    push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => onClick(movie)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <h4>
            <Link
              href={`/movies/${movie.title}/${movie.id}`}
            >
              <a> {movie.title} </a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }

        .movie {
          cursor: pointer;
        }

        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 서버사이드에서만 동작 api key등 숨기고 싶을때
// network에서 아예 볼수가 없음
// 데이터가 온다움에 렌더링
// 브라우저에 html 채로 다 들어있기떄문에 검색어 노출가능
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ) // 서버사이드에서 동작하기 때문에 full url 사용
    .json();
  return {
    props: { results },
  };
}
