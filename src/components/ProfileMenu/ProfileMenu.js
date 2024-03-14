import { ProfileBio, ProfileImage, ProfileName, ProfileWrapper } from "./ProfileMenu.styled";

const ProfileMenu = ({ dadosForm }) => {

  return (
    <ProfileWrapper>
      <ProfileImage src={dadosForm.imagem ? dadosForm.imagem : "https://picsum.photos/200"} alt="Profile Image" />
      <ProfileName>{dadosForm.nome}</ProfileName>
      <ProfileBio>{dadosForm.bio}</ProfileBio>
    </ProfileWrapper>
  );
};

export default ProfileMenu;
