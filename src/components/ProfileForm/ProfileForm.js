import { Button, Form, FormWrapper, Input, InputWrapper, Label } from "./ProfileForm.styled";

const ProfileForm = (props) => {

  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            onChange={props.novoNome}
            value={props.nomeProfile}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            onChange={props.novaBio}
            value={props.bioProfile}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            onChange={props.novaImagem}
            value={props.imagemProfile}
          />
        </InputWrapper>

        <Button onClick={props.salvar}>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
