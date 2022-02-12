import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CifraService {
  private cifra = {
    "id": 1,
    "titulo": "Ele Continua Sendo Bom",
    "compositor": "Paulo César Baruk (part. Marcela Taís)",
    "linkYoutube": "https://www.youtube.com/watch?v=LQPYaPNGa38",
    "andamento": 100,
    "tomOriginal": "F",
    "secoes": [
      {
        "posicao": 1,
        "nome": "INTRO",
        "notaDeEnsaio": "só o violão",
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "[F  Bb  Dm7  Bb]"
          }
        ]
      },
      {
        "posicao": 2,
        "nome": "VERSO1",
        "notaDeEnsaio": null,
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "Um dia a gente apr[F]ende a confiar em um Deus que f[Bb]az milagres"
          },
          {
            "posicao": 2,
            "conteudo": "Que ouve a nossa [Dm7]oração, que se faz pres[Bb]ente aqui"
          },
          {
            "posicao": 3,
            "conteudo": "Um dia a gente apr[F]ende a dar um passo só de c[Bb]ada vez"
          },
          {
            "posicao": 4,
            "conteudo": "Mas sem [Dm7]duvidar, mas sem [Bb]duvidar"
          }
        ]
      },
      {
        "posicao": 3,
        "nome": "REFRÃO",
        "notaDeEnsaio": null,
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          },
          {
            "posicao": 2,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          }
        ]
      },
      {
        "posicao": 4,
        "nome": "VERSO2",
        "notaDeEnsaio": null,
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "Então chega o d[F]ia de viver tudo que se [Bb]aprendeu"
          },
          {
            "posicao": 2,
            "conteudo": "E a enxerg[F]ar até o que não se p[Bb]ode ver"
          },
          {
            "posicao": 3,
            "conteudo": "Chega o dia [F]de entender, até ouvir um [Bb]\"não\" de Deus"
          },
          {
            "posicao": 4,
            "conteudo": "Mas sem [Dm7]duvidar, mas sem [Bb]duvidar"
          }
        ]
      },
      {
        "posicao": 5,
        "nome": "REFRÃO",
        "notaDeEnsaio": null,
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          },
          {
            "posicao": 2,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          }
        ]
      },
      {
        "posicao": 6,
        "nome": "REFRÃO",
        "notaDeEnsaio": null,
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          },
          {
            "posicao": 2,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          }
        ]
      },
      {
        "posicao": 7,
        "nome": "SOLO",
        "notaDeEnsaio": null,
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "[C D E C Bb F G]"
          },
          {
            "posicao": 2,
            "conteudo": "[C D E C Bb]"
          }
        ]
      },
      {
        "posicao": 8,
        "nome": "REFRÃO",
        "notaDeEnsaio": null,
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          },
          {
            "posicao": 2,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          }
        ]
      },
      {
        "posicao": 9,
        "nome": "REFRÃO",
        "notaDeEnsaio": null,
        "linhas": [
          {
            "posicao": 1,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua sendo Deus"
          },
          {
            "posicao": 2,
            "conteudo": "Que Ele contin[F]ua sendo bom, que Ele contin[Bb]ua"
          }
        ]
      }
    ]
  };

  constructor() { }

  get cifraFormatadaParaHTML() {
    return this.cifra;
  }

}
