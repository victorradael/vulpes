import { StaticImageData } from 'next/image';


import journeyImgIcon from '../../../public/LANDPAGE/icons/journey-icon.png'
import overseasImgIcon from '../../../public/LANDPAGE/icons/overseas-icon.png'
import paceImgIcon from '../../../public/LANDPAGE/icons/pace-icon.png'
import impulseImgIcon from '../../../public/LANDPAGE/icons/impulse-icon.png'
import businessClubImgIcon from '../../../public/LANDPAGE/icons/business-club-icon.png'

import journeyImg from '../../../public/LANDPAGE/trailsContent/journey-content.png';
import overseasImg from '../../../public/LANDPAGE/trailsContent/overseas-content.png';
import paceImg from '../../../public/LANDPAGE/trailsContent/pace-content.png';
import impulseImg from '../../../public/LANDPAGE/trailsContent/impulse-content.png';
import businessClubImg from '../../../public/LANDPAGE/trailsContent/business-club-content.png';
import { contactAgent } from '../../../public/Assets/Contact-Agent';


interface IndividualTrailContentProps {
  active?: boolean;
  indice: number;
}

interface descriptionTag {
  tag: string;
  text: string;
}

interface IndividualContent {
  name: string;
  iconPath: StaticImageData;
  title: string;
  description: descriptionTag[][];
  buttonTitle: string;
  buttonLink: string;
  image: StaticImageData;
  imgWidth: number;
  imgHeight: number;
}

export const choseTrail = (props: IndividualTrailContentProps) => {
  switch(props.indice) { 
    case 0:
    default: {
      return {
        name: 'Journey',
        iconPath: journeyImgIcon,
        title: `
          Programa de desenvolvimento
          da competência linguística
        `,
        description: [
          [
            { tag: 'p', text: 'Aprenda a se comunicar com confiança, fluência e precisão em diferentes idiomas, expandindo suas oportunidades pessoais e profissionais.' }
          ]
        ],
        buttonTitle: 'Conhecer jornada',
        buttonLink: contactAgent,
        image: journeyImg,
        imgWidth: 428,
        imgHeight: 337
      } as IndividualContent;
    }
    case 1: {
      return {
        name: 'Overseas',
        iconPath: overseasImgIcon,
        title: 'Preparatório para viagens, intercâmbios e imigrações',
        description: [
          [
            { tag: 'p', text: 'Descubra o Vulpes Overseas e transforme suas ' },
            { tag: 'strong', text: 'viagens internacionais ' },
            { tag: 'p', text: 'em experiências extraordinárias! Com um programa completo, você terá preparação linguística e cultural para aproveitar ao máximo sua aventura no exterior.' },
          ],
          [
            { tag: 'p', text: 'Conte com nossos professores especializados, Mariana e Henrique, para ' },
            { tag: 'strong', text: 'guiar você desde o aeroporto ' },
            { tag: 'p', text: 'até situações do dia a dia, como compras e interações profissionais. Ao final, você terá o repertório necessário para se comunicar com confiança, evitando estresse e insegurança. Explore o mundo com fluência e segurança. Viva experiências únicas com o Vulpes Overseas!' },
          ]
        ],
        buttonTitle: 'Conhecer jornada',
        buttonLink: contactAgent,
        image: overseasImg,
        imgWidth: 400,
        imgHeight: 400
      } as IndividualContent;
    }
    case 2: {
      return {
        name: 'Pace',
        iconPath: paceImgIcon,
        title: 'Preparatório para Testes de Proficiência',
        description: [
          [
            { tag: 'p', text: 'Domine os testes de proficiência em idiomas com o Vulpes Proficiency Ace! Prepare-se para ' },
            { tag: 'strong', text: 'conquistar resultados excepcionais ' },
            { tag: 'p', text: 'em exames desafiadores.' },
          ],
          [
            { tag: 'p', text: 'Tenha acesso a materiais abrangentes, simulações autênticas e estratégias eficazes. Nossa equipe estará ao seu lado, fornecendo orientação personalizada para ' },
            { tag: 'strong', text: 'maximizar seu desempenho' },
            { tag: 'p', text: '. Não deixe que os testes de proficiência te impeçam de alcançar suas metas. Inscreva-se no Vulpes Proficiency Ace e eleve seu nível para o sucesso!' },
          ]
        ],
        buttonTitle: 'Conhecer jornada',
        buttonLink: contactAgent,
        image: paceImg,
        imgWidth: 463,
        imgHeight: 345
      } as IndividualContent;
    }
    case 3: {
      return {
        name: 'Impulse',
        iconPath: impulseImgIcon,
        title: 'Programa de Mentoria de Aceleração Comunicativa',
        description: [
          [
            { tag: 'p', text: 'Impulsione seu progresso linguístico com o Vulpes Propel! Nossa mentoria personalizada irá acelerar sua fluência e ' },
            { tag: 'strong', text: 'confiança na comunicação' },
            { tag: 'p', text: '. Guiado por especialistas experientes, você desenvolverá pronúncia, vocabulário e habilidades de conversação.' },
          ],
          [
            { tag: 'p', text: 'Aproveite recursos exclusivos e ferramentas online interativas. Transforme sua comunicação e abra portas para um futuro brilhante. ' },
            { tag: 'strong', text: 'Alcance a maestria linguística ' },
            { tag: 'p', text: 'com o Vulpes Propel!' },
          ]
        ],
        buttonTitle: 'Conhecer jornada',
        buttonLink: contactAgent,
        image: impulseImg,
        imgWidth: 435,
        imgHeight: 450
      } as IndividualContent;
    }
    case 4: {
      return {
        name: 'Business Club',
        iconPath: businessClubImgIcon,
        title: 'Clube de Conversação em Inglês para Negócios',
        description: [
          [
            { tag: 'p', text: 'Domine o inglês dos negócios com o Vulpes Business Club! ' },
            { tag: 'strong', text: 'Aperfeiçoe suas habilidades ' },
            { tag: 'p', text: 'de comunicação em reuniões, apresentações e negociações.' },
          ],
          [
            { tag: 'p', text: 'Conecte-se com profissionais experientes, expanda seu vocabulário e faça networking. Esteja preparado para brilhar na carreira internacional. Junte-se ao Vulpes Business Club e ' },
            { tag: 'strong', text: 'destaque-se no mundo dos negócios!' },
          ]
        ],
        buttonTitle: 'Conhecer jornada',
        buttonLink: contactAgent,
        image: businessClubImg,
        imgWidth: 420,
        imgHeight: 420
      } as IndividualContent;
    }
  }
}
