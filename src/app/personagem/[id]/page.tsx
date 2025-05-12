


interface IPersonagem{
    params: {
        id:string
    }
}

interface IData {
    name: string;
    status: string;
    species: string;
    id: string;
}

interface IDataStaticIndex {
    results: {
      id: number;
    }[];
  }

// type IData = {
//     results: {
//       name: string;
//       status: string;
//       id: string;
//     }[];
// };

const Personagem = async ({params: {id}} : IPersonagem) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, { cache: 'no-store' })
    const data: IData = await res.json()

    console.log(data)
    return(
        <div>
            <h1 className="text-9xl">{data.id}</h1>
            <p>{data.species}</p>
            <p>{data.name}</p>
        </div>
    )
}

export default Personagem;

export async function generateStaticParams() {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data: IDataStaticIndex = await res.json();
  
    return data.results.map((item) => ({
      id: item.id.toString(),
    }));
  }