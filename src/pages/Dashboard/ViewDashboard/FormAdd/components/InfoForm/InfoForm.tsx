import styled from "styled-components";
import FormWrapper from "../../FormWrapper";
// import DetailInputs from "../DetailInputs/DetailInputs";

interface FormularioProps {
  handleTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickFile: (e: React.MouseEvent<HTMLLabelElement>) => void;
  title: string;
}

const InfoForm: React.FC<FormularioProps> = ({
  handleClickFile,
  handleFile,
  handleTitle,
  title,
}) => {
  return (
    <FormWrapper title="Info" >
      <div className="div-titleInput">
        <label>Titulo</label>
        <input
        autoFocus
        required
          type="text"
          placeholder="Titulo"
          onChange={handleTitle}
          value={title}
        />
      </div>
      <label>Portada</label>
      <FileInputWrapper onClick={handleClickFile}>
        <AddSymbol>+</AddSymbol>
        <HiddenInput type="file" onChange={handleFile} />
      </FileInputWrapper>
    </FormWrapper>
  );
};

const FormularioStl = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90%;
  border: 1px solid #6910e5;
  align-items: center;

  textarea {
    resize: none;
    width: 20rem;
    height: 15rem;
  }

  .genres-add {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    width: 32rem;
    height: fit-content;
    background: #5a5858d2;
    border-radius: 20px;
    /* border: 1px solid #e75353; */

    .genres-selected {
      display: flex;
      align-items: center;
      /* border: 1px solid #9fe753; */
      /* width: 8rem; */
      height: 3rem;
      border-radius: 10px;
      background: #615f5fd2;
      padding: 3px;
      /* margin: 5px; */

      .icon-eliminate {
        display: flex;
        justify-content: flex-end;
        /* align-items: center; */

        height: 100%;
        /* border: 1px solid #9fe753; */
        /* width: 30%; */
      }
      .genre-s {
        display: flex;
        justify-content: center;
        /* width: 70%; */
        margin: 0 10px 0 10px;

        span {
          font-size: 20px;
        }
      }
    }
    .react-icons {
      /* background: #ee0905; */
      border-radius: 50%;
      padding: 0;
      cursor: pointer;
    }
  }
`;

const FileInputWrapper = styled.label`
  display: inline-block;
  position: relative;
  width: 250px;
  height: 100px;
  border: 1px solid #ccc;
  background-color: #383737;

  border-radius: 5px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #262626;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const AddSymbol = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
`;

export default InfoForm;