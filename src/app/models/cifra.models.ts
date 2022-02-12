export interface Cifra {
  id: number
  titulo: string
  compositor: string
  linkYoutube?: string
  andamento?: number
  tomOriginal: string
  secoes: Secao[]
}

export interface Secao {
  posicao: number
  nome: string
  notaDeEnsaio?: string
  linhas: Linha[]
}

export interface Linha {
  posicao: number
  conteudo: string
}
