import ProfileForm from "../components/ProfileForm/ProfileForm";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import { ScreenContainer } from "./ProfileScreen.styled";
import { useState } from "react";

function ProfileScreen() {

  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState('');
  const [bio, setBio] = useState('');
  const [dadosForm, setDadosForm] = useState({});

  const novoNome = (e) => {
    setNome(e.target.value);
  }

  const novaImagem = (e) => {
    setImagem(e.target.value);
  }

  const novaBio = (e) => {
    setBio(e.target.value);
  }

  const salveProfile = (e) => {
    e.preventDefault()

    const novaForm = {
      nome,
      bio,
      imagem
    }

    setDadosForm(novaForm)
    setNome('')
    setImagem('')
    setBio('')
  }

  return (
    <ScreenContainer>
      <ProfileMenu
        dadosForm={dadosForm}
      />

      <ProfileForm
        nomeProfile={nome} novoNome={novoNome}
        imagemProfile={imagem} novaImagem={novaImagem}
        bioProfile={bio} novaBio={novaBio}
        salvar={salveProfile}
      />
    </ScreenContainer>
  );
}

export default ProfileScreen;