import { useRouter } from "next/router";
import Seo from "../../components/Seo";
// 다이나믹 url
export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export async function getServerSideProps({
  params: { params },
}) {
  // const res = await (
  //   await fetch(`http://localhost:3000/api/movie/${id}`)
  // ) // 서버사이드에서 동작하기 때문에 full url 사용
  //   .json();
  // console.log(res);
  return {
    props: { params },
  };
}
