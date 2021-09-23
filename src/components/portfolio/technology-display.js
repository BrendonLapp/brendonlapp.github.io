import { KnowledgeItem } from '../about/knowledge-item';
import {
  SiCsharp,
  SiJavascript,
  SiTypescript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiVisualstudio,
  SiVisualstudiocode,
  SiCsswizardry,
  SiFirebase,
  SiBootstrap,
} from 'react-icons/si';
import { DiDotnet, DiJava, DiAndroid } from 'react-icons/di';
import { FaReact, FaGitAlt, FaHtml5, FaSwift } from 'react-icons/fa';

const TechnologyDisplay = ({ tech }) => {
  switch (tech) {
    case 'C#': {
      return <KnowledgeItem name={'C#'} Icon={SiCsharp} color="#661F76" />;
    }
    case 'ASP.NET': {
      return <KnowledgeItem name={'ASP.NET'} Icon={DiDotnet} color="#0B89D1" />;
    }
    case 'Microsoft SQL': {
      return (
        <KnowledgeItem
          name={'Microsoft SQL'}
          Icon={SiMicrosoftsqlserver}
          color="#A91D22"
        />
      );
    }
    case 'Visual Studio': {
      return (
        <KnowledgeItem
          name={'Visual Studio'}
          Icon={SiVisualstudio}
          color="#5F2B9B"
        />
      );
    }
    case 'Visual Studio Code': {
      return (
        <KnowledgeItem
          name={'Visual Studio Code'}
          Icon={SiVisualstudiocode}
          color="#2C83BA"
        />
      );
    }
    case 'React.JS': {
      return <KnowledgeItem name={'React.JS'} Icon={FaReact} color="#61DBFB" />;
    }
    case 'TypeScript': {
      return (
        <KnowledgeItem
          name={'TypeScript'}
          Icon={SiTypescript}
          color="#3178C6"
        />
      );
    }
    case 'JavaScript': {
      return (
        <KnowledgeItem
          name={'JavaScript'}
          Icon={SiJavascript}
          color="#F0DB4F"
        />
      );
    }
    case 'MongoDB': {
      return (
        <KnowledgeItem name={'MongoDB'} Icon={SiMongodb} color="#419D3A" />
      );
    }
    case 'Bootstrap': {
      return (
        <KnowledgeItem name={'Bootstrap'} Icon={SiBootstrap} color="#7952b3" />
      );
    }
    case 'CSS': {
      return (
        <KnowledgeItem name={'CSS'} Icon={SiCsswizardry} color="#264DE4" />
      );
    }
    case 'HTML': {
      return <KnowledgeItem name={'HTML'} Icon={FaHtml5} color="#E44D26" />;
    }
    case 'Git': {
      return <KnowledgeItem name={'Git'} Icon={FaGitAlt} color="#F05030" />;
    }
    case 'Firebase': {
      return (
        <KnowledgeItem name={'Firebase'} Icon={SiFirebase} color="#FFCA2B" />
      );
    }
    case 'Java': {
      return <KnowledgeItem name={'Java'} Icon={DiJava} color="#EC2025" />;
    }
    case 'Android': {
      return (
        <KnowledgeItem name={'Android'} Icon={DiAndroid} color="#A4C639" />
      );
    }
    case 'Swift': {
      return <KnowledgeItem name={'Swift'} Icon={FaSwift} color="#FD6731" />;
    }
  }
};

export default TechnologyDisplay;
