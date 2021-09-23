import { KnowledgeItem } from './knowledge-item';
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
} from 'react-icons/si';
import { DiDotnet, DiJava, DiAndroid } from 'react-icons/di';
import { FaReact, FaGitAlt, FaHtml5, FaSwift } from 'react-icons/fa';

const KnowledgeBox = () => {
  return (
    <div className="">
      <KnowledgeItem name={'C#'} Icon={SiCsharp} color="#661F76" />
      <KnowledgeItem name={'ASP.NET'} Icon={DiDotnet} color="#0B89D1" />
      <KnowledgeItem
        name={'Microsoft SQL'}
        Icon={SiMicrosoftsqlserver}
        color="#A91D22"
      />
      <KnowledgeItem
        name={'Visual Studio'}
        Icon={SiVisualstudio}
        color="#5F2B9B"
      />
      <KnowledgeItem
        name={'Visual Studio Code'}
        Icon={SiVisualstudiocode}
        color="#2C83BA"
      />
      <KnowledgeItem name={'React.JS'} Icon={FaReact} color="#61DBFB" />
      <KnowledgeItem name={'TypeScript'} Icon={SiTypescript} color="#3178C6" />
      <KnowledgeItem name={'JavaScript'} Icon={SiJavascript} color="#F0DB4F" />
      <KnowledgeItem name={'MongoDB'} Icon={SiMongodb} color="#419D3A" />
      <KnowledgeItem name={'CSS'} Icon={SiCsswizardry} color="#264DE4" />
      <KnowledgeItem name={'HTML'} Icon={FaHtml5} color="#E44D26" />
      <KnowledgeItem name={'Git'} Icon={FaGitAlt} color="#F05030" />
      <KnowledgeItem name={'Firebase'} Icon={SiFirebase} color="#FFCA2B" />
      <KnowledgeItem name={'Java'} Icon={DiJava} color="#EC2025" />
      <KnowledgeItem name={'Android'} Icon={DiAndroid} color="#A4C639" />
      <KnowledgeItem name={'Swift'} Icon={FaSwift} color="#FD6731" />
    </div>
  );
};

export default KnowledgeBox;
