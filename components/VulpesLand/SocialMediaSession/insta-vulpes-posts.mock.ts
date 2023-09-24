import { StaticImageData } from 'next/image';

import insta_post01 from '../../../public/LANDPAGE/insta-posts/insta-post01.png';
import insta_post02 from '../../../public/LANDPAGE/insta-posts/insta-post02.png';
import insta_post03 from '../../../public/LANDPAGE/insta-posts/insta-post03.png';
import insta_post04 from '../../../public/LANDPAGE/insta-posts/insta-post04.png';
import insta_post05 from '../../../public/LANDPAGE/insta-posts/insta-post05.png';
import insta_post06 from '../../../public/LANDPAGE/insta-posts/insta-post06.png';
import insta_post07 from '../../../public/LANDPAGE/insta-posts/insta-post07.png';
import insta_post08 from '../../../public/LANDPAGE/insta-posts/insta-post08.png';
import insta_post09 from '../../../public/LANDPAGE/insta-posts/insta-post09.png';
import insta_post10 from '../../../public/LANDPAGE/insta-posts/insta-post10.png';
import insta_post11 from '../../../public/LANDPAGE/insta-posts/insta-post11.png';
import insta_post12 from '../../../public/LANDPAGE/insta-posts/insta-post12.png';
import insta_post13 from '../../../public/LANDPAGE/insta-posts/insta-post13.png';
import insta_post14 from '../../../public/LANDPAGE/insta-posts/insta-post14.png';
import insta_post15 from '../../../public/LANDPAGE/insta-posts/insta-post15.png';
import insta_post16 from '../../../public/LANDPAGE/insta-posts/insta-post16.png';


export interface PostVar {
    image: StaticImageData;
    description: string;
}

export const chosePost = (props: number) => {
    switch(props) {
      case 0:
      case 1:
      default: {
        return {
          image: insta_post01,
          description: 'A pandemia trouxe uma mudança brusca no mercado, trazendo novas oportunidades',
        } as PostVar;
      }
      case 2: {
        return {
          image: insta_post02,
          description: '1) Desapegue-se de querer falar de forma perfeita ou "como um nativo"',
        } as PostVar;
      }
      case 3: {
        return {
          image: insta_post03,
          description: 'Para um intercâmbio mais leve, produtivo e de muita conversação, sabemos',
        } as PostVar;
      }
      case 4: {
        return {
          image: insta_post04,
          description: 'Ele é um dos braços da Inteligência Artificial que opera de forma gratuita',
        } as PostVar;
      }
      case 5: {
        return {
          image: insta_post05,
          description: 'Nós temos muito orgulho do que constuímos. Não foi do dia para noite.',
        } as PostVar;
      }
      case 6: {
        return {
          image: insta_post06,
          description: 'Deixe-me adivinhar: você já cansou de estudar as "regras" de como utilizar',
        } as PostVar;
      }
      case 7: {
        return {
          image: insta_post07,
          description: 'Fluência não é um nível e sim um aspecto da sua comunicabilidade...',
        } as PostVar;
      }
      case 8: {
        return {
          image: insta_post08,
          description: 'Nada e Nadie, apesar de serem parecidos, NÃO são sinônimos e, muitas vezes...',
        } as PostVar;
      }
      case 9: {
        return {
          image: insta_post09,
          description: 'Espanhol não é português! Não existe Ç no espanhol e, em muitas palavras...',
        } as PostVar;
      }
      case 10: {
        return {
          image: insta_post10,
          description: 'Nada mais normal do que ficar ansioso ou nervoso com uma entrevista de emprego.',
        } as PostVar;
      }
      case 11: {
        return {
          image: insta_post11,
          description: 'Isso não tem relação com a sua capacidade ou a quantidade de entrevistas...',
        } as PostVar;
      }
      case 12: {
        return {
          image: insta_post12,
          description: 'Existem diversas palavras que não tem tradução para o inglês, mas que conseguimos...',
        } as PostVar;
      }
      case 13: {
        return {
          image: insta_post13,
          description: 'É muito comum pessoas adultas decidirem dar um passo para aprender uma nova língua',
        } as PostVar;
      }
      case 14: {
        return {
          image: insta_post14,
          description: 'A aula em dupla traz um dinâmica de conversação e de prática potencializada, por...',
        } as PostVar;
      }
      case 15: {
        return {
          image: insta_post15,
          description: 'Sua conversação em outro nível com uma oportunidade de praticar a fluência...',
        } as PostVar;
      }
      case 16: {
        return {
          image: insta_post16,
          description: 'Cada aluno traz consigo uma personalidade e, por isso, uma forma de aprendizado',
        } as PostVar;
      }
    }
}