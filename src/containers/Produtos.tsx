import Produto from '../components/Produto'

import * as S from './styles'
import { useGetProdutosQuery } from '../services/api'

const ProdutosComponent = () => {
  const { data, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando produtos...</h2>

  return (
    <>
      <S.Produtos>
        {data?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
