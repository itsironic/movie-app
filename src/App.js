
const popularTrash = [
  {
    id: 1,
    name: "나무",
    image: "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EB%82%98%EB%AC%B4-ovjjx3q77k65m1pcexfn9xk6mdleikl4kpci7mxb0g.jpg"
  },
  {
    id:2,
    name: "보냉백",
    image: "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EB%B3%B4%EB%83%89%EB%B0%B1-oz667awo8gqnbnv49l9nbnpvsh6hyu6n1sr6j4iqrk.jpg"
  },
  {
    id:3,
    name: "의류",
    image: "https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%9D%98%EB%A5%98-owweimopuy51ox318timtzrut4zuxf0otrmlph9bls.jpg"
  },
  {
    id:4,
    name: "화분",
    image: "https://blisgo.com/wp-content/uploads/elementor/thumbs/%ED%99%94%EB%B6%84-ox8kol9k3ri3vgiye78p0hmogh5hkejrjmfoot1tds.jpg"
  },
  {
    id:5,
    name: "휴대폰",
    image: "https://blisgo.com/wp-content/uploads/elementor/thumbs/%ED%9C%B4%EB%8C%80%ED%8F%B0-p179ezlot8bplafbgxb0wyss0y6ta9ngoiiyf2rmdc.jpg"
  }
];

function Trash({name, image}) {
  return <div>
    <h3>{name} is a popular trash</h3>
    <img src={image} alt={name}/>
  </div>
}

function App() {
  return (
    <div>
      {popularTrash.map(list => 
        <Trash key={list.id} name={list.name} image={list.image} />
      )}
    </div>
  );
}

export default App;
