import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/49838202?s=460&u=87f1bd097ae6a80491278dd8f6130e2dd2808723&v=4" alt="Maick Souza"/>
            <div>
              <strong>Maick Souza</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Entusiasta em fazer cálculos feito o Einstein
            <br /><br />
            Apaixonado em fazer desafios impossíveis para seus alunos.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$70,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;